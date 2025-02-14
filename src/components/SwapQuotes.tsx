import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SwapQuote } from '../types/crypto';
import { formatPrice } from '../utils/formatters';
import { DEX_LIST } from '../utils/dex-list';

interface SwapQuotesProps {
  quotes: SwapQuote[];
  amount: number;
}

export function SwapQuotes({ quotes, amount }: SwapQuotesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quotes.map((quote) => {
        const dex = DEX_LIST.find(d => d.name === quote.dex);
        const dexUrl = `https://${quote.dex.toLowerCase().replace(' ', '')}.org/swap`;
        
        return (
          <a
            key={quote.dex}
            href={dexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={dex?.logo}
                  alt={quote.dex}
                  className="w-8 h-8 mr-3"
                />
                <div>
                  <h3 className="font-medium text-white">{quote.dex}</h3>
                  <p className="text-sm text-gray-400">{quote.liquiditySource}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{formatPrice(quote.price * amount)}</div>
                <div className="text-sm text-gray-400">
                  Impact: {quote.priceImpact.toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-gray-400">
                Gas: ${quote.estimatedGas.toFixed(2)}
              </span>
              <span className="text-blue-400 flex items-center">
                Trade Now <ExternalLink className="w-4 h-4 ml-1" />
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}