import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SpaceUniverseBackground } from '../components/SpaceUniverseBackground';
import { CelestialOrbitalPlanet } from '../components/CelestialOrbitalPlanet';
import { SparkleIcon } from '../components/SparkleIcon';

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  // Staggered cinematic entrance stages:
  // 1: Brand beacon -> 2: Headline L1 -> 3: Headline L2 -> 4: Description -> 5: CTAs & Metadata -> 6: Fully activated
  const [activationStage, setActivationStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setActivationStage(1), 100);
    const t2 = setTimeout(() => setActivationStage(2), 250);
    const t3 = setTimeout(() => setActivationStage(3), 420);
    const t4 = setTimeout(() => setActivationStage(4), 620);
    const t5 = setTimeout(() => setActivationStage(5), 820);
    const t6 = setTimeout(() => setActivationStage(6), 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#030713]"
      aria-label="Hero Introduction"
    >
      {/* 1. Cinematic Multi-Layered Space Universe Background */}
      <SpaceUniverseBackground />

      {/* 2. Main Hero Content & Celestial Ecosystem Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Typography & Call-To-Action Actions */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left">

            {/* Step 1: Small Brand Label with Active Cosmic Signal Beacon */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={activationStage >= 1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-3 mb-6"
            >
              <div className="relative flex items-center justify-center">
                {/* Active pulsating signal beacon */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46D9FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008CFF] shadow-[0_0_12px_#008CFF]"></span>
                </span>
              </div>
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#A8B5CC] font-display">
                BRAHMANI INFORMATION
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[#126BFF] via-[#46D9FF]/60 to-transparent" />
            </motion.div>

            {/* Step 2 & 3: Main Headline — Cinematic Reveal */}
            <div className="relative overflow-hidden mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] xl:text-[4.6rem] font-bold tracking-tight text-[#F5F8FF] leading-[1.06] font-display">
                {/* Line 1 */}
                <motion.span
                  initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
                  animate={activationStage >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  BUILDING WHAT’S
                </motion.span>

                {/* Line 2 with Electric-Blue & Cyan Luminous Gradient */}
                <motion.span
                  initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
                  animate={activationStage >= 3 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F8FF] to-[#46D9FF]"
                >
                  NEXT IN DIGITAL.

                  {/* Subtle underlying blue cosmic energy streak */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={activationStage >= 3 ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#126BFF] via-[#008CFF] to-[#46D9FF] origin-left shadow-[0_0_12px_#008CFF]"
                  />
                </motion.span>
              </h1>
            </div>

            {/* Step 4: Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={activationStage >= 4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-[#A8B5CC] max-w-xl leading-relaxed mb-10 font-normal"
            >
              We create modern digital experiences and technology solutions designed to turn ideas into meaningful digital products.
            </motion.p>

            {/* Step 5: Upgraded Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={activationStage >= 5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
            >
              {/* Primary CTA: Start a Project */}
              <button
                onClick={onOpenContactModal}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white rounded-xl overflow-hidden bg-gradient-to-r from-[#126BFF] via-[#008CFF] to-[#005EDA] border border-[#46D9FF]/40 shadow-[0_0_30px_rgba(0,140,255,0.4)] hover:shadow-[0_0_45px_rgba(70,217,255,0.65)] hover:border-[#46D9FF] transition-all duration-300 active:scale-95"
              >
                {/* Light sweep gleam on hover */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative flex items-center space-x-2">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#F5F8FF] group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </button>

              {/* Secondary CTA: Explore Our Work */}
              <a
                href="#work"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-[#F5F8FF] rounded-xl bg-[#050B1B]/80 hover:bg-[#07152D] border border-[#126BFF]/35 hover:border-[#46D9FF]/70 hover:shadow-[0_0_25px_rgba(0,140,255,0.3)] transition-all duration-300 backdrop-blur-md"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Our Work</span>
                  <SparkleIcon className="w-3.5 h-3.5 text-[#46D9FF] group-hover:scale-125 group-hover:rotate-45 transition-all duration-300" />
                </span>
              </a>
            </motion.div>

            {/* Step 5: Supporting Metadata with Cosmic Status Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={activationStage >= 5 ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 sm:mt-14 pt-8 border-t border-[#126BFF]/15 flex flex-wrap items-center gap-6 sm:gap-7 text-xs text-[#A8B5CC]"
            >
              <div className="flex items-center space-x-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#008CFF] shadow-[0_0_8px_#008CFF]" />
                <span className="tracking-wider uppercase font-medium">Brahmani Digital Ecosystem</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center space-x-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#46D9FF] shadow-[0_0_8px_#46D9FF]" />
                <span className="tracking-wider uppercase font-medium">Continuous Digital Motion</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center space-x-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="tracking-wider uppercase font-medium">Available for New Projects</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Signature Futuristic Celestial Energy Planet & Orbital System */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
              animate={activationStage >= 4 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center"
            >
              <CelestialOrbitalPlanet />
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Smooth Interstellar Transition to Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #030713 100%)',
        }}
      />
    </section>
  );
};
