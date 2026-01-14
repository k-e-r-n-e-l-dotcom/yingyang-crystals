import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-purple-600 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">SERVICES</a>
            <a href="#shop" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">CRYSTAL SHOP</a>
            <a href="#contact" className="px-6 py-2 bg-amber-500/10 border border-amber-500/50 text-amber-400 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-amber-400">Services</a>
            <a href="#shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-amber-400">Shop</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-amber-400 font-bold">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}