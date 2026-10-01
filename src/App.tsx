/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FestivalBanner } from './components/FestivalBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutOwner } from './components/AboutOwner';
import { AwardsSection } from './components/AwardsSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceSubpage } from './components/ServiceSubpage';
import { VideoGallery } from './components/VideoGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { InstagramBanner } from './components/InstagramBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [selectedServiceSubpageId, setSelectedServiceSubpageId] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
  
  const [activeMedia, setActiveMedia] = useState<{
    type: 'image' | 'video';
    url: string;
    title: string;
  } | null>(null);

  // Sync hash routing for service subpages
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service/')) {
        const serviceId = hash.replace('#service/', '');
        setSelectedServiceSubpageId(serviceId);
      } else {
        setSelectedServiceSubpageId(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenServiceSubpage = (serviceId: string) => {
    window.location.hash = `service/${serviceId}`;
    setSelectedServiceSubpageId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = 'services';
    setSelectedServiceSubpageId(null);
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (selectedServiceSubpageId) {
      setSelectedServiceSubpageId(null);
      window.location.hash = sectionId;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleSelectMedia = (media: { type: 'image' | 'video'; url: string; title: string }) => {
    setActiveMedia(media);
  };

  const handleSelectVideo = (video: { url: string; title: string }) => {
    setActiveMedia({
      type: 'video',
      url: video.url,
      title: video.title
    });
  };

  const handleCloseLightbox = () => {
    setActiveMedia(null);
  };

  return (
    <div className="min-h-screen bg-[#FFF7F3] text-neutral-800 selection:bg-[#FF2E88] selection:text-white relative">
      {/* Subtle desktop cursor glow */}
      <CustomCursor />

      {/* Top Festival Special Offer Banner (Dismissible) */}
      <FestivalBanner onOpenBooking={() => handleOpenBooking('Festival Special Package')} />

      {/* SECTION 1: Sticky Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToSection={handleNavigateToSection}
      />

      <main>
        {selectedServiceSubpageId ? (
          /* Dedicated Service Subpage when opened */
          <ServiceSubpage
            serviceId={selectedServiceSubpageId}
            onBackToHome={handleBackToHome}
            onSwitchService={handleOpenServiceSubpage}
            onOpenBookingWithService={handleOpenBooking}
            onSelectMedia={handleSelectMedia}
          />
        ) : (
          /* Homepage Sections */
          <>
            {/* SECTION 2: Hero Section */}
            <Hero onOpenBooking={() => handleOpenBooking('Bridal HD Makeup')} />

            {/* Marquee Service Ticker */}
            <MarqueeStrip />

            {/* SECTION 3: About / Owner (Pallavi Goswami) */}
            <AboutOwner onOpenBooking={() => handleOpenBooking('Consultation with Pallavi')} />

            {/* SECTION 4: Awards & Achievements (Full-Size Glowing Gold Showcase) */}
            <AwardsSection onSelectMedia={handleSelectMedia} />

            {/* SECTION 5: Services (3 Preview Cards on Homepage with "Tap here to know more") */}
            <ServicesSection onOpenServiceSubpage={handleOpenServiceSubpage} />

            {/* SECTION 6: Video Gallery (Auto-Scroll Carousel with 9:16 reels) */}
            <VideoGallery onSelectVideo={handleSelectVideo} />

            {/* SECTION 7: Why Choose Us (6 Premium Cards) */}
            <WhyChooseUs />

            {/* SECTION 8: Testimonials (Verified Client Reviews) */}
            <Testimonials />

            {/* SECTION 9: Instagram / Social Banner */}
            <InstagramBanner />

            {/* SECTION 10: Contact & Location with Google Maps Embed */}
            <ContactSection onOpenBooking={() => handleOpenBooking()} />
          </>
        )}
      </main>

      {/* SECTION 11: Footer in Dark Plum with Gold Top Border */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onNavigateToSection={handleNavigateToSection}
        onOpenServiceSubpage={handleOpenServiceSubpage}
      />

      {/* Floating Action Buttons: WhatsApp, Direct Call, Scroll to Top & Mobile Bar */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Booking & Price Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
      />

      {/* Full-Screen Lightbox Modal for Photos & Videos */}
      <LightboxModal
        media={activeMedia}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
