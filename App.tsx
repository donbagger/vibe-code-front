import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { CountdownTimer } from "./components/CountdownTimer";
import { PartnerBadge } from "./components/PartnerBadge";
import { AIInteractionDemo } from "./components/AIInteractionDemo";
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
  HelpCircle,
  MessageSquare
} from "lucide-react";

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
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg py-2' 
          : 'bg-transparent py-3'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            {/* DexPaprika Logo/Icon */}
            <div className="flex items-center">
              <img 
                src={isScrolled ? "/DexPaprika_icon.svg" : "/DexPaprika_logo.svg"} 
                alt="DexPaprika" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-6' : 'h-8'
                }`}
              />
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="transition-all duration-300 px-3 py-2 h-10 text-sm"
              >
                {isScrolled ? <Home className="w-4 h-4" /> : "Home"}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="transition-all duration-300 px-3 py-2 h-10 text-sm"
              >
                {isScrolled ? <Info className="w-4 h-4" /> : "About"}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="transition-all duration-300 px-3 py-2 h-10 text-sm"
              >
                {isScrolled ? <HelpCircle className="w-4 h-4" /> : "Help"}
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="transition-all duration-300 px-3 py-2 h-10 text-sm"
              >
                {isScrolled ? <MessageSquare className="w-4 h-4" /> : "Contact"}
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
            <div className="flex items-center">
              <img 
                src={isScrolled ? "/CoinPaprika_icon.svg" : "/CoinPaprika_logo.svg"} 
                alt="CoinPaprika" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-6' : 'h-8'
                }`}
              />
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
                  <span className="text-primary font-medium">CoinPaprika API</span>{" "}
                  + AI in{" "}
                  <span className="text-primary font-medium">≤50 lines</span> of code
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
                  <div className="text-2xl font-medium text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Micro-Helpers Ready</div>
                </div>
                <div className="text-center p-4 bg-[#1A1A1A] rounded-lg border border-primary/20 shadow-lg">
                  <div className="text-2xl font-medium text-primary">4</div>
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
                  onClick={() => window.open('https://github.com/coinpaprika/vibe-jam', '_blank')}
                >
                  <GitFork className="w-5 h-5 mr-2" />
                  Fork Starter Template
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 border-primary/30 text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://api.coinpaprika.com', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  API Documentation
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
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple process, powerful results. Build crypto utilities that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitFork className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2">1. Fork & Setup</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fork our starter template with 30+ micro-helpers in Python, JS, Go & Rust
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/coinpaprika/vibe-jam', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Fork Now
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
                  Use CoinPaprika API + Partner SDKs. Vibe-code with Cursor, Copilot, or any AI IDE
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                  onClick={() => window.open('https://mcp.coinpaprika.com', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  MCP Docs
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
                  onClick={() => window.open('https://github.com/coinpaprika/vibe-jam/issues/new', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Submit Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>



        {/* Helper Functions Examples */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Micro-Helpers Available</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              30+ ready-to-use functions to accelerate your development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-primary">get_json()</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Fetch and parse JSON data from any API endpoint
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                  get_json("api.coinpaprika.com/v1/coins")
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-primary">mcp_df()</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Convert market data to pandas DataFrame instantly
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                  mcp_df(coins_data, "price")
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-primary">quick_chart()</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Generate beautiful charts with one line of code
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                  quick_chart(data, "line", "Price Over Time")
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-primary">price_alert()</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Set up price alerts and notifications
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                  price_alert("bitcoin", "greater than 50000")
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-primary">portfolio_calc()</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Calculate portfolio metrics and performance
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                  portfolio_calc(holdings, "total_value")
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-primary">whale_tracker()</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Track large transactions and whale movements
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                  whale_tracker("ethereum", min_value=1000000)
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://github.com/coinpaprika/vibe-jam', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All 30+ Helpers
            </Button>
          </div>
        </section>

        {/* Specific Project Examples */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Project Inspirations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real project ideas that you can build in ≤50 lines
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
                  <strong>Tech:</strong> whale_tracker() + portfolio_calc() + Telegram API
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
                  <strong>Tech:</strong> mcp_df() + yield_calc() + risk_score()
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
                  <strong>Tech:</strong> portfolio_calc() + rebalance_suggest() + quick_chart()
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
                  <strong>Tech:</strong> price_compare() + gas_calc() + profit_estimate()
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
                  <strong>Tech:</strong> wallet_monitor() + smart_money_detect() + alert_system()
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
                <p className="text-sm">• 30+ micro-helpers (get_json, mcp_df, quick_chart)</p>
                <p className="text-sm">• Python, JavaScript, Go & Rust support</p>
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

        {/* Required Badges */}
        <section id="required-badges" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl text-foreground">Required Badges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Include these badges in your README for SEO optimization and community discovery
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle>1. CoinPaprika Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-zinc-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4 text-white">
                  <pre>{`[![Crypto Market Data by CoinPaprika](https://coinpaprika.com/badge.svg?text=Crypto+Market+Data+by+CoinPaprika)](https://coinpaprika.com/vibe-code?ref=vibecode-0825)`}</pre>
                </div>
                <div className="flex justify-center mb-4">
                  <img src="/CoinPaprika Badge.svg" alt="CoinPaprika Badge" className="h-5" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Required for all submissions. Includes UTM tracking for analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle>2. MCP Server Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-zinc-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4 text-white">
                  <pre>{`[![Powered by Paprika MCP](https://coinpaprika.com/mcp-badge.svg)](https://mcp.coinpaprika.com?ref=paprika-vibe-0825)`}</pre>
                </div>
                <div className="flex justify-center mb-4">
                  <img src="/DexPaprika Badge.svg" alt="DexPaprika Badge" className="h-5" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Required if using MCP server integration. Shows AI IDE compatibility.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle>3. Partner Co-Brand Badge (This Edition)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-zinc-800 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4 text-white">
                  <pre>{`[![Co-hosted with [Partner Name]](https://[partner-domain]/vibe-badge.svg)](https://[partner-domain]/vibe-code?ref=partner-0825)`}</pre>
                </div>
                <p className="text-xs text-muted-foreground">
                  Co-brand badge will be provided by edition partner. Check starter repo for current edition badge.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50">
              <CardHeader>
                <CardTitle>4. Required Topic Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Add these topics to your GitHub repository:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">paprika-vibe-0825</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">coinpaprika-api</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">crypto-utility</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">ai-powered</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">defi-tools</Badge>
                  </div>
                </div>
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
                      <li>• ≤50 lines of functional code</li>
                      <li>• Use CoinPaprika API + Partner SDK</li>
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
                <AccordionTrigger>How do you count the 50 lines of code?</AccordionTrigger>
                <AccordionContent>
                  We count only functional lines of code, excluding comments, blank lines, and import statements. 
                  GitHub Actions automatically validates your submission and counts lines using our standardized counter. 
                  Configuration files and documentation don't count toward the limit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do I really not need an API key?</AccordionTrigger>
                <AccordionContent>
                  Correct! The CoinPaprika API is completely free and requires no authentication for basic endpoints. 
                  Our MCP server integration also handles authentication seamlessly when using AI IDEs like Cursor or Claude Desktop.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What programming languages can I use?</AccordionTrigger>
                <AccordionContent>
                  We provide micro-helpers in Python, JavaScript, Go, and Rust. However, you can use any programming language 
                  as long as you integrate with the CoinPaprika API and partner SDK. Our helper functions just make development faster.
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
                  or complex library usage counts toward your 50-line limit. We encourage using our micro-helpers 
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
                  Complete repository with 30+ micro-helpers, examples, and GitHub Actions setup.
                </p>
                <Button 
                  className="w-full bg-[#43AA05] hover:bg-[#43AA05]/90 text-white" 
                  onClick={() => window.open('https://github.com/coinpaprika/vibe-jam', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Fork Repository
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
                  Complete CoinPaprika API documentation with examples and endpoint references.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                  onClick={() => window.open('https://api.coinpaprika.com', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  API Docs
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
                  onClick={() => window.open('https://mcp.coinpaprika.com', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  MCP Setup
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
              onClick={() => window.open('https://github.com/coinpaprika/vibe-jam', '_blank')}
            >
              <GitFork className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 border-[#43AA05]/30 text-[#43AA05] hover:bg-[#43AA05]/10"
              onClick={() => window.open('https://discord.gg/coinpaprika', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Join Discord Community
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