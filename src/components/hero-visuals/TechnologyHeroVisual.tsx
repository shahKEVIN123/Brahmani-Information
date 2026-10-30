import React from 'react';
import { Code2, Server, Database, Cloud, CheckCircle2, Cpu } from 'lucide-react';
import { TECHNOLOGIES_DATA } from '../../data/companyData';

export const TechnologyHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Full-Stack Architecture Blueprint Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
              <Code2 className="w-5 h-5 text-[#005EDA]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#0F172A] block tracking-wide uppercase">
                Production Tech Stack
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Multi-Tier Enterprise Architecture
              </span>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Battle-Tested</span>
          </span>
        </div>

        {/* 4 Connected Architectural Tiers */}
        <div className="space-y-2.5">
          {/* Tier 1: Presentation & Client UI */}
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded bg-blue-100 text-[#005EDA] flex items-center justify-center text-[10px] font-bold font-mono">
                UI
              </span>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">Client Layer</span>
                <span className="text-[10px] text-slate-500 font-mono">React • TypeScript • Tailwind CSS • Vite</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Lighthouse 100
            </span>
          </div>

          {/* Tier 2: Services & API Layer */}
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded bg-slate-200 text-[#0F172A] flex items-center justify-center text-[10px] font-bold font-mono">
                API
              </span>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">Services Engine</span>
                <span className="text-[10px] text-slate-500 font-mono">Node.js • Express • RESTful & GraphQL</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#005EDA] font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
              &lt;20ms API
            </span>
          </div>

          {/* Tier 3: Data Persistence & Infrastructure */}
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold font-mono">
                DB
              </span>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">Data & Cloud</span>
                <span className="text-[10px] text-slate-500 font-mono">PostgreSQL • MongoDB • Docker • CI/CD</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-700 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              ACID Compliant
            </span>
          </div>
        </div>

        {/* 2.5D Bottom Metric Card */}
        <div className="p-3 rounded-xl bg-[#0F172A] text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-medium text-slate-200">
              Type-Safe Modular Architecture Across All Runtimes
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Zero Technical Debt</span>
        </div>

      </div>
    </div>
  );
};

