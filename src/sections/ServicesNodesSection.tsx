import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Layout, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData';
import { SparkleIcon } from '../components/SparkleIcon';

interface ServicesNodesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesNodesSection: React.FC<ServicesNodesSectionProps> = ({ onSelectService }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>(SERVICES_DATA[0].id);

  const icons: Record<string, React.ReactNode> = {
    'web-dev': <Globe className="w-5 h-5 text-[#3894FF]" />,
    'web-app': <Code className="w-5 h-5 text-[#3894FF]" />,
    'ui-ux': <Layout className="w-5 h-5 text-[#3894FF]" />,
    'digital-solutions': <ShieldCheck className="w-5 h-5 text-[#3894FF]" />,
  };

  const activeService = SERVICES_DATA.find((s) => s.id === activeNodeId) || SERVICES_DATA[0];

  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 bg-[#020617] border-t border-[#005EDA]/10 overflow-hidden"
      aria-label="Services and Capabilities"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#001455]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#005EDA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#051026] border border-[#005EDA]/30 text-xs font-semibold tracking-widest text-[#3894FF] uppercase mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
            <span>DIGITAL NODES & CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display mb-6">
            PURPOSEFUL DIGITAL SOLUTIONS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#3894FF]">
              ENGINEERED FOR SCALE.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every digital node in our ecosystem represents a specialized technological capability, built around modern standards and intentional design.
          </p>
        </div>

        {/* Unique Interactive Node System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Digital Nodes (Not generic cards) */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeNodeId;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveNodeId(service.id)}
                  onMouseEnter={() => setActiveNodeId(service.id)}
                  className={`relative group cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${isActive
                      ? 'bg-gradient-to-r from-[#001455] to-[#051026] border-[#3894FF] shadow-[0_0_30px_rgba(0,94,218,0.35)] translate-x-2'
                      : 'bg-[#051026]/60 border-[#005EDA]/20 hover:border-[#005EDA]/50 hover:bg-[#071638]'
                    }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveNodeId(service.id);
                    }
                  }}
                >
                  {/* Active orbital perimeter ring on hover/active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNodeGlow"
                      className="absolute -inset-px rounded-2xl border-2 border-[#3894FF] pointer-events-none"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                      {/* Micro traveling signal beacon on the border */}
                      <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#3894FF]" />
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Node Beacon Indicator */}
                      <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${isActive
                          ? 'bg-[#005EDA] text-white shadow-[0_0_15px_#005EDA]'
                          : 'bg-[#051026] border border-[#005EDA]/30 text-slate-300 group-hover:border-[#005EDA]/60'
                        }`}>
                        {icons[service.id]}
                      </div>

                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono tracking-widest text-[#3894FF] uppercase">
                            NODE {service.number}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#3894FF] translate-x-1' : 'text-slate-500 group-hover:text-slate-300'
                      }`} />
                  </div>

                  {/* Short snippet visible on non-active too */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 pl-14 font-normal">
                    {service.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Node Expanded Ecosystem Stage */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-[#051026] via-[#020617] to-[#001455]/50 border border-[#005EDA]/40 rounded-3xl p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-md min-h-[460px] flex flex-col justify-between">

              {/* Background faint orbital compass lines */}
              <div className="absolute right-0 top-0 w-64 h-64 border-b border-l border-[#005EDA]/15 rounded-bl-full pointer-events-none" />

              <div>
                {/* Node Top Navigation Bar */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#005EDA]/20">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 rounded bg-[#005EDA]/20 border border-[#005EDA]/40 text-xs font-mono text-[#3894FF]">
                      SYSTEM NODE {activeService.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ORBIT ANGLE {activeService.orbitAngle}°
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 text-xs text-[#3894FF]">
                    <span className="w-2 h-2 rounded-full bg-[#005EDA] animate-ping" />
                    <span className="font-mono">LIVE STATE</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                        {activeService.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {activeService.fullDesc}
                      </p>
                    </div>

                    {/* Key Deliverables inside the Node */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#3894FF] mb-3">
                        CORE DELIVERABLES & TECHNICAL CAPABILITIES
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#030816] border border-[#005EDA]/20"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#005EDA]/20 flex items-center justify-center mt-0.5 shrink-0">
                              <Check className="w-2.5 h-2.5 text-[#3894FF]" />
                            </div>
                            <span className="text-xs text-slate-200 font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Node Action */}
              <div className="mt-8 pt-6 border-t border-[#005EDA]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center space-x-2">
                  <SparkleIcon className="w-3.5 h-3.5 text-[#005EDA]" />
                  <span>Tailored to project requirements without superfluous complexity.</span>
                </div>

                <button
                  onClick={() => onSelectService(activeService)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#001455] to-[#005EDA] border border-[#3894FF]/40 shadow-[0_0_20px_rgba(0,94,218,0.4)] hover:shadow-[0_0_30px_rgba(0,94,218,0.6)] transition-all"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
