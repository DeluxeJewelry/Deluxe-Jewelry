
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'The Craft', href: '#about' },
    { name: 'Concierge', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col group cursor-pointer">
          <a href="#home" className="text-xl font-serif font-bold tracking-[0.2em] gold-gradient transition-all group-hover:tracking-[0.25em]">
            {BUSINESS_INFO.name}
          </a>
          <span className="text-[9px] text-gray-500 tracking-[0.5em] uppercase font-medium">Port Harcourt Boutique</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold tracking-[0.4em] text-gray-400 hover:text-white transition-all uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-8 py-3 border border-white/10 text-white text-[10px] font-bold rounded-none hover:bg-white hover:text-black transition-all uppercase tracking-[0.3em]"
          >
            <Phone size={12} className="text-[#C5A059]" />
            Request Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-6">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-all duration-700 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-serif text-white hover:gold-gradient transition-all tracking-tight"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 flex flex-col items-center gap-4">
             <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="gold-bg text-black px-12 py-5 font-bold uppercase text-xs tracking-widest"
            >
              Call Showroom
            </a>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase">Open Until 5:30 PM</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
