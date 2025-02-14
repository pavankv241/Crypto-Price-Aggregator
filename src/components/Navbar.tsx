import React from 'react';
import { Shield, Github } from 'lucide-react';
import { PriceRateLogo } from './PriceRateLogo';

export function Navbar() {
  return (
    <nav className="bg-black/40 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <PriceRateLogo />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Price Rate
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/audit"
              className="flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Audit
            </a>
            <a
              href="https://github.com/pavankv241"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Smart Contract Security
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}