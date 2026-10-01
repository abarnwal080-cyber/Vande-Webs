import React, { useState } from 'react';
import { AWARDS } from '../data/salonData';
import { Trophy, Calendar, Award, Sparkles } from 'lucide-react';
import { AwardItem } from '../types';

interface AwardsSectionProps {
  onSelectMedia: (media: { type: 'image' | 'video'; url: string; title: string }) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onSelectMedia }) => {
  // Track active photo index for cards with multiple photos (like Award 2)
  const [activePhotoIndices, setActivePhotoIndices] = useState<Record<string, number>>({
    'award-2': 0
  });

  const handleTogglePhoto = (awardId: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndices((prev) => ({ ...prev, [awardId]: index }));
  };

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-[#FFF7F3] to-[#FDEBF3] relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF2E88]/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D4AF37]/40 shadow-sm text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Excellence & Recognition</span>
          </div>

          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight mb-4">
            Proud Moments <span className="inline-block text-[#D4AF37]">🏆</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Recognized for exceptional salon innovation, clean tattoo craftsmanship, luxury nail extensions, and bridal artistry in Maharajganj, Siwan, Bihar.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AWARDS.map((award: AwardItem) => {
            const currentImgIndex = activePhotoIndices[award.id] || 0;
            const currentImgUrl = award.images[currentImgIndex] || award.images[0];

            return (
              <div
                key={award.id}
                className="group relative rounded-[26px] bg-white border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
              >
                {/* Image Container with full-size display and click to open lightbox */}
                <div
                  className="relative w-full h-[360px] sm:h-[420px] bg-gradient-to-b from-[#1F072D] to-[#0E0214] p-3 flex items-center justify-center cursor-pointer overflow-hidden group"
                  onClick={() => onSelectMedia({ type: 'image', url: currentImgUrl, title: award.title })}
                >
                  <img
                    src={currentImgUrl}
                    alt={award.title}
                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                      const parent = (e.currentTarget as HTMLElement).parentElement;
                      if (parent) {
                        parent.classList.add('bg-gradient-to-br', 'from-[#2B0B3F]', 'to-[#7B2FF7]');
                      }
                    }}
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#2B0B3F]/90 backdrop-blur-md text-[#FFF3C4] text-[11px] font-bold px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-sm flex items-center gap-1.5 z-10">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{award.badge}</span>
                  </div>

                  {/* Multi-photo switcher if available (e.g. Award 2) */}
                  {award.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full z-10 border border-white/20">
                      <span className="text-[10px] text-white/80 font-medium mr-1">Photos:</span>
                      {award.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => handleTogglePhoto(award.id, idx, e)}
                          aria-label={`Photo ${idx + 1}`}
                          className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                            currentImgIndex === idx
                              ? 'bg-[#D4AF37] scale-125 ring-2 ring-white/50'
                              : 'bg-white/50 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {award.date && (
                      <div className="flex items-center gap-1.5 text-xs text-[#C2185B] font-semibold mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Date: {award.date}</span>
                      </div>
                    )}

                    <h3 className="font-serif-elegant text-lg sm:text-xl font-bold text-[#2B0B3F] group-hover:text-[#FF2E88] transition-colors leading-snug mb-3">
                      {award.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {award.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Conferred to Pooja Makeover & Salon</span>
                    </span>
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
