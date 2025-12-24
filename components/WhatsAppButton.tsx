
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace(/\s/g, '').replace('+', '')}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-10 z-40 p-4 border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl hover:bg-black/60 transition-all flex items-center justify-center group"
      aria-label="Direct Showroom Chat"
    >
      <MessageCircle className="text-[#25D366] group-hover:scale-110 transition-transform" size={20} />
      <span className="absolute right-full mr-6 bg-black border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.4em] px-4 py-2 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none">
        Showroom WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
