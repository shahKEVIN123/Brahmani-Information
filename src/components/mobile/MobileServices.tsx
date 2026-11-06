import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Smartphone,
  Code2,
  Palette,
  CheckSquare,
  Cloud,
  ShieldCheck,
  BarChart3,
  Cpu,
  Layers,
  TrendingUp,
  Activity,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { OptimizedImage } from '../OptimizedImage';
import { SERVICES_LIST } from '../../data/companyData';

export const MobileServices: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'web-development': return Globe;
      case 'mobile-app-development': return Smartphone;
      case 'software-development': return Code2;
      case 'ui-ux-design': return Palette;
      case 'qa-software-testing': return CheckSquare;
      case 'cloud-devops': return Cloud;
      case 'cybersecurity': return ShieldCheck;
      case 'data-analytics': return BarChart3;
      case 'ai-machine-learning': return Cpu;
      case 'crm-erp-solutions': return Layers;
      case 'digital-marketing': return TrendingUp;
      case 'maintenance-support': return Activity;
      default: return Globe;
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All (12)' },
    { id: 'dev', label: 'Development' },
    { id: 'cloud', label: 'Cloud & AI' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'dev') {
      return ['web-development', 'mobile-app-development', 'software-development', 'ui-ux-design'].includes(srv.slug);
    }
    if (activeFilter === 'cloud') {
      return ['cloud-devops', 'ai-machine-learning', 'data-analytics', 'cybersecurity'].includes(srv.slug);
    }
    if (activeFilter === 'enterprise') {
      return ['crm-erp-solutions', 'qa-software-testing', 'digital-marketing', 'maintenance-support'].includes(srv.slug);
    }
    return true;
  });

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* Top Header */}
      <section className="px-4 pt-4 pb-6 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
          <span>12 ENGINEERING DISCIPLINES</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>Modern Engineering & </span>
          <span className="text-[#005EDA]">Technology Services.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          Specialized practices designed to solve operational friction, accelerate digital transformation, and engineer resilient systems.
        </p>

        {/* Horizontal Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#005EDA] text-white shadow-xs'
                  : 'bg-[#151515] text-slate-400 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Vertical Service App Cards */}
      <section className="px-4 space-y-4">
        {filteredServices.map((srv) => {
          const ServiceIcon = getServiceIcon(srv.slug);
          return (
            <div
              key={srv.slug}
              className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between"
            >
              {/* Card Header & Preview Visual */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-[#38BDF8] border border-blue-400/20 flex items-center justify-center shrink-0">
                      <ServiceIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold font-display text-white">
                        {srv.title}
                      </h2>
                      <span className="text-[10px] font-mono font-medium text-[#38BDF8]">
                        Production Practice
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compact Service Preview Image */}
                <div className="w-full rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/5 aspect-[16/9] relative">
                  <OptimizedImage
                    src={`/assets/services/${srv.slug}.png`}
                    alt={srv.title}
                    aspectRatio="16/9"
                    objectFit="cover"
                    containerClassName="w-full h-full bg-[#0A0A0A]"
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Sub-Services Checklist Chips */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Core Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.subServices.slice(0, 3).map((sub, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-slate-300 bg-[#1A1A1A] border border-white/10 px-2.5 py-1 rounded-lg flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#38BDF8] shrink-0" />
                        <span className="truncate max-w-[200px]">{sub.title}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button linking to dedicated Service Detail Page */}
              <div className="p-4 pt-2 border-t border-white/5 bg-[#161616]">
                <Link
                  to={`/services/${srv.slug}`}
                  className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-[#005EDA] text-white text-xs font-semibold shadow-xs active:bg-[#004BBB]"
                >
                  <span>Explore Architecture & Deliverables</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Card */}
      <section className="px-4 pt-8">
        <div className="bg-gradient-to-tr from-blue-900/30 to-[#151515] border border-blue-500/30 rounded-2xl p-5 space-y-3">
          <div className="flex items-center space-x-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Project Scoping</span>
          </div>
          <h3 className="text-base font-bold text-white font-display">
            Have a project combining multiple services?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our solution architects help scope, design, and assemble the ideal cross-discipline team for your requirements.
          </p>
          <Link
            to="/start-a-project"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#005EDA] active:bg-[#004BBB]"
          >
            <span>Start a Project Intake</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

