import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AnimatedText, AnimatedCode, AnimatedPrompt } from './AnimatedText';
import { Play, RotateCcw, Code, MessageSquare } from 'lucide-react';

export const AnimationDemo: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState<'prompt' | 'code' | 'text'>('prompt');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const demoPrompts = [
    "Create a crypto portfolio tracker with real-time price updates",
    "Build a DeFi yield calculator for multiple protocols",
    "Make a whale alert bot that monitors large transactions",
    "Generate a trading bot that uses technical indicators"
  ];

  const demoCode = `function createDEXUtility() {
  // Get DEX pool data from DexPaprika API
  const pools = getNetworkPools("ethereum", {limit: 20});
  
  // Find new pools created recently
  const newPools = findNewPools(pools, 60);
  
  // Get top pools by volume
  const topPools = topN(pools, "volume_usd", 5, "desc");
  
  // Display results in table
  printTable(topPools, ["pair_name", "volume_usd"]);
  
  return "DEX utility created successfully!";
}`;

  const demoTexts = [
    "Building amazing DEX utilities...",
    "Integrating with DexPaprika API...",
    "Fetching real-time pool data...",
    "Analyzing trading volumes..."
  ];

  const handlePlay = (loop = false) => {
    setIsPlaying(true);
    setIsAutoPlaying(loop);
    
    if (loop) {
      // Loop through different demos
      const demos: Array<'prompt' | 'code' | 'text'> = ['prompt', 'code', 'text'];
      let currentIndex = demos.indexOf(currentDemo);
      
      const cycleDemo = () => {
        currentIndex = (currentIndex + 1) % demos.length;
        setCurrentDemo(demos[currentIndex]);
        setIsPlaying(true);
        
        // Continue the loop
        setTimeout(() => {
          if (isAutoPlaying) {
            cycleDemo();
          }
        }, 4000); // 4 seconds per demo
      };
      
      // Start the cycle after current animation
      setTimeout(() => {
        if (isAutoPlaying) {
          cycleDemo();
        }
      }, 4000);
    } else {
      // Single play - reset after 4 seconds
      setTimeout(() => setIsPlaying(false), 4000);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setIsAutoPlaying(false);
  };

  // Auto-play after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handlePlay(true); // Start with looping enabled
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl text-foreground">Animation Demo</h2>
        <p className="text-lg text-muted-foreground">
          See how AI-powered development looks with GSAP animations
        </p>
      </div>

      {/* Demo Controls */}
      <div className="flex justify-center gap-4">
        <Button
          variant={currentDemo === 'prompt' ? 'default' : 'outline'}
          onClick={() => setCurrentDemo('prompt')}
          className="flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Prompt Writing
        </Button>
        <Button
          variant={currentDemo === 'code' ? 'default' : 'outline'}
          onClick={() => setCurrentDemo('code')}
          className="flex items-center gap-2"
        >
          <Code className="w-4 h-4" />
          Code Generation
        </Button>
        <Button
          variant={currentDemo === 'text' ? 'default' : 'outline'}
          onClick={() => setCurrentDemo('text')}
          className="flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Text Animation
        </Button>
      </div>

      {/* Demo Display */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {currentDemo === 'prompt' && 'AI Prompt Writing'}
              {currentDemo === 'code' && 'Code Generation'}
              {currentDemo === 'text' && 'Text Animation'}
            </span>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => handlePlay(true)}
                disabled={isPlaying}
                className="flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                {isAutoPlaying ? 'Restart Loop' : 'Start Loop'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleReset}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Stop Loop
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="min-h-[200px] flex items-center justify-center">
          {currentDemo === 'prompt' && (
            <div className="w-full space-y-4">
              {isPlaying && (
                <AnimatedPrompt
                  prompt={demoPrompts[Math.floor(Math.random() * demoPrompts.length)]}
                  speed={0.08}
                  delay={0.5}
                  className="text-lg"
                />
              )}
            </div>
          )}

          {currentDemo === 'code' && (
            <div className="w-full">
              {isPlaying && (
                <AnimatedCode
                  code={demoCode}
                  language="javascript"
                  speed={0.03}
                  delay={0.5}
                  className="w-full"
                />
              )}
            </div>
          )}

          {currentDemo === 'text' && (
            <div className="w-full space-y-4">
              {isPlaying && (
                <AnimatedText
                  text={demoTexts[Math.floor(Math.random() * demoTexts.length)]}
                  type="prompt"
                  speed={0.06}
                  delay={0.5}
                  className="text-lg"
                />
              )}
            </div>
          )}

          {!isPlaying && (
            <div className="text-center text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Click "Play" to see the animation</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="hover:border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Prompt Writing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Realistic typing animation with cursor blinking and typing indicators. Perfect for showing user input.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-green-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" />
              Code Generation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Line-by-line code generation with syntax highlighting. Shows AI writing code in real-time.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-blue-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              Text Animation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Simple text typing animation with customizable speed and cursor effects.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 