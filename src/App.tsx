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
        <button
          onClick={() => setCallModalOpen(true)}
          className="w-12 h-12 rounded-full bg-[#1b3427] border-2 border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#254936] transition-transform cursor-pointer"
          title="24/7 Helpline"
        >
          <Phone className="w-5 h-5 text-amber-400 animate-pulse" />
        </button>

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
