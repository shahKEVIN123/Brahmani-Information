import React from 'react';
import { Layers, Globe, Smartphone, Cloud, Code, Cpu, Server, CheckCircle2 } from 'lucide-react';

export const ServicesHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] mx-auto select-none">
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Composition */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Architectural Capabilities Matrix Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] p-6 sm:p-7 space-y-5 transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#005EDA]">
              <Layers className="w-5 h-5 text-[#005EDA]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#0F172A] block tracking-wide uppercase">
                Capabilities Architecture
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                12 Integrated IT Disciplines
              </span>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-[#005EDA] border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA] animate-pulse" />
            <span>Full-Lifecycle</span>
          </span>
        </div>

        {/* 4 Connected Capability Layers */}
        <div className="space-y-2.5">
          {/* Layer 1: Client Interfaces */}
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between hover:border-[#005EDA]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#005EDA]">
                <Globe className="w-4 h-4 text-[#005EDA]" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Web & Mobile Product Engineering
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  React • Next.js • Flutter • iOS/Android Native
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#005EDA] bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
              Tier 01
            </span>
          </div>

          {/* Layer 2: Core Software & Systems */}
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between hover:border-[#005EDA]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0F172A]">
                <Code className="w-4 h-4 text-[#0F172A]" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Custom Software & Enterprise APIs
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Modular Node.js • REST/GraphQL • CRM/ERP
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Tier 02
            </span>
          </div>

          {/* Layer 3: Cloud Infrastructure & Security */}
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between hover:border-[#005EDA]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#005EDA]">
                <Cloud className="w-4 h-4 text-[#005EDA]" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block font-display">
                  Cloud Infrastructure & Security
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  DevOps CI/CD • Docker • OWASP Hardening
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#005EDA] bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
              Tier 03
            </span>
          </div>
        </div>

        {/* 2.5D Bottom Highlight Bar: Delivery Assurance */}
        <div className="p-3 rounded-xl bg-[#0F172A] text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-medium text-slate-200">
              End-to-End Technical Cohesion Across All 12 Services
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider hidden sm:inline">
            Production Scale
          </span>
        </div>

      </div>
    </div>
  );
};

