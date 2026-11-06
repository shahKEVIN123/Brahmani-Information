import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Target,
  HeartHandshake,
  Lightbulb,
  Code2,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { COMPANY_INFO } from '../../data/companyData';
import { OptimizedImage } from '../OptimizedImage';

export const MobileAbout: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: 'Disciplined Engineering',
      desc: 'Clean, modular, and maintainable architectures that scale sustainably without accumulating technical debt.',
    },
    {
      icon: ShieldCheck,
      title: '100% Code Ownership',
      desc: 'Every repository, schema, and configuration asset belongs wholly to you. Zero proprietary lock-in.',
    },
    {
      icon: Target,
      title: 'Predictable Milestones',
      desc: 'Transparent sprints, weekly staging demonstrations, and accountable delivery timelines.',
    },
    {
      icon: HeartHandshake,
      title: 'Direct Collaboration',
      desc: 'No communication layers or friction. Work directly with technical leads who architect and build your product.',
    },
  ];

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header */}
      <section className="px-4 pt-4 pb-6 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
          <span>COMPANY PROFILE & ETHOS</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>Engineering Meaningful </span>
          <span className="text-[#005EDA]">Digital Experiences.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          {COMPANY_INFO.description}
        </p>

        {/* Visual Card */}
        <div className="pt-2">
          <div className="relative rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-lg aspect-[16/10]">
            <OptimizedImage
              src="/brahmani_only_right_visual.png"
              fallbackSrc="/assets/brahmani_only_right_visual.png"
              alt="Brahmani Information Digital Technology Practice"
              aspectRatio="16/10"
              objectFit="cover"
              priority={true}
              containerClassName="w-full h-full bg-[#121212]"
            />
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="px-4 py-6 border-t border-white/10 bg-[#0E0E0E] space-y-3">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          FOUNDATIONAL PURPOSE
        </div>

        <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-white font-display">
            <Target className="w-4 h-4 text-[#38BDF8]" />
            <span>Our Mission</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {COMPANY_INFO.mission}
          </p>
        </div>

        <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-white font-display">
            <Lightbulb className="w-4 h-4 text-[#38BDF8]" />
            <span>Our Vision</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {COMPANY_INFO.vision}
          </p>
        </div>
      </section>

      {/* 3. Core Values & Principles */}
      <section className="px-4 py-6 border-t border-white/10 bg-[#0A0A0A] space-y-4">
        <div>
          <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
            ENGINEERING PRINCIPLES
          </div>
          <h2 className="text-xl font-bold font-display text-white mt-0.5">
            How We Build Software
          </h2>
        </div>

        <div className="space-y-3">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-white/10 rounded-2xl p-4 flex items-start space-x-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-[#38BDF8] border border-blue-400/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-bold font-display text-white">
                    {item.title}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Operational Commitment Grid */}
      <section className="px-4 py-6 border-t border-white/10 bg-[#0E0E0E] space-y-3">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          OPERATIONAL PROMISES
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3.5 space-y-1">
            <div className="text-base font-bold font-display text-white">100%</div>
            <div className="text-[11px] font-semibold text-[#38BDF8]">Code Ownership</div>
            <p className="text-[10px] text-slate-400 leading-snug">Full IP transfer to client.</p>
          </div>
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3.5 space-y-1">
            <div className="text-base font-bold font-display text-white">Zero</div>
            <div className="text-[11px] font-semibold text-[#38BDF8]">Vendor Lock-in</div>
            <p className="text-[10px] text-slate-400 leading-snug">Standardized tech stacks.</p>
          </div>
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3.5 space-y-1">
            <div className="text-base font-bold font-display text-white">Direct</div>
            <div className="text-[11px] font-semibold text-[#38BDF8]">Architect Access</div>
            <p className="text-[10px] text-slate-400 leading-snug">No proxy project managers.</p>
          </div>
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3.5 space-y-1">
            <div className="text-base font-bold font-display text-white">24/7</div>
            <div className="text-[11px] font-semibold text-[#38BDF8]">SLA Support</div>
            <p className="text-[10px] text-slate-400 leading-snug">Continuous lifecycle care.</p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="px-4 pt-4">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-base font-bold text-white font-display">
            Start a Technical Conversation
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Discuss your system requirements and receive a pragmatic, milestone-based proposal.
          </p>
          <Link
            to="/start-a-project"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#005EDA] active:bg-[#004BBB]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

