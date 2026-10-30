import React from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { Link, useParams } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { SERVICES_LIST, ServiceDetail } from '../data/companyData';
import { NotFoundPage } from './NotFoundPage';

interface ServiceDetailPageProps {
  slugOverride?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slugOverride }) => {
  const params = useParams<{ slug: string }>();
  const slug = slugOverride || params.slug;

  const serviceIndex = SERVICES_LIST.findIndex((s) => s.slug === slug);
  const service = SERVICES_LIST[serviceIndex];

  if (!service) {
    return <NotFoundPage />;
  }

  // Next and Previous navigation for seamless exploration
  const prevService = serviceIndex > 0 ? SERVICES_LIST[serviceIndex - 1] : SERVICES_LIST[SERVICES_LIST.length - 1];
  const nextService = serviceIndex < SERVICES_LIST.length - 1 ? SERVICES_LIST[serviceIndex + 1] : SERVICES_LIST[0];

  // Topic-specific custom generated raster architectural digital concept images
  const serviceHeroImageMap: Record<string, string> = {
    'web-development': '/assets/services/web-development.png',
    'mobile-app-development': '/assets/services/mobile-app-development.png',
    'ai-machine-learning': '/assets/services/ai-machine-learning.png',
    'data-analytics': '/assets/services/data-analytics.png',
    'ui-ux-design': '/assets/services/ui-ux-design.png',
    'qa-software-testing': '/assets/services/qa-software-testing.png',
    'cloud-devops': '/assets/services/cloud-devops.png',
    'cybersecurity': '/assets/services/cybersecurity.png',
    'crm-erp-solutions': '/assets/services/crm-erp-solutions.png',
    'digital-marketing': '/assets/services/digital-marketing.png',
    'software-development': '/assets/services/software-development.png',
    'maintenance-support': '/assets/services/maintenance-support.png',
  };

  // Tailored Two-Color Heading Treatment
  const renderDualColorTitle = (t: string) => {
    const words = t.split(' ');
    if (words.length <= 1) {
      return (
        <>
          <span className="text-white">{t} </span>
          <span className="text-[#005EDA]">Services</span>
        </>
      );
    }
    const mid = Math.ceil(words.length / 2);
    const part1 = words.slice(0, mid).join(' ');
    const part2 = words.slice(mid).join(' ');
    return (
      <>
        <span className="text-white block sm:inline">{part1} </span>
        <span className="text-[#005EDA] block sm:inline">{part2}</span>
      </>
    );
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Service Hero */}
      <PageHero
        badge={`Service ${service.number} // ${service.title}`}
        title={renderDualColorTitle(service.title)}
        description={service.shortDesc}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/start-a-project"
              className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-[#151515] hover:bg-[#1E1E1E] border border-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Services</span>
            </Link>
          </div>
        }
        visual={
          <HeroImageVisual
            src={serviceHeroImageMap[service.slug] || '/assets/services/web-development.png'}
            alt={`Brahmani Information ${service.title} Architecture and Technology Practice`}
          />
        }
      />

      {/* 2. Overview & Problem/Value Section */}
      <section className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                Overview & Engineering Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight">
                Engineering with Purpose, Precision, and Measurable Longevity.
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                {service.overview}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#151515] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-4 shadow-depth-sm">
                <h3 className="text-sm font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                  Core Architectural Standards
                </h3>
                <div className="space-y-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#005EDA] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Offer (Detailed Sub-Services Breakdown) */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="What We Offer"
            title={`Detailed Capabilities in ${service.title}.`}
            description="Our specialized sub-disciplines ensure granular expertise across every stage of design, engineering, and maintenance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, index) => (
              <div
                key={sub.title}
                className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm hover:border-[#005EDA]/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold block">
                    SUB-SERVICE // 0{index + 1}
                  </span>
                  <h4 className="text-base font-bold text-white font-display">
                    {sub.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#38BDF8]">
                  <span>Brahmani Standard</span>
                  <span>Active Service</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Specialized Delivery Process */}
      <section className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Execution Framework"
            title={`Our Process for ${service.title}.`}
            description="A disciplined, step-by-step roadmap tailored to ensure predictable milestones and exceptional output."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processStages.map((st) => (
              <div
                key={st.step}
                className="bg-[#151515] rounded-2xl border border-white/10 p-6 space-y-3 shadow-depth-sm"
              >
                <span className="text-xs font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-400/20 inline-block">
                  Stage {st.step}
                </span>
                <h4 className="text-base font-bold text-white font-display">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Technologies Used for this Service */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#0A0A0A] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                  Technology Foundation
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  Tools & Technologies for {service.title}
                </h3>
              </div>
              <Link
                to="/technology"
                className="text-xs font-semibold text-[#38BDF8] hover:underline inline-flex items-center space-x-1"
              >
                <span>Full Technology Index</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-[#151515] border border-white/10 text-xs sm:text-sm font-mono text-slate-300 shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Service Navigation: Next & Previous */}
      <section className="py-12 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <Link
              to={`/services/${prevService.slug}`}
              className="group p-5 rounded-2xl bg-[#151515] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#005EDA]/40 transition-all flex items-center space-x-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-[#005EDA] group-hover:border-[#005EDA] transition-colors shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Previous Service ({prevService.number})
                </span>
                <span className="text-sm font-bold text-white group-hover:text-[#005EDA] transition-colors font-display">
                  {prevService.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/services/${nextService.slug}`}
              className="group p-5 rounded-2xl bg-[#151515] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#005EDA]/40 transition-all flex items-center justify-between sm:justify-end sm:space-x-4 text-right"
            >
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Next Service ({nextService.number})
                </span>
                <span className="text-sm font-bold text-white group-hover:text-[#005EDA] transition-colors font-display">
                  {nextService.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-[#005EDA] group-hover:border-[#005EDA] transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 7. Conversion CTA */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Ready to Begin Your {service.title} Project?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Tell us about your technical challenges and goals. We will provide an actionable proposal tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/start-a-project"
              className="inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#151515] hover:bg-[#1E1E1E] border border-white/10 rounded-xl transition-colors"
            >
              <span>General Inquiries</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
