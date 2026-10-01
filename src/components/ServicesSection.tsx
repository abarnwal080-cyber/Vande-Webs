import React from 'react';
import { SERVICES } from '../data/salonData';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onOpenServiceSubpage: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenServiceSubpage,
}) => {
  const getServiceHighlights = (id: string) => {
    switch (id) {
      case 'bridal-makeup':
        return 'Specialized bridal makeovers, engagement looks, HD airbrush artistry & royal party styling';
      case 'nails-and-tattoos':
        return 'Professional nail art, high-quality nail extensions, and clean permanent or temporary tattoos';
      case 'hair-care':
        return 'Haircuts, styling, global coloring, keratin smooth therapy, hair botox & luxury spa';
      case 'skin-care':
        return 'Hydrafacial deep cleansing, clinical peels, anti-aging, acne treatment & regular grooming';
      default:
        return 'Premium parlour treatments by certified artists in Maharajganj';
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FFF7F3] relative overflow-hidden">
      {/* Decorative background ambient glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF2E88]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 shadow-sm text-xs font-semibold text-[#FF2E88] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Beauty Solutions</span>
          </div>

          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight mb-3">
            Our Premium Services
          </h2>

          <p className="font-medium text-sm sm:text-base text-[#C2185B] tracking-wide">
            Bridal Makeup · Nails & Tattoos · Hair & Skincare Specialist
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl mx-auto font-normal">
            Choose a service category below to view complete treatment packages, procedures, photos, and direct booking details.
          </p>
        </div>

        {/* 4 Dedicated Service Cards on the Homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((cat: ServiceCategory) => {
            const representativeImg = cat.images[0];
            const highlights = getServiceHighlights(cat.id);

            return (
              <div
                key={cat.id}
                onClick={() => onOpenServiceSubpage(cat.id)}
                className="group relative rounded-[28px] bg-white border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2 cursor-pointer"
              >
                {/* 1. Ek Representative Image */}
                <div className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={representativeImg}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#2B0B3F] shadow-md border border-[#D4AF37]/50 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF2E88]" />
                    <span>Specialist Service</span>
                  </div>
                </div>

                {/* 2. Uske Niche Us Service Ka Naam & Details */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-elegant text-2xl font-bold text-[#2B0B3F] group-hover:text-[#FF2E88] transition-colors leading-snug mb-2">
                      {cat.hindiTitle}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {highlights}
                    </p>
                  </div>

                  {/* 3. Tap Here to Know More Button */}
                  <div className="pt-4 border-t border-neutral-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenServiceSubpage(cat.id);
                      }}
                      className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7] shadow-md shadow-[#FF2E88]/25 group-hover:shadow-lg group-hover:shadow-[#FF2E88]/40 group-hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer animate-shimmer"
                    >
                      <span>Tap here to know more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
