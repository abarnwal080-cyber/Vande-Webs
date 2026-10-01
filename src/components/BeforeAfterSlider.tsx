import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#FFF7F3] via-white to-[#FFF7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 shadow-sm text-xs font-semibold text-[#FF2E88] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artistry In Action</span>
          </div>

          <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0B3F] tracking-tight mb-3">
            The Pearl Transformation
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Slide horizontally to experience the seamless blend of natural skin radiance and regal HD bridal glam.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative rounded-[28px] overflow-hidden aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/3] shadow-2xl border-2 border-[#D4AF37]/40 select-none cursor-ew-resize bg-neutral-900"
          >
            {/* After Image (Full background) */}
            <img
              src="https://plain-apac-prod-public.komododecks.com/202609/25/ITLzK1iEOhsp6jrkLJ9H/image.png"
              alt="Bridal Makeover After"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-[#FF2E88]/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm pointer-events-none z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF3C4]" />
              <span>AFTER: Bridal Glamour</span>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://plain-apac-prod-public.komododecks.com/202609/25/06Y40g1H5ex7WwxWXVha/image.png"
                alt="Bridal Makeover Before"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: `${containerWidth}px`, height: '100%' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#2B0B3F]/90 text-[#FFF3C4] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm pointer-events-none z-10">
                BEFORE: Natural Look
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#FF2E88] to-[#D4AF37] border-2 border-white shadow-xl flex items-center justify-center text-white">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 font-medium mt-3 px-2">
            <span>← Slide left for After</span>
            <span className="flex items-center gap-1 text-[#C2185B]">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Drag slider
            </span>
            <span>Slide right for Before →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
