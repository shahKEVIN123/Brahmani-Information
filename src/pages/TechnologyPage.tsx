import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Server, Database, Palette, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { TECHNOLOGIES_DATA } from '../data/companyData';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. Technology Hero */}
      <PageHero
        badge="Technology Index"
        title="THE TECHNOLOGY BEHIND WHAT WE BUILD."
        description="A practical, battle-tested technology stack used to design, develop, connect and maintain modern digital experiences."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Technology', href: '/technology' },
        ]}
        actions={
          <Link
            to="/start-a-project"
            className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* 2. Architectural Philosophy: Why This Stack */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold text-[#005EDA] uppercase tracking-wider block">
                Disciplined Tool Selection
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display leading-tight">
                Tools Chosen for Speed, Stability, and Maintainability.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We select technologies that have proven their reliability in production environments. Rather than pursuing ephemeral novelty, our architecture relies on battle-tested frameworks with strong developer ecosystems and long-term support.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 space-y-4 shadow-depth-sm">
                <h3 className="text-sm font-mono font-bold text-[#005EDA] uppercase tracking-wider">
                  Core Architectural Benchmarks
                </h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span><strong>Component Reusability:</strong> Declarative React modularity ensuring zero redundant code.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span><strong>Asynchronous Non-Blocking IO:</strong> Node.js server runtimes optimized for concurrent operations.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span><strong>Schema Resiliency:</strong> Flexible MongoDB document structures that adapt to evolving business models.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                    <span><strong>Design-to-Code Parity:</strong> Direct token synchronization from Figma components into CSS/Tailwind.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Categorized Editorial Technology Rows */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            badge="Stack Directory"
            title="Categorized Technology Index."
            description="Detailed breakdown of each tier of our engineering stack: frontend, backend, database, and design."
          />

          {TECHNOLOGIES_DATA.map((cat, idx) => (
            <div
              key={cat.category}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-depth-sm space-y-8"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center border border-blue-100 font-mono font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      {cat.category} Architecture
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold text-[#005EDA] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 self-start sm:self-center">
                  Production Verified
                </span>
              </div>

              {/* Technologies Grid in this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-slate-900 font-display">
                        {tech.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        {tech.role}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 4. Engineering Standards */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineering Hygiene"
            title="Code Quality & Delivery Standards."
            description="Our engineering guidelines ensure every project meets enterprise standards for security and longevity."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-3 shadow-depth-sm">
              <span className="text-xs font-mono font-bold text-[#005EDA]">01 // SEMANTIC MARKUP</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Semantic & Accessible HTML
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Proper DOM heading hierarchy, ARIA roles, and high contrast compliant with WCAG 2.1 AA accessibility guidelines.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-3 shadow-depth-sm">
              <span className="text-xs font-mono font-bold text-[#005EDA]">02 // PERFORMANCE</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Core Web Vitals Optimization
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Minified asset bundles, sub-second initial server responses, and lazy loading ensuring rapid page rendering.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-3 shadow-depth-sm">
              <span className="text-xs font-mono font-bold text-[#005EDA]">03 // RESILIENCE</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Clean Error Boundaries
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Defensive programming, client-side error boundaries, and sanitized input validation guarding against exceptions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
            Build with Modern, Reliable Technology.
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-8">
            Let us engineer a fast, secure, and maintainable software foundation for your organization.
          </p>
          <Link
            to="/start-a-project"
            className="inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
