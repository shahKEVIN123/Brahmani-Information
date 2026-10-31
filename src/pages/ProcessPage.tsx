import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Compass, Calendar, ShieldCheck, Layers, RefreshCw, Layout, Code2, Rocket, Users, FileCheck } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { PROCESS_STAGES } from '../data/companyData';

const STAGE_ICONS: Record<string, React.ElementType> = {
  'DISCOVER': Compass,
  'PLAN': Layers,
  'DESIGN': Layout,
  'DEVELOP': Code2,
  'TEST': ShieldCheck,
  'LAUNCH': Rocket,
  'SUPPORT': RefreshCw,
};

export const ProcessPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. Process Hero */}
      <PageHero
        badge="Delivery Methodology"
        title={
          <>
            <span className="text-white block sm:inline">A Disciplined & Predictable </span>
            <span className="text-[#005EDA] block sm:inline">Engineering Process.</span>
          </>
        }
        description="We follow a disciplined, transparent execution framework that bridges initial discovery to launch and continuous lifecycle care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Process', href: '/process' },
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
        visual={<HeroImageVisual src="/assets/heroes/process-hero.png" alt="Structured Digital Product Engineering Workflow" />}
      />

      {/* 2. Process Overview & Philosophy */}
      <section className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                Execution Standards
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight">
                Predictability, Direct Communication, and Zero Guesswork.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Building software succeeds or fails on the clarity of its process. We reject chaotic ad-hoc development in favor of milestone-based roadmaps, continuous integration, and transparent stakeholder check-ins.
              </p>
              <p>
                Every stage of our process is governed by strict acceptance criteria and review gates, ensuring that every wireframe, component, and database model is thoroughly vetted before proceeding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Process Stages */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Delivery Framework"
            title="Continuous Delivery Journey."
            description="From the first discovery session to long-term operational health, here is how we bring your digital product to life."
            align="center"
          />

          <div className="relative mt-16 space-y-12">
            
            {/* Visual Connecting Vertical Line */}
            <div className="hidden md:block absolute top-8 bottom-8 left-[39px] w-0.5 bg-gradient-to-b from-[#005EDA] via-blue-500/40 to-slate-800 -z-0" />

            {PROCESS_STAGES.map((stage) => {
              const StageIcon = STAGE_ICONS[stage.title] || Compass;
              return (
                <div
                  key={stage.title}
                  className="relative z-10 flex flex-col md:flex-row items-start md:space-x-8 group"
                >
                  {/* Thematic Icon Badge */}
                  <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#151515] border border-white/10 group-hover:border-[#005EDA] shadow-[0_4px_16px_rgba(0,94,218,0.25)] flex items-center justify-center text-[#38BDF8] group-hover:text-white group-hover:bg-[#005EDA] mb-4 md:mb-0 group-hover:scale-105 transition-all duration-300">
                    <StageIcon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Content Card with 2.5D Depth */}
                  <div className="flex-1 bg-[#151515] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-depth-sm hover:shadow-depth-md transition-all duration-300 space-y-4">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                          {stage.title}
                        </h3>
                        <span className="text-xs font-medium text-[#38BDF8] block mt-0.5">
                          {stage.subtitle}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-[#38BDF8] self-start sm:self-center bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-md uppercase tracking-wider font-semibold">
                        {stage.title} DISCIPLINE
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-2">
                      <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider block mb-3">
                        Discipline Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.deliverables.map((del) => (
                          <div
                            key={del}
                            className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 bg-[#1A1A1A] p-2.5 rounded-xl border border-white/10"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Quality Guarantees */}
      <section className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Delivery Commitments"
            title="What You Can Count On."
            description="Our process is engineered to respect your time, business investments, and intellectual property."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#38BDF8] flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
                <span>SCOPING RIGOR</span>
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Transparent Milestones
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Clear project roadmaps with measurable completion milestones and regular progress reviews.
              </p>
            </div>

            <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#38BDF8] flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#38BDF8]" />
                <span>DIRECT ACCESS</span>
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Direct Engineer Access
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Communicate directly with the technical architects and engineers building your software, not through layers of account managers.
              </p>
            </div>

            <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#38BDF8] flex items-center space-x-2">
                <FileCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>CLEAN HANDOVER</span>
              </span>
              <h4 className="text-base font-bold text-white font-display">
                Clean Handover & Ownership
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Complete source code, CI/CD pipeline access, and comprehensive technical documentation delivered upon launch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Let's begin with Discovery. We will review your vision and map out the optimal technical path.
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
