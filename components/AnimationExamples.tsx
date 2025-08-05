import React, { useState } from 'react';
import { AnimatedText, AnimatedCode, AnimatedPrompt } from './AnimatedText';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Code, MessageSquare, Play } from 'lucide-react';

export const AnimationExamples: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Quick Examples</h3>
        <p className="text-muted-foreground">
          Simple examples of how to use the animation components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Prompt Animation Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Prompt Animation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              size="sm"
              onClick={() => setShowPrompt(!showPrompt)}
              className="w-full"
            >
              <Play className="w-4 h-4 mr-2" />
              Toggle Animation
            </Button>
            
            {showPrompt && (
              <AnimatedPrompt
                prompt="Create a crypto portfolio tracker"
                speed={0.08}
                className="text-sm"
              />
            )}
          </CardContent>
        </Card>

        {/* Code Animation Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Code Animation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="w-full"
            >
              <Play className="w-4 h-4 mr-2" />
              Toggle Animation
            </Button>
            
            {showCode && (
              <AnimatedCode
                code={`function getPoolData() {
  return getNetworkPools("ethereum", {limit: 10});
}`}
                speed={0.05}
                className="text-xs"
              />
            )}
          </CardContent>
        </Card>

        {/* Text Animation Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Text Animation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              size="sm"
              onClick={() => setShowText(!showText)}
              className="w-full"
            >
              <Play className="w-4 h-4 mr-2" />
              Toggle Animation
            </Button>
            
            {showText && (
              <AnimatedText
                text="Building amazing DEX utilities..."
                type="prompt"
                speed={0.06}
                className="text-sm"
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Usage Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-zinc-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// Import the components
import { AnimatedText, AnimatedCode, AnimatedPrompt } from './AnimatedText';

// Basic text animation
<AnimatedText 
  text="Your text here" 
  speed={0.05} 
  showCursor={true}
/>

// Code generation animation
<AnimatedCode 
  code="your code here" 
  language="javascript" 
  speed={0.03}
/>

// Prompt writing animation
<AnimatedPrompt 
  prompt="User's prompt here" 
  speed={0.08} 
  showTypingIndicator={true}
/>`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}; 