import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
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
  Terminal,
} from 'lucide-react';
import { Link } from '../router/Router';
import { HeroVideoVisual } from '../components/HeroVideoVisual';
import { SectionHeader } from '../components/SectionHeader';
import { TechIcon } from '../components/TechnologyIcons';
import { PredictableDeliverySection } from '../components/PredictableDeliverySection';
import {
  COMPANY_INFO,
  SERVICES_LIST,
  TECHNOLOGIES_DATA,
  WHY_US_PILLARS,
} from '../data/companyData';

export const HomePage: React.FC = () => {
  // Interactive state for Technology Index circular cloud inspection
  const [selectedTechName, setSelectedTechName] = useState<string>('React');
  const [activeTechCategory, setActiveTechCategory] = useState<string>('All');

  // Flattened 15 technologies with category tags
  const allTechnologies = TECHNOLOGIES_DATA.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );
  const currentTech = allTechnologies.find((t) => t.name === selectedTechName) || allTechnologies[0];

  // Icon mapping for Services Directory
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'web-development':
        return Globe;
      case 'mobile-app-development':
        return Smartphone;
      case 'software-development':
        return Code2;
      case 'ui-ux-design':
        return Palette;
      case 'qa-software-testing':
        return CheckSquare;
      case 'cloud-devops':
        return Cloud;
      case 'cybersecurity':
        return ShieldCheck;
      case 'data-analytics':
        return BarChart3;
      case 'ai-machine-learning':
        return Cpu;
      case 'crm-erp-solutions':
        return Layers;
      case 'digital-marketing':
        return TrendingUp;
      case 'maintenance-support':
        return Activity;
      default:
        return Globe;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (BALANCED & MODERNIZED LAYOUT)            */}
      {/* ======================================================== */}
      <section
        id="hero"
        aria-label="Hero Introduction"
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0E0E0E] border-b border-white/10 overflow-hidden"
      >
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-corporate-grid opacity-30 pointer-events-none" />

        {/* Strategic 2.5D Ambient Lighting */}
        <div className="absolute -top-10 right-1/4 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column: lg:col-span-6 xl:col-span-6 */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Brand Label Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 shadow-2xs mb-5 self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005EDA]"></span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#38BDF8] font-display">
                  BRAHMANI INFORMATION
                </span>
              </div>

              {/* Sophisticated Two-Color Hero Headline: Deep Navy + Brahmani Brand Blue */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] font-display mb-6">
                <span className="text-white block">WE BUILD DIGITAL EXPERIENCES</span>
                <span className="text-[#005EDA] block mt-1">THAT HELP BUSINESSES MOVE FORWARD.</span>
              </h1>

              {/* Exact Master Prompt Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
                We design and develop modern websites and digital experiences that turn ideas into purposeful digital products.
              </p>

              {/* Button System */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_16px_rgba(0,94,218,0.28)] hover:shadow-[0_6px_22px_rgba(0,94,218,0.4)] transition-all duration-200 active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#151515] hover:bg-[#1E1E1E] border border-white/10 rounded-xl shadow-xs transition-all duration-200 group"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="ml-2 w-4 h-4 text-slate-400 group-hover:text-white" />
                </Link>
              </div>

              {/* Balanced Bottom Status / Metric Strip */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="flex items-center space-x-2.5 px-3 py-2 rounded-lg bg-[#151515] border border-white/10 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300 truncate">Available for Projects</span>
                </div>
                <div className="flex items-center space-x-2.5 px-3 py-2 rounded-lg bg-[#151515] border border-white/10 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#005EDA] flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300 truncate">Enterprise Standards</span>
                </div>
                <div className="flex items-center space-x-2.5 px-3 py-2 rounded-lg bg-[#151515] border border-white/10 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300 truncate">React & Node Stack</span>
                </div>
              </div>
            </div>

            {/* Right Column: lg:col-span-6 xl:col-span-6 */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end">
              <HeroVideoVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SERVICES DIRECTORY (CARD-GRID CATALOG LAYOUT)        */}
      {/* ======================================================== */}
      <section
        id="services-directory"
        aria-label="Services Directory"
        className="py-20 lg:py-28 bg-[#0E0E0E] border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-white/10 gap-6 mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                <span>SERVICES DIRECTORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight font-display leading-[1.12]">
                <span className="text-white">Digital Capabilities Built for </span>
                <span className="text-[#005EDA]">Real Business Needs.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mt-3 leading-relaxed">
                Twelve specialized engineering disciplines designed to solve operational challenges, accelerate digital transformation, and build dependable software products.
              </p>
            </div>
          </div>

          {/* 4 Cards Per Row Grid (12 Services Across 3 Rows on Desktop) - Ultra-Fast Lightweight Vector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {SERVICES_LIST.map((service) => {
              const ServiceIcon = getServiceIcon(service.slug);
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group flex flex-col justify-between bg-[#151515] hover:bg-[#1A1A1A] rounded-2xl border border-white/10 hover:border-[#005EDA]/60 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_36px_-8px_rgba(0,94,218,0.25)] transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    {/* Top Row: Crisp Vector Icon */}
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#38BDF8] border border-blue-400/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#005EDA] group-hover:text-white transition-all duration-200">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Service Name */}
                    <div className="pt-1">
                      <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#005EDA] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    {/* Short, Clear Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Sub-Service Capability Tag & Explore Trigger */}
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-slate-400 truncate max-w-[130px]">
                      {service.subServices[0]?.title || 'Core Capability'}
                    </span>
                    <span className="font-semibold text-[#38BDF8] group-hover:text-[#60A5FA] group-hover:translate-x-1 transition-transform inline-flex items-center text-[12px]">
                      Explore
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PREDICTABLE DELIVERY (INTERACTIVE 7-STAGE FLIGHT DECK) */}
      {/* ======================================================== */}
      <PredictableDeliverySection />

      {/* ======================================================== */}
      {/* 4. TECHNOLOGY INDEX (INTERACTIVE CIRCULAR STACK CLOUD)    */}
      {/* ======================================================== */}
      <section
        id="technology-index"
        aria-label="Technology Index"
        className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden"
      >
        {/* Subtle Ambient Dot Grid Background */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#334155_1.3px,transparent_1.3px)] [background-size:24px_24px] pointer-events-none opacity-30" 
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
              <span>TECHNOLOGY INDEX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight font-display leading-[1.12]">
              <span className="text-white">THE TECHNOLOGY </span>
              <span className="text-[#005EDA]">BEHIND WHAT WE BUILD.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A practical, battle-tested technology stack used to design, develop, connect and maintain modern digital experiences.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {['All', 'Frontend', 'Backend', 'Design', 'Database', 'DevOps & Infrastructure', 'Security & Authentication'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTechCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeTechCategory === cat
                      ? 'bg-[#005EDA] text-white shadow-sm shadow-blue-500/25'
                      : 'bg-[#151515] hover:bg-[#1E1E1E] text-slate-300 hover:text-white border border-white/10 shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Circular Technology Icon Cloud */}
          <div className="relative max-w-4xl mx-auto py-4">
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:gap-5">
              {allTechnologies.map((tech) => {
                const isSelected = selectedTechName === tech.name;
                const isCategoryActive = activeTechCategory === 'All' || activeTechCategory === tech.category;

                return (
                  <div
                    key={tech.name}
                    onClick={() => setSelectedTechName(tech.name)}
                    onMouseEnter={() => setSelectedTechName(tech.name)}
                    className={`relative group/pill transition-all duration-300 ${
                      isCategoryActive ? 'opacity-100 scale-100' : 'opacity-30 scale-95 pointer-events-none'
                    }`}
                  >
                    {/* Circular Dark Surface Badge */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#151515] flex items-center justify-center p-3.5 sm:p-4 cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? 'border-2 border-[#005EDA] shadow-[0_12px_28px_rgba(0,94,218,0.35)] -translate-y-1.5 ring-4 ring-blue-500/20'
                          : 'border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_24px_rgba(0,94,218,0.25)] hover:border-[#005EDA]/60 hover:-translate-y-1'
                      }`}
                    >
                      <TechIcon
                        name={tech.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover/pill:scale-110"
                      />
                    </div>

                    {/* Floating Tooltip */}
                    <div className="absolute -top-11 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#1E293B] text-white border border-white/10 rounded-md text-[11px] font-semibold whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover/pill:opacity-100 group-hover/pill:-top-13 transition-all duration-200 z-30 flex items-center gap-1.5">
                      <span>{tech.name}</span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E293B]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Inspected Technology Card */}
          {currentTech && (
            <div className="max-w-xl mx-auto mt-8 sm:mt-10">
              <div className="bg-[#151515] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1E1E1E] border border-white/10 shadow-sm p-3.5 flex items-center justify-center shrink-0">
                  <TechIcon name={currentTech.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                      {currentTech.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#38BDF8] bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-400/20">
                      {currentTech.category}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#005EDA]">
                    {currentTech.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {currentTech.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
