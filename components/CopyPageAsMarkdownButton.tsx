import { useCallback, useState, useMemo } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { Copy as CopyIcon } from "lucide-react";

// Lightweight HTML → Markdown converter tailored for our page structure
function convertNodeToMarkdown(node: Node, listContext?: { ordered: boolean; index: number }): string {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = (node.textContent || "").replace(/\s+/g, " ").trim();
    return text;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return "";

  const el = node as HTMLElement;
  const tag = el.tagName.toUpperCase();

  // Skip elements explicitly marked to exclude
  if (el.getAttribute("data-exclude-md") === "true") return "";

  const getChildren = () => Array.from(el.childNodes).map((n) => convertNodeToMarkdown(n, listContext)).join("");

  const block = (content: string) => (content ? `\n\n${content}\n\n` : "\n\n");

  switch (tag) {
    case "H1":
    case "H2":
    case "H3":
    case "H4":
    case "H5":
    case "H6": {
      const level = Number(tag.substring(1));
      const text = getChildren();
      return block(`${"#".repeat(level)} ${text}`.trim());
    }
    case "P": {
      const text = getChildren();
      return block(text.trim());
    }
    case "BR": {
      return "\n";
    }
    case "HR": {
      return block("---");
    }
    case "STRONG":
    case "B": {
      return `**${getChildren()}**`;
    }
    case "EM":
    case "I": {
      return `*${getChildren()}*`;
    }
    case "CODE": {
      // Inline code if inside paragraph/span/list; block if preformatted handled in PRE
      return `\`${el.textContent || ""}\``;
    }
    case "PRE": {
      const code = el.textContent || "";
      return block("```\n" + code.trim() + "\n```");
    }
    case "A": {
      const href = el.getAttribute("href") || "";
      const text = el.textContent?.trim() || href;
      return `[${text}](${href})`;
    }
    case "IMG": {
      const alt = el.getAttribute("alt") || "";
      const src = el.getAttribute("src") || "";
      return src ? `![${alt}](${src})` : "";
    }
    case "UL": {
      const items = Array.from(el.children).filter((c) => c.tagName.toUpperCase() === "LI");
      const md = items
        .map((li) => convertNodeToMarkdown(li, { ordered: false, index: 0 }))
        .join("");
      return block(md.trim());
    }
    case "OL": {
      const items = Array.from(el.children).filter((c) => c.tagName.toUpperCase() === "LI");
      let i = 1;
      const md = items
        .map((li) => convertNodeToMarkdown(li, { ordered: true, index: i++ }))
        .join("");
      return block(md.trim());
    }
    case "LI": {
      const content = Array.from(el.childNodes).map((n) => convertNodeToMarkdown(n)).join("").trim();
      if (listContext?.ordered) {
        return `${listContext.index}. ${content}\n`;
      }
      return `- ${content}\n`;
    }
    case "BLOCKQUOTE": {
      const text = getChildren()
        .split("\n")
        .map((l) => (l ? "> " + l : l))
        .join("\n");
      return block(text.trim());
    }
    case "TABLE": {
      // Simple table extraction: headers and rows
      const rows = Array.from(el.querySelectorAll("tr"));
      if (rows.length === 0) return "";
      const cellsToText = (cells: NodeListOf<HTMLTableCellElement>) =>
        Array.from(cells).map((c) => (c.textContent || "").trim().replace(/\s+/g, " "));
      const headerRow = rows[0];
      const header = cellsToText(headerRow.querySelectorAll("th,td"));
      const body = rows.slice(1).map((r) => cellsToText(r.querySelectorAll("td,th")));
      const md = [
        `| ${header.join(" | ")} |`,
        `| ${header.map(() => "---").join(" | ")} |`,
        ...body.map((r) => `| ${r.join(" | ")} |`),
      ].join("\n");
      return block(md);
    }
    case "NAV": {
      // Preserve links inside nav for better context
      const parts = Array.from(el.childNodes).map((n) => convertNodeToMarkdown(n)).filter(Boolean);
      const text = parts.join(" ").replace(/\s+/g, " ").trim();
      return block(text);
    }
    case "FOOTER":
    case "ASIDE": {
      // Keep textual content only
      return block((el.textContent || "").trim());
    }
    case "BUTTON": {
      const txt = (el.textContent || "").trim();
      const url = el.getAttribute("data-url") || el.getAttribute("data-href") || el.getAttribute("href") || "";
      if (url) {
        return `[${txt || url}](${url})`;
      }
      return txt ? `**${txt}**` : "";
    }
    default: {
      // Generic container: recurse
      return getChildren();
    }
  }
}

function convertDocumentToMarkdown(): string {
  const clone = document.documentElement.cloneNode(true) as HTMLElement;
  // Remove elements explicitly marked to exclude
  clone.querySelectorAll('[data-exclude-md="true"]').forEach((el) => el.remove());
  // Remove transient tooltip portals from Radix
  clone.querySelectorAll('[data-slot="tooltip-content"], [role="tooltip"]').forEach((el) => el.remove());

  // Extract blueprint blocks, then remove them to avoid duplication
  const includeEls = Array.from(clone.querySelectorAll('[data-include-md="true"]')) as HTMLElement[];
  const blueprint = includeEls
    .map((el) => (el.textContent || "").trim())
    .filter(Boolean)
    .join("\n\n");
  includeEls.forEach((el) => el.remove());
  // Prefer main content if present
  const target = (clone.querySelector("main") as HTMLElement) || (clone.querySelector("body") as HTMLElement) || clone;
  const md = [blueprint, convertNodeToMarkdown(target)].filter(Boolean).join("\n\n");
  return md.trim().replace(/\n{3,}/g, "\n\n");
}

export function CopyPageAsMarkdownButton() {
  const [copied, setCopied] = useState(false);
  const tooltip = useMemo(
    () => "Copies the current page as AI-ready Markdown (front matter + links).",
    [],
  );

  const handleCopy = useCallback(async () => {
    try {
      const markdown = convertDocumentToMarkdown();

      // Strategy 1: Standard writeText (most compatible)
      try {
        await navigator.clipboard.writeText(markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
        return;
      } catch (e1) {
        // Continue to strategy 2
      }

      // Strategy 2: ClipboardItem with text/plain + text/markdown (Chromium/Edge)
      try {
        // @ts-ignore - ClipboardItem may not be in TS lib
        if (typeof ClipboardItem !== "undefined" && navigator.clipboard && navigator.clipboard.write) {
          const plain = new Blob([markdown], { type: "text/plain" });
          const md = new Blob([markdown], { type: "text/markdown" });
          // @ts-ignore
          const item = new ClipboardItem({ "text/plain": plain, "text/markdown": md });
          // @ts-ignore
          await navigator.clipboard.write([item]);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
          return;
        }
      } catch (e2) {
        // Continue to strategy 3
      }

      // Strategy 3: Legacy execCommand fallback (Safari/older)
      try {
        const textarea = document.createElement("textarea");
        textarea.value = markdown;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.pointerEvents = "none";
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (ok) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
          return;
        }
      } catch (e3) {
        // fall through to visible error
      }

      // If all strategies failed, show non-intrusive error toast (do not overwrite clipboard)
      setCopied(false);
      alert("Unable to access clipboard. Please allow clipboard permissions and try again.");
    } catch (err) {
      console.error("Failed to build markdown", err);
      alert("Failed to generate Markdown from the page.");
    }
  }, []);

  return (
    <div
      data-exclude-md="true"
      className="fixed bottom-12 right-8 z-50"
      aria-live="polite"
    >
      <button
        onClick={handleCopy}
        className="px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-xl hover:opacity-95 active:scale-95 transition flex items-center gap-2.5 border border-primary/30"
      >
        <CopyIcon className="w-4 h-4 opacity-90" />
        <span className="text-sm font-semibold">Copy page for AI</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 border border-primary/30 text-[11px] font-semibold cursor-default select-none">?</span>
          </TooltipTrigger>
          <TooltipContent sideOffset={8}>{tooltip}</TooltipContent>
        </Tooltip>
      </button>
      {copied && (
        <div className="mt-2 text-[11px] px-2 py-1 rounded bg-zinc-900/90 border border-primary/30 text-primary-foreground/90 text-center shadow-lg">
          Copied Markdown
        </div>
      )}
    </div>
  );
}

export default CopyPageAsMarkdownButton;


