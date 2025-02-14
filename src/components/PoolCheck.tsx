import React from 'react';
import { Sparkles } from 'lucide-react';
import type { TokenPair } from '../types/crypto';
import { formatPrice } from '../utils/formatters';

interface PoolCheckProps {
  tokens: TokenPair;
  amount: string;
}

export function PoolCheck({ tokens, amount }: PoolCheckProps) {
  const poolPrice = tokens.fromToken && tokens.toToken ? 
    parseFloat(amount) * (Math.random() * 0.98 + 0.01) : 0;

  if (!tokens.fromToken || !tokens.toToken) return null;

  return (
    <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
          <span className="text-blue-500 font-medium">PriceRate Pool Available!</span>
        </div>
        <div className="text-right">
          <div className="text-white font-medium">{formatPrice(poolPrice)}</div>
          <div className="text-sm text-blue-400">Save up to 15% on fees</div>
        </div>
      </div>
      <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
        Swap in Pool
      </button>
    </div>
  );
}