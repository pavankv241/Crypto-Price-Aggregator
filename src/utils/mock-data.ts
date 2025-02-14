export function getMockQuotes(fromAmount: number, fromToken: string, toToken: string) {
  const basePrice = Math.random() * 1000 + 100;
  
  return [
    {
      dex: 'Uniswap V3',
      price: basePrice * (1 + Math.random() * 0.02),
      priceImpact: Math.random() * 0.5,
      liquiditySource: 'V3 0.05% Pool',
      estimatedGas: 15 + Math.random() * 5,
    },
    {
      dex: 'SushiSwap',
      price: basePrice * (1 + Math.random() * 0.02),
      priceImpact: Math.random() * 0.8,
      liquiditySource: 'SushiSwap Pool',
      estimatedGas: 18 + Math.random() * 5,
    },
    {
      dex: 'Curve',
      price: basePrice * (1 + Math.random() * 0.02),
      priceImpact: Math.random() * 0.3,
      liquiditySource: 'Curve Pool',
      estimatedGas: 25 + Math.random() * 8,
    },
    {
      dex: '1inch',
      price: basePrice * (1 + Math.random() * 0.02),
      priceImpact: Math.random() * 0.4,
      liquiditySource: 'Aggregated',
      estimatedGas: 20 + Math.random() * 6,
    },
  ].sort((a, b) => (a.price * fromAmount + a.estimatedGas) - (b.price * fromAmount + b.estimatedGas));
}