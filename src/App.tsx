import React from 'react';
import { BrowserRouter, Routes, Route } from './router/Router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ContactPage } from './pages/ContactPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col justify-between bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#005EDA]/15 selection:text-[#005EDA]">
        
        {/* Global Reusable Responsive Navbar */}
        <Navbar />

        {/* Multi-Page Route Render Outlet */}
        <main id="main-content" className="flex-1">
          <Routes>
            {/* Primary Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* Individual Dedicated 12 Service Detail Routes */}
            <Route path="/services/web-development" element={<ServiceDetailPage slugOverride="web-development" />} />
            <Route path="/services/mobile-app-development" element={<ServiceDetailPage slugOverride="mobile-app-development" />} />
            <Route path="/services/ai-machine-learning" element={<ServiceDetailPage slugOverride="ai-machine-learning" />} />
            <Route path="/services/data-analytics" element={<ServiceDetailPage slugOverride="data-analytics" />} />
            <Route path="/services/ui-ux-design" element={<ServiceDetailPage slugOverride="ui-ux-design" />} />
            <Route path="/services/qa-software-testing" element={<ServiceDetailPage slugOverride="qa-software-testing" />} />
            <Route path="/services/cloud-devops" element={<ServiceDetailPage slugOverride="cloud-devops" />} />
            <Route path="/services/cybersecurity" element={<ServiceDetailPage slugOverride="cybersecurity" />} />
            <Route path="/services/crm-erp-solutions" element={<ServiceDetailPage slugOverride="crm-erp-solutions" />} />
            <Route path="/services/digital-marketing" element={<ServiceDetailPage slugOverride="digital-marketing" />} />
            <Route path="/services/software-development" element={<ServiceDetailPage slugOverride="software-development" />} />
            <Route path="/services/maintenance-support" element={<ServiceDetailPage slugOverride="maintenance-support" />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Portfolio, Process, Stack & Conversion Routes */}
            <Route path="/work" element={<WorkPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-a-project" element={<StartProjectPage />} />

            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Reusable Multi-Column Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
