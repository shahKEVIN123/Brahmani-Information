import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { SERVICES_LIST } from '../data/companyData';

export const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* Services Hero */}
      <PageHero
        badge="Services Index"
        title={
          <>
            <span className="text-white block sm:inline">Comprehensive Digital & </span>
            <span className="text-[#005EDA] block sm:inline">Technology Solutions.</span>
          </>
        }
        description="Twelve specialized disciplines engineered to solve complex operational challenges, accelerate digital transformation, and deliver modern software products."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
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
        visual={<HeroImageVisual src="/assets/heroes/services-hero.png" alt="Comprehensive Digital and Technology Solutions Architecture" />}
      />

      {/* Main 12 Categories Editorial Index */}
      <section className="py-20 lg:py-28 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="The 12 Disciplines"
            title="Explore Our Core Technology Services."
            description="Select any capability below to explore its dedicated methodology, sub-services breakdown, technological stack, and project deliverables."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.slug}
                className="bg-[#151515] rounded-2xl border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:bg-[#1A1A1A] hover:border-[#005EDA]/60 hover:shadow-depth-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Service Number & Category Indicator */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-400/20">
                      {srv.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      IT Discipline
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#005EDA] transition-colors font-display">
                    {srv.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {srv.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E1E1E] text-slate-300 border border-white/10 shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Direct Link to Dedicated Page */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38BDF8] group-hover:text-[#60A5FA]"
                  >
                    <span>View {srv.title} Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cross-functional Capability Matrix */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Unified Delivery"
            title="How Our Services Interconnect."
            description="Our disciplines operate in harmony to provide end-to-end digital engineering from initial conception to long-term operational health."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm">
              <span className="text-xs font-mono font-bold text-[#38BDF8]">01 // DISCOVERY TO LAUNCH</span>
              <h4 className="text-base font-bold text-white font-display">
                Design & Front-End Synergy
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Our UI/UX designers and front-end developers share tokens and layout systems directly in code, eliminating translation drift and ensuring 100% pixel fidelity.
              </p>
            </div>

            <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm">
              <span className="text-xs font-mono font-bold text-[#38BDF8]">02 // ARCHITECTURE & RESILIENCE</span>
              <h4 className="text-base font-bold text-white font-display">
                Full-Stack & Cloud Integration
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Node.js backends and cloud container infrastructure are engineered together, ensuring zero-latency communication, automated backups, and autoscaling.
              </p>
            </div>

            <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm">
              <span className="text-xs font-mono font-bold text-[#38BDF8]">03 // INTEGRITY & EVOLUTION</span>
              <h4 className="text-base font-bold text-white font-display">
                QA & Continuous Maintenance
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Disciplined regression test suites and scheduled vulnerability patches protect your software against regressions and security exposures long after launch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0E0E0E] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Need Guidance on the Right Capability?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Share your operational objectives with our team. We will identify the optimal combination of technology services for your roadmap.
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
