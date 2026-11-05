import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Server, Database, Palette, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { TechIcon } from '../components/TechnologyIcons';
import { TECHNOLOGIES_DATA } from '../data/companyData';
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../components/motion/MotionReveal';
import { ScrollSection } from '../components/motion/ScrollSection';
import { InteractiveCard } from '../components/motion/InteractiveCard';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. Technology Hero */}
      <PageHero
        badge="Technology Index"
        title={
          <>
            <span className="text-white block sm:inline">THE TECHNOLOGY BEHIND </span>
            <span className="text-[#005EDA] block sm:inline">WHAT WE BUILD.</span>
          </>
        }
        description="A practical, battle-tested technology stack used to design, develop, connect and maintain modern digital experiences."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Technology', href: '/technology' },
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
          <HeroImageVisual
            src="/assets/heroes/technology-hero.png?v=4"
            fallbackSrc="/technology-hero.png?v=4"
            alt="Connected Multi-Tier Technology Stack and Enterprise Architecture"
            objectFit="contain"
            aspectRatio="aspect-[3/2]"
          />
        }
      />

      {/* 2. Architectural Philosophy: Why This Stack */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                Disciplined Tool Selection
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display leading-tight mt-1">
                Tools Chosen for Speed, Stability, and Maintainability.
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed pt-2">
                We select technologies that have proven their reliability in production environments. Rather than pursuing ephemeral novelty, our architecture relies on battle-tested frameworks with strong developer ecosystems and long-term support.
              </p>
            </div>

            <div className="lg:col-span-6">
              <InteractiveCard lineAccent={true} className="rounded-2xl">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-8 space-y-4 shadow-depth-sm">
                  <h3 className="text-sm font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                    Core Architectural Benchmarks
                  </h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Component Reusability:</strong> Declarative React modularity ensuring zero redundant code.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Asynchronous Non-Blocking IO:</strong> Node.js server runtimes optimized for concurrent operations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Schema Resiliency:</strong> Flexible MongoDB document structures that adapt to evolving business models.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                      <span><strong className="text-white">Design-to-Code Parity:</strong> Direct token synchronization from Figma components into CSS/Tailwind.</span>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* 3. Categorized Editorial Technology Rows */}
      <ScrollSection className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-white/10" viewportAmount={0.12}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            badge="Stack Directory"
            title="Categorized Technology Index."
            description="Detailed breakdown of each tier of our engineering stack across frontend, backend, design, database, infrastructure, and security."
          />

          {TECHNOLOGIES_DATA.map((cat) => {
            const getCategoryIcon = (category: string) => {
              switch (category) {
                case 'Frontend':
                  return Code2;
                case 'Backend':
                  return Server;
                case 'Design':
                  return Palette;
                case 'Database':
                  return Database;
                case 'DevOps & Infrastructure':
                  return Cpu;
                case 'Security & Authentication':
                  return ShieldCheck;
                default:
                  return Code2;
              }
            };
            const CategoryIcon = getCategoryIcon(cat.category);

            return (
              <MotionReveal
                key={cat.category}
                preset="fadeUp"
                duration={0.7}
                viewportAmount={0.1}
                className="bg-[#151515] rounded-3xl border border-white/10 p-8 sm:p-10 shadow-depth-sm space-y-8"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-5 gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#38BDF8] flex items-center justify-center border border-blue-400/20 shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {cat.category} Architecture
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#38BDF8] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20 self-start sm:self-center">
                    Production Verified
                  </span>
                </div>

                {/* Technologies Grid in this category */}
                <MotionStagger staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {cat.items.map((tech) => (
                    <MotionStaggerItem key={tech.name}>
                      <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                        <div className="group p-6 rounded-2xl bg-[#1A1A1A] hover:bg-[#1E1E1E] border border-white/10 hover:border-[#005EDA]/60 space-y-3 shadow-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 h-full">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-11 h-11 rounded-xl bg-[#151515] border border-white/10 shadow-sm p-2 flex items-center justify-center shrink-0 group-hover:border-[#005EDA]/50 group-hover:scale-105 transition-all">
                                <TechIcon name={tech.name} className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110" />
                              </div>
                              <h4 className="text-lg font-bold text-white font-display group-hover:text-[#005EDA] transition-colors">
                                {tech.name}
                              </h4>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 bg-[#151515] px-2.5 py-0.5 rounded border border-white/10">
                              {tech.role}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </InteractiveCard>
                    </MotionStaggerItem>
                  ))}
                </MotionStagger>
              </MotionReveal>
            );
          })}

        </div>
      </ScrollSection>

      {/* 4. Engineering Standards */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Engineering Hygiene"
            title="Code Quality & Delivery Standards."
            description="Our engineering guidelines ensure every project meets enterprise standards for security and longevity."
          />

          <MotionStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionStaggerItem>
              <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm h-full hover:border-[#005EDA]/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#38BDF8]">01 // SEMANTIC MARKUP</span>
                  <h4 className="text-base font-bold text-white font-display">
                    Semantic & Accessible HTML
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Proper DOM heading hierarchy, ARIA roles, and high contrast compliant with WCAG 2.1 AA accessibility guidelines.
                  </p>
                </div>
              </InteractiveCard>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm h-full hover:border-[#005EDA]/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#38BDF8]">02 // PERFORMANCE</span>
                  <h4 className="text-base font-bold text-white font-display">
                    Sub-Second Core Web Vitals
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Granular bundle splitting, WebP/AVIF asset compression, and zero unnecessary script bloat to guarantee sub-second LCP.
                  </p>
                </div>
              </InteractiveCard>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <InteractiveCard lineAccent={true} className="rounded-2xl h-full">
                <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm h-full hover:border-[#005EDA]/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#38BDF8]">03 // RESILIENCY</span>
                  <h4 className="text-base font-bold text-white font-display">
                    Fault-Tolerant Error Handling
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Client-side error boundaries, automated health retries, and graceful fallbacks preventing crashes in unexpected edge cases.
                  </p>
                </div>
              </InteractiveCard>
            </MotionStaggerItem>
          </MotionStagger>

        </div>
      </ScrollSection>

      {/* 5. Technology CTA */}
      <ScrollSection className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] border-t border-white/10 text-center" viewportAmount={0.2}>
        <MotionReveal preset="scaleUp" duration={0.7} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Evaluate Your Architecture with Our Engineers.
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Whether migrating an existing legacy codebase or building from scratch, we provide technical architecture audits and recommendations.
          </p>
          <Link
            to="/start-a-project"
            className="btn-shimmer inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all group"
          >
            <span>Request Architecture Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionReveal>
      </ScrollSection>

    </div>
  );
};
