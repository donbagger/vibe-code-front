import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Bot, 
  Code, 
  CheckCircle, 
  Play, 
  RotateCcw, 
  Zap,
  MessageSquare,
  Terminal
} from 'lucide-react';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

interface AIDevelopmentDemoProps {
  className?: string;
}

export const AIDevelopmentDemo: React.FC<AIDevelopmentDemoProps> = ({ className = '' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const steps = [
    {
      title: "User Prompt",
      content: "Create a crypto portfolio tracker that shows real-time prices and calculates total value",
      icon: MessageSquare,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30"
    },
    {
      title: "AI Analysis",
      content: "Analyzing requirements...\n• Real-time price data\n• Portfolio calculation\n• UI components\n• API integration",
      icon: Bot,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    },
    {
      title: "Code Generation",
      content: `function createPoolAnalyzer() {
  // Get top DEX pools
  const pools = getNetworkPools("ethereum", {limit: 20});
  
  // Find new pools
  const newPools = findNewPools(pools, 60);
  
  // Get top 5 by volume
  const topPools = topN(pools, "volume_usd", 5, "desc");
  
  // Display results
  printTable(topPools, ["pair_name", "volume_usd"]);
  
  return "Pool analyzer ready!";
}`,
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30"
    },
    {
      title: "Testing & Validation",
      content: "✅ API connection successful\n✅ Pool data fetching working\n✅ Volume analysis complete\n✅ Results display configured",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Deployment Ready",
      content: "🚀 Pool analyzer deployed successfully!\n📊 Real-time DEX data flowing\n🔍 Analysis running\n📈 Results updating live",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30"
    }
  ];

  const startAnimation = (loop = false) => {
    setIsPlaying(true);
    setIsComplete(false);
    setCurrentStep(0);

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsPlaying(false);
        setIsComplete(true);
        
        // If looping, restart after a short delay
        if (loop) {
          setTimeout(() => {
            startAnimation(true);
          }, 2000); // 2 second pause between loops
        }
      }
    });

    // Animate through each step
    steps.forEach((_, index) => {
      timeline.add(() => {
        setCurrentStep(index);
      }, index * 2); // 2 seconds per step for faster animation
    });
  };

  // Auto-play after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoPlaying(true);
      startAnimation(true); // Start with looping enabled
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const resetAnimation = () => {
    setIsPlaying(false);
    setIsComplete(false);
    setCurrentStep(0);
    setIsAutoPlaying(false);
  };

  const AnimatedStepContent: React.FC<{ content: string; isActive: boolean }> = ({ 
    content, 
    isActive 
  }) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!isActive || !contentRef.current) return;

      // Clear content
      contentRef.current.textContent = '';

      // Animate text typing
      gsap.to(contentRef.current, {
        duration: content.length * 0.03,
        text: content,
        ease: 'none',
      });
    }, [content, isActive]);

    return (
      <div 
        ref={contentRef}
        className={`font-mono text-sm whitespace-pre-wrap ${
          content.includes('function') || content.includes('//') 
            ? 'text-green-400 bg-zinc-900 p-4 rounded' 
            : 'text-foreground'
        }`}
      />
    );
  };

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl text-foreground">AI Development Workflow</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch how AI transforms your ideas into working crypto utilities in real-time
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => startAnimation(true)}
          disabled={isPlaying}
          className="flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          {isAutoPlaying ? 'Restart Loop' : 'Start Loop'}
        </Button>
        <Button
          variant="outline"
          onClick={resetAnimation}
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Stop Loop
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center">
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep
                  ? 'bg-primary'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Demo Area */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {steps[currentStep] && (
              <>
                {React.createElement(steps[currentStep].icon, {
                  className: `w-5 h-5 ${steps[currentStep].color}`
                })}
                {steps[currentStep].title}
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="min-h-[300px]">
          {isPlaying || isComplete ? (
            <div className="space-y-4">
              <AnimatedStepContent
                content={steps[currentStep]?.content || ''}
                isActive={isPlaying}
              />
              
              {/* Step indicator */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="w-4 h-4" />
                Step {currentStep + 1} of {steps.length}
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Click "Start Demo" to see AI development in action</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <Card 
            key={index}
            className={`transition-all duration-300 ${
              index <= currentStep 
                ? `${step.borderColor} border-2` 
                : 'border-muted'
            }`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                {React.createElement(step.icon, {
                  className: `w-4 h-4 ${step.color}`
                })}
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className={`w-full h-2 rounded-full ${step.bgColor}`}>
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    index <= currentStep ? step.color.replace('text-', 'bg-') : 'bg-transparent'
                  }`}
                  style={{ 
                    width: index <= currentStep ? '100%' : '0%' 
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Completion Message */}
      {isComplete && (
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Development Complete!</span>
          </div>
          <p className="text-muted-foreground">
            Your crypto utility is ready to use. This entire process took just a few seconds with AI assistance.
          </p>
        </div>
      )}
    </div>
  );
}; 