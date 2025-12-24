
import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-sm gold-gradient uppercase tracking-[0.3em] font-bold mb-4 block">Visit the Boutique</span>
            <h2 className="text-4xl md:text-6xl text-white font-serif mb-12">Connect With Luxury</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                  <MapPin size={24} className="text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-2">Our Address</h4>
                  <p className="text-gray-400 max-w-xs">{BUSINESS_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`}
                    className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-widest text-white hover:gold-gradient font-bold"
                  >
                    <Navigation size={12} /> Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                  <Phone size={24} className="text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-2">Phone Inquiries</h4>
                  <p className="text-gray-400">{BUSINESS_INFO.phone}</p>
                  <p className="text-[10px] text-gray-500 uppercase mt-1">Direct Call & WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                  <Clock size={24} className="text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-xl mb-2">Opening Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 9:00 AM - 5:30 PM</p>
                  <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest block mt-1">{BUSINESS_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[600px] w-full relative">
            <div className="absolute inset-0 bg-[#111] border border-white/10 overflow-hidden">
               {/* Simplified UI for Map - normally an iframe but keeping it clean for prompt */}
               <div className="w-full h-full flex flex-col items-center justify-center text-center p-12">
                 <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                   <MapPin size={40} className="text-[#d4af37]" />
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-4">Port Harcourt Showroom</h3>
                 <p className="text-gray-400 mb-8 max-w-sm">
                   Located in the exclusive D-Line district, our showroom offers a private viewing experience. 
                   Visit us for authentic gold assessments and custom orders.
                 </p>
                 <a 
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                   className="gold-bg text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs"
                 >
                   Open In Google Maps
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
