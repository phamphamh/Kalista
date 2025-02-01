import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Lock, Gauge, Settings, TrendingUp, Rocket } from 'lucide-react';

const generateActivity = () => {
  const actions = ['minted', 'bought', 'launched'];
  const amounts = ['10M', '50M', '100M', '1B', '500M'];
  const names = ['RetroDegen', 'MoonSynth', 'CyberWhale', 'NeonHands', 'VaporKing'];
  const tokens = ['NEONPEPE', 'CYBERDOGE', 'SYNTHX', 'RETRO', 'VAPOR'];
  
  return {
    user: names[Math.floor(Math.random() * names.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    token: tokens[Math.floor(Math.random() * tokens.length)],
  };
};

const generateRandomPrice = () => {
  return (Math.random() * 0.0001).toFixed(8);
};

const generateRandomMarketCap = () => {
  const caps = ['$1.2M', '$950K', '$2.3M', '$750K', '$1.5M'];
  return caps[Math.floor(Math.random() * caps.length)];
};

const generateRandomChange = () => {
  return `+${(Math.random() * 150).toFixed(1)}%`;
};

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [trendingTokens, setTrendingTokens] = useState([
    {
      name: 'NEON PEPE',
      marketCap: '$2.3M',
      price: '$0.000034',
      change: '+124.5%',
      score: 98,
    },
    {
      name: 'CYBER X',
      marketCap: '$1.1M',
      price: '$0.000012',
      change: '+89.2%',
      score: 92,
    },
    {
      name: 'SYNTH INU',
      marketCap: '$950K',
      price: '$0.000008',
      change: '+45.7%',
      score: 87,
    },
  ]);

  useEffect(() => {
    const newToken = location.state?.formData;
    if (newToken && location.state?.from === 'review') {
      const tokenData = {
        name: newToken.name.toUpperCase(),
        marketCap: generateRandomMarketCap(),
        price: `$${generateRandomPrice()}`,
        change: generateRandomChange(),
        score: 100, // New tokens start with max trend score
        isNew: true,
      };

      setTrendingTokens(prev => [tokenData, ...prev]);

      // Add token creation activity to feed
      const newActivity = {
        user: 'CryptoWizard',
        action: 'launched',
        amount: Number(newToken.supply).toLocaleString(),
        token: newToken.symbol,
      };
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);

      // Clear location state immediately by replacing the current history entry
      navigate('/', { replace: true });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    setActivities(Array(5).fill(null).map(generateActivity));
    const interval = setInterval(() => {
      setActivities(prev => [generateActivity(), ...prev.slice(0, 4)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black scanline relative">
      <div className="cyber-grid absolute inset-0"></div>
      
      {/* Activity Feed Banner */}
      <div className="bg-black/80 border-b border-[#00ff66]/30 overflow-hidden">
        <div className="relative flex items-center h-12">
          <div className="animate-scroll flex items-center space-x-8 whitespace-nowrap">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="text-[#00ff66] px-4 py-1 flex items-center space-x-2 font-cyber"
              >
                <span className="text-[#00ff66]">💾 @{activity.user}</span>
                <span>{activity.action}</span>
                <span className="neon-text">{activity.amount}</span>
                <span className="text-[#00ff66]">${activity.token}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-cyber font-bold neon-text mb-6 glitch" data-text="🚀 The #1 Meme Coin Launchpad on Alephium">
          🚀 The #1 Meme Coin Launchpad on Alephium
        </h1>
        <p className="text-2xl text-[#00ff66] font-cyber mb-12">
          No Code, No Limits – Just Meme It!
        </p>
        <Link
          to="/create"
          className="cyber-button inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl"
        >
          <Rocket className="h-6 w-6 mr-2" />
          ⚡ LAUNCH YOUR MEME COIN NOW
        </Link>
      </div>

      {/* Trending Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 neon-border">
          <h2 className="text-3xl font-cyber font-bold text-[#00ff66] mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3" />
            🔥 Trending Right Now
          </h2>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-[#00ff66]/20">
              <thead>
                <tr className="text-[#00ff66]/60 font-cyber">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Token</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Market Cap</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">24h</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Score</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00ff66]/20">
                {trendingTokens.map((token, i) => (
                  <tr
                    key={i}
                    className={`group hover:bg-[#00ff66]/5 transition-all duration-300 ${
                      token.isNew ? 'animate-fadeIn' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#00ff66]/20 flex items-center justify-center text-[#00ff66] font-cyber font-bold neon-border">
                          {token.name.substring(0, 2)}
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-[#00ff66] font-cyber">
                            {token.name}
                            {token.isNew && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00ff66]/20 text-[#00ff66] neon-border">
                                NEW
                              </span>
                            )}
                          </div>
                          <div className="text-[#00ff66]/60 text-sm">$ALPH</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#00ff66] font-cyber">{token.marketCap}</td>
                    <td className="px-6 py-4 text-[#00ff66] font-cyber">{token.price}</td>
                    <td className="px-6 py-4">
                      <span className="text-[#00ff66] font-cyber">{token.change}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-[#00ff66] font-cyber">
                        <Zap className="h-4 w-4 mr-1" />
                        {token.score}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="cyber-button px-4 py-2 rounded-lg text-sm font-medium">
                        Buy Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature
          icon={<Zap className="h-6 w-6" />}
          title="Sharding Technology"
          description="Always fast, never congested"
        />
        <Feature
          icon={<Gauge className="h-6 w-6" />}
          title="Ultra-Low Fees"
          description="More gains, fewer costs"
        />
        <Feature
          icon={<Lock className="h-6 w-6" />}
          title="Auto-Liquidity Lock"
          description="No more rug pulls"
        />
        <Feature
          icon={<Settings className="h-6 w-6" />}
          title="Customizable Supply & Burn"
          description="Your token, your rules"
        />
      </div>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="relative p-6 bg-black/80 backdrop-blur-sm rounded-xl border border-[#00ff66]/30 hover:border-[#00ff66] transition-all duration-300 group neon-border">
      <div className="text-[#00ff66] mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-[#00ff66] mb-2 font-cyber">{title}</h3>
      <p className="text-[#00ff66]/60 font-cyber">{description}</p>
    </div>
  );
}