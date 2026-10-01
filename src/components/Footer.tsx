import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { MapPin, Phone, Instagram, Heart, Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onOpenServiceSubpage?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onNavigateToSection,
  onOpenServiceSubpage,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Pallavi', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Awards', href: '#awards' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'Reel Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceHighlights = [
    { name: 'Bridal & Event Makeup', id: 'bridal-makeup' },
    { name: 'Nails & Tattoo Art Studio', id: 'nails-and-tattoos' },
    { name: 'Clean & Sterile Tattoos', id: 'nails-and-tattoos' },
    { name: 'Luxury Nail Extensions', id: 'nails-and-tattoos' },
    { name: 'Hair Care, Cuts & Keratin', id: 'hair-care' },
    { name: 'Hydrafacial & Skincare', id: 'skin-care' },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#2B0B3F] text-white pt-16 pb-12 border-t-2 border-[#D4AF37]/50 overflow-hidden">
      {/* Decorative ambient lighting in dark footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF2E88]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-script-accent text-4xl text-[#FFF3C4]">Pooja</span>
              <span className="font-serif-elegant text-2xl font-bold tracking-tight text-white">Makeover & Salon</span>
            </div>
            
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Maharajganj, Siwan's premier beauty, nails and tattoo destination. Highly rated for clean tattoo work, high-quality nail extensions, and professional royal bridal services.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF2E88] text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#2B0B3F] text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Call Pooja Makeover and Salon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-elegant text-base font-bold text-[#FFF3C4] uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="hover:text-[#FFF3C4] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#D4AF37] text-[10px]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-elegant text-base font-bold text-[#FFF3C4] uppercase tracking-wider text-xs">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              {serviceHighlights.map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      if (onOpenServiceSubpage) {
                        onOpenServiceSubpage(srv.id);
                      } else if (onNavigateToSection) {
                        onNavigateToSection('services');
                      }
                    }}
                    className="hover:text-[#FFF3C4] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-[#FF2E88] shrink-0" />
                    <span>{srv.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-elegant text-base font-bold text-[#FFF3C4] uppercase tracking-wider text-xs">
              Parlour Info
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF2E88] shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
              <div className="text-[11px] text-white/60 pt-2 border-t border-white/10">
                Opening Hours: {BUSINESS_INFO.timings}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>© 2026 Pooja Makeover and Salon. All Rights Reserved.</p>
          
          <div className="flex items-center gap-1 text-white/75 font-medium">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF2E88] fill-[#FF2E88]" />
            <span>for Pooja Makeover and Salon</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
