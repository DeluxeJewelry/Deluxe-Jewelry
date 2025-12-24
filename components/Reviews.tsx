
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="flex gap-1 text-[#d4af37]">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#d4af37" />)}
            </div>
            <span className="text-white font-bold">{BUSINESS_INFO.rating}.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-serif mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-[10px]">
            Verified Physical Store Reviews from Port Harcourt Residents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#111] p-10 border border-white/5 flex flex-col relative">
              <Quote className="absolute top-8 right-8 text-[#d4af37]/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#d4af37" className="text-[#d4af37]" />)}
              </div>
              <p className="text-gray-300 italic mb-8 flex-1 leading-relaxed">"{t.content}"</p>
              <div>
                <h5 className="text-white font-serif text-lg">{t.name}</h5>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{t.date} · Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Deluxe+Jewelry+Port+Harcourt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-white hover:border-white transition-all"
          >
            View All 8 Google Reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
