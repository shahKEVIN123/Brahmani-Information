import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from '../router/Router';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { MotionReveal } from './motion/MotionReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Multi-Column Content */}
        <MotionReveal preset="fadeUp" duration={0.65} viewportAmount={0.1}>
          <div className="pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Col 1: Brand & Philosophy (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Link to="/" className="inline-block group">
                <div>
                  <img
                    src="/Brahmani Information Logo.png"
                    alt="Brahmani Information Logo"
                    width="180"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    className="h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                {COMPANY_INFO.description}
              </p>

              {/* Social Media Links */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#151515] border border-white/10 hover:border-[#005EDA] hover:bg-[#1E1E1E] text-slate-400 hover:text-[#005EDA] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-[#151515] border border-white/10 hover:border-[#005EDA] hover:bg-[#1E1E1E] text-slate-400 hover:text-[#E4405F] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-[#151515] border border-white/10 hover:border-[#005EDA] hover:bg-[#1E1E1E] text-slate-400 hover:text-[#1877F2] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google"
                  className="w-9 h-9 rounded-xl bg-[#151515] border border-white/10 hover:border-[#005EDA] hover:bg-[#1E1E1E] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-slate-400 hover:text-white transition-colors">
                    Work / Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-slate-400 hover:text-white transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="text-slate-400 hover:text-white transition-colors">
                    Technology Stack
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Services Group 1 (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white">
                Core Services
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES_LIST.slice(0, 6).map((srv) => (
                  <li key={srv.slug}>
                    <Link
                      to={`/services/${srv.slug}`}
                      className="text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center space-x-1.5"
                    >
                      <span>{srv.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Services Group 2 & Contact Inlet (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-white">
                Specialized Services
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES_LIST.slice(6, 12).map((srv) => (
                  <li key={srv.slug}>
                    <Link
                      to={`/services/${srv.slug}`}
                      className="text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center space-x-1.5"
                    >
                      <span>{srv.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Direct Communication
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-medium text-white hover:text-[#38BDF8] transition-colors inline-flex items-center space-x-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

          </div>
        </MotionReveal>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {COMPANY_INFO.established} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Modern Web & Digital Solutions</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Inquiries
            </Link>
            <span>•</span>
            <Link to="/start-a-project" className="hover:text-slate-400 transition-colors">
              Project Intake
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
