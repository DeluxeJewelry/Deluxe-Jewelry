
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import AIImage from './AIImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 border border-[#d4af37]/20 z-0 hidden md:block" />
            <div className="relative z-10">
              <AIImage 
                prompt="A master jeweler's hands working on intricate gold jewelry with specialized tools, set against a dark, luxurious background with soft studio lighting, emphasizing realism and high detail, macro photography, 8k resolution."
                alt="Our Craft" 
                className="w-full h-[600px] object-cover"
                fallbackUrl="https://images.unsplash.com/photo-1573408302185-91ff8899bb16?auto=format&fit=crop&q=80&w=1200"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#111] p-12 border border-white/5 hidden lg:block max-w-sm">
                <h4 className="text-2xl font-serif text-white mb-4">Certified Excellence</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every piece in our collection is rigorously tested for purity and authenticity. 
                  Our reputation in Rivers State is built on transparency.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <span className="text-sm gold-gradient uppercase tracking-[0.3em] font-bold">The Legacy</span>
            <h2 className="text-4xl md:text-6xl text-white font-serif leading-tight">
              A Passion for <br />
              <span className="italic">Authenticity & Artistry</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {BUSINESS_INFO.name} is built on trust, craftsmanship, and excellence. Serving the Port Harcourt community for years, we have established ourselves as the premier destination for those who value integrity as much as they value beauty.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Based in the heart of D-Line, our physical showroom is a sanctuary for lovers of fine jewelry. Whether you are investing in pure gold for the future or selecting a diamond piece to mark a milestone, our experts ensure your experience is nothing short of extraordinary.
            </p>
            
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div>
                <span className="text-4xl font-serif text-white block mb-2">5.0</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Google Verified Rating</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-white block mb-2">8+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Years of Integrity</span>
              </div>
            </div>

            <div className="pt-8">
               <a href="#contact" className="inline-block text-xs uppercase tracking-[0.4em] font-bold border-b-2 border-[#d4af37] pb-2 hover:text-[#d4af37] transition-all">
                Our Physical Location &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
