import React from 'react';
import { SparkleIcon } from '../components/SparkleIcon';
import { TECHNOLOGIES } from '../data/companyData';

export const TechnologySection: React.FC = () => {
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'text-[#3894FF] bg-[#005EDA]/15 border-[#005EDA]/30';
      case 'Backend':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Database':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Design':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section
      id="tech"
      className="relative py-28 lg:py-36 bg-[#020617] border-t border-[#005EDA]/10 overflow-hidden"
      aria-label="Technologies and Expertise"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#001455]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>TECHNICAL FOUNDATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            POWERING DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
              EXPERIENCES.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A purposeful, vetted stack chosen for maintainability, speed, and real-world scalability. No decorative bloat or extraneous dependencies.
          </p>
        </div>

        {/* Minimal Elegant Technology Markers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#051026] to-[#020617] border border-[#005EDA]/25 hover:border-[#3894FF]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,94,218,0.25)] hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border ${getCategoryBadge(tech.category)}`}>
                    {tech.category}
                  </span>

                  {/* Subtle signal dot on hover */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#005EDA] opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#3894FF] transition-all" />
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-[#3894FF] transition-colors">
                  {tech.name}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>STANDARDIZED</span>
                <span className="text-[#3894FF]">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
