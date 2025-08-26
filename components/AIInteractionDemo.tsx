import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { CheckCircle } from 'lucide-react';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

interface AIInteractionDemoProps {
  isScrolled?: boolean;
}

export const AIInteractionDemo: React.FC<AIInteractionDemoProps> = ({ isScrolled = false }) => {
  const [currentPhase, setCurrentPhase] = useState<'user-prompt' | 'ai-thinking' | 'ai-code' | 'complete'>('user-prompt');
  const [hasStarted, setHasStarted] = useState(false);
  
  const userPromptRef = useRef<HTMLDivElement>(null);
  const aiResponseRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLPreElement>(null);

  const userPrompt = "Hey, create me a DEX pool analyzer under 100 lines of code";
  const aiResponse = "Sure, let's build it with DexPaprika API:";
  const aiCode = `function analyzeTopPools() {
  // Get top pools on Ethereum
  const pools = getNetworkPools("ethereum", {limit: 10});
  
  // Find new pools created in last hour
  const newPools = findNewPools(pools, 60);
  
  // Get top 5 by volume
  const topPools = topN(pools, "volume_usd", 5, "desc");
  
  // Display results
  printTable(topPools, ["pair_name", "volume_usd", "price_usd"]);
  
  return "Analysis complete!";
}`;

  useEffect(() => {
    // Start animation when scrolled and hasn't started yet
    if (isScrolled && !hasStarted) {
      setHasStarted(true);
      startAnimation();
    }
  }, [isScrolled, hasStarted]);

  const startAnimation = () => {
    setCurrentPhase('user-prompt');

    const timeline = gsap.timeline({
      onComplete: () => {
        // Animation complete
      }
    });

    // Phase 1: User typing prompt
    timeline.add(() => {
      setCurrentPhase('user-prompt');
      if (userPromptRef.current) {
        userPromptRef.current.textContent = '';
        gsap.to(userPromptRef.current, {
          duration: userPrompt.length * 0.05,
          text: userPrompt,
          ease: 'none',
        });
      }
    }, 0);

    // Phase 2: AI response with code
    timeline.add(() => {
      setCurrentPhase('ai-thinking');
      if (aiResponseRef.current) {
        aiResponseRef.current.textContent = '';
        gsap.to(aiResponseRef.current, {
          duration: aiResponse.length * 0.04,
          text: aiResponse,
          ease: 'none',
        });
      }
    }, userPrompt.length * 0.05 + 1);

    // Phase 3: AI writing code
    timeline.add(() => {
      setCurrentPhase('ai-code');
      
      // Small delay to ensure DOM has rendered the code block
      setTimeout(() => {
        if (codeRef.current) {
          codeRef.current.textContent = '';
          gsap.to(codeRef.current, {
            duration: aiCode.length * 0.03,
            text: aiCode,
            ease: 'none',
            onComplete: () => {
              // Ensure the code stays visible
              if (codeRef.current) {
                codeRef.current.textContent = aiCode;
              }
              // Set complete phase after code is finished
              setCurrentPhase('complete');
            }
          });
          
          // Fallback: if GSAP fails, show code after a delay
          setTimeout(() => {
            if (codeRef.current && codeRef.current.textContent === '') {
              codeRef.current.textContent = aiCode;
            }
            // Set complete phase after fallback delay
            setCurrentPhase('complete');
          }, aiCode.length * 0.03 * 1000 + 500);
        }
      }, 100); // Small delay to let React render the code block
    }, userPrompt.length * 0.05 + aiResponse.length * 0.04 + 1.5);
  };

  return (
    <div className="max-w-xl mx-auto space-y-3">
      {/* User Message - Right Side */}
      <div className={`flex justify-end transition-all duration-500 ${
        currentPhase === 'user-prompt' || currentPhase === 'ai-thinking' || currentPhase === 'ai-code' || currentPhase === 'complete' ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-zinc-800 text-white px-3 py-1.5 rounded-lg inline-block max-w-[85%]">
          <div 
            ref={userPromptRef}
            className="text-xs font-mono"
          />
        </div>
      </div>

      {/* AI Response - Left Side */}
      <div className={`flex justify-start transition-all duration-500 ${
        currentPhase === 'ai-thinking' || currentPhase === 'ai-code' || currentPhase === 'complete' ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-zinc-800 text-foreground px-3 py-1.5 rounded-lg inline-block max-w-[85%]">
          <div 
            ref={aiResponseRef}
            className="text-xs font-mono text-left"
          />
          
          {/* Code Block within AI response */}
          {(currentPhase === 'ai-code' || currentPhase === 'complete') && (
            <div className="mt-1.5 transition-all duration-500 opacity-100">
              <pre 
                ref={codeRef}
                className="text-green-400 bg-zinc-900 p-2 rounded text-xs overflow-x-auto font-mono border border-zinc-700 min-h-[60px] whitespace-pre-wrap break-words text-left"
              />
            </div>
          )}
        </div>
      </div>

      {/* Completion Indicator */}
      {currentPhase === 'complete' && (
        <div className="flex justify-center pt-1 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
          <div className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-mono">
            <CheckCircle className="w-3 h-3" />
            <span className="font-medium">Ready to submit!</span>
          </div>
        </div>
      )}
    </div>
  );
}; 