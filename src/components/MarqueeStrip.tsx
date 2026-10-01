import React from 'react';
import { TICKER_ITEMS } from '../data/salonData';
import { Sparkles } from 'lucide-react';

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="relative py-3.5 bg-gradient-to-r from-[#2B0B3F] via-[#3E105C] to-[#2B0B3F] border-y border-[#D4AF37]/40 overflow-hidden shadow-inner">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double the list for seamless continuous infinite scroll */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90">
            <span className="text-[#FFF3C4] font-semibold">{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};
