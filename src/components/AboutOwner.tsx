import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { Award, CheckCircle2, Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';

interface AboutOwnerProps {
  onOpenBooking: () => void;
}

export const AboutOwner: React.FC<AboutOwnerProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  const features = [
    { title: "Specialized Bridal Makeovers", desc: "Expert in HD & airbrush bridal looks, engagement styling and royal party glam" },
    { title: "Clean & Sterile Tattoo Work", desc: "Permanent and temporary tattoos with 100% hygienic fresh needles & skin-safe inks" },
    { title: "High-Quality Nail Extensions", desc: "Luxury acrylics, gel nails, 3D stone art, chrome & bespoke bridal nail artistry" },
    { title: "Hair & Skincare Excellence", desc: "Hydrafacial, clinical skin peels, haircuts, keratin therapy, and regular grooming packages" }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Pooja ji! I visited the Pooja Makeover and Salon website and would like to inquire about booking an appointment.`
  );

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#FFF7F3] via-white to-[#FFF7F3] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF2E88]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Owner Photo with Gold Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gold decorative border offset */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#D4AF37] via-[#FF2E88] to-[#7B2FF7] opacity-30 blur-lg" />
              
              <div className="relative rounded-[28px] p-2 bg-gradient-to-b from-[#D4AF37]/50 via-white to-[#D4AF37]/30 shadow-2xl border border-[#D4AF37]/40">
                <div className="relative rounded-[22px] overflow-hidden aspect-[3/4] bg-neutral-100 shadow-inner">
                  {!imageError ? (
                    <img
                      src={BUSINESS_INFO.ownerPhoto}
                      alt="Pooja - Founder & Lead Artist of Pooja Makeover and Salon"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#2B0B3F] to-[#7B2FF7] text-white text-center">
                      <Sparkles className="w-16 h-16 text-[#D4AF37] mb-4 animate-pulse" />
                      <span className="font-script-accent text-4xl text-[#D4AF37]">Pooja</span>
                      <p className="text-xs text-white/80 mt-2 font-medium">Founder & Lead Artist</p>
                      <p className="text-[11px] text-[#FFF3C4] mt-1">Pooja Makeover and Salon, Maharajganj</p>
                    </div>
                  )}

                  {/* Scrim overlay at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B0B3F]/90 via-[#2B0B3F]/30 to-transparent p-5 text-white">
                    <div className="flex items-center gap-1.5 text-[#FFF3C4] text-xs font-semibold uppercase tracking-wider mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Lead Artist & Founder</span>
                    </div>
                    <div className="text-xl font-bold font-serif-elegant">Pooja</div>
                    <div className="text-xs text-white/80">Pooja Makeover and Salon · Maharajganj, Siwan</div>
                  </div>
                </div>
              </div>

              {/* Floating Award Accent Tag */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#D4AF37]/50 shadow-xl flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#E6CA65] flex items-center justify-center text-[#2B0B3F] shadow-sm">
                  <Award className="w-5 h-5 text-[#2B0B3F]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2B0B3F]">5.0 ★ Rated Studio</div>
                  <div className="text-[11px] text-[#2B0B3F]/70">Maharajganj, Siwan (Bihar)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Owner Story & Credentials */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FF2E88] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artistry, Nails & Tattoos</span>
            </div>

            <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight leading-tight mb-6">
              Welcome to Pooja Makeover <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7]">
                and Salon — Maharajganj
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 font-normal">
              Located near Punjab National Bank at Bank Chowk, Chetnapuri, Sihauta Bazar, <strong>Pooja Makeover and Salon</strong> is Maharajganj's top-rated 5.0-star destination for specialized bridal transformations, hygienic custom tattoo artistry, high-quality nail extensions, and complete hair & skincare.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              We are celebrated for our clean, sterile tattoo studio procedures, designer acrylic nail extensions, and bespoke bridal makeovers that highlight your natural beauty with long-lasting royal glam.
            </p>

            {/* Feature Chips / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF2E88] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#2B0B3F]">{feat.title}</h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions: Book / Call / WhatsApp */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF2E88] to-[#7B2FF7] shadow-lg shadow-[#FF2E88]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-shimmer"
              >
                Book with Pooja
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#2B0B3F] bg-white border border-[#D4AF37]/60 hover:border-[#D4AF37] shadow-sm hover:bg-[#FFF7F3] transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF2E88]" />
                <span>Call: {BUSINESS_INFO.formattedPhone}</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
