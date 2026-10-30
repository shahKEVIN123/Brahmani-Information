import React from 'react';
import { Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const ContactHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Ambient Soft Accent Glow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Direct Communication Console Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
              <MessageSquare className="w-5 h-5 text-[#005EDA]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#0F172A] block tracking-wide uppercase">
                Technical Intake Console
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Direct Engineering Communication
              </span>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Response &lt;24h</span>
          </span>
        </div>

        {/* 3 Structured Engagement Commitments */}
        <div className="space-y-2.5">
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#005EDA]">
                <Clock className="w-4 h-4 text-[#005EDA]" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Guaranteed 24-Hour Review
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Initial feasibility review directly by technical architects
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#005EDA] font-bold">SLA</span>
          </div>

          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0F172A]">
                <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Mutual NDA & IP Security
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Strict client confidentiality from the first conversation
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-700 font-bold">100% Protected</span>
          </div>
        </div>

        {/* Direct Email Node in 2.5D Dark Surface */}
        <div className="bg-[#0F172A] text-white rounded-xl p-3.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-2.5">
            <Mail className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-mono text-slate-200">
              {COMPANY_INFO.email}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Direct Inquiries</span>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
            <span className="text-slate-700 font-semibold">Zero Sales Friction</span>
          </span>
          <span>Speak Directly with Engineers</span>
        </div>

      </div>
    </div>
  );
};

