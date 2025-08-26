import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { CountdownTimer } from "./components/CountdownTimer";
import { AIInteractionDemo } from "./components/AIInteractionDemo";
import { MicroHelpersSection } from "./components/MicroHelpersSection";
import { 
  Calendar, 
  Code, 
  Trophy, 
  Users, 
  Zap, 
  GitFork, 
  Award, 
  Clock, 
  ExternalLink, 
  FileText,
  Shield,
  Bot,
  TrendingUp,
  Search,
  Wallet,
  Target,
  AlertCircle,
  Home,
  Info,
  MessageSquare
} from "lucide-react";
import CopyPageAsMarkdownButton from "./components/CopyPageAsMarkdownButton";

export default function App() {
  // Set submission deadline (example: February 28, 2025)
  const submissionDeadline = "2025-02-28T23:59:59";
  
  // Scroll state for floating navigation
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CopyPageAsMarkdownButton />
      {/* AI Export Blueprint: included in Markdown export, visually hidden */}
      <section data-include-md="true" className="sr-only">
        {`---
title: Paprika Vibe-Code Challenge
edition: 2025-02
deadline_utc: 2025-02-28T23:59:59Z
repo_url: https://github.com/coinpaprika/vibe-jam
submit_url: https://github.com/coinpaprika/vibe-jam/issues/new
docs_api_url: https://api.dexpaprika.com
docs_mcp_url: https://mcp.coinpaprika.com
contact_url: https://coinpaprika.com/contact/
discord_url: https://discord.gg/coinpaprika
---`}

        Links:
        - Repo: https://github.com/coinpaprika/vibe-jam
        - Submit: https://github.com/coinpaprika/vibe-jam/issues/new
        - API Docs: https://api.dexpaprika.com
        - MCP Docs: https://mcp.coinpaprika.com
        - Contact: https://coinpaprika.com/contact/
        - Discord: https://discord.gg/coinpaprika

        Constraints:
        - Single script, ≤100 lines (functional lines only)
        - External APIs/libraries count toward the limit (partner SDK excluded)
        - Include required badges and topic tags

        Scoring:
        - Innovation: 40%
        - Usefulness: 30%
        - Community Love: 30%
      </section>
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg py-2' 
          : 'bg-transparent py-3'
      }`}>
        <div className="container mx-auto px-4">
                      <div className="grid grid-cols-3 items-center w-full">
              {/* DexPaprika Logo/Icon */}
              <div className="flex justify-center">
                <a href="https://dexpaprika.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={isScrolled ? "/DexPaprika_icon.svg" : "/DexPaprika_logo.svg"} 
                    alt="DexPaprika" 
                    className={`transition-all duration-300 ${
                      isScrolled ? 'h-6' : 'h-8'
                    }`}
                  />
                </a>
              </div>

              {/* Navigation Items */}
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="transition-all duration-300 px-3 py-2 h-10 text-sm"
                  asChild
                >
                  <a href="/">
                    {isScrolled ? <Home className="w-4 h-4" /> : "Home"}
                  </a>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="transition-all duration-300 px-3 py-2 h-10 text-sm"
                  onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  {isScrolled ? <Info className="w-4 h-4" /> : "About"}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="transition-all duration-300 px-3 py-2 h-10 text-sm"
                  asChild
                >
                  <a href="https://coinpaprika.com/contact/" target="_blank" rel="noopener noreferrer">
                    {isScrolled ? <MessageSquare className="w-4 h-4" /> : "Contact"}
                  </a>
                </Button>
                
                <Separator orientation="vertical" className="h-5" />
                
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 px-4 py-2 h-10 text-sm"
                >
                  {isScrolled ? <GitFork className="w-4 h-4" /> : "Get Started"}
                </Button>
              </div>

              {/* CoinPaprika Logo/Icon */}
              <div className="flex justify-center">
                <a href="https://coinpaprika.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={isScrolled ? "/CoinPaprika_icon.svg" : "/CoinPaprika_logo.svg"} 
                    alt="CoinPaprika" 
                    className={`transition-all duration-300 ${
                      isScrolled ? 'h-6' : 'h-8'
                    }`}
                  />
                </a>
              </div>
            </div>
        </div>
      </nav>
      {/* SEO Meta Tags would go in the head */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-green-950/20 pt-24">
        {/* Background pattern removed for cleaner look */}
        
        {/* Enhanced gradient overlay for better visual effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-800/10"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-8">
              {/* Header Badge */}
              <Badge variant="secondary" className="mx-auto px-4 py-2 bg-primary/20 text-primary border-primary/30">
                <Calendar className="w-4 h-4 mr-2" />
                Challenge 2025 • 4-Week Build Window
              </Badge>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl tracking-tight">
                  <span className="block text-primary">Paprika X [Partner_Placeholder]</span>
                  <span className="block gradient-text">
                    Vibe-Code
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
                  Build crypto/DeFi utilities with{" "}
                  <span className="text-primary font-medium">DexPaprika API</span>{" "}
                  + AI in{" "}
                  <span className="text-primary font-medium">≤100 lines</span> of code
                </p>
                
                {/* No API Key Needed Highlight */}
                <div className="flex justify-center">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    <Shield className="w-4 h-4 mr-2" />
                    No API Key Required
                  </Badge>
                </div>
                
                {/* Badge Showcase */}
                <div className="flex justify-center items-center gap-4 mt-6">
                  <img src="/CoinPaprika Badge.svg" alt="CoinPaprika Badge" className="h-6" />
                  <img src="/DexPaprika Badge.svg" alt="DexPaprika Badge" className="h-6" />
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center p-4 bg-[#1A1A1A] rounded-lg border border-primary/20 shadow-lg">
                  <div className="text-2xl font-medium text-primary">$3K+</div>
                  <div className="text-sm text-muted-foreground">Prize Value Per Edition</div>
                </div>
                <div className="text-center p-4 bg-[#1A1A1A] rounded-lg border border-primary/20 shadow-lg">
                  <div className="text-2xl font-medium text-primary">21</div>
                  <div className="text-sm text-muted-foreground">API Helpers Ready</div>
                </div>
                <div className="text-center p-4 bg-[#1A1A1A] rounded-lg border border-primary/20 shadow-lg">
                  <div className="text-2xl font-medium text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                </div>
              </div>

              {/* AI Interaction Demo */}
              <div className="mt-12 mb-8">
                <AIInteractionDemo isScrolled={isScrolled} />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-[#43AA05] hover:bg-[#43AA05]/90 text-white px-8 py-3"
                  asChild
                >
                  <a href="https://github.com/coinpaprika/vibe-jam" target="_blank" rel="noopener noreferrer">
                    <GitFork className="w-5 h-5 mr-2" />
                    Fork Starter Template
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://api.dexpaprika.com" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    API Documentation
                  </a>
                </Button>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="max-w-md mx-auto">
              <CountdownTimer targetDate={submissionDeadline} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* How It Works */}
        <section id="how-it-works" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This challenge is simple: start with our <b>starter repo</b>—it includes examples and helper functions so you can move fast. From there, build something genuinely useful on top of <b>DexPaprika</b> data.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Think beyond the basics. You could stream real‑time alerts, explore arbitrage opportunities, track new liquidity pools as they appear, or design tools that make portfolio decisions easier. If you already have an idea, use this as the backbone. If you don’t, experiment until something sparks.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The goal is to showcase an <i>innovative idea</i> powered by on‑chain data—clean, focused, and practical. Keep it approachable for others to read and remix.
            </p>
            <div className="inline-flex items-center gap-2 bg-zinc-900/40 border border-primary/20 px-3 py-2 rounded-lg text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" /> One rule: ship a single script ≤100 lines
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitFork className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2">1. Fork & Setup</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fork our starter template with 21 API helpers in Python, JavaScript & Go
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/coinpaprika/vibe-jam" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Fork Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover:border-blue-500/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="mb-2">2. Build with AI</h3>
                                  <p className="text-sm text-muted-foreground mb-4">
                    Use DexPaprika API + Helper functions. Vibe-code with Cursor, Copilot, or any AI IDE
                  </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                  asChild
                >
                  <a href="https://mcp.coinpaprika.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    MCP Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover:border-green-500/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="mb-2">3. Add Badges</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Include required SEO badges and topic tags for community discovery
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                  onClick={() => document.getElementById('required-badges')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Badges
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover:border-purple-500/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="mb-2">4. Submit & Vote</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Submit via GitHub Issue. Community votes Day 28-31, expert judging follows
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                  asChild
                >
                  <a href="https://github.com/coinpaprika/vibe-jam/issues/new" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Submit Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>



        <MicroHelpersSection />

        {/* Specific Project Examples */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Project Inspirations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real project ideas that you can build in ≤100 lines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-primary" />
                  Discord Pool Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Bot that monitors liquidity pools and sends alerts to Discord channels when significant changes occur.
                </p>
                <div className="text-xs bg-zinc-800 p-2 rounded text-white">
                  <strong>Tech:</strong> get_json() + quick_chart() + Discord webhook
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                  Whale Alert Bot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Track large transactions (over $1M) and notify via Telegram with transaction details and market impact.
                </p>
                <div className="text-xs bg-zinc-800 p-2 rounded text-white">
                  <strong>Tech:</strong> getPoolTransactions() + topN() + formatCurrency()
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2 text-green-400" />
                  DeFi Yield Finder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Scan multiple DeFi protocols to find highest APY opportunities and risk-adjusted returns.
                </p>
                <div className="text-xs bg-zinc-800 p-2 rounded text-white">
                  <strong>Tech:</strong> getTokenPools() + sortByVolume() + formatPercentage()
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-purple-400" />
                  Portfolio Rebalancer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Auto-suggest portfolio rebalancing based on target allocations and current market conditions.
                </p>
                <div className="text-xs bg-zinc-800 p-2 rounded text-white">
                  <strong>Tech:</strong> getTokenDetails() + percentChange() + printTable()
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-red-400" />
                  Arbitrage Detective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Find arbitrage opportunities across exchanges and calculate potential profits minus gas fees.
                </p>
                <div className="text-xs bg-zinc-800 p-2 rounded text-white">
                  <strong>Tech:</strong> findArbitrageOpportunities() + formatCurrency() + printTable()
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
                  Smart Money Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Monitor wallets of successful traders and get notified when they make new moves.
                </p>
                <div className="text-xs bg-zinc-800 p-2 rounded text-white">
                  <strong>Tech:</strong> getPoolTransactions() + getPoolAge() + sparkline()
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Challenge Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4-week build window with community voting and expert evaluation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Days 1-28
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-2">Build Phase</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fork, build, and submit your crypto utility. Weekly office hours for support.
                  </p>
                  
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-400" />
                    Days 28-31
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-2">Community Voting</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Community discovers and votes on submissions. Social engagement matters.
                  </p>
                 
                </CardContent>
              </Card>

              <Card className="hover:border-green-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-green-400" />
                    Day 32+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-2">Expert Judging</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Innovation (40%) + Usefulness (30%) + Community Love (30%). Winners announced.
                  </p>
                 
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">What You Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build amazing crypto utilities quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  Prize Pool
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Partner tokens ($1,000 USD)</p>
                <p className="text-sm">• CP Pro subscriptions ($11,940 retail)</p>
                <p className="text-sm">• Claude credits ($500 USD)</p>
                <p className="text-sm">• Partner additional prizes</p>
              </CardContent>
            </Card>

            <Card className="hover:border-blue-500/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-400" />
                  Starter Kit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• 21 API helpers (getNetworks, getTokenPools, topN)</p>
                <p className="text-sm">• Python, JavaScript & Go support</p>
                <p className="text-sm">• MCP server integration</p>
                <p className="text-sm">• No API key needed ✨</p>
              </CardContent>
            </Card>

            <Card className="hover:border-green-500/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-green-400" />
                  AI Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• ChatGPT plugins ready</p>
                <p className="text-sm">• Claude Desktop integration</p>
                <p className="text-sm">• Cursor IDE optimized</p>
                <p className="text-sm">• GitHub Copilot enhanced</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Required Badges & Tags */}
        <section id="required-badges" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Required Badges & Tags</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two simple steps for SEO optimization and community discovery
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1: Badges */}
            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Include These Badges in Your README
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
                  <div className="text-center">
                    <img src="/CoinPaprika Badge.svg" alt="CoinPaprika Badge" className="h-8 mb-2" />
                    <p className="text-xs text-muted-foreground">CoinPaprika Badge</p>
                  </div>
                  <div className="text-center">
                    <img src="/DexPaprika Badge.svg" alt="DexPaprika Badge" className="h-8 mb-2" />
                    <p className="text-xs text-muted-foreground">DexPaprika Badge</p>
                  </div>
                  <div className="text-center">
                    <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center mb-2">
                      <span className="text-xs text-gray-500">Partner Badge</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Partner Co-Brand Badge</p>
                  </div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg font-mono text-xs overflow-x-auto text-white">
                  <pre>{`[![Crypto Market Data by CoinPaprika](https://coinpaprika.com/badge.svg?text=Crypto+Market+Data+by+CoinPaprika)](https://coinpaprika.com/vibe-code?ref=vibecode-0825)
[![Powered by Paprika MCP](https://coinpaprika.com/mcp-badge.svg)](https://mcp.coinpaprika.com?ref=paprika-vibe-0825)
[![Co-hosted with [Partner Name]](https://[partner-domain]/vibe-badge.svg)](https://[partner-domain]/vibe-code?ref=partner-0825)`}</pre>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Copy these badge codes to your README. Partner badge will be provided by edition partner.
                </p>
              </CardContent>
            </Card>

            {/* Step 2: Topic Tags */}
            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Add These Topic Tags to Your Repository
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="border-primary/30 text-primary">paprika-vibe-0825</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">dexpaprika-api</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">crypto-utility</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">ai-powered</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">defi-tools</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Add these topics to your GitHub repository settings for better discoverability
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rules & Requirements */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Rules & Requirements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple rules to ensure fair play and quality submissions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:border-primary/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="mb-4 text-primary">✅ Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• ≤100 lines of functional code</li>
                      <li>• Use DexPaprika API + Helper functions</li>
                      <li>• Include required badges & topic tags</li>
                      <li>• Submit via GitHub Issue form</li>
                      <li>• Account ≥30 days or ≥3 public repos</li>
                      <li>• One repository per participant</li>
                      <li>• GitHub Actions will validate line count</li>
                      <li>• Badge checker validates all required badges</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-blue-400">📋 Recommended</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Use provided micro-helpers</li>
                      <li>• Engage with community weekly</li>
                      <li>• Document your approach clearly</li>
                      <li>• Test with real market data</li>
                      <li>• Share progress on social media</li>
                      <li>• Attend office hours for support</li>
                      <li>• Use MCP for seamless AI integration</li>
                      <li>• Add comprehensive README</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the Paprika Vibe-Code challenge
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you count the 100 lines of code?</AccordionTrigger>
                <AccordionContent>
                  We count only functional lines of code, excluding comments, blank lines, and import statements. 
                  GitHub Actions automatically validates your submission and counts lines using our standardized counter. 
                  Configuration files and documentation don't count toward the 100-line limit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do I really not need an API key?</AccordionTrigger>
                <AccordionContent>
                  Correct! The DexPaprika API is completely free and requires no authentication for basic endpoints. 
                  Our helper functions work seamlessly with the API to make development faster.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What programming languages can I use?</AccordionTrigger>
                <AccordionContent>
                  We provide API helpers in Python, JavaScript, and Go. However, you can use any programming language 
                  as long as you integrate with the DexPaprika API. Our helper functions just make development faster.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How does the judging process work?</AccordionTrigger>
                <AccordionContent>
                  Judging happens in two phases: Community voting (Days 28-31) accounts for 30% of the final score. 
                  Expert judging evaluates Innovation (40%) and Usefulness (30%). Our panel includes crypto developers, 
                  DeFi experts, and the partner company's technical team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I use external libraries and APIs?</AccordionTrigger>
                <AccordionContent>
                  Yes, but only standard libraries and the partner SDK count as "free" lines. Any external API calls 
                  or complex library usage counts toward your 100-line limit. We encourage using our micro-helpers 
                  which don't count against the limit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What if I find a bug in the micro-helpers?</AccordionTrigger>
                <AccordionContent>
                  Please report bugs in our GitHub repository issues. We'll fix them quickly and notify all participants. 
                  Bug reports and suggestions for new micro-helpers are highly appreciated and can earn you bonus points 
                  in the innovation category.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>How do I integrate with AI IDEs?</AccordionTrigger>
                <AccordionContent>
                  We provide MCP (Model Context Protocol) server integration that works with Cursor, Claude Desktop, and GitHub Copilot. 
                  Check our MCP documentation for setup instructions. This gives your AI assistant direct access to live crypto data 
                  and our helper functions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Resource Links */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Developer Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get started and build successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitFork className="w-5 h-5 mr-2 text-primary" />
                  Starter Template
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Complete repository with 21 API helpers, examples, and GitHub Actions setup.
                </p>
                <Button 
                  className="w-full bg-[#43AA05] hover:bg-[#43AA05]/90 text-white" 
                  asChild
                >
                  <a href="https://github.com/coinpaprika/vibe-jam" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Fork Repository
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover:border-blue-500/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-400" />
                  API Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Complete DexPaprika API documentation with examples and endpoint references.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                  asChild
                >
                  <a href="https://api.dexpaprika.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    API Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover:border-green-500/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-green-400" />
                  MCP Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Model Context Protocol setup for AI IDE integration and seamless development.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10"
                  asChild
                >
                  <a href="https://mcp.coinpaprika.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    MCP Setup
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-8 py-16 bg-gradient-to-r from-[#43AA05]/10 to-[#22c55e]/10 rounded-2xl">
          <h2 className="text-3xl md:text-4xl text-foreground">Ready to Ship?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers building the future of crypto utilities with AI assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#43AA05] hover:bg-[#43AA05]/90 text-white px-8 py-3"
              asChild
            >
              <a href="https://github.com/coinpaprika/vibe-jam" target="_blank" rel="noopener noreferrer">
                <GitFork className="w-5 h-5 mr-2" />
                Get Started Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 border-[#43AA05]/30 text-[#43AA05] hover:bg-[#43AA05]/10"
              asChild
            >
              <a href="https://discord.gg/coinpaprika" target="_blank" rel="noopener noreferrer">
                <Users className="w-5 h-5 mr-2" />
                Join Discord Community
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Challenge runs monthly • Next edition starts February 1st, 2025 • Co-hosted with rotating partners
          </p>
        </section>
      </div>
    </div>
  );
}