import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

interface AutoPlayTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
  loopDelay?: number;
}

export const AutoPlayText: React.FC<AutoPlayTextProps> = ({
  texts,
  speed = 0.05,
  delay = 2000, // 2 seconds initial delay
  className = '',
  loopDelay = 2000, // 2 seconds between loops
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateText = (textIndex: number) => {
    if (!textRef.current) return;

    setIsAnimating(true);
    const text = texts[textIndex];

    // Clear existing text
    textRef.current.textContent = '';

    // Animate the text typing
    gsap.to(textRef.current, {
      duration: text.length * speed,
      text: text,
      ease: 'none',
      onComplete: () => {
        setIsAnimating(false);
        
        // Move to next text after a delay
        setTimeout(() => {
          const nextIndex = (textIndex + 1) % texts.length;
          animateText(nextIndex);
        }, loopDelay);
      },
    });
  };

  useEffect(() => {
    // Start animation after initial delay
    const timer = setTimeout(() => {
      animateText(0);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (textRef.current) {
        gsap.killTweensOf(textRef.current);
      }
    };
  }, [delay, speed, loopDelay]);

  return (
    <div className={`font-mono ${className}`}>
      <div ref={textRef} className="text-foreground" />
      {isAnimating && (
        <span className="ml-1 text-primary animate-pulse">|</span>
      )}
    </div>
  );
};

// Example usage component
export const AutoPlayExample: React.FC = () => {
  const cryptoTexts = [
    "Building crypto portfolio tracker...",
    "Integrating CoinPaprika API...",
    "Generating real-time charts...",
    "Setting up price alerts...",
    "Deploying to production...",
  ];

  const codeTexts = [
    "function createUtility() {",
    "  const data = get_json('api.coinpaprika.com/v1/coins');",
    "  const chart = quick_chart(data, 'line', 'Prices');",
    "  return 'Utility ready!';",
    "}",
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Auto-Playing Animations</h3>
        <p className="text-muted-foreground">
          These animations start automatically after 2 seconds and loop continuously
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Status Messages</h4>
          <div className="bg-zinc-900 p-4 rounded-lg">
            <AutoPlayText
              texts={cryptoTexts}
              speed={0.08}
              className="text-green-400"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium">Code Generation</h4>
          <div className="bg-zinc-900 p-4 rounded-lg">
            <AutoPlayText
              texts={codeTexts}
              speed={0.05}
              className="text-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 