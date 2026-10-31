import React, { useState } from 'react';
import {
  Compass,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  Activity,
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface DeliveryDiscipline {
  id: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  statusBadge: string;
  badgeTone: 'blue' | 'emerald' | 'purple';
  deliverables: string[];
}

export const PredictableDeliverySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const disciplines: DeliveryDiscipline[] = [
    {
      id: 'discovery-blueprint',
      title: 'Discovery & Blueprint',
      tagline: 'Feasibility & Scope Lock',
      headline: 'De-risking technical decisions before writing code',
      description:
        'We evaluate architectural constraints, establish stakeholder alignment, and map out the complete problem space. This eliminates false starts, clarifies business objectives, and creates an immovable baseline for delivery.',
      statusBadge: 'DISCOVERY MATRIX LOCKED',
      badgeTone: 'emerald',
      deliverables: [
        'Stakeholder Alignment & Scope Lock',
        'Technical Feasibility Blueprint',
        'User Flow & Journey Mapping',
        'Architecture Risk Assessment'
      ]
    },
    {
      id: 'architecture-design',
      title: 'Design Systems & UX',
      tagline: 'UI/UX & Scalable Design Tokens',
      headline: 'Crafting fluid ergonomics, brand systems, and interactive prototypes',
      description:
        'We construct design systems from the atomic level up: responsive layouts, accessible contrast ratios, and modular UI tokens. High-fidelity prototypes allow you to test real interactions before engineering begins.',
      statusBadge: 'WCAG AA VERIFIED',
      badgeTone: 'purple',
      deliverables: [
        'Interactive High-Fidelity Prototypes',
        'Figma Design Token System',
        'Responsive Viewport Matrices',
        'Accessibility & Contrast Standards'
      ]
    },
    {
      id: 'fullstack-engineering',
      title: 'Full-Stack Engineering',
      tagline: 'Clean Code & Modern Stack',
      headline: 'Building scalable, type-safe digital experiences',
      description:
        'Our engineers write modular, maintainable code following strict type safety and modern architectural patterns. We build decoupled frontends and resilient backends designed to scale effortlessly under high load.',
      statusBadge: 'STRICT TYPE INTEGRITY',
      badgeTone: 'blue',
      deliverables: [
        'Modular React & TypeScript Codebase',
        'Type-Safe REST & GraphQL APIs',
        'Optimized Database Schemas',
        'Sub-Second State Synchronization'
      ]
    },
    {
      id: 'automated-qa',
      title: 'Automated QA & Security',
      tagline: 'Zero-Defect Test Automation',
      headline: 'Validating stability, cross-platform performance, and security',
      description:
        'Continuous automated test suites run across unit, integration, and end-to-end tiers on every commit. We enforce zero regression policies and sanitize all inputs against OWASP security benchmarks.',
      statusBadge: 'AUTOMATED SUITE PASSING',
      badgeTone: 'emerald',
      deliverables: [
        'Automated End-to-End Test Matrix',
        'Cross-Browser & Device Verification',
        'Input Sanitization & OWASP Audits',
        'Load Testing & Core Web Vitals'
      ]
    },
    {
      id: 'continuous-deployment',
      title: 'Continuous Deployment',
      tagline: 'Edge Infrastructure & Zero Downtime',
      headline: 'Deploying resilient production releases with instant rollback',
      description:
        'We configure containerized CI/CD deployment pipelines directly to global edge networks. Releases roll out with zero downtime, automated health checks, SSL provisioning, and instantaneous rollback guards.',
      statusBadge: 'EDGE INGRESS ACTIVE',
      badgeTone: 'blue',
      deliverables: [
        'Zero-Downtime Rolling Deployment',
        'Global Anycast CDN Distribution',
        'Automated TLS 1.3 & DNS Provisioning',
        'Instant Version Rollback Safety'
      ]
    },
    {
      id: 'lifecycle-care',
      title: 'Continuous SLA Care',
      tagline: 'Proactive Telemetry & Evolution',
      headline: 'Guaranteed uptime, real-time monitoring, and ongoing support',
      description:
        'We remain your dedicated technology partner long after launch. We monitor uptime round-the-clock, apply proactive security patches, execute daily cloud backups, and deliver continuous feature enhancements.',
      statusBadge: 'SLA GUARANTEED ACTIVE',
      badgeTone: 'emerald',
      deliverables: [
        'Proactive Telemetry & Real-Time Monitoring',
        'Scheduled Dependency & Security Updates',
        'Direct Developer Bug Fix Triage',
        'Daily Automated Cloud Backups'
      ]
    }
  ];

  const icons = [
    Compass,
    Layers,
    Code2,
    ShieldCheck,
    Rocket,
    Activity
  ];

  const currentDiscipline = disciplines[activeTab] || disciplines[0];
  const CurrentIcon = icons[activeTab] || Compass;

  const handleNext = () => {
    setActiveTab((prev) => (prev < disciplines.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : disciplines.length - 1));
  };

  // Render bespoke visual artifact for the selected engineering discipline with uniform height
  const renderDisciplineTelemetry = () => {
    switch (activeTab) {
      case 0: // Discovery & Blueprint
        return (
          <div className="h-full bg-[#151515] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Discovery Matrix Active
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-[#38BDF8] font-semibold border border-blue-400/20">
                Blueprint Scoping
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Feasibility Score
                </span>
                <span className="text-base sm:text-lg font-bold font-display text-white">99.4% High</span>
                <span className="text-[10px] text-emerald-400 block font-medium">
                  ✓ Zero Blockers
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Target Velocity
                </span>
                <span className="text-base sm:text-lg font-bold font-display text-white">Sprint-Based</span>
                <span className="text-[10px] text-[#38BDF8] block font-medium">
                  Milestone Horizons
                </span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-[#191919] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>Architecture Alignment</span>
                <span className="text-[#38BDF8]">100% Mapped</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#005EDA] rounded-full w-full" />
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Full alignment achieved across business goals, tech stack selection, and delivery guarantees.
              </p>
            </div>
          </div>
        );

      case 1: // Design Systems & UX
        return (
          <div className="h-full bg-[#151515] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Figma & Design Tokens
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-400/20">
                WCAG AA Verified
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#191919] border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200">Design System Swatches</span>
                <span className="text-slate-500 font-mono text-[10px]">Tokenized Variables</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex-1 p-1.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-white text-[10px] font-mono text-center font-bold">
                  #0A0A0A
                </div>
                <div className="flex-1 p-1.5 rounded-lg bg-[#005EDA] text-white text-[10px] font-mono text-center font-bold">
                  #005EDA
                </div>
                <div className="flex-1 p-1.5 rounded-lg bg-[#38BDF8] text-slate-900 text-[10px] font-mono text-center font-bold">
                  #38BDF8
                </div>
                <div className="flex-1 p-1.5 rounded-lg bg-[#151515] border border-white/10 text-slate-300 text-[10px] font-mono text-center font-bold">
                  #151515
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Ergonomics
                </span>
                <span className="text-xs font-bold text-white block mt-0.5">
                  Touch & Pointer Optimized
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Transitions
                </span>
                <span className="text-xs font-bold text-[#38BDF8] block mt-0.5">
                  60 FPS Fluid Interactions
                </span>
              </div>
            </div>
          </div>
        );

      case 2: // Full-Stack Engineering
        return (
          <div className="h-full bg-[#111111] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between text-slate-200">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Clean Architecture
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 font-semibold border border-blue-400/20">
                TypeScript 5.7 • Strict
              </span>
            </div>

            <div className="bg-[#070B14] rounded-xl p-3 border border-white/10 font-mono text-[11px] leading-relaxed text-slate-300">
              <div>
                <span className="text-rose-400">export async function</span>{' '}
                <span className="text-blue-400">buildPlatformExperience</span>() &#123;
              </div>
              <div className="pl-4 text-slate-500">// Strict type safety & sub-second latency</div>
              <div className="pl-4">
                <span className="text-purple-400">const</span> engine ={' '}
                <span className="text-rose-400">await</span> initClientRuntime();
              </div>
              <div className="pl-4">
                <span className="text-rose-400">return</span> engine.
                <span className="text-emerald-400">verifyVitalsSLA</span>(&#123; target:{' '}
                <span className="text-amber-400">"Optimal"</span> &#125;);
              </div>
              <div>&#125;</div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5 font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">✓ 0 Errors, 0 Warnings</span>
              <span>Sub-Second HMR Ready</span>
            </div>
          </div>
        );

      case 3: // Automated QA & Security
        return (
          <div className="h-full bg-[#151515] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Automated Test Runner
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-400/20">
                CI Pipeline Passed
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-base sm:text-lg font-bold font-display text-emerald-400">100%</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-emerald-300 block truncate">
                  Tests Passed
                </span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-base sm:text-lg font-bold font-display text-[#38BDF8]">Strict</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-blue-300 block truncate">
                  CI Gate
                </span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-base sm:text-lg font-bold font-display text-white">Zero</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block truncate">
                  Regressions
                </span>
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <div className="p-2 rounded-lg bg-[#191919] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300 text-[11px] truncate">✓ Auth & Session Token Guards</span>
                <span className="text-emerald-400 font-bold text-[11px] shrink-0 ml-1">Passed</span>
              </div>
              <div className="p-2 rounded-lg bg-[#191919] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300 text-[11px] truncate">✓ Cross-Browser Chrome/Safari/Edge</span>
                <span className="text-emerald-400 font-bold text-[11px] shrink-0 ml-1">100%</span>
              </div>
            </div>
          </div>
        );

      case 4: // Continuous Deployment
        return (
          <div className="h-full bg-[#151515] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Edge Cloud Deployment
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-[#38BDF8] font-semibold border border-blue-400/20">
                Ingress Healthy
              </span>
            </div>

            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/30 to-[#191919] border border-blue-500/20 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Global Anycast CDN Ingress</span>
                <span className="text-xs font-mono font-bold text-[#38BDF8]">99.99% Availability</span>
              </div>
              <p className="text-[10px] text-slate-300 leading-tight">
                Zero-downtime containerized rolling deployment completed across distributed edge locations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  SSL Security
                </span>
                <span className="font-bold text-emerald-400 block mt-0.5 text-xs">TLS 1.3 Active (A+)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Code Ownership
                </span>
                <span className="font-bold text-white block mt-0.5 text-xs">100% Handover</span>
              </div>
            </div>
          </div>
        );

      case 5: // Continuous SLA Care
      default:
        return (
          <div className="h-full bg-[#151515] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Continuous Lifecycle Care
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-400/20">
                SLA Guaranteed
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Incident Response
                </span>
                <span className="text-base sm:text-lg font-bold font-display text-white">&lt; 15 Mins</span>
                <span className="text-[10px] text-emerald-400 block font-medium">
                  Zero Open Incidents
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#191919] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Automated Backups
                </span>
                <span className="text-base sm:text-lg font-bold font-display text-white">Daily Snapshots</span>
                <span className="text-[10px] text-[#38BDF8] block font-medium">
                  Continuous Verification
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs space-y-0.5">
              <span className="font-bold text-white block text-xs">Direct Senior Developer Triage</span>
              <p className="text-[10px] text-slate-300 leading-tight">
                Direct access to core engineering talent for iterative enhancements, security updates, and performance tuning.
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
      className="py-20 lg:py-28 bg-[#0E0E0E] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Gradient & Grid in Dark Theme */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6 mb-12 lg:mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA] animate-pulse" />
              <span>PREDICTABLE DELIVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight font-display text-white leading-[1.12]">
              <span>Engineered for Certainty. </span>
              <span className="text-[#005EDA]">Delivered Without Surprises.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mt-3 leading-relaxed">
              We eliminate delivery friction through structured discipline governance, verified milestones, and continuous technical rigor.
            </p>
          </div>
        </div>

        {/* Stable Split Cockpit: Vertical Discipline Selector (Left) + Rock-Solid Execution Console (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Left Column: Interactive Discipline Cards (5 cols) - Stable, no translate jumping */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {disciplines.map((item, idx) => {
              const isActive = activeTab === idx;
              const IconComponent = icons[idx] || Compass;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`group relative p-3.5 sm:p-4 rounded-2xl transition-all duration-200 text-left flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-[#151515] border-[#005EDA] shadow-[0_4px_20px_rgba(0,94,218,0.25)] ring-1 ring-[#005EDA]/50'
                      : 'bg-[#111111] hover:bg-[#151515] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                        isActive
                          ? 'bg-[#005EDA] text-white shadow-md shadow-blue-500/30'
                          : 'bg-white/5 text-slate-400 group-hover:bg-[#005EDA]/20 group-hover:text-[#38BDF8]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div>
                      <h4
                        className={`text-sm font-bold font-display leading-tight transition-colors ${
                          isActive ? 'text-[#38BDF8]' : 'text-white group-hover:text-blue-300'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 font-normal">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="pl-2 shrink-0">
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#005EDA]/20 text-[#38BDF8]'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Rock-Solid Execution Console (7 cols) - Constant Height */}
          <div className="lg:col-span-7 bg-[#111111] rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-5 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[580px] sm:min-h-[600px] lg:min-h-[590px]">
            
            <div className="space-y-4">
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono font-bold text-[#38BDF8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                  <span>{currentDiscipline.statusBadge}</span>
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-400">
                  VERIFIED EXECUTION ARTIFACT
                </span>
              </div>

              {/* Title & Narrative - Fixed Height Container to Prevent Shifting */}
              <div className="space-y-2 min-h-[96px] sm:min-h-[84px] flex flex-col justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 text-[#38BDF8] flex items-center justify-center shrink-0 border border-white/10">
                    <CurrentIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-white tracking-tight line-clamp-1 sm:line-clamp-none">
                    {currentDiscipline.headline}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                  {currentDiscipline.description}
                </p>
              </div>

              {/* Verified Deliverables Matrix - Fixed Height Container */}
              <div className="pt-1 space-y-2 min-h-[104px] sm:min-h-[92px]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Verified Discipline Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {currentDiscipline.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start space-x-2 p-2 sm:p-2.5 rounded-xl bg-[#151515] border border-white/5"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs font-medium text-slate-300 leading-tight truncate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Visual Telemetry Simulation - Uniform 235px Height Box */}
              <div className="pt-1">
                <div className="h-[235px] sm:h-[225px] overflow-hidden">
                  {renderDisciplineTelemetry()}
                </div>
              </div>
            </div>

            {/* Bottom Cockpit Controls - Stable Pinned Footer */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Previous Discipline</span>
                <span className="sm:hidden">Prev</span>
              </button>

              <div className="flex items-center space-x-1.5">
                {disciplines.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTab === i ? 'w-6 bg-[#005EDA]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`View discipline`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#005EDA] hover:bg-[#004BBB] shadow-sm transition-all cursor-pointer"
              >
                <span className="hidden sm:inline">Next Discipline</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Foundation Assurance Cards (Clean High-Trust Value Pillars - Zero Numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-10">
          <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-xs flex items-start space-x-3 hover:border-white/20 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white font-display">Weekly Working Demos</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Regular sprint demonstrations verifying real functional software in staging.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-xs flex items-start space-x-3 hover:border-white/20 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white font-display">Zero Scope Guesswork</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Strict architectural roadmaps that eliminate unexpected roadblocks and delays.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-xs flex items-start space-x-3 hover:border-white/20 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white font-display">100% Code Ownership</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Full source code, repositories, and documentation delivered to you from day one.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#111111] border border-white/10 shadow-xs flex items-start space-x-3 hover:border-white/20 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white font-display">Continuous SLA Care</h5>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Post-launch monitoring, security patches, and 99.99% infrastructure availability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
