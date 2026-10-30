import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Compass,
  Layers,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  Check,
  Activity
} from 'lucide-react';
import { Link } from '../router/Router';
import { PROCESS_STAGES } from '../data/companyData';

export const PredictableDeliverySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stageIcons = [
    Compass,       // 01 Discover
    Layers,        // 02 Plan
    Palette,       // 03 Design
    Code2,         // 04 Develop
    ShieldCheck,   // 05 Test
    Rocket,        // 06 Launch
    LifeBuoy,      // 07 Support
  ];

  const stageBadges = [
    "STAGE 01 // FOUNDATION & OBJECTIVES",
    "STAGE 02 // ARCHITECTURE & MILESTONES",
    "STAGE 03 // UI/UX & DESIGN SYSTEM",
    "STAGE 04 // FULL-STACK DEVELOPMENT",
    "STAGE 05 // QA & ZERO-DEFECT TESTING",
    "STAGE 06 // PRODUCTION DEPLOYMENT",
    "STAGE 07 // 24/7 SUPPORT & EVOLUTION",
  ];

  const currentStageData = PROCESS_STAGES[activeStage] || PROCESS_STAGES[0];
  const CurrentIcon = stageIcons[activeStage] || Compass;

  const handleNext = () => {
    setActiveStage((prev) => (prev < PROCESS_STAGES.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStage((prev) => (prev > 0 ? prev - 1 : PROCESS_STAGES.length - 1));
  };

  // Render bespoke visual artifact for each stage
  const renderStageVisualArtifact = () => {
    switch (activeStage) {
      case 0: // Discover
        return (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-depth-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-700 uppercase">Discovery Matrix Active</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] font-semibold border border-blue-200/60">
                Phase 01 Scoping
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Feasibility Score</span>
                <span className="text-xl font-bold font-display text-slate-900">98.5% High</span>
                <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">✓ Zero Technical Blockers</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Target Velocity</span>
                <span className="text-xl font-bold font-display text-slate-900">6-8 Weeks</span>
                <span className="text-[10px] text-blue-600 block mt-0.5 font-medium">Sprint-Based Milestones</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Problem Space & User Persona Alignment</span>
                <span className="text-[#005EDA]">100% Mapped</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#005EDA] rounded-full w-full" />
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                Full alignment achieved across stakeholder goals, technical constraints, and measurable business deliverables.
              </p>
            </div>
          </div>
        );

      case 1: // Plan
        return (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-depth-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#005EDA]" />
                <span className="font-mono text-xs font-bold text-slate-700 uppercase">Architecture Blueprint</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] font-semibold border border-blue-200/60">
                Roadmap Locked
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/70 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">Sprint 1–2: Database & API Foundations</div>
                  <div className="text-[10px] text-slate-500 font-sans mt-0.5">Schema modeling, auth guards & REST endpoints</div>
                </div>
                <span className="text-[11px] font-bold text-[#005EDA]">Milestone A</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">Sprint 3–4: Component System & Client Views</div>
                  <div className="text-[10px] text-slate-500 font-sans mt-0.5">React 19 views, state managers & responsive UI</div>
                </div>
                <span className="text-[11px] font-bold text-slate-600">Milestone B</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">Sprint 5–6: End-to-End QA & Staging Rollout</div>
                  <div className="text-[10px] text-slate-500 font-sans mt-0.5">Automated test matrix, regression validation & staging</div>
                </div>
                <span className="text-[11px] font-bold text-slate-600">Milestone C</span>
              </div>
            </div>
          </div>
        );

      case 2: // Design
        return (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-depth-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span className="font-mono text-xs font-bold text-slate-700 uppercase">Figma & Design Tokens</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                WCAG AA Verified
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Design System Palette</span>
                <span className="text-slate-400 font-mono text-[10px]">Tokenized Swatches</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 p-2 rounded-lg bg-[#0F172A] text-white text-[10px] font-mono text-center font-bold">#0F172A</div>
                <div className="flex-1 p-2 rounded-lg bg-[#005EDA] text-white text-[10px] font-mono text-center font-bold">#005EDA</div>
                <div className="flex-1 p-2 rounded-lg bg-[#38BDF8] text-slate-900 text-[10px] font-mono text-center font-bold">#38BDF8</div>
                <div className="flex-1 p-2 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-700 text-[10px] font-mono text-center font-bold">#F8FAFC</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Interactive Frame</span>
                <span className="text-sm font-bold text-slate-900 block mt-0.5">375pt Mobile & 1440pt Desktop</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Motion Rate</span>
                <span className="text-sm font-bold text-[#005EDA] block mt-0.5">60 FPS Fluid Transitions</span>
              </div>
            </div>
          </div>
        );

      case 3: // Develop
        return (
          <div className="bg-[#0F172A] rounded-2xl border border-slate-800 p-6 shadow-depth-sm text-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase">Clean Code Engineering</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/60">
                TypeScript 5.7 • Strict
              </span>
            </div>

            <div className="bg-[#070B14] rounded-xl p-3.5 border border-slate-800 font-mono text-[11px] leading-relaxed text-slate-300">
              <div><span className="text-rose-400">export async function</span> <span className="text-blue-400">buildPlatformExperience</span>() &#123;</div>
              <div className="pl-4 text-slate-400">// Strict type safety & sub-second latency</div>
              <div className="pl-4"><span className="text-purple-400">const</span> app = <span className="text-rose-400">await</span> initClientEngine();</div>
              <div className="pl-4"><span className="text-rose-400">return</span> app.<span className="text-emerald-400">verifyVitalsSLA</span>(&#123; target: <span className="text-amber-400">99</span> &#125;);</div>
              <div>&#125;</div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/80 font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">✓ 0 Errors, 0 Warnings</span>
              <span>Compiled in 184ms</span>
            </div>
          </div>
        );

      case 4: // Test
        return (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-depth-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold text-slate-700 uppercase">QA Test Automation Suite</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                Build #2490 Passed
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70">
                <span className="text-lg font-bold font-display text-emerald-700">100%</span>
                <span className="text-[10px] font-mono text-emerald-800 block mt-0.5">Tests Passed</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/70">
                <span className="text-lg font-bold font-display text-[#005EDA]">96.8%</span>
                <span className="text-[10px] font-mono text-blue-800 block mt-0.5">Code Coverage</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-lg font-bold font-display text-slate-900">0</span>
                <span className="text-[10px] font-mono text-slate-500 block mt-0.5">Regressions</span>
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <span className="text-slate-800">✓ Auth & JWT Validation</span>
                <span className="text-emerald-600 font-bold">Passed (24ms)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <span className="text-slate-800">✓ Cross-Browser Chrome/Safari/Edge</span>
                <span className="text-emerald-600 font-bold">100% Matched</span>
              </div>
            </div>
          </div>
        );

      case 5: // Launch
        return (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-depth-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-700 uppercase">Production Cloud Rollout</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#005EDA] font-semibold border border-blue-200/60">
                Live & Healthy
              </span>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-slate-50 border border-blue-100 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Global Anycast CDN Ingress</span>
                <span className="text-xs font-mono font-bold text-[#005EDA]">99.99% Uptime</span>
              </div>
              <p className="text-[11px] text-slate-600">Zero-downtime containerized rolling deployment completed across all edge locations.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">SSL Certificate</span>
                <span className="font-bold text-emerald-600 block mt-0.5">TLS 1.3 Active (A+)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Code Ownership</span>
                <span className="font-bold text-slate-900 block mt-0.5">100% Full Handover</span>
              </div>
            </div>
          </div>
        );

      case 6: // Support
      default:
        return (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-depth-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold text-slate-700 uppercase">Continuous Lifecycle Care</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                SLA Guaranteed
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">MTTR Resolution</span>
                <span className="text-xl font-bold font-display text-slate-900">&lt; 15 Mins</span>
                <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">0 Open Incidents</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Daily Backups</span>
                <span className="text-xl font-bold font-display text-slate-900">Verified</span>
                <span className="text-[10px] text-blue-600 block mt-0.5 font-medium">Automated Cloud Snapshots</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200/60 text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Direct Engineer Triage</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Direct access to core engineering talent for iterative feature enhancements, framework updates, and ongoing optimizations.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="predictable-delivery"
      aria-label="Predictable Delivery"
      className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Subtle Gradient & Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-40" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-slate-200 gap-6 mb-10 lg:mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-[#005EDA] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
              <span>PREDICTABLE DELIVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight font-display text-slate-900 leading-[1.12]">
              <span>A Structured </span>
              <span className="text-[#005EDA]">7-Stage Delivery Journey.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-3 leading-relaxed">
              From initial discovery to long-term lifecycle care, our delivery methodology guarantees transparency, continuous testing, and technical rigor.
            </p>
          </div>
        </div>

        {/* Interactive 7-Stage Stepper Track */}
        <div className="relative mb-10 sm:mb-12">
          {/* Connecting Track Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200/80 -translate-y-1/2 -z-0 rounded-full" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3 relative z-10">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              const Icon = stageIcons[idx] || Compass;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`group relative p-3 sm:p-3.5 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#005EDA] shadow-[0_10px_25px_rgba(0,94,218,0.18)] -translate-y-1 ring-2 ring-blue-500/10'
                      : 'bg-white/80 hover:bg-white border-slate-200/90 hover:border-blue-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#005EDA] text-white shadow-md shadow-blue-500/30'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#005EDA]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#005EDA]' : 'text-slate-400'}`}>
                      {stage.step}
                    </span>
                  </div>

                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold font-display leading-tight ${isActive ? 'text-[#005EDA]' : 'text-slate-900 group-hover:text-blue-600'}`}>
                      {stage.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-medium">
                      {stage.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Stage Showcase Console (Interactive Dual-Panel Flight Deck) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 items-stretch">
            
            {/* Left Console: Detailed Scope & Deliverables (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-bold text-[#005EDA]">
                    <span>{stageBadges[activeStage]}</span>
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    Phase {currentStageData.step} of 07
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
                      {currentStageData.title}: <span className="text-[#005EDA] font-normal">{currentStageData.subtitle}</span>
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {currentStageData.description}
                  </p>
                </div>

                {/* Key Deliverables Check-List */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Verified Stage Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStageData.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                      >
                        <div className="w-4 h-4 rounded-full bg-blue-100 text-[#005EDA] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Console Stepper Action Bar */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-1.5">
                  {PROCESS_STAGES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStage === i ? 'w-6 bg-[#005EDA]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#005EDA] hover:bg-[#004BBB] shadow-sm transition-all"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Console: Live Digital Artifact Preview (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-slate-50/50 flex flex-col justify-center">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>STAGE ARTIFACT PREVIEW</span>
                  <span className="text-[#005EDA] font-bold">LIVE TELEMETRY</span>
                </div>
                {renderStageVisualArtifact()}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Foundation Assurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-10">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 font-display">Weekly Working Demos</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Regular sprint demonstrations verifying actual progress.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 font-display">Zero Scope Guesswork</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Strict architectural roadmaps preventing surprise delays.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#005EDA] flex items-center justify-center shrink-0 mt-0.5">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 font-display">100% Code Ownership</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Full source code, repositories, and documentation handover.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 font-display">Continuous SLA Care</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Post-launch monitoring, security patches & uptime guarantees.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
