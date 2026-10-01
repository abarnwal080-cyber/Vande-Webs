import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active link spy
      const sections = ['home', 'about', 'services', 'awards', 'gallery', 'videos', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Awards', href: '#awards' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-md py-3 border-b border-[#D4AF37]/30'
            : 'bg-[#FFF7F3]/90 backdrop-blur-md py-4 border-b border-[#D4AF37]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E88] rounded-lg"
          >
            <span className="font-script-accent text-3xl sm:text-4xl text-[#BF953F] leading-none pt-1">
              Pooja
            </span>
            <span className="font-serif-elegant text-xl sm:text-2xl font-bold tracking-tight text-[#2B0B3F]">
              Makeover & Salon
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#2B0B3F]/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#FF2E88] font-semibold'
                      : 'hover:text-[#FF2E88]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF2E88] to-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FF2E88] via-[#C2185B] to-[#7B2FF7] shadow-lg shadow-[#FF2E88]/25 hover:shadow-[#FF2E88]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer animate-shimmer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#2B0B3F] bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/40 border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:bg-[#D4AF37]/30 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#2B0B3F]" />
              <span className="hidden xs:inline">{BUSINESS_INFO.phone}</span>
              <span className="xs:hidden">Call</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2B0B3F] hover:bg-neutral-200/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#2B0B3F]/95 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="font-script-accent text-4xl text-[#D4AF37]">Pooja</span>
              <span className="font-serif-elegant text-2xl font-bold text-white">Makeover & Salon</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded-lg bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 my-auto py-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-2xl font-serif-elegant text-white/90 hover:text-[#D4AF37] transition-colors py-2 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-sm font-sans text-[#D4AF37]">→</span>
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-[#FF2E88] to-[#7B2FF7] shadow-lg shadow-[#FF2E88]/30"
            >
              Book Appointment Now
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white border border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call: {BUSINESS_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
