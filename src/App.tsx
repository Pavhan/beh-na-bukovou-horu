import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { CourseProfile } from './components/CourseProfile';
import { Categories } from './components/Categories';
import { RegistrationPricing } from './components/RegistrationPricing';
import { PrizesRecords } from './components/PrizesRecords';
import { ChildrenSection } from './components/ChildrenSection';
import { Results } from './components/Results';
import { PhotoGallery } from './components/PhotoGallery';
import { Partners } from './components/Partners';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { PropoziceModal } from './components/PropoziceModal';

export default function App() {
  const [isPropoziceModalOpen, setIsPropoziceModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenPropoziceModal={() => setIsPropoziceModalOpen(true)} />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenPropoziceModal={() => setIsPropoziceModalOpen(true)} />

        {/* 2. Registration & Entry Fees */}
        <RegistrationPricing />

        {/* 3. Event Schedule Timeline */}
        <Schedule />

        {/* 4. Course & Altitude Profile */}
        <CourseProfile />

        {/* 5. Categories & Interactive Age Finder */}
        <Categories />

        {/* 6. Prizes, Bonuses & Hall of Fame Records */}
        <PrizesRecords />

        {/* 8. Children Races & Family Activities */}
        <ChildrenSection />

        {/* 9. Results Archive */}
        <Results />

        {/* 10. Photo Gallery */}
        <PhotoGallery />

        {/* 11. Partners & Sponsors */}
        <Partners />

        {/* 11. Contact, Organizer & Navigation */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer onOpenPropoziceModal={() => setIsPropoziceModalOpen(true)} />

      {/* Comprehensive Official Propozice Printable Modal */}
      <PropoziceModal
        isOpen={isPropoziceModalOpen}
        onClose={() => setIsPropoziceModalOpen(false)}
      />
    </div>
  );
}

