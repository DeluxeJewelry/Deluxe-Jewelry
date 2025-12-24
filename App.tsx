
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JewelryConcierge from './components/JewelryConcierge';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen selection:bg-[#C5A059] selection:text-black">
      <Navbar />
      <Hero />
      
      {/* Refined Trust Bar */}
      <div className="bg-[#0A0A0A] py-12 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-20 mx-10">
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold">Physical Showroom D-Line</span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-bold">GIA Certified Diamonds</span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold">Secure Global Logistics</span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-bold">Authentic 18k-24k Bullion</span>
            </div>
          ))}
        </div>
      </div>

      <Collections />
      <About />
      
      {/* Editorial CTA */}
      <section className="py-48 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573408302185-91ff8899bb16?auto=format&fit=crop&q=80&w