import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Layers,
  Code2,
  Terminal,
  Laptop,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Link } from '../router/Router';

export const HeroWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const steps = [
    {
      id: 'ui-design',
      stepNum: '01',
      title: 'UI Design',
      icon: Layers,
      badge: 'Figma Architecture',
      description: 'Systematic wireframing, typography tokens & auto-layout component library.',
    },
    {
      id: 'coding',
      stepNum: '02',
      title: 'Coding',
      icon: Code2,
      badge: 'TypeScript / React',
      description: 'Clean modular component engineering with strict typing and responsive hooks.',
    },
    {
      id: 'development',
      stepNum: '03',
      title: 'Development',
      icon: Terminal,
      badge: 'Vite / Tailwind Build',
      description: 'Sub-millisecond HMR compilation and asset bundle optimization.',
    },
    {
      id: 'browser-preview',
      stepNum: '04',
      title: 'Browser Preview',
      icon: Laptop,
      badge: 'Multi-Device Viewport',
      description: 'Responsive testing across 360px mobile, tablet and 4K desktop displays.',
    },
    {
      id: 'finished-website',
      stepNum: '05',
      title: 'Finished Website',
      icon: CheckCircle2,
      badge: 'Production Deployed',
      description: 'Production Brahmani Information digital experience ready for high performance.',
    },
  ];

  // Auto-advance workflow timeline like a video
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="relative w-full select-none">
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Container */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-100/70 via-indigo-50/50 to-blue-50/70 rounded-3xl blur-xl -z-10" />

      {/* Main Workstation / Browser Frame */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12),0_4px_12px_rgba(0,94,218,0.04)] overflow-hidden transition-all duration-300">
        
        {/* Browser Top Chrome Header */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
          
          {/* Window Traffic Lights */}
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[11px] font-mono text-slate-500 font-medium hidden sm:inline">
              brahmani-workflow.workspace
            </span>
          </div>

          {/* Center Address Pill */}
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white border border-slate-200/80 text-[11px] text-slate-600 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>brahmani-information.com/{steps[activeStep].id}</span>
          </div>

          {/* Workflow Status Badge */}
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-[#005EDA] border border-blue-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA] animate-pulse" />
              <span>Step {steps[activeStep].stepNum}/05</span>
            </span>
          </div>
        </div>

        {/* Video or Interactive Development Workflow Display Canvas */}
        <div className="relative aspect-[16/10] sm:aspect-[16/10.2] bg-slate-900 text-slate-100 overflow-hidden flex flex-col justify-between">
          
          {/* Optional Video Source Container (Preserved if video file exists) */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover ${videoAvailable ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}`}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setVideoAvailable(true)}
            onError={() => setVideoAvailable(false)}
          >
            <source src="/hero-workflow.mp4" type="video/mp4" />
            <source src="/assets/hero-workflow.mp4" type="video/mp4" />
          </video>

          {/* High-Fidelity Interactive Development Workflow Simulator */}
          <div className="relative z-0 w-full h-full p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#0A1128]">
            
            {/* Top Workspace Stage Banner */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                {React.createElement(steps[activeStep].icon, {
                  className: "w-5 h-5 text-[#38BDF8]",
                })}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      {steps[activeStep].stepNum} // {steps[activeStep].title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-[#38BDF8] border border-blue-400/30">
                      {steps[activeStep].badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 max-w-sm line-clamp-1">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                <span className="text-[#38BDF8]">LIVE</span>
                <span>WORKFLOW</span>
              </div>
            </div>

            {/* Dynamic Stage Canvas View */}
            <div className="my-auto py-3">
              {activeStep === 0 && (
                /* Step 1: UI Design Canvas */
                <div className="bg-[#131D38]/80 rounded-xl p-3 sm:p-4 border border-blue-500/20 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded bg-indigo-400" />
                      <span>Figma Component Canvas [Auto-Layout]</span>
                    </span>
                    <span className="text-slate-500">1440 × 900</span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 sm:gap-3">
                    <div className="col-span-4 bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60 space-y-2">
                      <div className="h-2 w-12 bg-blue-400/80 rounded" />
                      <div className="h-3 w-full bg-slate-700 rounded" />
                      <div className="h-2 w-3/4 bg-slate-700 rounded" />
                      <div className="pt-2 flex space-x-1.5">
                        <span className="h-4 w-12 bg-[#005EDA] rounded text-[8px] flex items-center justify-center font-bold">CTA</span>
                        <span className="h-4 w-10 bg-slate-700 rounded text-[8px] flex items-center justify-center">Doc</span>
                      </div>
                    </div>

                    <div className="col-span-8 bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/60 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                        <span>Tokens: --brand-blue: #005EDA</span>
                        <span className="text-emerald-400">WCAG AAA ✓</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 my-2">
                        <div className="h-9 rounded bg-[#005EDA]/20 border border-[#005EDA]/40 flex items-center justify-center text-[9px] font-mono text-[#38BDF8]">
                          Primary
                        </div>
                        <div className="h-9 rounded bg-slate-700/50 border border-slate-600 flex items-center justify-center text-[9px] font-mono text-slate-300">
                          Surface
                        </div>
                        <div className="h-9 rounded bg-slate-700/50 border border-slate-600 flex items-center justify-center text-[9px] font-mono text-slate-300">
                          Border
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Responsive Grid System: 12-Column Flexible Gutters
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                /* Step 2: Coding (TypeScript / React) */
                <div className="bg-[#050C1F] rounded-xl p-3 sm:p-4 border border-slate-800 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 shadow-inner overflow-hidden">
                  <div className="text-slate-500 pb-1 border-b border-slate-800/80 flex items-center justify-between text-[10px]">
                    <span>AppHero.tsx — Brahmani Engineering</span>
                    <span className="text-blue-400">TypeScript / React 19</span>
                  </div>
                  <div className="text-slate-300 pt-1">
                    <span className="text-purple-400">export const</span> <span className="text-amber-300">HeroSection</span>: <span className="text-emerald-400">React.FC</span> = () =&gt; &#123;
                  </div>
                  <div className="pl-3 text-slate-400">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-6 text-slate-200">
                    &lt;<span className="text-blue-400">div</span> <span className="text-cyan-300">className</span>=<span className="text-emerald-300">"max-w-7xl mx-auto px-6"</span>&gt;
                  </div>
                  <div className="pl-9 text-slate-200">
                    &lt;<span className="text-blue-400">h1</span> <span className="text-cyan-300">className</span>=<span className="text-emerald-300">"font-display font-bold text-5xl"</span>&gt;
                  </div>
                  <div className="pl-12 text-amber-200">
                    BUILDING WHAT'S NEXT IN DIGITAL.
                  </div>
                  <div className="pl-9 text-slate-200">&lt;/<span className="text-blue-400">h1</span>&gt;</div>
                  <div className="pl-6 text-slate-200">&lt;/<span className="text-blue-400">div</span>&gt;</div>
                  <div className="pl-3 text-slate-400">);</div>
                  <div className="text-slate-300">&#125;;</div>
                </div>
              )}

              {activeStep === 2 && (
                /* Step 3: Development & Build Terminal */
                <div className="bg-[#020612] rounded-xl p-3 sm:p-4 border border-slate-800 font-mono text-[11px] sm:text-xs space-y-2 shadow-inner">
                  <div className="flex items-center space-x-2 text-slate-500 text-[10px] pb-1 border-b border-slate-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>terminal // vite build --mode production</span>
                  </div>
                  <div className="text-emerald-400 flex items-center space-x-2">
                    <span>✓</span>
                    <span>2369 modules transformed cleanly.</span>
                  </div>
                  <div className="text-slate-300 pl-4 space-y-0.5 text-[10px] sm:text-[11px]">
                    <div className="flex justify-between text-slate-400">
                      <span>dist/index.html</span>
                      <span className="text-slate-300 font-bold">2.88 kB</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>dist/assets/index.css</span>
                      <span className="text-slate-300 font-bold">64.17 kB</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>dist/assets/index.js (gzip)</span>
                      <span className="text-emerald-300 font-bold">138.46 kB</span>
                    </div>
                  </div>
                  <div className="pt-2 text-blue-400 text-[10px] flex items-center space-x-1.5">
                    <span className="animate-spin text-xs">⚡</span>
                    <span>Ready for production deployment in 420ms</span>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                /* Step 4: Browser Preview */
                <div className="bg-[#101A33] rounded-xl p-3 sm:p-4 border border-blue-500/20 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="text-white font-semibold">Live Responsive Viewport Matrix</span>
                    <span className="text-emerald-400">100% Core Web Vitals</span>
                  </div>

                  <div className="grid grid-cols-12 gap-3 items-center">
                    {/* Desktop Mock */}
                    <div className="col-span-7 bg-white rounded-lg p-2 shadow-md text-slate-900 border border-slate-200">
                      <div className="h-2 w-16 bg-[#005EDA] rounded mb-1.5" />
                      <div className="h-4 w-full bg-slate-900 rounded mb-1" />
                      <div className="h-2 w-4/5 bg-slate-300 rounded mb-2" />
                      <div className="flex space-x-1">
                        <span className="h-3 w-10 bg-[#005EDA] rounded text-[7px] text-white flex items-center justify-center font-bold">Action</span>
                        <span className="h-3 w-8 bg-slate-100 rounded text-[7px] text-slate-600 flex items-center justify-center">Work</span>
                      </div>
                    </div>

                    {/* Mobile Mock */}
                    <div className="col-span-5 bg-white rounded-lg p-2 shadow-md text-slate-900 border border-slate-200 max-w-[120px] mx-auto">
                      <div className="w-4 h-1 bg-slate-300 rounded-full mx-auto mb-1.5" />
                      <div className="h-1.5 w-8 bg-[#005EDA] rounded mb-1" />
                      <div className="h-3 w-full bg-slate-900 rounded mb-1" />
                      <div className="h-1.5 w-full bg-slate-200 rounded" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                    <span>Performance: 99</span>
                    <span>Accessibility: 100</span>
                    <span>SEO: 100</span>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                /* Step 5: Finished Website */
                <div className="bg-white rounded-xl p-3 sm:p-4 text-slate-900 shadow-xl border border-blue-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <img
                      src="/brahmani-logo-transparent.png"
                      alt="Brahmani"
                      className="h-6 w-auto object-contain"
                    />
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Production Active
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#005EDA] block">
                      Brahmani Information
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display mt-0.5 ">
                      WE BUILD DIGITAL EXPERIENCES THAT HELP BUSINESSES MOVE FORWARD.
                    </h4>
                    <p className="text-[10px] text-slate-600 mt-1 line-clamp-2">
                      Modern websites, software engineering, and digital experiences that turn ideas into purposeful digital products.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-1">
                    <Link
                      to="/start-a-project"
                      className="px-3 py-1 rounded bg-[#005EDA] text-white text-[10px] font-semibold hover:bg-[#004BBB] transition-colors"
                    >
                      Start a Project →
                    </Link>
                    <Link
                      to="/work"
                      className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Explore Work
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Playback & Stage Selector Controls */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              
              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label={isPlaying ? 'Pause Workflow Preview' : 'Play Workflow Preview'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              {/* Step Navigation Dots / Buttons */}
              <div className="flex items-center space-x-1.5">
                {steps.map((st, idx) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false);
                    }}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-all ${
                      activeStep === idx
                        ? 'bg-[#005EDA] text-white font-bold shadow-sm'
                        : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {st.stepNum}
                  </button>
                ))}
              </div>

              {/* Fullscreen / Open Demo action */}
              <Link
                to="/process"
                className="text-[11px] text-slate-400 hover:text-[#38BDF8] flex items-center space-x-1 transition-colors"
              >
                <span className="hidden sm:inline">Explore Process</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Sub-panel with Workflow Key Metrics */}
        <div className="bg-slate-50 border-t border-slate-200/80 p-3 sm:px-4 sm:py-3 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
            <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">
              Current Stage: {steps[activeStep].title}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
            Zero Guesswork • Milestone Driven
          </span>
        </div>

      </div>
    </div>
  );
};
