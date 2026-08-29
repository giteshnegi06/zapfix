/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ReviewsSection } from './components/ReviewsSection';
// import { TechniciansSection } from './components/TechniciansSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SearchModal } from './components/SearchModal';
import { CallModal } from './components/CallModal';
import { Phone, Calendar, Zap } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#2a4537] text-white flex flex-col relative selection:bg-[#c44b2b] selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenCallModal={() => setCallModalOpen(true)}
      />

      {/* Main Page Sections replicating all user reference images */}
      <main className="flex-1">
        {/* Section 1: Hero Section (Ref Image 1: INSTANT REPAIR + Worker + Sponsors) */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* Section 2: Services Section (Ref Image 6: COMPLETE ELECTRICAL SOLUTIONS FOR EVERY NEED) */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />


        {/* Section 4: How It Works / Process Section (Ref Image 3: SIMPLE PROCESS, POWERFUL RESULTS) */}
        <HowItWorksSection onOpenBooking={() => handleOpenBooking()} />


        {/* Section 3: Why Choose Us Section (Ref Images 4 & 5: RELIABLE SERVICE. YOU CAN TRUST.) */}
        <WhyChooseUsSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* Section 5: Customer Reviews Section (Ref Image 2: TRUSTED BY HOMES & BUSINESSES) */}
        <ReviewsSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        {/* Section 6: Certified Technicians Crew
        <TechniciansSection onBookTechnician={(techName) => handleOpenBooking(`Request Electrician: ${techName}`)} /> */}

        {/* Section 7: FAQ Section */}
        <FaqSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={() => setCallModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenCallModal={() => setCallModalOpen(true)}
      />

      {/* Floating Fast Action Floating Bar on Mobile */}
      <div className="fixed flex-col bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end gap-2">
        <a
          href="https://wa.me/918544784955?text=Hi%20CHAUHANELECTRIX.%2C%20I%20have%20an%20urgent%20electrical%20issue."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] border-2 border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-transform cursor-pointer"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.86 14.2c-.25.7-1.45 1.36-2.02 1.44-.52.08-1.17.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.02-1.3-4.99-4.32-5.14-4.53-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.53.28-.3.6-.38.8-.38.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.08.15.13.32.02.5-.1.19-.16.3-.31.46-.15.16-.31.36-.44.48-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.66-.05.18-.19.75-.87.95-1.17.2-.3.4-.24.67-.15.27.1 1.73.82 2.03.97.3.15.5.23.57.35.07.13.07.73-.18 1.43z" />
          </svg>
        </a>

        <a
          href="tel:+918544784955"
          className="w-12 h-12 rounded-full bg-[#1b3427] border-2 border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#254936] transition-transform cursor-pointer"
          title="Call Now"
        >
          <Phone className="w-5 h-5 text-amber-400 animate-pulse" />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 bg-[#c44b2b] hover:bg-[#af3f22] text-white px-4 py-3 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform cursor-pointer"
          id="floating-book-now-btn"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Instant</span> <span>Book</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForBooking}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectService={handleSelectServiceFromCard}
      />

      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </div>
  );
}
