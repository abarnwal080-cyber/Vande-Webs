import React from 'react';
import { Sparkles, Calendar, ArrowRight, Award, MapPin, HeartHandshake, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* Background with vibrant mesh & subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7F3] via-[#FDEBF3] to-[#FFF7F3] -z-20" />
      
      {/* Decorative blurred gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF2E88]/15 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#7B2FF7]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Floating Sparkles & Dots */}
      <div className="absolute top-16 left-12 text-[#D4AF37] opacity-60 hidden sm:block animate-float">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-24 right-16 text-[#FF2E88] opacity-50 hidden sm:block animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-1/3 right-10 text-[#7B2FF7] opacity-40 hidden md:block animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D4AF37]/40 shadow-sm text-xs sm:text-sm font-semibold text-[#2B0B3F] mb-6 backdrop-blur-md">
              <span className="text-[#D4AF37]">⭐ 5.0 Rated</span>
              <span className="text-[#D4AF37]/60">|</span>
              <span className="text-[#FF2E88]">Bridal Makeup · Nails & Tattoos · Hair & Skincare</span>
            </div>

            {/* H1 Title */}
            <h1 className="font-serif-elegant text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2B0B3F] tracking-tight leading-[1.1] mb-6">
              Pooja Makeover <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7]">
                and Salon
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#2B0B3F]/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Maharajganj, Siwan's Premier Beauty Destination — Highly rated for clean tattoo work, high-quality nail extensions, and professional royal bridal services.
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7] shadow-xl shadow-[#FF2E88]/30 hover:shadow-[#FF2E88]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer animate-shimmer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#2B0B3F] bg-white/70 hover:bg-white border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-sm backdrop-blur-md transition-all duration-200"
              >
                <span>View All Services</span>
              </a>
            </div>

            {/* Quick Trust Strip */}
            <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-[#2B0B3F]/85">
              <div className="flex items-center gap-1.5">
                <span className="text-[#D4AF37]">⭐</span>
                <span>5.0 Star Rating</span>
              </div>
              <span className="text-[#D4AF37]/40 hidden xs:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Clean Tattoo Work</span>
              </div>
              <span className="text-[#D4AF37]/40 hidden xs:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#FF2E88]">💅</span>
                <span>Nail Extensions</span>
              </div>
              <span className="text-[#D4AF37]/40 hidden xs:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF2E88]" />
                <span>Maharajganj, Siwan</span>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier: Elegant Bridal Showcase with Glowing Border */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background gold glow ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-[#FF2E88]/20 to-[#7B2FF7]/20 rounded-3xl blur-2xl transform scale-105 -z-10" />

            <div className="relative w-full max-w-md rounded-[28px] p-2.5 bg-gradient-to-br from-[#D4AF37]/40 via-white/80 to-[#FF2E88]/30 shadow-2xl backdrop-blur-sm border border-[#D4AF37]/40">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-inner group">
                <img
                  src={BUSINESS_INFO.salonFrontPhoto}
                  alt="Pooja Makeover and Salon Front"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Scrim overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0B3F]/90 via-[#2B0B3F]/20 to-transparent" />

                {/* Floating badge top right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-md flex items-center gap-1 text-[11px] font-bold text-[#2B0B3F]">
                  <span className="text-yellow-500">★</span>
                  <span>5.0 Top Rated</span>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-script-accent text-2xl text-[#FFF3C4] block leading-none mb-1">
                    Pooja Makeover and Salon
                  </span>
                  <p className="text-sm font-semibold tracking-wide text-white/95">
                    Near PNB, Bank Chowk, Maharajganj
                  </p>
                  <p className="text-xs text-white/75 mt-0.5">
                    Open All 7 Days: 10:30 AM to 7:00 PM
                  </p>
                </div>
              </div>

              {/* Floating review/booking bubble */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4AF37]/40 shadow-xl hidden sm:flex items-center gap-3 max-w-[250px]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF2E88] to-[#D4AF37] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                  PM
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2B0B3F]">Pooja Makeover</div>
                  <div className="text-[11px] text-[#2B0B3F]/70">Maharajganj, Siwan</div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-[11px] text-[#FF2E88] font-semibold flex items-center gap-1 hover:underline mt-0.5"
                  >
                    <PhoneCall className="w-3 h-3" />
                    Call: {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Stats Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-gold-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
            <div className="font-serif-elegant text-3xl sm:text-4xl font-extrabold text-[#FF2E88] tabular-nums">
              5.0 ★
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#2B0B3F]/80 mt-1">
              Top Customer Rating
            </div>
          </div>

          <div className="glass-gold-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
            <div className="font-serif-elegant text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tabular-nums">
              3
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#2B0B3F]/80 mt-1">
              Prestigious Awards
            </div>
          </div>

          <div className="glass-gold-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
            <div className="font-serif-elegant text-3xl sm:text-4xl font-extrabold text-[#7B2FF7] tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#2B0B3F]/80 mt-1">
              Clean & Sterile Tattooing
            </div>
          </div>

          <div className="glass-gold-card rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
            <div className="font-serif-elegant text-3xl sm:text-4xl font-extrabold text-[#C2185B] tabular-nums">
              7 Days
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#2B0B3F]/80 mt-1">
              Open 10:30 AM – 7:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
