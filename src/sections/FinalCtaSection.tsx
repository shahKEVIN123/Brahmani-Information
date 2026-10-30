import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { SparkleIcon } from '../components/SparkleIcon';

interface FinalCtaSectionProps {
  onOpenContactModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContactModal }) => {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);

  return (
    <section
      className="relative py-32 lg:py-44 bg-[#01040f] overflow-hidden border-t border-[#005EDA]/15"
      aria-label="Call to Action"
    >
      {/* Expanding Orbital System reacting to CTA hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* Core signal expanding orbit 1 */}
        <motion.div
          className="rounded-full border border-[#005EDA]/30"
          animate={{
            width: isPrimaryHovered ? [380, 520] : [320, 360],
            height: isPrimaryHovered ? [380, 520] : [320, 360],
            borderColor: isPrimaryHovered ? 'rgba(56, 148, 255, 0.7)' : 'rgba(0, 94, 218, 0.25)',
            boxShadow: isPrimaryHovered ? '0 0 50px rgba(0, 94, 218, 0.5)' : '0 0 20px rgba(0, 94, 218, 0.1)',
          }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Orbit 2 */}
        <motion.div
          className="absolute rounded-full border border-dashed border-[#005EDA]/20"
          animate={{
            width: isPrimaryHovered ? [580, 720] : [500, 560],
            height: isPrimaryHovered ? [580, 720] : [500, 560],
            rotate: 360,
          }}
          transition={{ duration: isPrimaryHovered ? 12 : 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Orbit 3 */}
        <motion.div
          className="absolute rounded-full border border-[#005EDA]/10"
          animate={{
            width: isPrimaryHovered ? [800, 950] : [700, 760],
            height: isPrimaryHovered ? [800, 950] : [700, 760],
          }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Traveling reactive signal dot along outer orbit */}
        <motion.div
          className="absolute w-[500px] h-[500px] pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: isPrimaryHovered ? 4 : 14, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#3894FF] border border-[#005EDA]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Signal beacon */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/40 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-8 shadow-[0_0_20px_rgba(0,94,218,0.3)]">
          <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA] animate-spin duration-3000" />
          <span>CONNECT THE SIGNAL</span>
        </div>

        {/* Headline */}
        <h2 className="text-sm sm:text-base font-mono uppercase tracking-[0.3em] text-[#3894FF] mb-4">
          HAVE AN IDEA?
        </h2>

        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-display mb-10 max-w-4xl mx-auto leading-[1.08]">
          LET’S TURN IT INTO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
            SOMETHING DIGITAL.
          </span>
        </h3>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={onOpenContactModal}
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            className="group relative inline-flex items-center justify-center px-9 py-4 text-sm font-semibold tracking-wide text-white rounded-xl overflow-hidden bg-gradient-to-r from-[#001455] via-[#005EDA] to-[#005EDA] border border-[#3894FF]/50 shadow-[0_0_35px_rgba(0,94,218,0.5)] hover:shadow-[0_0_55px_rgba(0,94,218,0.85)] hover:border-[#3894FF] transition-all duration-300 active:scale-95 w-full sm:w-auto"
          >
            <span className="relative flex items-center space-x-2">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-slate-200 rounded-xl bg-[#051026] hover:bg-[#081a42] border border-[#005EDA]/30 hover:border-[#005EDA]/70 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center space-x-2">
              <span>Get in Touch</span>
              <Send className="w-3.5 h-3.5 text-[#3894FF]" />
            </span>
          </a>
        </div>

        <div className="mt-12 text-xs text-slate-400 font-mono">
          BRAHMANI INFORMATION • ESTABLISHED DIGITAL EXCELLENCE
        </div>

      </div>
    </section>
  );
};
