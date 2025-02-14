import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { CryptoAsset } from '../types/crypto';
import { formatPrice, formatPercentage, formatMarketCap } from '../utils/formatters';

interface CryptoTableProps {
  assets: CryptoAsset[];
}

export function CryptoTable({ assets }: CryptoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assets.map((asset) => (
            <tr key={asset.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={asset.image} alt={asset.name} className="w-8 h-8 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{asset.name}</div>
                    <div className="text-gray-500 text-sm">{asset.symbol.toUpperCase()}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                <div className="text-gray-900 font-medium">{formatPrice(asset.current_price)}</div>
              </td>
              <td className="px-6 py-4 text-right whitespace-nowrap">
                <div className={`flex items-center justify-end font-medium ${
                  asset.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {asset.price_change_percentage_24h >= 0 ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {formatPercentage(Math.abs(asset.price_change_percentage_24h))}
                </div>
              </td>
              <td className="px-6 py-4 text-right whitespace-nowrap text-gray-900">
                {formatMarketCap(asset.market_cap)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}