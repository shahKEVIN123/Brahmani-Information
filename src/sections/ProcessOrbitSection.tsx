import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparkleIcon } from '../components/SparkleIcon';
import { PROCESS_STAGES } from '../data/companyData';
import { Search, Compass, Palette, Code2, Rocket, CheckCircle } from 'lucide-react';

export const ProcessOrbitSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const stepIcons = [
    <Search className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <Palette className="w-5 h-5" />,
    <Code2 className="w-5 h-5" />,
    <Rocket className="w-5 h-5" />,
  ];

  const activeStage = PROCESS_STAGES[activeStepIndex];

  return (
    <section
      id="process"
      className="relative py-28 lg:py-36 bg-[#020617] border-t border-[#005EDA]/10 overflow-hidden"
      aria-label="Process and Methodology"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#001455]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#005EDA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>THE ORBITAL PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            FROM IDEA TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
              DIGITAL REALITY.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A cohesive five-stage orbital journey where each milestone provides the technical foundation for the next.
          </p>
        </div>

        {/* Continuous 5-Stage Orbital Journey Pipeline */}
        <div className="relative">

          {/* Top Progress Track Bar */}
          <div className="relative mb-12">
            {/* Base line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-[#051026] border-y border-[#005EDA]/20 rounded-full" />

            {/* Active glowing blue progress line */}
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#001455] via-[#005EDA] to-[#3894FF] rounded-full shadow-[0_0_12px_#3894FF]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStepIndex / (PROCESS_STAGES.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {/* Stage Selector Dots */}
            <div className="relative flex items-center justify-between">
              {PROCESS_STAGES.map((stage, idx) => {
                const isCurrent = idx === activeStepIndex;
                const isCompleted = idx < activeStepIndex;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="group relative flex flex-col items-center focus:outline-none"
                    aria-label={`Go to stage ${stage.step} ${stage.title}`}
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${isCurrent
                          ? 'bg-[#005EDA] border-white text-white shadow-[0_0_20px_#3894FF] scale-110'
                          : isCompleted
                            ? 'bg-[#001455] border-[#005EDA] text-[#3894FF]'
                            : 'bg-[#030816] border-[#005EDA]/30 text-slate-500 group-hover:border-[#005EDA]/60'
                        }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-[#3894FF]" />
                      ) : (
                        <span className="text-xs sm:text-sm font-mono font-bold">
                          {stage.step}
                        </span>
                      )}
                    </div>

                    {/* Stage Label under the dot */}
                    <div className="mt-3 text-center hidden sm:block">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider block transition-colors ${isCurrent ? 'text-white' : isCompleted ? 'text-[#3894FF]' : 'text-slate-500'
                        }`}>
                        {stage.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Display Card */}
          <div className="mt-12 bg-gradient-to-br from-[#051026] via-[#020617] to-[#001455]/50 border border-[#005EDA]/40 rounded-3xl p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left: Stage Title and Description */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-full bg-[#005EDA]/20 border border-[#005EDA]/40 text-xs font-mono text-[#3894FF]">
                      ORBITAL STAGE {activeStage.step} OF 05
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {activeStage.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white font-display flex items-center space-x-3">
                    <span>{activeStage.step} — {activeStage.title}</span>
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    {activeStage.description}
                  </p>

                  {/* Navigation controls */}
                  <div className="pt-6 flex items-center space-x-4">
                    <button
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      disabled={activeStepIndex === 0}
                      className="px-4 py-2 rounded-xl text-xs font-mono uppercase bg-[#051026] border border-[#005EDA]/30 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1))}
                      disabled={activeStepIndex === PROCESS_STAGES.length - 1}
                      className="px-4 py-2 rounded-xl text-xs font-mono uppercase bg-[#005EDA] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0066FF] shadow-[0_0_15px_rgba(0,94,218,0.4)] transition-all"
                    >
                      Next Stage →
                    </button>
                  </div>
                </div>

                {/* Right: Key Deliverables of this stage */}
                <div className="lg:col-span-5 bg-[#030816] rounded-2xl p-6 border border-[#005EDA]/20 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#005EDA]/20">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#3894FF]">
                      STAGE DELIVERABLES
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#001455] flex items-center justify-center text-[#3894FF]">
                      {stepIcons[activeStepIndex]}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {activeStage.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                    Systematic verification before advancement to next orbital node.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
