import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface MicroHelper {
  name: string;
  description: string;
  example: string;
  category: 'api' | 'utility';
  highlight?: boolean;
}

const microHelpers: MicroHelper[] = [
  // API Helper Functions
  {
    name: "getNetworks()",
    description: "Get list of available blockchain networks",
    example: 'getNetworks()',
    category: 'api'
  },
  {
    name: "getNetworkDexes()",
    description: "Get list of available DEXes on a network",
    example: 'getNetworkDexes("ethereum", {limit: 10})',
    category: 'api'
  },
  {
    name: "getNetworkPools()",
    description: "Get top pools on a specific network",
    example: 'getNetworkPools("ethereum", {limit: 10})',
    category: 'api',
    highlight: true
  },
  {
    name: "getDexPools()",
    description: "Get top pools on a specific DEX",
    example: 'getDexPools("ethereum", "uniswap_v3", {limit: 10})',
    category: 'api'
  },
  {
    name: "getPoolDetails()",
    description: "Get detailed information about a specific pool",
    example: 'getPoolDetails("ethereum", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640")',
    category: 'api'
  },
  {
    name: "getPoolOHLCV()",
    description: "Get historical price data for a pool",
    example: 'getPoolOHLCV("ethereum", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", {start: "2024-01-01"})',
    category: 'api'
  },
  {
    name: "getPoolTransactions()",
    description: "Get recent transactions for a pool",
    example: 'getPoolTransactions("ethereum", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640")',
    category: 'api'
  },
  {
    name: "getTokenDetails()",
    description: "Get detailed token information",
    example: 'getTokenDetails("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")',
    category: 'api'
  },
  {
    name: "getTokenPools()",
    description: "Get all pools containing a specific token",
    example: 'getTokenPools("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")',
    category: 'api'
  },
  {
    name: "search()",
    description: "Search for tokens, pools, and DEXes",
    example: 'search("bitcoin")',
    category: 'api'
  },
  {
    name: "getStats()",
    description: "Get high-level platform statistics",
    example: 'getStats()',
    category: 'api'
  },
  // Utility Functions
  {
    name: "topN()",
    description: "Sort and get top N items by specified key",
    example: 'topN(pools, "volume_usd", 5, "desc")',
    category: 'utility'
  },
  {
    name: "formatCurrency()",
    description: "Format numbers into human-readable currency",
    example: 'formatCurrency(1234567.89, "$")',
    category: 'utility'
  },
  {
    name: "percentChange()",
    description: "Calculate percentage change between two values",
    example: 'percentChange(100, 150)',
    category: 'utility'
  },
  {
    name: "getPairName()",
    description: "Extract token pair name from pool data",
    example: 'getPairName(pool, "/")',
    category: 'utility'
  },
  {
    name: "sparkline()",
    description: "Create simple sparkline from number series",
    example: 'sparkline([10, 12, 11, 13, 15], 20)',
    category: 'utility'
  },
  {
    name: "printTable()",
    description: "Display data in formatted table",
    example: 'printTable(pools, ["pair_name", "volume_usd"])',
    category: 'utility'
  },
  {
    name: "arbitrageGap()",
    description: "Calculate percentage difference between two prices",
    example: 'arbitrageGap(100, 105) // Returns 4.88%',
    category: 'utility'
  },
  {
    name: "findArbitrageOpportunities()",
    description: "Automatically find arbitrage opportunities between two pools",
    example: 'findArbitrageOpportunities(pool1, pool2, "ethereum")',
    category: 'utility'
  },
  {
    name: "findNewPools()",
    description: "Find pools created within time window on a network",
    example: 'findNewPools("solana", 15)',
    category: 'utility',
    highlight: true
  },
  {
    name: "calculateRollingMean()",
    description: "Calculate rolling mean (moving average)",
    example: 'calculateRollingMean([10, 12, 11, 13, 15], 3)',
    category: 'utility'
  },
  {
    name: "getLatestPrice()",
    description: "Get latest price of a token by network and address",
    example: 'getLatestPrice("solana", "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN")',
    category: 'utility',
    highlight: true
  },
  {
    name: "loadEnv()",
    description: "Load environment variables with defaults",
    example: 'loadEnv("API_KEY", "default_value")',
    category: 'utility'
  },
  {
    name: "tweet()",
    description: "Send tweets via Twitter API v2",
    example: 'tweet("🚀 New arbitrage opportunity found!")',
    category: 'utility'
  },
  {
    name: "discordPing()",
    description: "Send messages to Discord webhook",
    example: 'discordPing("Alert: High volume detected")',
    category: 'utility'
  },
  {
    name: "telegramSend()",
    description: "Send messages via Telegram bot",
    example: 'telegramSend("📊 Price update: $BTC $50K")',
    category: 'utility'
  },
  {
    name: "saveCsv()",
    description: "Save data to CSV file",
    example: 'saveCsv(pools, "data.csv")',
    category: 'utility'
  },
  {
    name: "saveJson()",
    description: "Save data to JSON file",
    example: 'saveJson(data, "output.json")',
    category: 'utility'
  },
  {
    name: "humanUsd()",
    description: "Format numbers as human-readable USD",
    example: 'humanUsd(1234567) // Returns "$1.23M"',
    category: 'utility'
  },
  {
    name: "asDf()",
    description: "Convert JSON-like data to structured format",
    example: 'asDf(apiResponse)',
    category: 'utility'
  }
];

export function MicroHelpersSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'api' | 'utility'>('all');

  const filteredHelpers = selectedCategory === 'all' 
    ? microHelpers 
    : microHelpers.filter(helper => helper.category === selectedCategory);

  const apiHelpers = microHelpers.filter(h => h.category === 'api');
  const utilityHelpers = microHelpers.filter(h => h.category === 'utility');
  const highlightHelpers = microHelpers.filter(h => h.highlight);

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl text-foreground">DexPaprika API Helpers</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          30 ready-to-use functions across Python, JavaScript & Go
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <Card className="text-center p-4">
          <div className="text-2xl font-medium text-primary">30</div>
          <div className="text-sm text-muted-foreground">Total Functions</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-medium text-blue-500">12</div>
          <div className="text-sm text-muted-foreground">API Functions</div>
        </Card>
        <Card className="text-center p-4">
          <div className="text-2xl font-medium text-green-500">18</div>
          <div className="text-sm text-muted-foreground">Utility Functions</div>
        </Card>
      </div>

      {/* Highlight Functions */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Featured Functions</h3>
          <p className="text-sm text-muted-foreground">Most powerful helpers to get you started</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {highlightHelpers.map((helper, index) => (
            <Card 
              key={index}
              className="hover:border-primary/50 transition-all duration-200 group border-2 border-primary/20"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-mono text-primary">
                    {helper.name}
                  </CardTitle>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                    Featured
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-2">
                  {helper.description}
                </p>
                <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white break-words">
                  {helper.example}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Functions Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="functions" className="border border-primary/20 rounded-lg">
            <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 rounded-lg">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">View All Helper Functions</span>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {apiHelpers.length} API
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {utilityHelpers.length} Utility
                    </span>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* Category Filter */}
              <div className="flex justify-center space-x-4 mb-6">
                <Button 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Functions
                </Button>
                <Button 
                  variant={selectedCategory === 'api' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('api')}
                >
                  API Functions
                </Button>
                <Button 
                  variant={selectedCategory === 'utility' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('utility')}
                >
                  Utility Functions
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredHelpers.map((helper, index) => (
                  <Card 
                    key={index}
                    className="hover:border-primary/50 transition-all duration-200 group"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-mono text-primary">
                          {helper.name}
                        </CardTitle>
                        <span className={`text-xs px-2 py-1 rounded ${
                          helper.category === 'api' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {helper.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-2">
                        {helper.description}
                      </p>
                      <div className="bg-zinc-800 p-2 rounded text-xs font-mono text-white">
                        {helper.example}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center space-y-4">
        <div className="text-sm text-muted-foreground">
          <p>Available in: <span className="font-mono">Python</span> • <span className="font-mono">JavaScript</span> • <span className="font-mono">Go</span></p>
        </div>
        <Button 
          variant="outline" 
          className="border-primary/30 text-primary hover:bg-primary/10"
          onClick={() => window.open('https://github.com/coinpaprika/vibe-jam', '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Complete Documentation
        </Button>
      </div>
    </section>
  );
} 