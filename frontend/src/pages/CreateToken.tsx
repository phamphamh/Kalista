import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, Percent, Lock, Zap } from 'lucide-react';

export default function CreateToken() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '1000000',
    burnRate: '0',
    lockDuration: '6',
    smartShard: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/review', { state: { formData } });
  };

  return (
    <div className="min-h-screen bg-black scanline relative">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-black/80 backdrop-blur-sm shadow-xl rounded-lg p-8 neon-border">
          <h1 className="text-3xl font-cyber font-bold text-[#00ff66] text-center mb-8 neon-text">
            Create Your Meme Coin in Seconds
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-cyber font-medium text-[#00ff66]">
                Token Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-[#00ff66] bg-black/50 text-[#00ff66] shadow-sm focus:border-[#00ff66] focus:ring focus:ring-[#00ff66]/20 font-cyber"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-cyber font-medium text-[#00ff66]">
                Token Symbol
              </label>
              <input
                type="text"
                required
                maxLength={5}
                className="mt-1 block w-full rounded-md border-[#00ff66] bg-black/50 text-[#00ff66] shadow-sm focus:border-[#00ff66] focus:ring focus:ring-[#00ff66]/20 font-cyber"
                value={formData.symbol}
                onChange={(e) =>
                  setFormData({ ...formData, symbol: e.target.value.toUpperCase() })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-cyber font-medium text-[#00ff66]">
                Total Supply
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Coins className="h-5 w-5 text-[#00ff66]" />
                </div>
                <input
                  type="number"
                  required
                  min="1000"
                  className="block w-full pl-10 rounded-md border-[#00ff66] bg-black/50 text-[#00ff66] shadow-sm focus:border-[#00ff66] focus:ring focus:ring-[#00ff66]/20 font-cyber"
                  value={formData.supply}
                  onChange={(e) =>
                    setFormData({ ...formData, supply: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-cyber font-medium text-[#00ff66]">
                Auto-Burn Rate (%)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Percent className="h-5 w-5 text-[#00ff66]" />
                </div>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="block w-full pl-10 rounded-md border-[#00ff66] bg-black/50 text-[#00ff66] shadow-sm focus:border-[#00ff66] focus:ring focus:ring-[#00ff66]/20 font-cyber"
                  value={formData.burnRate}
                  onChange={(e) =>
                    setFormData({ ...formData, burnRate: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-cyber font-medium text-[#00ff66]">
                Liquidity Lock Duration (months)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#00ff66]" />
                </div>
                <select
                  className="block w-full pl-10 rounded-md border-[#00ff66] bg-black/50 text-[#00ff66] shadow-sm focus:border-[#00ff66] focus:ring focus:ring-[#00ff66]/20 font-cyber"
                  value={formData.lockDuration}
                  onChange={(e) =>
                    setFormData({ ...formData, lockDuration: e.target.value })
                  }
                >
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={formData.smartShard}
                  onChange={(e) =>
                    setFormData({ ...formData, smartShard: e.target.checked })
                  }
                  className="h-4 w-4 text-[#00ff66] focus:ring-[#00ff66] border-[#00ff66] rounded bg-black/50"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-cyber font-medium text-[#00ff66]">
                  Enable Smart Shard Optimization
                </label>
                <p className="text-[#00ff66]/60 font-cyber">
                  Automatically optimize token distribution across shards for better
                  performance
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="cyber-button w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium"
              >
                <Zap className="h-5 w-5 mr-2" />
                Generate My Meme Coin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}