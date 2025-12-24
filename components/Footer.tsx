
import React from 'react';
import { Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold tracking-widest gold-gradient mb-6 block uppercase">
              {BUSINESS_INFO.name}
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The leading luxury jewelry store in Rivers State. Delivering excellence, authenticity, and bespoke craftsmanship since our inception.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/deluxe_jewelry_001?igsh=MTBlN2xsajZ2cDRtaQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 transform"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1JeonL3Gih/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 transform"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@deluxe_jewelry_001?_r=1&_t=ZS-92UAclvx0qN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 transform"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-8">Collections</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#collections" className="text-gray-500 hover:text-white transition-colors">Gold Chains & Necklaces</a></li>
              <li><a href="#collections" className="text-gray-500 hover:text-white transition-colors">Diamond Rings & Earrings</a></li>
              <li><a href="#collections" className="text-gray-500 hover:text-white transition-colors">Luxury Watch Inventory</a></li>
              <li><a href="#collections" className="text-gray-500 hover:text-white transition-colors">Custom Jewelry Design</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-8">Trust & Safety</h5>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-[#d4af37]" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Certified Authentic</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                All our gold is tested and certified. Our diamond selection features GIA and VVS graded stones exclusively.
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-8">Quick Contact</h5>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-[#d4af37] font-bold block mb-2">{BUSINESS_INFO.phone}</a>
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">In-Store Pickup Available</span>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Designed for Excellence.
          </p>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Shipping & Returns</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
