import React from 'react';
import { motion } from 'framer-motion';
import { SparkleIcon } from '../components/SparkleIcon';
import { WHY_POINTS } from '../data/companyData';
import { Target, Layers, Users, TrendingUp } from 'lucide-react';

export const WhySection: React.FC = () => {
  const iconList = [
    <Target className="w-5 h-5 text-[#3894FF]" />,
    <Layers className="w-5 h-5 text-[#3894FF]" />,
    <Users className="w-5 h-5 text-[#3894FF]" />,
    <TrendingUp className="w-5 h-5 text-[#3894FF]" />,
  ];

  return (
    <section
      id="why-us"
      className="relative py-28 lg:py-36 bg-[#020617] border-t border-[#005EDA]/10 overflow-hidden"
      aria-label="Why Brahmani Information"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#001455]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>CORE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            WHY BRAHMANI INFORMATION
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We focus on principled execution, technical integrity, and delivering digital experiences that endure.
          </p>
        </div>

        {/* Continuous Signal Path Pipeline */}
        <div className="relative">

          {/* Desktop Central Signal Conduit Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#001455] via-[#005EDA] to-[#001455] pointer-events-none">
            {/* Glowing moving signal pulse down the conduit */}
            <motion.div
              className="w-2.5 h-16 -ml-[3px] bg-gradient-to-b from-transparent via-[#3894FF] to-transparent rounded-full shadow-[0_0_12px_#3894FF]"
              animate={{ y: [0, 800, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-12 lg:space-y-24">
            {WHY_POINTS.map((point, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={point.title}
                  className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center justify-between gap-8 lg:gap-16`}
                >
                  {/* Content Block */}
                  <div className="w-full lg:w-5/12">
                    <div className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#051026] to-[#020617] border border-[#005EDA]/30 hover:border-[#3894FF]/60 transition-all duration-300 shadow-[0_4px_30px_rgba(0,20,85,0.25)] hover:shadow-[0_0_35px_rgba(0,94,218,0.3)] cursor-pointer">

                      {/* Top Metric Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#001455] border border-[#005EDA]/40 flex items-center justify-center text-[#3894FF]">
                          {iconList[index]}
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#005EDA]/15 border border-[#005EDA]/30 text-[10px] font-mono text-[#3894FF] tracking-widest uppercase">
                          {point.signalMetric}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
                        {point.title}
                      </h3>
                      <p className="text-xs font-mono text-[#3894FF] uppercase tracking-wider mb-3">
                        {point.tagline}
                      </p>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Beacon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#020617] border-2 border-[#005EDA] shadow-[0_0_20px_#005EDA] flex items-center justify-center">
                      <span className="text-xs font-mono font-bold text-white">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Empty counterpart column on desktop to keep alternating balance */}
                  <div className="hidden lg:block lg:w-5/12" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
