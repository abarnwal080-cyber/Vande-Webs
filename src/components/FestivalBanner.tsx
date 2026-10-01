import React, { useState } from 'react';
import { Sparkles, X, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FestivalBannerProps {
  onOpenBooking: () => void;
}

export const FestivalBanner: React.FC<FestivalBannerProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7] text-white py-2.5 px-4 text-xs sm:text-sm font-medium shadow-md z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
          <Sparkles className="w-4 h-4 text-[#FFF3C4] shrink-0 animate-pulse" />
          <p className="truncate">
            <span className="font-bold text-[#FFF3C4] tracking-wide uppercase text-[11px] sm:text-xs mr-2">
              Festive Season Special:
            </span>
            <span>Special Offers on Bridal Makeover, Nails & Tattoos in Maharajganj!</span>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 text-white rounded-full text-xs font-semibold backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          >
            Claim Offer
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1 text-xs text-[#FFF3C4] hover:underline"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {BUSINESS_INFO.phone}
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="p-1 hover:bg-white/20 rounded-full transition-colors text-white/80 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
