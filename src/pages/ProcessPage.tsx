import React, { useRef } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Compass, Calendar, ShieldCheck, Layers, RefreshCw, Layout, Code2, Rocket, Users, FileCheck } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { PROCESS_STAGES } from '../data/companyData';
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../components/motion/MotionReveal';
import { ScrollSection } from '../components/motion/ScrollSection';
import { InteractiveCard } from '../components/motion/InteractiveCard';
import { ScrollProgressSpine } from '../components/motion/ScrollProgressSpine';
import { MobileProcess } from '../components/mobile/MobileProcess';

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
  const stagesContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* Desktop Experience (Unchanged, 100% Preserved) */}
      <div className="hidden md:block space-y-0">
      
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
            className="btn-shimmer inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        }
        visual={
          <div className="relative w-full max-w-[560px] xl:max-w-[620px] mx-auto select-none flex items-center justify-center">
            <img
              src="/assets/heroes/process-hero.png?v=5"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/process-hero.png?v=5')) {
                  target.src = '/process-hero.png?v=5';
                }
              }}
              alt="Structured Digital Product Engineering Workflow"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        }
      />

      {/* 2. Process Overview & Philosophy */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                Execution Standards
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight mt-1">
                Predictability, Direct Communication, and Zero Guesswork.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Building software succeeds or fails on the clarity of its process. We reject chaotic ad-hoc development in favor of milestone-based roadmaps, continuous integration, and transparent stakeholder check-ins.
              </p>
              <p className="mt-4">
                Every stage of our process is governed by strict acceptance criteria and review gates, ensuring that every wireframe, component, and database model is thoroughly vetted before proceeding.
              </p>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* 3. The Process Stages with Dynamic Scroll-Linked Storytelling Flow */}
      <ScrollSection className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden" viewportAmount={0.1}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Delivery Framework"
            title="Continuous Delivery Journey."
            description="From the first discovery session to long-term operational health, here is how we bring your digital product to life."
            align="center"
          />

          <div ref={stagesContainerRef} className="relative mt-16 space-y-12">
            
            {/* Visual Dynamic Connecting Vertical Spine that illuminates on scroll */}
            <ScrollProgressSpine containerRef={stagesContainerRef} />

            {PROCESS_STAGES.map((stage, idx) => {
              const StageIcon = STAGE_ICONS[stage.title] || Compass;
              return (
                <MotionReveal
                  key={stage.title}
                  preset="fadeUp"
                  duration={0.7}
                  delay={0.05}
                  viewportAmount={0.15}
                  className="relative z-10 flex flex-col md:flex-row items-start md:space-x-8 group"
                >
                  {/* Thematic Icon Badge with Hover Lift */}
                  <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#151515] border border-white/10 group-hover:border-[#005EDA] shadow-[0_4px_16px_rgba(0,94,218,0.25)] flex items-center justify-center text-[#38BDF8] group-hover:text-white group-hover:bg-[#005EDA] mb-4 md:mb-0 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                    <StageIcon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Content Card with Interactive Border Line & Depth */}
                  <div className="flex-1 w-full">
                    <InteractiveCard lineAccent={true} className="rounded-2xl">
                      <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-depth-sm hover:shadow-depth-md transition-all duration-300 space-y-4 group-hover:border-[#005EDA]/50">
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
                          <div>
                            <span className="text-[11px] font-mono text-slate-400 font-semibold block uppercase">
                              Stage 0{idx + 1}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
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
                                className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 bg-[#1A1A1A] p-2.5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0" />
                                <span>{del}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </InteractiveCard>
                  </div>
                </MotionReveal>
              );
            })}
          </div>

        </div>
      </ScrollSection>

      {/* 4. Quality Guarantees */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Delivery Commitments"
            title="What You Can Count On."
            description="Our process is engineered to respect your time, business investments, and intellectual property."
          />

          <MotionStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionStaggerItem>
              <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 h-full hover:border-[#005EDA]/40 transition-colors">
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
              </InteractiveCard>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 h-full hover:border-[#005EDA]/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#38BDF8]" />
                    <span>DIRECT ACCESS</span>
                  </span>
                  <h4 className="text-base font-bold text-white font-display">
                    No Account Layer Lag
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Communicate directly with the architects and engineers writing your code and designing your systems.
                  </p>
                </div>
              </InteractiveCard>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 h-full hover:border-[#005EDA]/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] flex items-center space-x-2">
                    <FileCheck className="w-4 h-4 text-[#38BDF8]" />
                    <span>DOCUMENTED HANDOVER</span>
                  </span>
                  <h4 className="text-base font-bold text-white font-display">
                    Total Code Ownership
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    All intellectual property, documentation, repositories, and build assets are fully owned by your business.
                  </p>
                </div>
              </InteractiveCard>
            </MotionStaggerItem>
          </MotionStagger>

        </div>
      </ScrollSection>

      {/* 5. Process CTA */}
      <ScrollSection className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] border-t border-white/10 text-center" viewportAmount={0.2}>
        <MotionReveal preset="scaleUp" duration={0.7} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Ready to Begin Phase 01?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Start with our structured discovery session. We will examine your requirements and create an architectural blueprint for execution.
          </p>
          <Link
            to="/start-a-project"
            className="btn-shimmer inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all group"
          >
            <span>Initiate Discovery Phase</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionReveal>
      </ScrollSection>
      </div>

      {/* App-Like Mobile Website Experience */}
      <div className="block md:hidden">
        <MobileProcess />
      </div>
    </>
  );
};
