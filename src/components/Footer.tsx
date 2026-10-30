import React from 'react';
import { Mail, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from '../router/Router';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Pre-footer Callout */}
        <div className="pb-14 border-b border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] block mb-2">
              Ready to collaborate?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Let’s build something purposeful together.
            </h3>
          </div>
          <Link
            to="/start-a-project"
            className="inline-flex items-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_16px_rgba(0,94,218,0.3)] hover:shadow-[0_6px_22px_rgba(0,94,218,0.45)] transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Multi-Column Content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <div className="bg-white/95 rounded-xl p-2.5 inline-block shadow-sm">
                <img
                  src="/brahmani-logo-transparent.png"
                  alt="Brahmani Information Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Enterprise Standards</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Modern Engineering</span>
              </div>
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
              Core Services (1–6)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-slate-600 font-mono text-[10px]">{srv.number}</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services Group 2 & Contact Inlet (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Core Services (7–12)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(6, 12).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-slate-600 font-mono text-[10px]">{srv.number}</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
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

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
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
