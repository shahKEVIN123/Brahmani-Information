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
  Phone,
  MessageSquare,
  Terminal,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { HeroVideoVisual } from '../HeroVideoVisual';
import { TechIcon } from '../TechnologyIcons';
import {
  COMPANY_INFO,
  SERVICES_LIST,
  TECHNOLOGIES_DATA,
  PROCESS_STAGES,
} from '../../data/companyData';

export const MobileHome: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('React');
  const [activeTechCategory, setActiveTechCategory] = useState<string>('All');

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

  const categories = [
    { label: 'All', id: 'All' },
    { label: 'Engineering', id: 'engineering' },
    { label: 'Design & AI', id: 'design-ai' },
    { label: 'Enterprise', id: 'enterprise' },
  ];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'engineering') {
      return ['web-development', 'mobile-app-development', 'software-development', 'cloud-devops'].includes(srv.slug);
    }
    if (activeCategory === 'design-ai') {
      return ['ui-ux-design', 'ai-machine-learning', 'data-analytics', 'qa-software-testing'].includes(srv.slug);
    }
    if (activeCategory === 'enterprise') {
      return ['crm-erp-solutions', 'cybersecurity', 'digital-marketing', 'maintenance-support'].includes(srv.slug);
    }
    return true;
  });

  const allTechs = TECHNOLOGIES_DATA.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );
  const currentTech = allTechs.find((t) => t.name === selectedTech) || allTechs[0];

  const filteredTechs = allTechs.filter((t) => {
    if (activeTechCategory === 'All') return true;
    return t.category.toLowerCase().includes(activeTechCategory.toLowerCase());
  });

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. APP HERO SECTION */}
      <section className="px-4 pt-4 pb-8 space-y-5">
        {/* Availability Live Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Q4 Technical Projects</span>
        </div>

        {/* Impactful Mobile Headline */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight font-display leading-[1.15]">
            <span className="text-white block">Engineering Digital </span>
            <span className="text-[#005EDA] block">Platforms in Production.</span>
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed pt-1">
            We architect and build dependable web applications, custom software, and cloud infrastructure engineered for scalable performance and operational clarity.
          </p>
        </div>

        {/* Primary Touch CTAs */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          <Link
            to="/start-a-project"
            className="w-full flex items-center justify-center space-x-2 py-3.5 px-5 text-sm font-semibold text-white bg-[#005EDA] active:bg-[#004BBB] rounded-xl shadow-md transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center space-x-1.5 py-3 px-3 text-xs font-semibold text-slate-200 bg-[#151515] active:bg-[#1E1E1E] border border-white/10 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Call Team</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-1.5 py-3 px-3 text-xs font-semibold text-slate-200 bg-[#151515] active:bg-[#1E1E1E] border border-white/10 rounded-xl"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Inquiry</span>
            </Link>
          </div>
        </div>

        {/* Mobile Hero Media Card */}
        <div className="pt-2">
          <HeroVideoVisual />
        </div>

        {/* 3-Column Core Metrics Ribbon */}
        <div className="grid grid-cols-3 gap-2 pt-3">
          <div className="bg-[#121212] border border-white/5 rounded-xl p-3 text-center">
            <div className="text-lg font-bold font-display text-white">12</div>
            <div className="text-[10px] text-slate-400 font-medium tracking-tight">Disciplines</div>
          </div>
          <div className="bg-[#121212] border border-white/5 rounded-xl p-3 text-center">
            <div className="text-lg font-bold font-display text-[#38BDF8]">100%</div>
            <div className="text-[10px] text-slate-400 font-medium tracking-tight">Code Owner</div>
          </div>
          <div className="bg-[#121212] border border-white/5 rounded-xl p-3 text-center">
            <div className="text-lg font-bold font-display text-emerald-400">24/7</div>
            <div className="text-[10px] text-slate-400 font-medium tracking-tight">SLA Support</div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DIRECTORY (TOUCH-FRIENDLY APP CARDS) */}
      <section className="px-4 py-8 border-t border-white/10 bg-[#0E0E0E] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
              SERVICES DIRECTORY
            </div>
            <h2 className="text-xl font-bold font-display text-white mt-0.5">
              12 Engineering Disciplines
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-semibold text-[#38BDF8] active:text-white inline-flex items-center"
          >
            <span>All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-[#005EDA] text-white shadow-xs'
                  : 'bg-[#151515] text-slate-400 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vertical Service App Cards */}
        <div className="space-y-2.5 pt-1">
          {filteredServices.map((service) => {
            const ServiceIcon = getServiceIcon(service.slug);
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex items-center justify-between p-3.5 bg-[#141414] active:bg-[#1A1A1A] border border-white/10 active:border-[#005EDA]/60 rounded-xl transition-all"
              >
                <div className="flex items-center space-x-3 min-w-0 pr-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#38BDF8] border border-blue-400/20 flex items-center justify-center shrink-0">
                    <ServiceIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold font-display text-white truncate group-active:text-[#38BDF8]">
                      {service.title}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {service.shortDesc}
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-active:text-white shrink-0">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="pt-2">
          <Link
            to="/services"
            className="w-full py-2.5 px-4 rounded-xl bg-[#181818] border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center space-x-1.5 active:bg-[#222]"
          >
            <span>Explore All 12 Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
          </Link>
        </div>
      </section>

      {/* 3. MOBILE DELIVERY TIMELINE (PREDICTABLE PROCESS) */}
      <section className="px-4 py-8 border-t border-white/10 bg-[#0A0A0A] space-y-4">
        <div>
          <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
            DELIVERY LIFECYCLE
          </div>
          <h2 className="text-xl font-bold font-display text-white mt-0.5">
            Predictable 7-Stage Execution
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Every technical initiative follows an accountable milestone framework.
          </p>
        </div>

        {/* Vertical Stepper */}
        <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#005EDA] before:via-blue-500/40 before:to-transparent">
          {PROCESS_STAGES.slice(0, 5).map((stage, idx) => (
            <div key={stage.step} className="relative">
              {/* Step indicator dot */}
              <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#005EDA] text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-[#0A0A0A] shadow-xs">
                {idx + 1}
              </div>
              <div className="bg-[#121212] border border-white/10 rounded-xl p-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-display">
                    {stage.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#38BDF8]">
                    Phase {stage.step}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/process"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#38BDF8] pt-1"
        >
          <span>View Complete 7-Stage Process Framework</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* 4. MOBILE TECHNOLOGY INDEX */}
      <section className="px-4 py-8 border-t border-white/10 bg-[#0E0E0E] space-y-4">
        <div>
          <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
            ENGINEERING STACK
          </div>
          <h2 className="text-xl font-bold font-display text-white mt-0.5">
            Production Technologies
          </h2>
        </div>

        {/* Tech Category Chips */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'Frontend', 'Backend', 'Database', 'DevOps'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTechCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all ${
                activeTechCategory === cat
                  ? 'bg-[#005EDA] text-white'
                  : 'bg-[#151515] text-slate-400 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Touch Grid of Tech Badges */}
        <div className="grid grid-cols-4 gap-2 pt-1">
          {filteredTechs.slice(0, 12).map((tech) => {
            const isSelected = selectedTech === tech.name;
            return (
              <button
                key={tech.name}
                onClick={() => setSelectedTech(tech.name)}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center space-y-1.5 transition-all ${
                  isSelected
                    ? 'bg-[#1E1E1E] border-[#005EDA] ring-2 ring-[#005EDA]/30 shadow-md'
                    : 'bg-[#121212] border-white/10 active:border-white/30'
                }`}
              >
                <div className="w-7 h-7 flex items-center justify-center">
                  <TechIcon name={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-medium text-slate-300 truncate max-w-full">
                  {tech.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Selected Tech Info Card */}
        {currentTech && (
          <div className="bg-[#151515] border border-white/10 rounded-xl p-3.5 flex items-start space-x-3 mt-2">
            <div className="w-10 h-10 rounded-lg bg-[#202020] border border-white/10 p-2 shrink-0 flex items-center justify-center">
              <TechIcon name={currentTech.name} className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white">{currentTech.name}</span>
                <span className="text-[9px] font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-400/20">
                  {currentTech.category}
                </span>
              </div>
              <div className="text-[11px] font-semibold text-[#005EDA]">{currentTech.role}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">
                {currentTech.description}
              </p>
            </div>
          </div>
        )}

        <div className="pt-1">
          <Link
            to="/technology"
            className="text-xs font-semibold text-[#38BDF8] inline-flex items-center space-x-1"
          >
            <span>Explore Complete Architectural Stack</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. MOBILE APP CONVERSION BANNER */}
      <section className="px-4 py-8 border-t border-white/10 bg-gradient-to-b from-[#111] to-[#0A0A0A]">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3 shadow-lg">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>START YOUR INITIATIVE</span>
          </div>
          <h3 className="text-lg font-bold font-display text-white leading-snug">
            Ready to Build Your Production Digital System?
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Connect with our engineering team for a technical scope assessment, architectural roadmap, and transparent deliverables.
          </p>
          <div className="pt-2">
            <Link
              to="/start-a-project"
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#005EDA] active:bg-[#004BBB] shadow-md"
            >
              <span>Intake Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

