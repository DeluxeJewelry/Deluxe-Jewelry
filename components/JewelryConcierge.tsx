
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, User, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO } from '../constants';

const JewelryConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    {role: 'model', text: `Good day. I am the ${BUSINESS_INFO.name} concierge. How may I facilitate your inquiry into our exclusive collections or bespoke commissions?`}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a high-end luxury jewelry advisor for "${BUSINESS_INFO.name}". 
          Your tone is formal, professional, and very helpful. Use terms like "commission", "horology", "brilliance", "investment-grade". 
          Store location: ${BUSINESS_INFO.address}. 
          Always emphasize the exclusivity and physical presence in Port Harcourt.`,
          temperature: 0.6,
        },
      });

      setMessages(prev => [...prev, {role: 'model', text: response.text || "I apologize, my connection is momentarily interrupted. Please contact our showroom directly."}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'model', text: "Service interrupted. Please reach us at " + BUSINESS_INFO.phone}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-5 rounded-full gold-bg shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:scale-105 transition-all flex items-center gap-3 group ${isOpen ? 'opacity-0 scale-90' : 'opacity-100'}`}
      >
        <Sparkles className="text-black" size={20} />
        <span className="text-black font-bold uppercase text-[9px] tracking-[0.4em] hidden lg:block">Digital Concierge</span>
      </button>

      <div className={`fixed bottom-8 right-8 z-50 w-[95vw] md:w-[450px] max-h-[70vh] h-[650px] bg-[#0A0A0A] border border-white/10 flex flex-col shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="p-8 bg-[#0D0D0D] border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-[#C5A059]/30">
              <ShieldCheck size={18} className="text-[#C5A059]" />
            </div>
            <div>
              <h5 className="text-white font-serif text-base tracking-wide uppercase">Private Advisor</h5>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Secure Connection</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className="text-[8px] uppercase tracking-[0.3em] text-gray-600 mb-2 px-1">
                {m.role === 'user' ? 'Client' : 'Concierge'}
              </span>
              <div className={`max-w-[85%] p-5 text-[11px] leading-relaxed tracking-wide ${
                m.role === 'user' ? 'bg-[#151515] text-white border border-white/10' : 'bg-white/5 text-gray-300 border-l-2 border-l-[#C5A059] italic'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="text-[9px] text-[#C5A059] uppercase tracking-[0.5em] animate-pulse">
                Composing Response...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-8 border-t border-white/5 bg-[#0D0D0D] flex gap-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Inquire about collections..."
            className="flex-1 bg-transparent border-b border-white/10 py-3 text-[11px] text-white focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-gray-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="p-4 bg-white text-black hover:bg-[#C5A059] transition-all disabled:opacity-20"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </>
  );
};

export default JewelryConcierge;
