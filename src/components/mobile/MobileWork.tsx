import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  Shield,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { OptimizedImage } from '../OptimizedImage';
import { WORK_PROJECTS } from '../../data/companyData';

export const MobileWork: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Enterprise Software', 'Web Application', 'Fintech'];

  const filtered = selectedFilter === 'All'
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => {
        if (selectedFilter === 'Fintech') {
          return p.id === 'noble-finance' || p.category.toLowerCase().includes('finance');
        }
        return p.category.toLowerCase().includes(selectedFilter.toLowerCase());
      });

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header */}
      <section className="px-4 pt-4 pb-6 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
          <span>PRODUCTION CASE STUDIES</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>Purposeful Engineering </span>
          <span className="text-[#005EDA]">in Production.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          Real-world digital applications, loan CRM engines, and operational platforms engineered for performance and reliability.
        </p>

        {/* Filter Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                selectedFilter === cat
                  ? 'bg-[#005EDA] text-white shadow-xs'
                  : 'bg-[#151515] text-slate-400 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Featured Project Card (Noble Finance) */}
      <section className="px-4 space-y-4">
        {filtered.map((project) => {
          const isNoble = project.id === 'noble-finance';
          return (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden shadow-lg transition-all ${
                isNoble
                  ? 'bg-gradient-to-b from-[#181818] to-[#111111] border-blue-500/40 ring-1 ring-blue-500/20'
                  : 'bg-[#141414] border-white/10'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] bg-[#0E0E0E] overflow-hidden border-b border-white/10">
                <OptimizedImage
                  src={project.thumbnail || '/assets/heroes/work-hero.png'}
                  alt={project.name}
                  aspectRatio="16/10"
                  objectFit="cover"
                  priority={isNoble}
                  containerClassName="w-full h-full bg-[#0E0E0E]"
                />
                {isNoble && (
                  <div className="absolute top-3 left-3 bg-[#005EDA] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>FEATURED CASE STUDY</span>
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 space-y-3">
                <div>
                  <h2 className="text-lg font-bold font-display text-white">
                    {project.name}
                  </h2>
                  <div className="text-xs text-[#38BDF8] font-medium mt-0.5">
                    {project.tagline}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-slate-300 bg-[#1F1F1F] border border-white/10 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights / Metrics */}
                {project.highlight && (
                  <div className="bg-[#18202F]/60 border border-blue-500/20 rounded-xl p-2.5 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-200 leading-tight">
                      {project.highlight}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="p-4 pt-2 border-t border-white/5 bg-[#181818] flex items-center justify-between gap-2">
                {project.caseStudyUrl ? (
                  <Link
                    to={project.caseStudyUrl}
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-[#005EDA] active:bg-[#004BBB] text-white text-xs font-semibold shadow-xs"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to="/start-a-project"
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-[#005EDA] active:bg-[#004BBB] text-white text-xs font-semibold shadow-xs"
                  >
                    <span>Request Demo & Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#222] border border-white/10 text-slate-300 active:text-white"
                    aria-label={`Visit ${project.name} live URL`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Bottom CTA */}
      <section className="px-4 pt-8">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-base font-bold text-white font-display">
            Need a high-performance system for your team?
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Let's discuss architecture, data security, and delivery milestones for your organization.
          </p>
          <Link
            to="/start-a-project"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#005EDA] active:bg-[#004BBB]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

