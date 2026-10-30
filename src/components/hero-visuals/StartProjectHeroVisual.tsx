import React from 'react';
import { Target, CheckCircle2, Clock, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

export const StartProjectHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Card — Project Intake & Scoping Framework */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
              <Target className="w-5 h-5 text-[#005EDA]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#0F172A] block tracking-wide uppercase">
                Project Scoping Matrix
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                From Concept to Formal Roadmap
              </span>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-[#005EDA] border border-blue-200">
            <span>Direct Intake</span>
          </span>
        </div>

        {/* 3 Clear Intake Steps */}
        <div className="space-y-2.5">
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-mono font-bold text-[#005EDA]">
                01
              </span>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Project Brief Submission
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Objectives, timeline preference & architectural goals
                </span>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>

          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-mono font-bold text-[#0F172A]">
                02
              </span>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Architectural Evaluation
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Stack selection, security considerations & feasibility
                </span>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>

          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-mono font-bold text-[#005EDA]">
                03
              </span>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Milestone Proposal & Plan
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Deterministic sprints, deliverables & transparent scope
                </span>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
        </div>

        {/* 2.5D Assurance Sub-bar */}
        <div className="p-3 rounded-xl bg-[#0F172A] text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-medium text-slate-200">
              No Obligation • Strict Confidentiality
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold">24h Turnaround</span>
        </div>

      </div>
    </div>
  );
};

