
import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background with subtle zoom */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Jewelry Storefront"
          className="w-full h-full object-cover scale-105 animate-[zoom-out_20s_ease-out_forwards]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[1400px] w-full">
        <div className="inline-flex items-center gap-4 mb-10 px-4 py-2 border border-white/10 backdrop-blur-sm animate-fade-in-up">
          <div className="flex gap-1 text-[#C5A059]">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#C5A059" />)}
          </div>
          <span className="text-[9px] font-bold tracking-[0.5em] text-white uppercase">
            A 5.0 Rated Experience
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-serif text-white mb-10 leading-[0.9] tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Exquisite<br />
          <span className="gold-gradient italic">Craftsmanship</span>
        </h1>

        <p className="text-sm md:text-base text-gray-300 mb-14 max-w-xl mx-auto leading-relaxed tracking-wide font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Discover the definitive destination for investment-grade gold and bespoke horological masterpieces in Port Harcourt.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#collections" 
            className="min-w-[240px] py-6 gold-bg text-black font-bold uppercase text-[10px] tracking-[0.4em] transition-all hover:brightness-110"
          >
            View Collections
          </a>
          <a 
            href="#contact" 
            className="min-w-[240px] py-6 border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Sidebar Labels - High Fashion Style */}
      <div className="absolute left-12 bottom-12 z-20 hidden lg:block">
        <div className="flex items-center gap-4 rotate-[-90deg] origin-left translate-y-full">
          <span className="text-[9px] uppercase tracking-[0.6em] text-white/30 whitespace-nowrap font-bold">Nigeria's Finest Diamonds</span>
          <div className="w-12 h-px bg-white/20" />
        </div>
      </div>

      <style>{`
        @keyframes zoom-out {
          from { transform: scale(1.15); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
