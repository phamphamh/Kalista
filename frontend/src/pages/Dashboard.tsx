import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, TrendingUp, Clock, Zap } from 'lucide-react';

export default function Dashboard() {
  const [filter, setFilter] = useState('most-traded');
  const location = useLocation();
  const [tokens, setTokens] = useState([
    {
      name: 'PepeALPH',
      symbol: 'PALPH',
      marketCap: '$2,345,678',
      burnRate: '2%',
      liquidity: 'Locked (12m)',
      trend: 98,
      change: '+15.4%',
    },
  ]);

  // Check for new token from state and add it to the list
  useEffect(() => {
    const newToken = location.state?.formData;
    if (newToken) {
      const tokenData = {
        name: newToken.name,
        symbol: newToken.symbol,
        marketCap: '$0', // Initial market cap
        burnRate: `${newToken.burnRate}%`,
        liquidity: `Locked (${newToken.lockDuration}m)`,
        trend: 100, // New tokens start with high trend score
        change: 'New', // New token indicator
      };

      setTokens(prevTokens => [tokenData, ...prevTokens]);
    }
  }, [location.state]);

  const filteredTokens = tokens.sort((a, b) => {
    if (filter === 'most-traded') {
      return b.trend - a.trend;
    }
    // For 'newest', keep the current order since new tokens are added to the start
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-bold text-gray-900">
            🔥 Trending Meme Coins on Alephium
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Discover and track the hottest meme coins on the Alephium blockchain
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('most-traded')}
            className={`px-4 py-2 rounded-md ${
              filter === 'most-traded'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <TrendingUp className="h-5 w-5 inline mr-2" />
            Most Traded
          </button>
          <button
            onClick={() => setFilter('newest')}
            className={`px-4 py-2 rounded-md ${
              filter === 'newest'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Clock className="h-5 w-5 inline mr-2" />
            Newest
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search tokens..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Token
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Market Cap
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      24h Change
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Burn Rate
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Liquidity
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Trend Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredTokens.map((token, i) => (
                    <tr key={i} className={i === 0 && token.change === 'New' ? 'bg-indigo-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {token.name}
                              {token.change === 'New' && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                  New
                                </span>
                              )}
                            </div>
                            <div className="text-gray-500">{token.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {token.marketCap}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={token.change === 'New' ? 'text-indigo-600' : 'text-green-600'}>
                          {token.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {token.burnRate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {token.liquidity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center text-indigo-600">
                          <Zap className="h-4 w-4 mr-1" />
                          {token.trend}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}