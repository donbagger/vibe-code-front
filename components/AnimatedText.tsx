import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

interface AnimatedTextProps {
  text: string;
  type?: 'prompt' | 'code';
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorBlink?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'prompt',
  speed = 0.05,
  delay = 0,
  className = '',
  onComplete,
  showCursor = true,
  cursorBlink = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    setIsComplete(false);

    // Clear any existing text
    if (textRef.current) {
      textRef.current.textContent = '';
    }

    // Create timeline for the animation
    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        setIsComplete(true);
        onComplete?.();
      },
    });

    // Animate the text typing
    tl.to(textRef.current, {
      duration: text.length * speed,
      text: text,
      ease: 'none',
    });

    // Animate cursor blinking during typing
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      
      if (cursorBlink) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
        });
      }
    }

    return () => {
      tl.kill();
    };
  }, [text, speed, delay, showCursor, cursorBlink, onComplete]);

  // Stop cursor blinking when animation is complete
  useEffect(() => {
    if (isComplete && cursorRef.current) {
      gsap.killTweensOf(cursorRef.current);
      gsap.set(cursorRef.current, { opacity: 1 });
    }
  }, [isComplete]);

  return (
    <div className={`flex items-center ${className}`}>
      <div 
        ref={textRef} 
        className={`font-mono ${
          type === 'code' 
            ? 'text-green-400 bg-zinc-800 px-4 py-2 rounded' 
            : 'text-foreground'
        }`}
      />
      {showCursor && (
        <span 
          ref={cursorRef}
          className={`ml-1 ${
            type === 'code' ? 'text-green-400' : 'text-primary'
          }`}
        >
          |
        </span>
      )}
    </div>
  );
};

// Code generation animation component
interface AnimatedCodeProps {
  code: string;
  language?: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const AnimatedCode: React.FC<AnimatedCodeProps> = ({
  code,
  language = 'javascript',
  speed = 0.03,
  delay = 0,
  className = '',
  onComplete,
}) => {
  const codeRef = useRef<HTMLPreElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!codeRef.current) return;

    setIsAnimating(true);

    // Clear existing content
    if (codeRef.current) {
      codeRef.current.textContent = '';
    }

    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        setIsAnimating(false);
        onComplete?.();
      },
    });

    // Animate code generation with line-by-line effect
    const lines = code.split('\n');
    let currentText = '';

    lines.forEach((line, index) => {
      tl.to(codeRef.current, {
        duration: line.length * speed,
        text: currentText + line,
        ease: 'none',
      }, index > 0 ? `+=${speed * 10}` : 0); // Small pause between lines
      
      currentText += line + '\n';
    });

    return () => {
      tl.kill();
    };
  }, [code, speed, delay, onComplete]);

  return (
    <pre
      ref={codeRef}
      className={`font-mono text-sm bg-zinc-900 text-green-400 p-4 rounded-lg overflow-x-auto ${className}`}
      data-language={language}
    >
      {isAnimating ? '' : code}
    </pre>
  );
};

// Prompt writing animation component
interface AnimatedPromptProps {
  prompt: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showTypingIndicator?: boolean;
}

export const AnimatedPrompt: React.FC<AnimatedPromptProps> = ({
  prompt,
  speed = 0.08,
  delay = 0,
  className = '',
  onComplete,
  showTypingIndicator = true,
}) => {
  const promptRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!promptRef.current) return;

    setIsAnimating(true);

    // Clear existing content
    if (promptRef.current) {
      promptRef.current.textContent = '';
    }

    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        setIsAnimating(false);
        onComplete?.();
      },
    });

    // Animate prompt typing with realistic pauses
    tl.to(promptRef.current, {
      duration: prompt.length * speed,
      text: prompt,
      ease: 'none',
    });

    // Animate typing indicator
    if (showTypingIndicator && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        opacity: 0,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }

    return () => {
      tl.kill();
    };
  }, [prompt, speed, delay, showTypingIndicator, onComplete]);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="text-blue-400 font-medium">User:</div>
      <div 
        ref={promptRef} 
        className="text-foreground flex-1"
      />
      {showTypingIndicator && isAnimating && (
        <div 
          ref={indicatorRef}
          className="text-muted-foreground"
        >
          ...
        </div>
      )}
    </div>
  );
}; 