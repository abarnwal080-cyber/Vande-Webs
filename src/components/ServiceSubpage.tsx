import React, { useEffect } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/salonData';
import { ArrowLeft, Sparkles, ChevronRight } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceSubpageProps {
  serviceId: string;
  onBackToHome: () => void;
  onSwitchService: (serviceId: string) => void;
  onOpenBookingWithService: (serviceName: string) => void;
  onSelectMedia: (media: { type: 'image' | 'video'; url: string; title: string }) => void;
}

export const ServiceSubpage: React.FC<ServiceSubpageProps> = ({
  serviceId,
  onBackToHome,
  onSwitchService,
  onOpenBookingWithService,
  onSelectMedia,
}) => {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen bg-[#FFF7F3] pt-6 pb-24 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar / Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-6 border-b border-[#D4AF37]/30">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#2B0B3F] hover:text-[#FF2E88] font-bold text-xs sm:text-sm border border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF2E88]" />
            <span>Back to All Services</span>
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500">
            <button onClick={onBackToHome} className="hover:text-[#FF2E88] hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <button onClick={onBackToHome} className="hover:text-[#FF2E88] hover:underline cursor-pointer">
              Services
            </button>
            <span>/</span>
            <span className="font-semibold text-[#2B0B3F]">{service.title}</span>
          </div>
        </div>

        {/* Clean Page Title Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="font-serif-elegant text-3xl sm:text-4xl font-extrabold text-[#2B0B3F]">
            {service.hindiTitle}
          </h1>

          <button
            onClick={() => onOpenBookingWithService(service.title)}
            className="self-start sm:self-auto px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF2E88] to-[#7B2FF7] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Book Appointment
          </button>
        </div>

        {/* Studio Visual Gallery for this specific service */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-serif-elegant text-2xl font-bold text-[#2B0B3F] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <span>Real Studio Photos & Live Work</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Authentic transformations performed by Pooja Makeover and Salon at our Maharajganj studio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {service.images.map((imgUrl, imgIdx) => (
              <div
                key={imgIdx}
                onClick={() => onSelectMedia({ type: 'image', url: imgUrl, title: `${service.title} Photo ${imgIdx + 1}` })}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 border-2 border-[#D4AF37]/35 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={imgUrl}
                  alt={`${service.title} photo ${imgIdx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Service Breakdown Lists */}
        <div className="bg-white/90 backdrop-blur-md rounded-[32px] p-6 sm:p-12 border border-[#D4AF37]/40 shadow-xl mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-elegant text-2xl sm:text-3xl font-extrabold text-[#2B0B3F]">
              Comprehensive Treatment & Service Menu
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-medium">
              Every procedure is customized according to your skin & hair profile using premium imported cosmetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.groups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#FFF7F3]/80 to-white border border-[#D4AF37]/30 shadow-sm hover:border-[#D4AF37]/70 transition-all"
              >
                <h4 className="font-serif-elegant text-lg sm:text-xl font-bold text-[#2B0B3F] pb-3 mb-5 border-b border-[#D4AF37]/25 flex items-center justify-between">
                  <span>{group.groupName}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E88]" />
                </h4>

                {/* Direct Items List */}
                {group.items && (
                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                        <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF2E88]/20 to-[#D4AF37]/30 text-[#FF2E88] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">
                          ✓
                        </span>
                        <span className="leading-snug font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subgroups (e.g. for Advanced Skin Treatments) */}
                {group.subgroups && (
                  <div className="space-y-6">
                    {group.subgroups.map((sub, subIdx) => (
                      <div key={subIdx} className="space-y-2.5">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#C2185B] flex items-center gap-1.5 pb-1 border-b border-neutral-100">
                          <span className="w-2 h-2 rounded-full bg-[#C2185B]" />
                          <span>{sub.subheading}</span>
                        </div>
                        <ul className="space-y-2.5 pl-2">
                          {sub.items.map((subItem, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                              <span className="w-4 h-4 rounded-full bg-[#D4AF37]/25 text-[#B38728] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                                ✓
                              </span>
                              <span className="leading-snug font-medium">{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pricing & Booking Callout Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#2B0B3F] via-[#3E105C] to-[#2B0B3F] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4AF37]/50 shadow-lg">
            <div className="flex items-center gap-4 text-center md:text-left">
              <span className="text-3xl">💄</span>
              <div>
                <div className="font-serif-elegant font-bold text-base sm:text-lg text-[#FFF3C4]">
                  Interested in Booking {service.title}?
                </div>
                <div className="text-xs text-white/80 mt-1">
                  Pricing depends on specific requirements & consultation. Call Pooja Makeover directly: <span className="text-[#FFF3C4] font-bold">{BUSINESS_INFO.formattedPhone}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBookingWithService(service.title)}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF2E88] to-[#7B2FF7] shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer animate-shimmer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Explore Other Services Navigation */}
        <div className="pt-6 border-t border-[#D4AF37]/30">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="font-serif-elegant text-xl sm:text-2xl font-bold text-[#2B0B3F]">
              Explore Our Other Services
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              Switch directly to another specialized beauty category
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherServices.map((other) => (
              <div
                key={other.id}
                onClick={() => onSwitchService(other.id)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#D4AF37]/40 hover:border-[#D4AF37] p-5 shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center justify-between gap-4 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-[#D4AF37]/30">
                    <img
                      src={other.images[0]}
                      alt={other.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="font-serif-elegant text-base font-bold text-[#2B0B3F] group-hover:text-[#FF2E88] transition-colors">
                      {other.hindiTitle}
                    </h5>
                    <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                      {other.intro}
                    </p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#FFF7F3] border border-[#D4AF37]/40 flex items-center justify-center text-[#FF2E88] group-hover:bg-[#FF2E88] group-hover:text-white transition-all shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="text-center mt-12">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#FFF7F3] text-[#2B0B3F] hover:text-[#FF2E88] font-bold text-xs sm:text-sm border border-[#D4AF37]/60 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF2E88]" />
              <span>Back to Homepage / All Services</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
