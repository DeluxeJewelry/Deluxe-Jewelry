
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import AIImage from './AIImage';

const Collections: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Gold', 'Diamond', 'Watches', 'Custom'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="collections" className="py-32 bg-[#050505] px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] gold-gradient uppercase tracking-[0.5em] font-bold mb-6 block">Curated Selection</span>
            <h2 className="text-5xl md:text-7xl text-white font-serif leading-tight">Masterpieces of <br/><span className="italic">The Season</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-12 border-b border-white/5 pb-4 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all relative pb-2 ${
                  filter === cat 
                  ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#C5A059]' 
                  : 'text-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#111]">
                {product.id === '4' ? (
                  <AIImage 
                    prompt="A stunning close-up of a custom 18k solid gold signature pendant, premium studio lighting, 8k resolution, minimalist black background."
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    fallbackUrl={product.image}
                  />
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">{product.category}</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-medium">LTD Edition</span>
                </div>
                <h3 className="text-2xl text-white font-serif mb-3 tracking-wide group-hover:gold-gradient transition-all">{product.name}</h3>
                <p className="text-gray-500 text-xs font-light leading-relaxed mb-6 line-clamp-1 max-w-[80%]">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-sm font-medium tracking-widest text-white/80">{product.price}</span>
                  <button className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white font-bold transition-all hover:gap-5">
                    Enquire <ArrowRight size={14} className="text-[#C5A059]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
