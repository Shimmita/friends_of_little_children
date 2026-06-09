"tsx"
import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact Stories', href: '#stories' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
              <Heart className="w-6 h-6 fill-emerald-700" />
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900 tracking-tight block leading-none">FRIENDS OF THE</span>
              <span className="font-semibold text-xs tracking-wider text-emerald-700 uppercase">Little Angel</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-emerald-700/10 hover:shadow-emerald-700/20">
              Partner With Us
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-gray-50 rounded-xl transition-all">
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl transition-all">
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}