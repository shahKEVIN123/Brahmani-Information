import React from 'react';
import { Target, Lightbulb, Users, Compass, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const AboutHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Ambient Soft Accent Glow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Base Card — Digital Company Ecosystem */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* Top Header: Company Identity & Engineering Practice */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
              <Compass className="w-5 h-5 text-[#005EDA]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#0F172A] block tracking-wide uppercase">
                Brahmani Ecosystem
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Digital Practice // Established {COMPANY_INFO.established}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Practice</span>
          </span>
        </div>

        {/* 2-Column Convergence: Thoughtful Design + Modern Engineering */}
        <div className="grid grid-cols-2 gap-3.5 pt-1">
          {/* Design Pillar */}
          <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#005EDA] uppercase tracking-wider">
                Design Discipline
              </span>
              <Layers className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <p className="text-xs font-semibold text-slate-800 font-display">
              Ergonomic Systems
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Human-centered accessibility tokens & auto-layout modularity.
            </p>
          </div>

          {/* Technology Pillar */}
          <div className="bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                Tech Discipline
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <p className="text-xs font-semibold text-slate-800 font-display">
              Resilient Codebases
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Deterministic architectures, type-safe APIs & high-speed runtimes.
            </p>
          </div>
        </div>

        {/* Floating Offset 2.5D Metric Card: Collaboration & Clarity */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-xl p-4 shadow-lg space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
            <span className="flex items-center space-x-2">
              <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Direct Collaboration Model</span>
            </span>
            <span className="text-[#38BDF8] font-bold">Zero Silos</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div className="w-3/5 bg-[#005EDA] rounded-full" />
            <div className="w-2/5 bg-[#38BDF8] rounded-full" />
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            "Engineers work directly with stakeholder partners from scoping to deployment."
          </p>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
            <span className="font-semibold text-slate-700">Digital Craftsmanship Standard</span>
          </div>
          <span>100% Milestone Driven</span>
        </div>

      </div>
    </div>
  );
};

