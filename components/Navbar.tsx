
import React, { useState } from 'react';
import { Search, Home, TrendingUp, Compass, Menu, X, MonitorPlay } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', icon: Home, hash: '#/' },
    { name: 'Search', icon: Search, hash: '#/search' },
    { name: 'Trending', icon: TrendingUp, hash: '#/trending' },
    { name: 'Indo Dub', icon: Compass, hash: '#/dub' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
            <MonitorPlay size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            DZECK<span className="text-blue-500">STREAM</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium text-sm"
            >
              <link.icon size={18} />
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-slate-300 hover:text-white py-2 text-lg font-medium"
            >
              <link.icon size={22} />
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
