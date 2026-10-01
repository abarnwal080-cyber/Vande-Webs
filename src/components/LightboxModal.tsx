import React, { useRef, useEffect } from 'react';
import { X, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  media: {
    type: 'image' | 'video';
    url: string;
    title: string;
  } | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ media, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!media) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Media Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center max-h-[80vh] w-auto">
          {media.type === 'image' ? (
            <img
              src={media.url}
              alt={media.title}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
          ) : (
            <div className="relative flex flex-col items-center">
              <video
                ref={videoRef}
                src={media.url}
                controls
                autoPlay
                playsInline
                muted={isMuted}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl"
              />
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 left-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/20"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-[#D4AF37]" />}
              </button>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-3 text-center text-white/90 text-sm font-medium">
          {media.title}
        </div>
      </div>
    </div>
  );
};
