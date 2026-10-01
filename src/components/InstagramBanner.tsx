import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { Instagram, ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export const InstagramBanner: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Gradient Border Card */}
        <div className="relative rounded-[32px] p-[2px] bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-2xl overflow-hidden">
          <div className="rounded-[30px] bg-gradient-to-br from-[#2B0B3F] via-[#3B0E54] to-[#200530] text-white p-8 sm:p-14 relative overflow-hidden">
            
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2E88]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#FFF3C4] mb-4 backdrop-blur-md">
                  <Instagram className="w-3.5 h-3.5 text-[#FF2E88]" />
                  <span>Join Our 1,000+ Community</span>
                </div>

                <h3 className="font-serif-elegant text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                  Follow us on Instagram <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C4] via-[#D4AF37] to-[#FF2E88]">
                    {BUSINESS_INFO.instagramHandle}
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  Stay updated with daily bridal makeovers, clean tattoo artwork, luxury nail extensions, festive packages, and client feedback live from Maharajganj, Siwan.
                </p>
              </div>

              {/* Instagram CTA Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow {BUSINESS_INFO.instagramHandle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
