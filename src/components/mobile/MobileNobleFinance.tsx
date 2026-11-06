import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  PhoneCall,
  FileSpreadsheet,
  Users,
  ChevronRight,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { OptimizedImage } from '../OptimizedImage';

export const MobileNobleFinance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'screens' | 'architecture'>('overview');

  const screenshots = [
    {
      title: 'Telecalling Command Center',
      category: 'Dashboard',
      src: '/assets/projects/noble-finance/dashboard.png',
      desc: 'Real-time manager overview tracking active session duration, daily calls, and interested leads.',
    },
    {
      title: 'Consultations & Meetings Manager',
      category: 'Workflow',
      src: '/assets/projects/noble-finance/meetings.png',
      desc: 'Meeting tracker with multi-stage status filtering and instant Excel export.',
    },
    {
      title: 'Team Performance Ledger',
      category: 'Analytics',
      src: '/assets/projects/noble-finance/performance.png',
      desc: 'Per-agent call volume, lead qualification velocity, and last activity timestamps.',
    },
    {
      title: 'Official Authentication Portal',
      category: 'Security',
      src: '/assets/projects/noble-finance/login.png',
      desc: 'Role-based routing between telecallers and branch managers with encrypted sessions.',
    },
  ];

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header & Navigation */}
      <section className="px-4 pt-3 pb-5 space-y-3">
        <Link
          to="/work"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 active:text-white bg-[#151515] border border-white/10 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </Link>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-400/20">
            FINANCIAL CRM
          </span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            OFFICIALLY LAUNCHED
          </span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>Noble Finance — Loan CRM & </span>
          <span className="text-[#005EDA]">Telecalling Suite.</span>
        </h1>

        <p className="text-xs text-slate-300 leading-relaxed">
          High-performance loan management system featuring real-time call tracking, client consultation dispatch, and 1-click Excel reporting.
        </p>

        {/* 3 Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="bg-[#141414] border border-white/10 rounded-xl p-2.5 text-center">
            <div className="text-base font-bold font-display text-white">166+</div>
            <div className="text-[9px] text-slate-400">Consultations</div>
          </div>
          <div className="bg-[#141414] border border-white/10 rounded-xl p-2.5 text-center">
            <div className="text-base font-bold font-display text-[#38BDF8]">179+</div>
            <div className="text-[9px] text-slate-400">Loan Leads</div>
          </div>
          <div className="bg-[#141414] border border-white/10 rounded-xl p-2.5 text-center">
            <div className="text-base font-bold font-display text-emerald-400">99.9%</div>
            <div className="text-[9px] text-slate-400">Uptime</div>
          </div>
        </div>

        {/* Live Portal Button */}
        <div className="pt-1">
          <a
            href="https://nobalfinance.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-[#181818] border border-white/15 text-xs font-semibold text-slate-200 active:text-white"
          >
            <span>Visit Live Portal (nobalfinance.com)</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
          </a>
        </div>
      </section>

      {/* 2. Challenge & Solution Cards */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0E0E0E] space-y-3">
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 space-y-1.5">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400">
            THE OPERATIONAL CHALLENGE
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Noble Finance managed high volumes of loan enquiries across manual telephone logs and disparate spreadsheets, causing lead leakage, missed client consultations, lack of agent session visibility, and tedious manual End-of-Day reporting.
          </p>
        </div>

        <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 space-y-1.5">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
            THE BRAHMANI SOLUTION
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            We engineered a unified, high-performance web CRM with role-based access for telecallers and managers, automated lead status pipelines, instant meeting status tracking, and 1-click Excel export.
          </p>
        </div>
      </section>

      {/* 3. Mobile Production Screenshots Gallery */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0A0A0A] space-y-4">
        <div>
          <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
            PRODUCTION SCREENS
          </div>
          <h2 className="text-xl font-bold font-display text-white mt-0.5">
            System Interface Gallery
          </h2>
        </div>

        <div className="space-y-4">
          {screenshots.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-md space-y-2.5 pb-3"
            >
              <div className="relative aspect-[16/10] bg-[#0A0A0A] border-b border-white/10">
                <OptimizedImage
                  src={s.src}
                  alt={s.title}
                  aspectRatio="16/10"
                  objectFit="cover"
                  priority={idx === 0}
                  containerClassName="w-full h-full bg-[#0A0A0A]"
                />
                <span className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-white text-[9px] font-mono px-2 py-0.5 rounded border border-white/10">
                  {s.category}
                </span>
              </div>
              <div className="px-3.5 space-y-1">
                <div className="text-xs font-bold text-white font-display">
                  {s.title}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Architecture Stack */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0E0E0E] space-y-2.5">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          TECHNOLOGY STACK
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['React', 'Node.js', 'Tailwind CSS', 'REST API', 'Session Auth', 'Excel Export'].map((t) => (
            <span
              key={t}
              className="text-xs font-mono font-medium text-slate-200 bg-[#181818] border border-white/10 px-3 py-1.5 rounded-lg"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="px-4 pt-3">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-base font-bold text-white font-display">
            Need a Bespoke Financial or CRM Platform?
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our engineers build secure, compliant, high-throughput digital systems tailored to your workflows.
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

