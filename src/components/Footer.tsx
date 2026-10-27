import React from 'react';
import { SparkleIcon } from './SparkleIcon';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#01040e] border-t border-[#005EDA]/15 pt-20 pb-12 overflow-hidden text-slate-400">

      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#001455]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#005EDA]/15">

          {/* Brand Info & Official Logo */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="inline-block" aria-label="Brahmani Information Home">
              <img
                src="/brahmani-logo-darkmode.png"
                alt="Brahmani Information"
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,94,218,0.3)]"
              />
            </a>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#3894FF]">
              <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
              <span>THE BRAHMANI SIGNAL • EST. 2026</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Brahmani</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Digital Services Nodes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Inlets */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              CONNECT
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-slate-300">
                Official Inquiries:
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#3894FF] hover:underline block truncate"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* Scroll back to top button */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#051026] border border-[#005EDA]/30 text-xs font-mono text-slate-300 hover:text-white hover:border-[#3894FF] transition-all"
                aria-label="Scroll to top"
              >
                <span>Back to Orbit</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#3894FF]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Required Copyright Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 Brahmani Information. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span>DIGITAL TECHNOLOGY & IT SOLUTIONS</span>
            <span>•</span>
            <span className="text-[#3894FF]">SECURE TRANSMISSION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
