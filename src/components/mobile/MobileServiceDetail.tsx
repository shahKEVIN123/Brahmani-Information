import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { ServiceDetail, SERVICES_LIST } from '../../data/companyData';
import { OptimizedImage } from '../OptimizedImage';

interface MobileServiceDetailProps {
  service: ServiceDetail;
  serviceIndex: number;
}

export const MobileServiceDetail: React.FC<MobileServiceDetailProps> = ({
  service,
  serviceIndex,
}) => {
  const prevService = serviceIndex > 0 ? SERVICES_LIST[serviceIndex - 1] : SERVICES_LIST[SERVICES_LIST.length - 1];
  const nextService = serviceIndex < SERVICES_LIST.length - 1 ? SERVICES_LIST[serviceIndex + 1] : SERVICES_LIST[0];

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Top Navigation Bar */}
      <section className="px-4 pt-3 pb-4 space-y-3">
        <Link
          to="/services"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 active:text-white bg-[#151515] border border-white/10 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All 12 Disciplines</span>
        </Link>

        <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] font-mono font-bold text-[#38BDF8]">
          <span>DISCIPLINE {service.number} // 12</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>{service.title}</span>
        </h1>

        <p className="text-xs text-slate-300 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Hero Illustration Card */}
        <div className="pt-2">
          <div className="rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-lg aspect-[16/10]">
            <OptimizedImage
              src={`/assets/services/${service.slug}.png`}
              alt={service.title}
              aspectRatio="16/10"
              objectFit="cover"
              priority={true}
              containerClassName="w-full h-full bg-[#121212]"
            />
          </div>
        </div>
      </section>

      {/* 2. Practice Overview */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0E0E0E] space-y-2.5">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          DISCIPLINE METHODOLOGY
        </div>
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
          {service.overview}
        </div>
      </section>

      {/* 3. Core Capabilities Breakdown */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0A0A0A] space-y-3">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          SUB-SERVICES BREAKDOWN
        </div>

        <div className="space-y-2">
          {service.subServices.map((sub, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-white/10 rounded-xl p-3.5 space-y-1"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span className="text-xs font-bold text-white font-display">
                  {sub.title}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pl-5.5 leading-relaxed">
                {sub.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Tech Stack Used */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0E0E0E] space-y-2.5">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          PRIMARY TECHNOLOGY STACK
        </div>
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.map((t) => (
            <span
              key={t}
              className="text-xs font-mono font-medium text-slate-200 bg-[#161616] border border-white/10 px-3 py-1.5 rounded-lg"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* 5. Next & Prev Quick Nav Switcher */}
      <section className="px-4 py-5 border-t border-white/10 bg-[#0A0A0A] space-y-2">
        <div className="text-[10px] font-mono text-slate-500 uppercase">
          EXPLORE OTHER DISCIPLINES
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/services/${prevService.slug}`}
            className="p-3 bg-[#121212] border border-white/10 rounded-xl space-y-0.5 active:bg-[#1A1A1A]"
          >
            <div className="text-[9px] text-slate-400 font-mono">← PREVIOUS</div>
            <div className="text-xs font-bold text-white truncate">{prevService.title}</div>
          </Link>
          <Link
            to={`/services/${nextService.slug}`}
            className="p-3 bg-[#121212] border border-white/10 rounded-xl space-y-0.5 text-right active:bg-[#1A1A1A]"
          >
            <div className="text-[9px] text-[#38BDF8] font-mono">NEXT →</div>
            <div className="text-xs font-bold text-white truncate">{nextService.title}</div>
          </Link>
        </div>
      </section>

      {/* 6. Sticky/Bottom Conversion Action */}
      <section className="px-4 pt-3">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-base font-bold text-white font-display">
            Request an Engineering Estimate for {service.title}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our leads will review your technical objectives and provide a clear milestone scope.
          </p>
          <Link
            to="/start-a-project"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#005EDA] active:bg-[#004BBB]"
          >
            <span>Consult on {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

