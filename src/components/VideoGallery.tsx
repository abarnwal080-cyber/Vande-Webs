import React, { useRef, useState, useEffect } from 'react';
import { VIDEOS } from '../data/salonData';
import { VideoItem } from '../types';
import { Play, Pause, Volume2, Sparkles, Film, Maximize2 } from 'lucide-react';

interface VideoGalleryProps {
  onSelectVideo: (video: { url: string; title: string }) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ onSelectVideo }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  // Auto-scroll loop effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scrollStep = () => {
      if (isAutoScrolling && !isHovered && container) {
        container.scrollLeft += 1.2;

        // When reaching end or half way (since we duplicate items), reset smoothly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling, isHovered]);

  // Handle video hover preview
  const handleMouseEnterCard = (video: VideoItem, idx: number) => {
    setHoveredVideoId(`${video.id}-${idx}`);
  };

  const handleMouseLeaveCard = () => {
    setHoveredVideoId(null);
  };

  // We duplicate VIDEOS so the horizontal reel loops infinitely
  const repeatedVideos = [...VIDEOS, ...VIDEOS];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-[#2B0B3F] via-[#370E51] to-[#2B0B3F] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#FF2E88]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 text-xs font-semibold text-[#FFF3C4] mb-3 backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Real Transformations</span>
            </div>

            <h2 className="font-serif-elegant text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Watch Our Work <span className="text-[#FFF3C4]">✨</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Authentic Instagram Reels captured live inside Pooja Makeover and Salon, Maharajganj. Click any video to watch with full audio.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 backdrop-blur-md transition-all cursor-pointer"
            >
              {isAutoScrolling ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#FFF3C4]" />
                  <span>Pause Carousel</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#FFF3C4]" />
                  <span>Play Carousel</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Auto-scrolling 9:16 Video Carousel Container */}
      <div
        className="w-full overflow-x-hidden py-4 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-8"
          style={{ scrollBehavior: 'auto' }}
        >
          {repeatedVideos.map((video, idx) => {
            const cardKey = `${video.id}-${idx}`;
            const isCardHovered = hoveredVideoId === cardKey;

            return (
              <div
                key={cardKey}
                onMouseEnter={() => handleMouseEnterCard(video, idx)}
                onMouseLeave={handleMouseLeaveCard}
                onClick={() => onSelectVideo({ url: video.url, title: video.title })}
                className="group relative shrink-0 w-[240px] sm:w-[280px] aspect-[9/16] rounded-[24px] overflow-hidden bg-neutral-900 border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-xl hover:shadow-2xl hover:shadow-[#FF2E88]/30 transition-all duration-300 cursor-pointer hover:-translate-y-2"
              >
                {/* Video element */}
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  ref={(el) => {
                    if (el) {
                      if (isCardHovered) {
                        el.play().catch(() => {});
                      } else {
                        el.pause();
                        el.currentTime = 0;
                      }
                    }
                  }}
                  preload="metadata"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0B3F]/95 via-transparent to-black/30 pointer-events-none" />

                {/* Badge top left */}
                <div className="absolute top-3 left-3 bg-[#FF2E88]/90 backdrop-blur-md text-[11px] font-bold text-white px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{video.clientType}</span>
                </div>

                {/* Play icon overlay in center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-[#D4AF37] flex items-center justify-center text-white shadow-xl transition-all duration-300 ${
                      isCardHovered ? 'scale-110 bg-[#FF2E88]/80 text-white' : 'opacity-80'
                    }`}
                  >
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>

                {/* Bottom title & sound hint */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <h4 className="font-serif-elegant text-base font-bold leading-snug text-white group-hover:text-[#FFF3C4] transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-[11px] text-white/70">
                    <span className="flex items-center gap-1">
                      <Volume2 className="w-3 h-3 text-[#D4AF37]" />
                      <span>Click to watch with sound</span>
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#FFF3C4]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-white/60">
        Hover over any card to preview · Click to play full screen with sound
      </div>
    </section>
  );
};
