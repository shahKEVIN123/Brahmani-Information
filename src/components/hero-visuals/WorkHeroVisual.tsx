import React from 'react';
import { ExternalLink, CheckCircle2, Shield, Layers, Globe, Sparkles } from 'lucide-react';
import { WORK_PROJECTS } from '../../data/companyData';

export const WorkHeroVisual: React.FC = () => {
  const p1 = WORK_PROJECTS[0] || { name: 'Enterprise Workflow Console', category: 'Web Application', highlight: '99.98% Uptime', tagline: 'Unified corporate dashboard', description: 'Enterprise workflow console' };
  const p2 = WORK_PROJECTS[1] || { name: 'Healthcare Experience Platform', category: 'Digital Solutions', highlight: 'WCAG AAA', tagline: 'Patient-first healthcare web portal', description: 'Patient-first healthcare web portal' };

  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Ambient Soft Accent Glow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative space-y-3.5">
        
        {/* Layer 1 (Foreground Card) — Lead Production Case Study */}
        <div className="relative z-10 bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12),0_4px_12px_rgba(0,94,218,0.04)] p-5 sm:p-6 space-y-4 transition-all duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
              <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                Production Case Study // {p1.category}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
              Live In Production
            </span>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              {p1.name}
            </h4>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
              {p1.tagline || p1.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10px]">
            <div className="p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-center">
              <span className="text-slate-400 block">Performance</span>
              <span className="text-emerald-600 font-bold">100 / 100</span>
            </div>
            <div className="p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-center">
              <span className="text-slate-400 block">Architecture</span>
              <span className="text-[#005EDA] font-bold">React + Node</span>
            </div>
            <div className="p-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-center">
              <span className="text-slate-400 block">Delivery</span>
              <span className="text-[#0F172A] font-bold">On Schedule</span>
            </div>
          </div>
        </div>

        {/* Layer 2 (Offset Background Card in 2.5D Stack) */}
        <div className="relative -mt-6 mx-3 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#005EDA]">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-slate-800 text-[11px] block">{p2.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">{p2.category} • {p2.highlight || 'Enterprise Standard'}</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#005EDA] font-bold bg-white px-2 py-1 rounded border border-slate-200">
            Verified
          </span>
        </div>

      </div>
    </div>
  );
};

