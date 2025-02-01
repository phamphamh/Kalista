import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black/80 border-b border-[#00ff66]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Zap className="h-8 w-8 text-[#00ff66] transition-all duration-300 group-hover:scale-110" />
              <span className="text-xl font-cyber font-bold text-[#00ff66] neon-text">Kalista.io</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/create"
              className="cyber-button inline-flex items-center px-4 py-2 text-sm font-medium rounded-md"
            >
              Create Token
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}