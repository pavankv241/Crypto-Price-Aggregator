import React from 'react';
import { BarChart2 } from 'lucide-react';

export function PriceRateLogo() {
  return (
    <div className="relative">
      <BarChart2 className="w-8 h-8 text-blue-500" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
    </div>
  );
}