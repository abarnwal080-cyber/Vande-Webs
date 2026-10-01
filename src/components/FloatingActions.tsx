import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollElements, setShowScrollElements] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowScrollElements(scrollPos > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Pooja ji! I visited Pooja Makeover and Salon's website and would like to know more about appointments.`
  );

  return (
    <>
      {/* Floating "Book a Demo" Button on the LEFT */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-40">
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7] shadow-2xl shadow-[#FF2E88]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/40 animate-shimmer"
          aria-label="Book a Demo"
        >
          <Calendar className="w-4 h-4 text-[#FFF3C4]" />
          <span>Book a Demo</span>
        </button>
      </div>

      {/* Floating Action Buttons (Back to Top + Official WhatsApp Icon on the RIGHT) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Back to top */}
        {showScrollElements && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-white/90 text-[#2B0B3F] hover:bg-white shadow-lg border border-[#D4AF37]/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ArrowUp className="w-5 h-5 text-[#FF2E88]" />
          </button>
        )}

        {/* Floating Official WhatsApp Button */}
        <a
          href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer border-2 border-white group relative hover:shadow-[#25D366]/40"
        >
          {/* Authentic WhatsApp SVG Logo */}
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.32 13.86 15.12 13.28 14.9 13.19C14.67 13.11 14.5 13.07 14.34 13.32C14.18 13.57 13.71 14.11 13.57 14.28C13.43 14.44 13.29 14.46 13.05 14.34C12.81 14.21 12.03 13.96 11.11 13.14C10.39 12.5 9.9 11.7 9.76 11.46C9.62 11.22 9.74 11.08 9.87 10.96C9.98 10.84 10.12 10.66 10.24 10.5C10.37 10.36 10.41 10.26 10.49 10.09C10.57 9.93 10.53 9.79 10.47 9.67C10.41 9.55 9.94 8.37 9.73 7.88C9.54 7.41 9.34 7.47 9.19 7.46C9.05 7.46 8.89 7.33 8.73 7.33H8.53Z" />
          </svg>
          <span className="absolute right-16 bg-[#2B0B3F] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};
