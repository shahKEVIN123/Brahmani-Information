import React from 'react';
import {
  ArrowRight,
  Compass,
  Layers,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { PROCESS_STAGES } from '../../data/companyData';

const STAGE_ICONS: Record<string, React.ElementType> = {
  'DISCOVER': Compass,
  'PLAN': Layers,
  'DESIGN': Layout,
  'DEVELOP': Code2,
  'TEST': ShieldCheck,
  'LAUNCH': Rocket,
  'SUPPORT': RefreshCw,
};

export const MobileProcess: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header */}
      <section className="px-4 pt-4 pb-6 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
          <span>METHODOLOGY & EXECUTION</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>A Disciplined & Predictable </span>
          <span className="text-[#005EDA]">Engineering Process.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          We reject chaotic ad-hoc development in favor of milestone-based roadmaps, continuous verification, and transparent stakeholder check-ins.
        </p>

        {/* Hero Illustration */}
        <div className="pt-2 flex items-center justify-center">
          <div className="w-full max-w-[420px] rounded-2xl bg-[#121212] border border-white/10 p-3 shadow-lg">
            <img
              src="/assets/heroes/process-hero.png?v=5"
              alt="Brahmani Information Engineering Process"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive 7-Stage Execution Timeline */}
      <section className="px-4 py-6 border-t border-white/10 bg-[#0E0E0E] space-y-4">
        <div>
          <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
            LIFECYCLE ARCHITECTURE
          </div>
          <h2 className="text-xl font-bold font-display text-white mt-0.5">
            The 7 Delivery Stages
          </h2>
        </div>

        <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#005EDA] via-blue-500/30 to-blue-400/10">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = STAGE_ICONS[stage.title] || Code2;
            return (
              <div key={stage.step} className="relative">
                {/* Step indicator circle */}
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#005EDA] text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-[#0E0E0E] shadow-sm">
                  {idx + 1}
                </div>

                <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 space-y-2.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#38BDF8] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white font-display">
                          {stage.title}
                        </span>
                        <div className="text-[10px] font-mono text-[#38BDF8]">
                          {stage.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      Step {stage.step}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Operational Guarantees */}
      <section className="px-4 py-6 border-t border-white/10 bg-[#0A0A0A] space-y-3">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          THE BRAHMANI COMMITMENT
        </div>
        <div className="space-y-2">
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block mb-0.5">Daily & Weekly Visibility:</strong>
              Clear demo links and sprint notes so you are always aware of engineering progress.
            </div>
          </div>
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block mb-0.5">Strict Acceptance Criteria:</strong>
              No feature is merged into production without peer code reviews and automated test passes.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-4 pt-4">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-base font-bold text-white font-display">
            Plan Your Project Sprint
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Schedule an architecture session to map your project milestones and technical requirements.
          </p>
          <Link
            to="/start-a-project"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#005EDA] active:bg-[#004BBB]"
          >
            <span>Start a Project Intake</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

