import React from 'react';
import { GitBranch, CheckCircle2, ArrowRight, Play, RefreshCw, Layers } from 'lucide-react';
import { PROCESS_STAGES } from '../../data/companyData';

export const ProcessHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Ambient Soft Accent Glow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Card — 7-Stage Delivery Framework */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
              <GitBranch className="w-5 h-5 text-[#005EDA]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#0F172A] block tracking-wide uppercase">
                Execution Framework
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                7 Structured Delivery Milestones
              </span>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-[#005EDA] border border-blue-200">
            <span>Deterministic</span>
          </span>
        </div>

        {/* Visual Workflow Pipeline Step Track */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-1">
            <span>Stage Progression</span>
            <span className="text-[#005EDA] font-bold">Discovery → Production Care</span>
          </div>

          {/* Stepper Grid (3 Featured Active Stages in Focus) */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
              <span className="text-[10px] font-mono text-[#005EDA] font-bold block">01 Discovery</span>
              <span className="text-xs font-semibold text-slate-800 block">Scope & Intake</span>
              <span className="text-[9px] text-slate-400 font-mono block">Architecture Plan</span>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1 shadow-xs">
              <span className="text-[10px] font-mono text-[#005EDA] font-bold block">04 Engineering</span>
              <span className="text-xs font-semibold text-[#0F172A] block">Clean Sprint</span>
              <span className="text-[9px] text-emerald-600 font-mono font-semibold block">CI/CD Tested</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
              <span className="text-[10px] font-mono text-slate-600 font-bold block">06 Launch</span>
              <span className="text-xs font-semibold text-slate-800 block">Deploy Live</span>
              <span className="text-[9px] text-slate-400 font-mono block">Zero Downtime</span>
            </div>
          </div>
        </div>

        {/* 2.5D Milestone Gate Feature Card */}
        <div className="bg-[#0F172A] text-white rounded-xl p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center space-x-1.5 text-[#38BDF8]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Milestone Review Gates</span>
            </span>
            <span className="text-slate-400">Strict Acceptance Criteria</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Every wireframe, API contract, and component test suite is vetted with stakeholders prior to next phase sign-off.
          </p>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-semibold">100% Transparent Communication</span>
          </span>
          <span className="text-[#005EDA] font-bold">Zero Guesswork</span>
        </div>

      </div>
    </div>
  );
};

