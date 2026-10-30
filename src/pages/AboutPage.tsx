import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, HeartHandshake, Lightbulb, Compass, Code2 } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { COMPANY_INFO } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. About Hero */}
      <PageHero
        badge="Company Profile"
        title="Engineering Meaningful Digital Experiences with Technical Clarity."
        description="Brahmani Information is a modern IT and digital technology company focused on creating purposeful, scalable, and resilient digital solutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
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
        visual={
          <div className="relative w-full max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-depth-lg p-6 space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <img
                  src="/brahmani-logo-transparent.png"
                  alt="Brahmani Information"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#005EDA] font-semibold uppercase tracking-wider block">
                  Foundational Principle
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Technology should remain understandable and useful to people. We prioritize ergonomics, accessibility, and frictionless operation for every end user."
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-100">
                <span>EST. {COMPANY_INFO.established}</span>
                <span className="text-emerald-600 font-semibold">Active Practice</span>
              </div>
            </div>
          </div>
        }
      />

      {/* 2. Company Introduction */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                badge="Identity & Vision"
                title="A Modern Technology Practice."
                description="We combine thoughtful design, modern technology, and disciplined problem-solving to transform business ideas into dependable digital solutions."
                className="mb-0"
              />

              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  At Brahmani Information, we reject superficial digital trends in favor of durable software engineering and clean ergonomics. Whether developing dynamic web applications, architecting bespoke APIs, or crafting design systems, our focus is always on solving genuine business challenges.
                </p>
                <p>
                  Our work is built on open communication, deterministic project scoping, and structured milestone reviews. We believe in direct collaboration with our partners from initial architecture to production release.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 space-y-6 shadow-depth-sm">
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Core Mission & Vision
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1.5 shadow-sm">
                    <span className="text-xs font-mono font-bold text-[#005EDA] uppercase tracking-wider">
                      Our Mission
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {COMPANY_INFO.mission}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1.5 shadow-sm">
                    <span className="text-xs font-mono font-bold text-[#005EDA] uppercase tracking-wider">
                      Our Vision
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {COMPANY_INFO.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Design + Technology Philosophy */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineering Philosophy"
            title="How Design and Technology Work Together."
            description="Software excels when visual form and technological architecture are developed as one unified discipline."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-depth-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center border border-blue-100">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Intentional Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We design system structures before writing lines of code. This ensures clear data flows, predictable state management, and straightforward maintainability for internal teams.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-depth-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center border border-blue-100">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Ergonomic Precision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interfaces should feel natural and effortless to operate. We prioritize accessible touch targets, legible typography, and intuitive user paths across all viewports.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-depth-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center border border-blue-100">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Modular Code Integrity
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We write clean, modular, and self-documenting code. Standardized component repositories allow software to adapt seamlessly as organizational needs evolve.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Collaborative Approach */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Client Collaboration"
            title="Our Engagement Standards."
            description="We treat every client engagement as a serious technical partnership defined by transparency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] space-y-3">
              <span className="text-xs font-mono font-bold text-[#005EDA]">01 // PRIVACY</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                NDA & Confidentiality
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete intellectual property protection and confidentiality agreements in place before project discussions begin.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] space-y-3">
              <span className="text-xs font-mono font-bold text-[#005EDA]">02 // SCOPE</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Milestone Scoping
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear scope definitions with transparent timelines and measurable deliverables tied to specific validation gates.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] space-y-3">
              <span className="text-xs font-mono font-bold text-[#005EDA]">03 // OWNERSHIP</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                100% Code Handover
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full source code ownership, repository access, and deployment documentation delivered cleanly upon launch.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] space-y-3">
              <span className="text-xs font-mono font-bold text-[#005EDA]">04 // SUPPORT</span>
              <h4 className="text-base font-bold text-slate-900 font-display">
                Lifecycle Continuity
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proactive maintenance, dependency patching, and on-demand engineering to keep your software performant.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display mb-4">
            Partner with Brahmani Information.
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto mb-8">
            Tell us about your project or technical requirements. We will review your goals and provide an architectural roadmap.
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
