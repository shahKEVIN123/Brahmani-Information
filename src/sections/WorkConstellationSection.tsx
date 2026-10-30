import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { WORK_PROJECTS, WorkProject } from '../data/companyData';
import { SparkleIcon } from '../components/SparkleIcon';

export const WorkConstellationSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative py-28 lg:py-36 bg-[#020617] border-t border-[#005EDA]/10 overflow-hidden"
      aria-label="Selected Work and Digital Constellations"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#001455]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#005EDA]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>DIGITAL CONSTELLATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            SELECTED DIGITAL ARCHITECTURES & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
              SYSTEM INTERFACES.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Floating frames connected across an intelligent digital grid. Each project demonstrates our focus on responsive design, clean code, and intuitive ergonomics.
          </p>
        </div>

        {/* Floating Digital Constellation Frames Grid (Asymmetric staggered composition) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Subtle connecting SVG orbital lines in background */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none -z-0" aria-hidden="true">
            <path
              d="M 250 180 Q 450 320 700 160 T 950 480"
              fill="none"
              stroke="rgba(0, 94, 218, 0.2)"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            <path
              d="M 180 500 Q 520 400 820 620"
              fill="none"
              stroke="rgba(56, 148, 255, 0.15)"
              strokeWidth="1"
            />
          </svg>

          {WORK_PROJECTS.map((project, idx) => {
            const isHovered = hoveredProjectId === project.id;
            const isStaggered = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className={`relative group rounded-3xl transition-all duration-500 ${isStaggered ? 'lg:translate-y-8' : ''
                  }`}
                style={{
                  perspective: '1000px',
                }}
              >
                {/* Outer frame container with tilt interaction */}
                <div
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#051026] via-[#020617] to-[#001455]/40 border transition-all duration-500 overflow-hidden cursor-pointer ${isHovered
                      ? 'border-[#3894FF] shadow-[0_0_40px_rgba(0,94,218,0.35)] -translate-y-2 rotate-1'
                      : 'border-[#005EDA]/25 hover:border-[#005EDA]/50'
                    }`}
                >
                  {/* Blue signal traveling around border on hover */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3894FF] to-transparent animate-pulse" />
                      <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#3894FF]" />
                    </motion.div>
                  )}

                  {/* Project Digital Frame Preview Canvas / Mockup */}
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-[#030816] border border-[#005EDA]/20 overflow-hidden mb-6 flex flex-col">
                    {/* Window Titlebar */}
                    <div className="h-7 px-4 bg-[#051026] border-b border-[#005EDA]/20 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                      </div>
                      <span className="text-[10px] text-slate-400 truncate max-w-[140px]">
                        {project.category}
                      </span>
                    </div>

                    {/* Architectural Preview Graphic */}
                    <div className="flex-1 p-5 flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-signal-grid opacity-20 pointer-events-none" />

                      {/* Abstract Interface Wireframe Preview */}
                      <div className="relative z-10 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-1/3 rounded bg-[#005EDA]/30" />
                          <div className="h-2 w-1/6 rounded bg-[#3894FF]/40" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 py-1">
                          <div className="h-14 rounded-lg bg-[#051026] border border-[#005EDA]/30 p-2 flex flex-col justify-between">
                            <span className="text-[9px] font-mono text-[#3894FF]">TELEMETRY</span>
                            <div className="h-1.5 w-3/4 rounded bg-white/20" />
                          </div>
                          <div className="h-14 rounded-lg bg-[#051026] border border-[#005EDA]/30 p-2 flex flex-col justify-between">
                            <span className="text-[9px] font-mono text-[#3894FF]">STATE</span>
                            <div className="h-1.5 w-1/2 rounded bg-white/20" />
                          </div>
                          <div className="h-14 rounded-lg bg-[#051026] border border-[#005EDA]/30 p-2 flex flex-col justify-between">
                            <span className="text-[9px] font-mono text-[#3894FF]">PIPELINE</span>
                            <div className="h-1.5 w-2/3 rounded bg-white/20" />
                          </div>
                        </div>
                        <div className="h-2 w-full rounded bg-slate-800" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-[#3894FF] uppercase">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        CONSTELLATION 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#3894FF] transition-all">
                      {project.name}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies list */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#020617] text-slate-300 border border-[#005EDA]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Action */}
                    <div className="pt-5 border-t border-[#005EDA]/15 flex items-center justify-between">
                      <span className="text-xs text-slate-400 truncate max-w-[200px]">
                        {project.metricsOrHighlight}
                      </span>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${isHovered
                            ? 'bg-[#005EDA] text-white shadow-[0_0_15px_#005EDA]'
                            : 'bg-[#051026] text-slate-200 border border-[#005EDA]/30 hover:border-[#005EDA]'
                          }`}
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Project Detail Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-[#051026] to-[#020617] border border-[#3894FF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,94,218,0.4)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#020617] text-slate-400 hover:text-white border border-[#005EDA]/30 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#3894FF] uppercase tracking-wider mb-2">
                    <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {selectedProject.name}
                  </h3>
                  <p className="text-sm font-mono text-slate-400 mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#030816] border border-[#005EDA]/20 text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#3894FF] mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#051026] text-slate-200 border border-[#005EDA]/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#001455]/30 border border-[#005EDA]/30 text-xs text-slate-300">
                  <span className="font-bold text-white">Performance Note: </span>
                  {selectedProject.metricsOrHighlight}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#005EDA] hover:bg-[#0066FF] shadow-[0_0_20px_rgba(0,94,218,0.5)] transition-all"
                  >
                    Close Project Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
