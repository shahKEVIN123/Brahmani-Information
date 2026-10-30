import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, Layers, X, Shield, Terminal, Globe } from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { HeroImageVisual } from '../components/HeroImageVisual';
import { WORK_PROJECTS, WorkProject } from '../data/companyData';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<WorkProject | null>(null);

  const categories = ['All', 'Web Application', 'UI/UX Design', 'Digital Solutions'];

  const filteredProjects = selectedCategory === 'All'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-0">
      
      {/* 1. Work Hero */}
      <PageHero
        badge="Case Studies & Work Index"
        title={
          <>
            <span className="text-white block sm:inline">Purposeful Engineering </span>
            <span className="text-[#005EDA] block sm:inline">in Production.</span>
          </>
        }
        description="A curation of web applications, interfaces, and bespoke digital platforms engineered for operational clarity, reliability, and modern performance."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
        ]}
        actions={
          <Link
            to="/start-a-project"
            className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
        visual={
          <HeroImageVisual
            src="/assets/heroes/work-hero.png"
            alt="Brahmani Information Production Digital Product & Dashboard Engineering Showcase"
            frameless={true}
          />
        }
      />

      {/* 2. Portfolio Filter & Editorial Projects List */}
      <section className="py-20 lg:py-28 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-white/10 mb-12">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">
              Filter by Discipline:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#005EDA] text-white shadow-sm'
                    : 'bg-[#151515] text-slate-300 hover:bg-[#1E1E1E] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Large Editorial Project Presentation */}
          <div className="space-y-16">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-[#151515] rounded-3xl border border-white/10 overflow-hidden shadow-depth-sm hover:shadow-depth-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Left Column: Project Narrative & Architectural Details */}
                  <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {project.clientType}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-slate-300">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-slate-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem & Solution Callout */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 text-xs text-slate-400 space-y-1">
                          <span className="font-mono font-bold text-slate-200 uppercase block">
                            The Challenge:
                          </span>
                          <p>{project.challenge}</p>
                        </div>
                        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 text-xs text-slate-400 space-y-1">
                          <span className="font-mono font-bold text-[#38BDF8] uppercase block">
                            Our Solution:
                          </span>
                          <p>{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges & CTA */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-3 py-1 rounded-lg bg-[#1E1E1E] text-slate-300 border border-white/10 shadow-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#38BDF8] hover:underline"
                      >
                        <span>View Project Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                  {/* Right Column: 2.5D Mockup / Interface Canvas */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-8 sm:p-10 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          LIVE ARCHITECTURAL HIGHLIGHT
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                          VERIFIED PRODUCTION
                        </span>
                      </div>

                      <div className="bg-[#151515] rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3 font-mono text-xs">
                        <div className="text-slate-400 text-[11px] pb-1 border-b border-white/10 flex items-center justify-between">
                          <span>telemetry.metric</span>
                          <span className="text-[#38BDF8]">60fps Sync</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed font-sans">
                          "{project.highlight}"
                        </p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          Verified Deliverables:
                        </span>
                        {project.metrics.map((m) => (
                          <div key={m} className="flex items-center space-x-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Brahmani Codebase</span>
                      <span className="text-[#38BDF8]">Zero Regressions</span>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Interactive Project Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#151515] rounded-3xl border border-white/10 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20 inline-block mb-3">
                {activeProjectModal.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                {activeProjectModal.name}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-1">
                {activeProjectModal.tagline}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-400 leading-relaxed border-t border-b border-white/10 py-4">
              <p>{activeProjectModal.description}</p>
              
              <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-200 uppercase block">
                  Key Architectural Metric:
                </span>
                <p className="text-xs text-slate-300 font-medium">
                  {activeProjectModal.highlight}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-200 uppercase block">
                  Technologies Deployed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-[#1E1E1E] text-xs font-mono text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/start-a-project"
                className="inline-flex items-center space-x-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl transition-all"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. Conversion CTA */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Have a Complex Software Challenge?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            We engineer high-performance web applications and digital interfaces built to last. Let's discuss your requirements.
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
