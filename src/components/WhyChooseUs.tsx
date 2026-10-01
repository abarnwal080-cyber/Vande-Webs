import React from 'react';
import { WHY_CHOOSE_US } from '../data/salonData';
import { Clock, Award, Trophy, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#FF2E88]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#7B2FF7]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FF2E88]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#C2185B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF7F3] via-white to-[#FFF7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 shadow-sm text-xs font-semibold text-[#FF2E88] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Pearl Distinction</span>
          </div>

          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight mb-3">
            Why Choose Us
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            We hold ourselves to the highest standards of hygiene, artistic precision, and personal care.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-[24px] p-7 bg-white border border-[#D4AF37]/35 hover:border-[#D4AF37] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF7F3] to-[#FDEBF3] border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  {getIcon(item.icon)}
                </div>

                <h3 className="font-serif-elegant text-xl font-bold text-[#2B0B3F] mb-2 group-hover:text-[#FF2E88] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                <span>Guaranteed Standard</span>
                <span className="text-[#FF2E88]">★ 5.0</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
