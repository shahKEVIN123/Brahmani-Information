import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Users,
  Clock,
  PhoneCall,
  FileSpreadsheet,
  ShieldCheck,
  TrendingUp,
  Maximize2,
  X,
  Layers,
  Sparkles,
  Award,
  BarChart3,
  Target,
  Activity,
  XCircle
} from 'lucide-react';
import { Link } from '../router/Router';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/SectionHeader';
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../components/motion/MotionReveal';
import { ScrollSection } from '../components/motion/ScrollSection';
import { InteractiveCard } from '../components/motion/InteractiveCard';

interface ScreenshotItem {
  id: string;
  title: string;
  category: string;
  src: string;
  caption: string;
  highlights: string[];
}

const NOBLE_SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'dashboard',
    title: 'Telecalling Manager Command Center',
    category: 'Operations Dashboard',
    src: '/assets/projects/noble-finance/dashboard.png',
    caption: 'Real-time manager overview tracking active session duration, daily calls, qualified interested leads, pending follow-ups, and upcoming appointments.',
    highlights: [
      'Live working timer tracking active workstation engagement ("Working 00:05:06")',
      'KPI cards: Today\'s Calls (1), Interested Leads (179), Pending Follow-ups (127), Today\'s Meetings (1)',
      'Dual live operational queues: Upcoming Follow-ups (Lead IDs LD-431823, LD-034510) & Upcoming Meetings (Harihar foods pvt ltd)'
    ]
  },
  {
    id: 'meetings',
    title: 'Client Meetings & Loan Consultations Manager',
    category: 'Consultation Workflow',
    src: '/assets/projects/noble-finance/meetings.png',
    caption: 'Comprehensive meeting tracker with multi-stage status filtering (All, Scheduled, Completed, Rescheduled, Cancelled), client details, and instant Excel export.',
    highlights: [
      'Multi-status lifecycle filters: All (166), Scheduled (131), Completed (21), Rescheduled (14), Cancelled (0)',
      'High-density consultation cards detailing client name, corporate entity, contact numbers, and appointment time',
      'One-click "Export to Excel" action button for field dispatch and branch auditing'
    ]
  },
  {
    id: 'performance',
    title: 'Team Performance & Telecaller Analytics',
    category: 'Employee Telemetry',
    src: '/assets/projects/noble-finance/performance.png',
    caption: 'Granular agent performance ledger detailing total calls, today\'s calls, qualified interested leads, pending follow-ups, and last activity timestamps.',
    highlights: [
      'Transparent employee leaderboard: Employee Name & ID (e.g. Dimpi Keyurbhai shah [EMP0004], Priyanka vaghela [EMP0002])',
      'Per-agent call volume and conversion velocity metrics',
      'One-click Excel export for executive review and payroll appraisal'
    ]
  },
  {
    id: 'login',
    title: 'Official Employee & Manager Authentication Portal',
    category: 'Security & Access',
    src: '/assets/projects/noble-finance/login.png',
    caption: 'Secure branded login portal enforcing role-based routing between telecallers and branch managers with encrypted session authorization.',
    highlights: [
      'Noble Finance branding: "FINANCE TODAY, SECURE TOMORROW"',
      'Official Employee ID / Email credentials validation with forgot-password workflow',
      'Role-governed portal redirect separating agent dialer workspace from manager oversight'
    ]
  }
];

export const NobleFinanceCaseStudyPage: React.FC = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <PageHero
        badge="Case Study • Officially Launched"
        title={
          <>
            <span className="text-white block sm:inline">Noble Finance: </span>
            <span className="text-[#005EDA] block sm:inline">Loan CRM & Telecalling Hub.</span>
          </>
        }
        description="A specialized, high-velocity CRM and telecalling operations platform engineered by Brahmani Information to streamline loan enquiry handling, agent productivity, client consultation scheduling, and executive performance oversight."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
          { label: 'Noble Finance' },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://nobalfinance.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-sm transition-all group"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              to="/start-a-project"
              className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-[#151515] hover:bg-[#1E1E1E] hover:text-white rounded-xl border border-white/10 transition-colors"
            >
              <span>Inquire About Similar CRM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        }
        visual={
          <div className="relative rounded-2xl bg-[#111111] p-3 sm:p-4 border border-white/10 shadow-2xl overflow-hidden group">
            {/* Window Chrome */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-semibold">NOBAL FINANCE — Telecalling Portal</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                LIVE PRODUCTION
              </span>
            </div>
            {/* Visual Image */}
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <img
                src="/assets/projects/noble-finance/dashboard.png"
                alt="Noble Finance Telecalling Manager Dashboard Engineered by Brahmani Information"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                <span className="bg-[#051026]/90 px-3 py-1 rounded-md border border-[#005EDA]/40">
                  Manager Portal • 179+ Interested Leads
                </span>
                <span className="bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-md border border-emerald-500/40">
                  Working (00:05:06)
                </span>
              </div>
            </div>
          </div>
        }
      />

      {/* 2. Project Metadata Overview Strip */}
      <section className="py-8 bg-[#0E0E0E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Client Organization
              </span>
              <p className="text-sm font-bold text-white font-display">Noble Finance</p>
              <span className="text-[11px] text-slate-400 font-mono">Brand: NOBAL FINANCE</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Industry Sector
              </span>
              <p className="text-sm font-bold text-white font-display">Financial Services</p>
              <span className="text-[11px] text-[#38BDF8] font-mono">Loan Management</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Platform Architecture
              </span>
              <p className="text-sm font-bold text-white font-display">Finance CRM & Portal</p>
              <span className="text-[11px] text-slate-400 font-mono">Telecalling & Meetings</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Deployment Status
              </span>
              <p className="text-sm font-bold text-emerald-400 font-display flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Officially Launched</span>
              </p>
              <span className="text-[11px] text-slate-400 font-mono">In Active Production</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Developed By
              </span>
              <p className="text-sm font-bold text-[#005EDA] font-display">Brahmani Information</p>
              <span className="text-[11px] text-slate-400 font-mono">End-to-End Build</span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Live URL
              </span>
              <a
                href="https://nobalfinance.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-blue-400 hover:text-blue-300 font-display inline-flex items-center space-x-1 truncate max-w-full"
              >
                <span>nobalfinance.com</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
              <span className="text-[11px] text-slate-400 font-mono block">Secure Portal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Overview & Business Background */}
      <ScrollSection className="py-20 lg:py-28 bg-[#0A0A0A] border-b border-white/10" viewportAmount={0.12}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            badge="Executive Summary & Strategic Overview"
            title="Engineering a High-Performance Operational Backbone for Noble Finance."
            description="Why generic off-the-shelf software fell short, and how Brahmani Information architected a purpose-built loan intake and telecalling command center."
          />

          {/* 1. Executive Thesis Banner */}
          <MotionReveal preset="fadeUp" duration={0.6}>
            <div className="relative rounded-3xl bg-gradient-to-br from-[#131B2E] via-[#0E1524] to-[#0A0E17] border border-[#005EDA]/30 p-8 sm:p-10 overflow-hidden shadow-2xl">
              {/* Ambient accent light */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#005EDA]/15 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-[90px] pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono text-[#38BDF8]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Executive Thesis</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display leading-snug">
                    "Loan advisory firms thrive or fail based on outbound dialing rhythm and follow-up discipline. We built Noble Finance an operating system that eliminates hesitation."
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    <strong className="text-white">Noble Finance</strong> operates across high-value personal loans, commercial working capital, and industrial machinery financing. Facing rapid inquiry growth, their operations team encountered a critical bottleneck: disjointed spreadsheet tracking, accidental lead collisions, and zero live telecaller visibility. Brahmani Information was commissioned to engineer a tailored, zero-bloat platform connecting front-line telecallers with executive oversight.
                  </p>
                </div>

                <div className="lg:col-span-4 bg-[#0A0E17]/80 rounded-2xl p-6 border border-white/10 space-y-4 backdrop-blur-md">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block pb-2 border-b border-white/10">
                    Engagement Profile
                  </span>
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Client:</span>
                      <span className="text-white font-bold">Noble Finance</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Industry:</span>
                      <span className="text-[#38BDF8]">Loan & Credit Advisory</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Architecture:</span>
                      <span className="text-white">Full-Stack CRM & Telecalling</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Engineering:</span>
                      <span className="text-white">Brahmani Information</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="text-emerald-400 font-bold flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live in Production</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* 2. Three Strategic Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1 */}
            <MotionReveal preset="fadeUp" duration={0.6}>
              <div className="bg-[#151515] rounded-3xl p-7 border border-white/10 flex flex-col justify-between space-y-6 hover:border-[#38BDF8]/40 transition-colors h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#38BDF8]">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#1A1A1A] text-slate-400 border border-white/10">
                      Pillar 01
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display">
                    Structured Lead Qualification Pipeline
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Replaced decentralized contact sheets with unified loan inquiry tokenization (<code className="text-[#38BDF8]">LD-431823</code>). Captures borrower intent, funding volume, and credit readiness with automatic status progression.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Production Impact:</span>
                  <span className="text-[#38BDF8] font-bold">179+ Qualified Leads</span>
                </div>
              </div>
            </MotionReveal>

            {/* Pillar 2 */}
            <MotionReveal preset="fadeUp" duration={0.6} delay={0.1}>
              <div className="bg-[#151515] rounded-3xl p-7 border border-white/10 flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-colors h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Activity className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#1A1A1A] text-slate-400 border border-white/10">
                      Pillar 02
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display">
                    Real-Time Telecaller Shift Telemetry
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Integrated top-bar work timer (<code className="text-emerald-400">Working 00:05:06</code>) tracks active dialing sessions without burdensome micromanagement, establishing transparent accountability across telecaller desks.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Production Impact:</span>
                  <span className="text-emerald-400 font-bold">Live Shift Clock</span>
                </div>
              </div>
            </MotionReveal>

            {/* Pillar 3 */}
            <MotionReveal preset="fadeUp" duration={0.6} delay={0.2}>
              <div className="bg-[#151515] rounded-3xl p-7 border border-white/10 flex flex-col justify-between space-y-6 hover:border-purple-500/40 transition-colors h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#1A1A1A] text-slate-400 border border-white/10">
                      Pillar 03
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display">
                    End-to-End Meeting & Consultation Dispatch
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Orchestrates the crucial bridge between initial telecall and in-person loan reviews. Manages complete status lifecycle across Scheduled (131), Completed (21), Rescheduled (14), and Cancelled.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Production Impact:</span>
                  <span className="text-purple-400 font-bold">166+ Consultations</span>
                </div>
              </div>
            </MotionReveal>

          </div>

          {/* 3. Operational Workflow Engine: Visual Process Strip */}
          <div className="bg-[#111111] rounded-3xl p-8 sm:p-10 border border-white/10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
                  SYSTEM LOGIC & LIFECYCLE
                </span>
                <h4 className="text-xl font-bold text-white font-display">
                  The Noble Finance Operational Pipeline
                </h4>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 self-start sm:self-auto">
                Deterministic State Machine
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              <div className="bg-[#171717] rounded-2xl p-5 border border-white/10 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-blue-400">01 // INTAKE</span>
                <h5 className="text-sm font-bold text-white">Lead Tokenization</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Raw borrower query is assigned a unique ID (e.g. <code className="text-[#38BDF8]">LD-431823</code>) with business & contact metadata.
                </p>
              </div>

              <div className="bg-[#171717] rounded-2xl p-5 border border-white/10 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-emerald-400">02 // TELEMETRY</span>
                <h5 className="text-sm font-bold text-white">Active Shift Timer</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Telecaller starts session clock (<code className="text-emerald-400">Working 00:05:06</code>); calls and talk times recorded in real time.
                </p>
              </div>

              <div className="bg-[#171717] rounded-2xl p-5 border border-white/10 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-amber-400">03 // QUEUE</span>
                <h5 className="text-sm font-bold text-white">Pending Follow-ups</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Unqualified or callback prospects routed to the 127 pending queue with exact date & time recall triggers.
                </p>
              </div>

              <div className="bg-[#171717] rounded-2xl p-5 border border-white/10 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-purple-400">04 // DISPATCH</span>
                <h5 className="text-sm font-bold text-white">Client Consultation</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Qualified prospects booked for face-to-face loan reviews (131 scheduled) with client & corporate details.
                </p>
              </div>

              <div className="bg-[#171717] rounded-2xl p-5 border border-white/10 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-sky-400">05 // AUDIT</span>
                <h5 className="text-sm font-bold text-white">1-Click Excel EOD</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Shift termination triggers automated EOD logs and one-click Excel downloads for branch executives.
                </p>
              </div>

            </div>
          </div>

          {/* 4. Before vs. After Operational Transformation Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Before */}
            <div className="bg-[#151515] rounded-3xl p-8 border border-rose-500/20 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">Before Brahmani Information</h4>
                    <span className="text-xs font-mono text-rose-400 uppercase">Disconnected & Paper-Based Workflow</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Manual Operations
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Employee details and records were maintained manually, without a centralized database.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Managers and employees had no structured system to manage loan enquiries, customer records, and daily activities.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Daily communication, customer follow-ups, and coordination were handled through WhatsApp and manual calls.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Only basic call records were available, with no centralized attendance, meeting, or employee performance tracking.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Paperwork and manual reporting were required for employee records, daily updates, and End-of-Day (EOD) activities.</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-[#151515] rounded-3xl p-8 border border-emerald-500/30 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">After Brahmani Information</h4>
                    <span className="text-xs font-mono text-emerald-400 uppercase">Fully Digital & Paperless Operations</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  Centralized CRM
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>All employee profiles, details, and records are securely maintained in a centralized database.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Separate Manager and Employee panels with role-based access and dedicated workflows.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Managers can manage employee records, monitor activities, and oversee loan enquiries and scheduled meetings.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Centralized attendance, leave applications, EOD reports, and team performance management.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Complete shift from manual paperwork to a unified CRM, bringing daily business operations into one digital system.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </ScrollSection>

      {/* 4. Operational Challenges vs. Engineered Solutions */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.12}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Problem & Solution Matrix"
            title="Overcoming Core Operational Bottlenecks."
            description="How Brahmani Information tackled the structural challenges of loan telecalling and consultation logistics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            
            {/* Challenge 1 */}
            <MotionReveal preset="fadeUp" duration={0.6}>
              <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      Operational Challenge 01
                    </span>
                    <span className="text-xs font-mono text-slate-400">Data Fragmentation</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Scattered Spreadsheets & Overlapping Calls
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Prior to the system, telecallers logged prospects in disconnected spreadsheets. Without centralized state management, leads were repeatedly double-called, customer notes were lost, and high-intent borrowers were overlooked.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-blue-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase block">
                    Brahmani Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Engineered a unified lead repository with deterministic lead tokens (e.g. <code className="text-[#38BDF8]">LD-431823</code>) and automated recall queues, eliminating lead collisions completely.
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Challenge 2 */}
            <MotionReveal preset="fadeUp" duration={0.6} delay={0.1}>
              <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Operational Challenge 02
                    </span>
                    <span className="text-xs font-mono text-slate-400">Lack of Visibility</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Zero Real-Time Caller Accountability
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Managers lacked real-time visibility into whether agents were actively dialing, the duration of their sessions, and the true ratio between calls made, leads qualified, and follow-ups scheduled.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-blue-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase block">
                    Brahmani Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Implemented an integrated session telemetry system with live top-bar working timers (<code className="text-emerald-400">Working 00:05:06</code>) and instant agent-by-agent performance league tables.
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Challenge 3 */}
            <MotionReveal preset="fadeUp" duration={0.6}>
              <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-[#38BDF8] border border-blue-500/20">
                      Operational Challenge 03
                    </span>
                    <span className="text-xs font-mono text-slate-400">Meeting Bottlenecks</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Disorganized Consultations & Missed Appointments
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Loan approvals require initial consultations followed by face-to-face loan reviews. In-office and field consultations suffered high no-show and reschedule rates because meetings had no structured lifecycle tracking.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-blue-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase block">
                    Brahmani Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Designed a dedicated Client Meetings hub with strict status workflows (131 Scheduled, 21 Completed, 14 Rescheduled), client contact details, company names, and date-range filters.
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Challenge 4 */}
            <MotionReveal preset="fadeUp" duration={0.6} delay={0.1}>
              <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Operational Challenge 04
                    </span>
                    <span className="text-xs font-mono text-slate-400">Reporting Burden</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Cumbersome End-of-Day (EOD) & Audit Overheads
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Every evening, supervisors spent 90+ minutes manually collecting attendance slips, calculating call counts, and summarizing loan pipelines for the executive board.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-blue-500/20 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase block">
                    Brahmani Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Integrated an automated Attendance and EOD recording engine with 1-click Excel export functionality, transforming daily reporting from 90 minutes to under 5 seconds.
                  </p>
                </div>
              </div>
            </MotionReveal>

          </div>
        </div>
      </ScrollSection>

      {/* 5. Core Platform Modules & Verified Capabilities */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0A0A0A] border-b border-white/10" viewportAmount={0.12}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="System Architecture & Modules"
            title="Engineered for Peak Call Center Ergonomics."
            description="Every component in the Noble Finance platform was crafted to reduce cognitive friction for telecallers and grant total operational command to branch managers."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
            
            {/* Module 1 */}
            <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#38BDF8]">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Telecalling Manager Dashboard
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The central nerve center providing real-time oversight of daily branch activity.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Real-time working session clock pill</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Live KPI counter cards (Calls, Leads, Meetings)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Prioritized upcoming follow-up queue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Scheduled consultation appointment feed</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-[#38BDF8]">
                Module: Manager Portal / Telecalling Dashboard
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Client Meetings & Loan Reviews
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  End-to-end consultation logistics tracking with automated stage transitions.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Status filters: Scheduled (131), Completed (21), Rescheduled (14)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Client & company entity cards with direct contact phones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Universal instant search by client, phone, or title</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>1-click Export to Excel functionality</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-400">
                Module: Manager Portal / Scheduled Meetings
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-[#151515] rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Team Performance & Telecaller Analytics
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Granular productivity telemetry that empowers merit-based recognition.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Employee rosters with unique IDs (EMP0004, EMP0002)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Real-time columns: Total Calls, Today's Calls, Interested Leads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pending follow-up backlog and last activity tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Excel report generator for performance reviews</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-purple-400">
                Module: Manager Portal / Team Performance
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* 6. Real System UI Showcase (Interactive Gallery with Lightbox) */}
      <ScrollSection className="py-20 lg:py-28 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Actual Production UI Showcase"
            title="Interactive Visual System Tour."
            description="Explore high-resolution screenshots of the live Noble Finance CRM platform developed by Brahmani Information. Click any screenshot to inspect in full detail."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            {NOBLE_SCREENSHOTS.map((item, idx) => (
              <MotionReveal
                key={item.id}
                preset={idx % 2 === 0 ? 'fadeUp' : 'scaleUp'}
                duration={0.6}
              >
                <div
                  onClick={() => setSelectedScreenshot(item)}
                  className="bg-[#151515] rounded-3xl border border-white/10 overflow-hidden group/screen cursor-pointer hover:border-[#005EDA]/50 hover:shadow-2xl transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedScreenshot(item);
                    }
                  }}
                >
                  {/* Browser Window Header */}
                  <div className="px-5 py-3 bg-[#1A1A1A] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 text-slate-300 font-semibold">{item.category}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[11px] text-[#38BDF8]">
                      <span>Click to Enlarge</span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover/screen:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Screenshot Image */}
                  <div className="relative overflow-hidden bg-black aspect-[16/9]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover/screen:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover/screen:bg-blue-600/10 transition-colors pointer-events-none" />
                  </div>

                  {/* Description & Key Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h4 className="text-xl font-bold text-white font-display group-hover/screen:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.caption}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Verified UI Architecture:
                      </span>
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* 7. Technology Stack & Architectural Decision Framework */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0A0A0A] border-b border-white/10" viewportAmount={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Choices"
            title="The Technology Stack Behind Noble Finance."
            description="Carefully chosen technologies engineered for speed, long-term stability, and low latency under high call volumes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="bg-[#151515] p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
                Frontend Layer
              </span>
              <h4 className="text-lg font-bold text-white font-display">React & TypeScript</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Component-driven declarative architecture ensuring fast re-renders, reactive state updates, and type-safe data schemas.
              </p>
            </div>

            <div className="bg-[#151515] p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                Backend Services
              </span>
              <h4 className="text-lg font-bold text-white font-display">Node.js & REST APIs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Asynchronous request handling for live lead updates, search indexing, and high-throughput employee performance tracking.
              </p>
            </div>

            <div className="bg-[#151515] p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                Styling & Ergonomics
              </span>
              <h4 className="text-lg font-bold text-white font-display">Tailwind CSS</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-contrast, low-fatigue visual tokens specifically tuned for telecallers operating across 8+ hour call center shifts.
              </p>
            </div>

            <div className="bg-[#151515] p-6 rounded-2xl border border-white/10 space-y-3">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Data Interop & Audit
              </span>
              <h4 className="text-lg font-bold text-white font-display">Excel / CSV Streaming</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Client-side and streaming server export generating formatted spreadsheets for meeting lists, employee attendance, and daily EOD.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* 8. Production Impact & Business Outcomes */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0E0E0E] border-b border-white/10" viewportAmount={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Impact"
            title="Measurable Business Outcomes for Noble Finance."
            description="The operational transformation achieved following the deployment of the Brahmani Information CRM platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-8 rounded-3xl bg-[#151515] border border-white/10 space-y-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#38BDF8]">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-4xl font-extrabold text-white font-display block">100%</span>
              <h4 className="text-base font-bold text-slate-200">Zero Overlapping Calls</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Automated lead status reservation eliminated agent collisions and ensured consistent customer brand perception.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#151515] border border-white/10 space-y-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Clock className="w-7 h-7" />
              </div>
              <span className="text-4xl font-extrabold text-emerald-400 font-display block">85%</span>
              <h4 className="text-base font-bold text-slate-200">Reporting Time Reduction</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Managers went from spending 90 minutes every evening on manual EOD summaries to instant 1-click Excel exports.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#151515] border border-white/10 space-y-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <BarChart3 className="w-7 h-7" />
              </div>
              <span className="text-4xl font-extrabold text-purple-400 font-display block">166+</span>
              <h4 className="text-base font-bold text-slate-200">Consultations Tracked</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Structured consultation lifecycle tracking resulted in higher meeting completion rates and faster loan sanctions.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* 9. Live Website Callout & Next Project Conversion */}
      <ScrollSection className="py-20 lg:py-24 bg-[#0A0A0A] text-center" viewportAmount={0.2}>
        <MotionReveal preset="scaleUp" duration={0.7} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Production Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
            Explore the Live Noble Finance System
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The platform is officially launched and active in production. You can access the official login screen or discuss your custom CRM requirements with our engineering team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://nobalfinance.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-lg shadow-blue-500/20 transition-all group"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <Link
              to="/start-a-project"
              className="inline-flex items-center space-x-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#151515] hover:bg-[#1E1E1E] rounded-xl border border-white/10 transition-colors"
            >
              <span>Start Your Custom CRM Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center space-x-2 px-6 py-3.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Work</span>
            </Link>
          </div>

        </MotionReveal>
      </ScrollSection>

      {/* 10. Interactive Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {selectedScreenshot && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#151515] rounded-3xl border border-white/15 shadow-2xl max-w-5xl w-full p-4 sm:p-6 space-y-4 relative max-h-[95vh] overflow-y-auto"
            >
              {/* Modal Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                    {selectedScreenshot.category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {selectedScreenshot.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedScreenshot(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close image lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Fullsize Image Preview */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedScreenshot.src}
                  alt={selectedScreenshot.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>

              {/* Caption & Highlights */}
              <div className="space-y-3 pt-2">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedScreenshot.caption}
                </p>
                <div className="space-y-1 bg-[#1A1A1A] p-4 rounded-xl border border-white/10">
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Key Highlighted Details:
                  </span>
                  {selectedScreenshot.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
export default NobleFinanceCaseStudyPage;
