import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { MapPin, Phone, Instagram, User, Clock, Calendar, MessageCircle, Navigation } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Pooja ji! I want to visit Pooja Makeover and Salon in Maharajganj and would like to inquire about appointments.`
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#FFF7F3] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF2E88]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 shadow-sm text-xs font-semibold text-[#FF2E88] uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Maharajganj</span>
          </div>

          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight mb-3">
            Contact & Location
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Easily accessible at Bank Chowk, Chetnapuri near Punjab National Bank in Maharajganj. Open 7 days a week: 10:30 AM to 7:00 PM.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FF2E88]/20 to-[#FF2E88]/10 text-[#FF2E88] flex items-center justify-center shrink-0 mt-1 border border-[#FF2E88]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Address</div>
                  <p className="text-sm sm:text-base font-semibold text-[#2B0B3F] mt-0.5 leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.locationDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF2E88] hover:underline mt-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/20 to-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-1 border border-[#D4AF37]/30">
                  <Phone className="w-5 h-5 text-[#B38728]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Phone / Call</div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-base sm:text-lg font-bold text-[#2B0B3F] hover:text-[#FF2E88] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                  <p className="text-xs text-neutral-500">Tap to call directly</p>
                </div>
              </div>

              {/* Owner */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#7B2FF7]/20 to-[#7B2FF7]/10 text-[#7B2FF7] flex items-center justify-center shrink-0 mt-1 border border-[#7B2FF7]/30">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Salon Name & Lead Artist</div>
                  <p className="text-sm sm:text-base font-bold text-[#2B0B3F] mt-0.5">
                    {BUSINESS_INFO.name} ({BUSINESS_INFO.owner})
                  </p>
                  <p className="text-xs text-neutral-500">5.0 ★ Rated Bridal, Nails & Tattoo Studio</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#E1306C]/20 to-[#FD1D1D]/10 text-[#E1306C] flex items-center justify-center shrink-0 mt-1 border border-[#E1306C]/30">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Instagram</div>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#2B0B3F] hover:text-[#FF2E88] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Opening Hours</div>
                  <p className="text-sm sm:text-base font-semibold text-[#2B0B3F] mt-0.5">
                    {BUSINESS_INFO.timings}
                  </p>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">Open all 7 days of the week</p>
                </div>
              </div>

            </div>

            {/* Direct CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#FF2E88] to-[#C2185B] shadow-lg shadow-[#FF2E88]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-sm font-bold text-[#2B0B3F] bg-gradient-to-r from-[#D4AF37] via-[#FFF3C4] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Luxury Gold Border */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-[28px] overflow-hidden p-2 bg-gradient-to-tr from-[#D4AF37]/50 via-white to-[#FF2E88]/30 border border-[#D4AF37]/40 shadow-xl flex-1 min-h-[420px]">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-neutral-100 min-h-[400px]">
                <iframe
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '440px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Pooja Makeover and Salon Maharajganj Location"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay location pin badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#D4AF37]/50 shadow-md flex items-center gap-2 text-xs font-bold text-[#2B0B3F]">
                <MapPin className="w-4 h-4 text-[#FF2E88]" />
                <span>Maharajganj, Siwan - 841238</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
