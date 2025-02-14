import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { CryptoAsset } from '../types/crypto';

interface TokenSelectorProps {
  label: string;
  value: CryptoAsset | null;
  assets: CryptoAsset[];
  onChange: (token: CryptoAsset) => void;
}

export function TokenSelector({ label, value, assets, onChange }: TokenSelectorProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-left flex items-center justify-between hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            const dialog = document.getElementById(`${label}-dialog`);
            if (dialog) dialog.style.display = dialog.style.display === 'none' ? 'block' : 'none';
          }}
        >
          {value ? (
            <div className="flex items-center">
              <img src={value.image} alt={value.name} className="w-6 h-6 mr-2" />
              <span className="text-white">{value.symbol.toUpperCase()}</span>
            </div>
          ) : (
            <span className="text-gray-500">Select token</span>
          )}
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>

        <div
          id={`${label}-dialog`}
          className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hidden"
        >
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tokens..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="max-h-60 overflow-auto">
            {assets.map((token) => (
              <button
                key={token.id}
                className="w-full px-4 py-2 text-left hover:bg-gray-700/50 flex items-center"
                onClick={() => {
                  onChange(token);
                  const dialog = document.getElementById(`${label}-dialog`);
                  if (dialog) dialog.style.display = 'none';
                }}
              >
                <img src={token.image} alt={token.name} className="w-6 h-6 mr-2" />
                <div>
                  <div className="font-medium text-white">{token.symbol.toUpperCase()}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}