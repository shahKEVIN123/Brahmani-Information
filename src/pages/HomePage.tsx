import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from '../router/Router';
import { HeroVideoVisual } from '../components/HeroVideoVisual';
import { SectionHeader } from '../components/SectionHeader';
import {
  COMPANY_INFO,
  SERVICES_LIST,
  WORK_PROJECTS,
  PROCESS_STAGES,
  TECHNOLOGIES_DATA,
  WHY_US_PILLARS,
} from '../data/companyData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 01: HERO SECTION */}
      {/* Target desktop height: ~620-680px, 52% text / 48% visual, non-full-100vh */}
      <section
        id="hero"
        aria-label="Hero Introduction"
        className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-b border-slate-200/80 overflow-hidden"
      >
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-corporate-grid opacity-70 pointer-events-none" />

        {/* Strategic 2.5D Ambient Lighting */}
        <div className="absolute -top-10 right-1/4 w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[500px]">
            
            {/* Left Column: ~52% width (lg:col-span-6 xl:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
              
              {/* Brand Label */}
              <div className="inline-flex items-center space-x-2.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#005EDA] shadow-sm" />
                <span className="text-xs uppercase tracking-[0.24em] font-bold text-[#005EDA] font-display">
                  BRAHMANI INFORMATION
                </span>
                <div className="h-px w-10 bg-blue-200" />
              </div>

              {/* Sophisticated Two-Color Hero Headline: Deep Navy + Brahmani Brand Blue */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-bold tracking-tight leading-[1.08] font-display mb-6">
                <span className="text-[#0F172A] block sm:inline">WE BUILD DIGITAL EXPERIENCES </span>
                <span className="text-[#005EDA] block sm:inline">THAT HELP BUSINESSES MOVE FORWARD.</span>
              </h1>

              {/* Exact Master Prompt Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                We design and develop modern websites and digital experiences that turn ideas into purposeful digital products.
              </p>

              {/* Button System */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_16px_rgba(0,94,218,0.28)] hover:shadow-[0_6px_22px_rgba(0,94,218,0.4)] transition-all duration-200 active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-all duration-200"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="ml-2 w-4 h-4 text-slate-400 group-hover:text-slate-700" />
                </Link>
              </div>

              {/* Status Bar */}
              <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Available for New Projects</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                  <span>Enterprise Software Standards</span>
                </div>
                <span>•</span>
                <span>Modern React & Node.js Stack</span>
              </div>
            </div>

            {/* Right Column: ~48% width (lg:col-span-6 xl:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
              <HeroVideoVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 02: INTRO / COMPANY OVERVIEW */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-[#005EDA]">
                <span>Company Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display leading-tight">
                Transforming Ambition into Dependable Digital Products.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                {COMPANY_INFO.description}
              </p>
              <p className="text-sm sm:text-base text-slate-500">
                {COMPANY_INFO.mission}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#005EDA] hover:text-[#004BBB] group"
                >
                  <span>Learn more about our approach</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03: SERVICES PREVIEW — EDITORIAL LIST (12 CATEGORIES) */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              badge="Services Directory"
              title="Comprehensive IT & Digital Capabilities."
              description="Twelve specialized disciplines engineered to solve complex operational challenges and deliver modern software."
              className="mb-0 max-w-2xl"
            />
            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#005EDA] bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Editorial List of 12 Services */}
          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-depth-sm">
            {SERVICES_LIST.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group p-5 sm:p-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#005EDA] transition-colors mt-0.5 sm:mt-0">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#005EDA] transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-2xl line-clamp-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex items-center space-x-2 text-xs font-semibold text-slate-400 group-hover:text-[#005EDA] transition-colors self-end sm:self-center">
                  <span className="hidden sm:inline">Explore Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 04: TECHNOLOGY INDEX (IMMEDIATELY AFTER SERVICES) */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="TECHNOLOGY INDEX"
            title="THE TECHNOLOGY BEHIND WHAT WE BUILD."
            description="A practical technology stack used to design, develop, connect and maintain modern digital experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNOLOGIES_DATA.map((cat) => (
              <div
                key={cat.category}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-depth-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-4">
                    <h3 className="text-sm font-mono font-bold text-[#005EDA] uppercase tracking-wider">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cat.items.length} Tech
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.name} className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                        <span className="text-xs font-bold text-slate-800 block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Genuine Verified Stack
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/technology"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#005EDA] hover:underline"
            >
              <span>View full technology index and architectural rationale</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 05: WHY BRAHMANI INFORMATION */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineering Principles"
            title="Why Brahmani Information."
            description="Our foundation is grounded in deliberate design, modern engineering standards, and direct accountability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-depth-sm hover:shadow-depth-md transition-shadow"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-[#005EDA]">
                    {pillar.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 block mt-0.5">
                      {pillar.tagline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#005EDA] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {pillar.metricLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06: SELECTED WORK (EDITORIAL PRESENTATION) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              badge="Selected Case Studies"
              title="Purposeful Engineering in Production."
              description="A selection of real web applications and digital interfaces built with modern component architectures."
              className="mb-0 max-w-2xl"
            />
            <div className="mt-4 md:mt-0">
              <Link
                to="/work"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#005EDA] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WORK_PROJECTS.slice(0, 2).map((proj) => (
              <div
                key={proj.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden shadow-depth-sm hover:shadow-depth-md transition-all group flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[#005EDA] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                      {proj.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {proj.clientType}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display group-hover:text-[#005EDA] transition-colors">
                    {proj.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white px-6 sm:px-8 py-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    {proj.highlight}
                  </span>
                  <Link
                    to="/work"
                    className="font-semibold text-[#005EDA] group-hover:underline inline-flex items-center space-x-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 07: PROCESS PREVIEW */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              badge="Predictable Delivery"
              title="A Structured 7-Stage Process."
              description="From discovery to long-term lifecycle support, our delivery methodology guarantees transparency and technical rigor."
              className="mb-0 max-w-2xl"
            />
            <div className="mt-4 md:mt-0">
              <Link
                to="/process"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#005EDA] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
              >
                <span>Explore Full Process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {PROCESS_STAGES.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-xl border border-slate-200 p-4 space-y-2 shadow-depth-sm"
              >
                <span className="text-xs font-mono font-bold text-[#005EDA] block">
                  {st.step}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                  {st.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 08: ABOUT PREVIEW */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#005EDA] block">
                ABOUT BRAHMANI INFORMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Dedicated to Digital Longevity and Technical Clarity.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                We believe digital products should be built to endure. By uniting human-centered design principles with clean modular code, we help organizations establish reliable digital capabilities that advance their strategic goals.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-colors"
              >
                <span>Read About Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 09: FINAL CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-[#005EDA] mb-5">
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-display mb-6">
            Ready to Build What’s Next?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether launching a new web application or modernizing existing technology, our engineers are prepared to review your requirements and provide architectural guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_16px_rgba(0,94,218,0.28)] hover:shadow-[0_6px_24px_rgba(0,94,218,0.45)] transition-all active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-colors"
            >
              <span>General Inquiries</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
