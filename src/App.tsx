import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesNodesSection } from './sections/ServicesNodesSection';
import { WhySection } from './sections/WhySection';
import { WorkConstellationSection } from './sections/WorkConstellationSection';
import { ProcessOrbitSection } from './sections/ProcessOrbitSection';
import { TechnologySection } from './sections/TechnologySection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveModal } from './components/InteractiveModal';
import { ServiceItem } from './data/companyData';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenContactModal = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="relative min-h-screen bg-[#030713] text-[#F5F8FF] selection:bg-[#126BFF]/30 selection:text-white">
      {/* Primary Navigation */}
      <Navbar onOpenContactModal={() => handleOpenContactModal()} />

      {/* Main Digital Brand Ecosystem */}
      <main id="main-content">
        {/* 01: Hero Section — 'THE SIGNAL' */}
        <HeroSection onOpenContactModal={() => handleOpenContactModal()} />

        {/* 02: About Section — 'INFORMATION IN MOTION' */}
        <AboutSection />

        {/* 03: Services — 'DIGITAL NODES' */}
        <ServicesNodesSection onSelectService={(service) => handleOpenContactModal(service)} />

        {/* 04: Why Brahmani Information — Signal Path */}
        <WhySection />

        {/* 05: Selected Work — 'DIGITAL CONSTELLATION' */}
        <WorkConstellationSection />

        {/* 06: Process — 'THE ORBIT' */}
        <ProcessOrbitSection />

        {/* 07: Technology / Expertise — 'POWERING DIGITAL EXPERIENCES' */}
        <TechnologySection />

        {/* 08: Final Call to Action — 'CONNECT THE SIGNAL' */}
        <FinalCtaSection onOpenContactModal={() => handleOpenContactModal()} />

        {/* 09: Contact Section — 'LET'S BUILD SOMETHING MEANINGFUL' */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Inquiry Modal */}
      <InteractiveModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        preselectedService={selectedService}
      />

      {/* Signature Custom Cursor (Rendered on top of all page elements and modals) */}
      <CustomCursor />
    </div>
  );
};

export default App;
