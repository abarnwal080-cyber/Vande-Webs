import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/salonData';
import { Star, CheckCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto sliding carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-[#FDEBF3]/60 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#FF2E88]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 shadow-sm text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>Words of Love</span>
          </div>

          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight mb-3">
            Customer Feedback & Reviews
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            ⭐ 5.0 out of 5 stars — Highly rated for clean tattoo work, high-quality nail extensions, and professional bridal services in the Maharajganj area.
          </p>
        </div>

        {/* Carousel & Grid View */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/90 backdrop-blur-md rounded-[28px] p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl">
            <Quote className="w-12 h-12 text-[#FF2E88]/15 absolute top-6 right-8 pointer-events-none" />

            {/* Active Testimonial Card */}
            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-neutral-500">5.0 / 5.0</span>
              </div>

              {/* Review Text */}
              <p className="font-serif-elegant text-lg sm:text-xl md:text-2xl text-[#2B0B3F] italic leading-relaxed mb-8">
                "{TESTIMONIALS[currentIndex].comment}"
              </p>

              {/* Client Info Lockup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF2E88] to-[#D4AF37] flex items-center justify-center text-white font-bold text-base shadow-md">
                    {TESTIMONIALS[currentIndex].avatarText}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-[#2B0B3F]">
                        {TESTIMONIALS[currentIndex].name}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>Verified Client</span>
                      </span>
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      {TESTIMONIALS[currentIndex].service} · {TESTIMONIALS[currentIndex].location}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 sm:text-right">
                  {TESTIMONIALS[currentIndex].date}
                </div>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Go to review ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === dotIdx
                        ? 'w-8 bg-gradient-to-r from-[#FF2E88] to-[#D4AF37]'
                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="p-2.5 rounded-full bg-[#FFF7F3] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/20 text-[#2B0B3F] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="p-2.5 rounded-full bg-[#FFF7F3] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/20 text-[#2B0B3F] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
