import React, { useEffect, useState } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { TokenSelector } from './components/TokenSelector';
import { SwapQuotes } from './components/SwapQuotes';
import { PoolCheck } from './components/PoolCheck';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { fetchCryptoAssets } from './utils/api';
import { getMockQuotes } from './utils/mock-data';
import type { CryptoAsset, CryptoState, SwapQuote, TokenPair } from './types/crypto';

function App() {
  const [state, setState] = useState<CryptoState>({
    assets: [],
    loading: true,
    error: null,
  });

  const [amount, setAmount] = useState<string>('1');
  const [tokens, setTokens] = useState<TokenPair>({
    fromToken: null,
    toToken: null,
  });
  const [quotes, setQuotes] = useState<SwapQuote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCryptoAssets();
        setState({ assets: data, loading: false, error: null });
      } catch (error) {
        setState({ assets: [], loading: false, error: 'Failed to fetch cryptocurrency data' });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (tokens.fromToken && tokens.toToken && amount) {
      const newQuotes = getMockQuotes(
        parseFloat(amount),
        tokens.fromToken.symbol,
        tokens.toToken.symbol
      );
      setQuotes(newQuotes);
    }
  }, [tokens.fromToken, tokens.toToken, amount]);

  const handleSwapTokens = () => {
    setTokens({
      fromToken: tokens.toToken,
      toToken: tokens.fromToken,
    });
  };

  if (state.loading) return <LoadingSpinner />;
  if (state.error) return <ErrorMessage message={state.error} />;

  return (
    <div className="min-h-screen bg-[#0a0b0d] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      
      <main className="max-w-lg mx-auto px-4 py-8">
        <div className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Swap Tokens</h1>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0.0"
                  min="0"
                />
                <div className="w-72">
                  <TokenSelector
                    label="From"
                    value={tokens.fromToken}
                    assets={state.assets}
                    onChange={(token) => setTokens({ ...tokens, fromToken: token })}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSwapTokens}
                className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <ArrowDownUp className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div>
              <div className="w-72 ml-auto">
                <TokenSelector
                  label="To"
                  value={tokens.toToken}
                  assets={state.assets}
                  onChange={(token) => setTokens({ ...tokens, toToken: token })}
                />
              </div>
            </div>
          </div>

          <PoolCheck tokens={tokens} amount={amount} />

          {tokens.fromToken && tokens.toToken && quotes.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-white mb-3">Market Prices</h2>
              <SwapQuotes
                quotes={quotes}
                amount={parseFloat(amount)}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;