export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

export interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
}

export interface SwapQuote {
  dex: string;
  price: number;
  priceImpact: number;
  liquiditySource: string;
  estimatedGas: number;
}

export interface TokenPair {
  fromToken: CryptoAsset | null;
  toToken: CryptoAsset | null;
}