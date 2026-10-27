import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Palette, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
import { ORBIT_PILLARS, COMPANY_INFO } from '../data/companyData';
import { SparkleIcon } from '../components/SparkleIcon';

export const AboutSection: React.FC = () => {
  const [activePointKey, setActivePointKey] = useState<string>('IDEA');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Automatically cycle through points periodically if not paused
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActivePointKey((prev) => {
        const currentIndex = ORBIT_PILLARS.findIndex((p) => p.key === prev);
        const nextIndex = (currentIndex + 1) % ORBIT_PILLARS.length;
        return ORBIT_PILLARS[nextIndex].key;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const activePillar = ORBIT_PILLARS.find((p) => p.key === activePointKey) || ORBIT_PILLARS[0];

  const iconMap: Record<string, React.ReactNode> = {
    IDEA: <Lightbulb className="w-5 h-5 text-[#3894FF]" />,
    DESIGN: <Palette className="w-5 h-5 text-[#3894FF]" />,
    TECHNOLOGY: <Cpu className="w-5 h-5 text-[#3894FF]" />,
    IMPACT: <Rocket className="w-5 h-5 text-[#3894FF]" />,
  };

  return (
    <section 
      id="about"
      className="relative py-28 lg:py-36 bg-[#020617] overflow-hidden border-t border-[#005EDA]/10"
      aria-label="About Brahmani Information"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#001455]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#005EDA]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>INFORMATION IN MOTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            ONE IDEA CAN CREATE A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
              DIGITAL JOURNEY.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* The 4-Point Interactive Orbit System */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          
          {/* Left: The Circular Orbit Visualization */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-72 sm:w-96 lg:w-[420px] aspect-square flex items-center justify-center">
              
              {/* Background Circular Orbit Ring */}
              <div className="absolute inset-8 rounded-full border border-[#005EDA]/25 shadow-[0_0_40px_rgba(0,94,218,0.15)]" />
              <div className="absolute inset-16 rounded-full border border-dashed border-[#005EDA]/15 animate-spin duration-[40000ms]" />

              {/* Central Signal Hub */}
              <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#051026] to-[#020617] border border-[#005EDA]/40 shadow-[0_0_30px_rgba(0,94,218,0.3)] flex flex-col items-center justify-center text-center p-3">
                <SparkleIcon className="w-7 h-7 text-[#005EDA] mb-1 animate-pulse" />
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-widest">
                  ORBIT HUB
                </span>
                <span className="text-[9px] text-[#3894FF] font-mono">
                  {activePillar.key} ACTIVE
                </span>
              </div>

              {/* Traveling Signal Dot along the perimeter */}
              <motion.div
                className="absolute inset-8 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_15px_#3894FF]" />
              </motion.div>

              {/* Four Cardinal Orbit Nodes: IDEA (top), DESIGN (right), TECHNOLOGY (bottom), IMPACT (left) */}
              {ORBIT_PILLARS.map((pillar) => {
                const isActive = activePointKey === pillar.key;
                
                let posClass = "";
                if (pillar.key === "IDEA") posClass = "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2";
                if (pillar.key === "DESIGN") posClass = "top-1/2 right-0 translate-x-1/2 -translate-y-1/2";
                if (pillar.key === "TECHNOLOGY") posClass = "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2";
                if (pillar.key === "IMPACT") posClass = "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2";

                return (
                  <button
                    key={pillar.key}
                    onClick={() => {
                      setActivePointKey(pillar.key);
                      setAutoRotate(false);
                    }}
                    className={`absolute ${posClass} z-20 group focus:outline-none focus:ring-2 focus:ring-[#005EDA] rounded-2xl transition-all duration-300`}
                    aria-label={`Select ${pillar.title}`}
                  >
                    <div
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-300 border ${
                        isActive
                          ? 'bg-[#001455] border-[#3894FF] shadow-[0_0_25px_rgba(0,94,218,0.6)] scale-110'
                          : 'bg-[#051026]/90 border-[#005EDA]/30 hover:border-[#005EDA]/60 hover:bg-[#071638]'
                      }`}
                    >
                      <div className="mb-1">
                        {iconMap[pillar.key]}
                      </div>
                      <span className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase font-display ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}>
                        {pillar.key}
                      </span>
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Right: Active Pillar Detail Showcase */}
          <div className="lg:col-span-6">
            <div className="relative bg-gradient-to-br from-[#051026]/90 via-[#020617] to-[#001455]/40 border border-[#005EDA]/30 rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm min-h-[360px] flex flex-col justify-center">
              
              {/* Top signal indicator bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#005EDA]/20">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#005EDA] shadow-[0_0_10px_#005EDA]" />
                  <span className="text-xs uppercase tracking-widest font-mono text-[#3894FF]">
                    STAGE 0{ORBIT_PILLARS.findIndex((p) => p.key === activePointKey) + 1} OF 04
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {autoRotate ? 'AUTOPLAY ACTIVE' : 'MANUAL MODE'}
                </span>
              </div>

              {/* Dynamic Content with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.key}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="space-y-4"
                >
                  <div className="inline-block text-xs font-mono tracking-wider text-[#3894FF] uppercase">
                    {activePillar.subtitle}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {activePillar.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {activePillar.description}
                  </p>

                  <div className="pt-4 flex items-center space-x-3 text-xs text-slate-400 border-t border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#005EDA]" />
                    <span>Engineered for continuous digital continuity and scalability.</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pillar Selector Tabs */}
              <div className="mt-8 pt-4 grid grid-cols-4 gap-2 border-t border-[#005EDA]/15">
                {ORBIT_PILLARS.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => {
                      setActivePointKey(p.key);
                      setAutoRotate(false);
                    }}
                    className={`py-2 px-1 text-center text-[10px] sm:text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
                      activePointKey === p.key
                        ? 'bg-[#005EDA]/20 text-[#3894FF] border border-[#005EDA]/50 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {p.key}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
