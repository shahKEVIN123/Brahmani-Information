import React, { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  Palette,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { Link } from '../../router/Router';
import { TechIcon } from '../TechnologyIcons';
import { TECHNOLOGIES_DATA } from '../../data/companyData';
import { OptimizedImage } from '../OptimizedImage';

export const MobileTechnology: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('React');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Design'];

  const allItems = TECHNOLOGIES_DATA.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryGroup: cat.category }))
  );

  const filteredItems = allItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.categoryGroup.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const inspected = allItems.find((i) => i.name === selectedTech) || allItems[0];

  return (
    <div className="w-full bg-[#0A0A0A] text-slate-100 overflow-x-hidden pt-20 pb-12">
      
      {/* 1. Header */}
      <section className="px-4 pt-4 pb-6 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-semibold text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
          <span>PRODUCTION STACK & TOOLS</span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight font-display leading-tight text-white">
          <span>The Technology Behind </span>
          <span className="text-[#005EDA]">What We Build.</span>
        </h1>

        <p className="text-xs text-slate-400 leading-relaxed">
          Battle-tested libraries, runtimes, and databases selected for resilience, fast developer velocity, and zero technical debt.
        </p>

        {/* Visual Card */}
        <div className="pt-2">
          <div className="rounded-2xl border border-white/10 bg-[#121212] overflow-hidden shadow-lg aspect-[3/2]">
            <OptimizedImage
              src="/assets/heroes/technology-hero.png?v=6"
              fallbackSrc="/technology-hero.png?v=6"
              alt="Brahmani Information Technology Architecture Stack"
              aspectRatio="3/2"
              objectFit="cover"
              priority={true}
              containerClassName="w-full h-full bg-[#121212]"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                activeCategory === cat
                  ? 'bg-[#005EDA] text-white shadow-xs'
                  : 'bg-[#151515] text-slate-400 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Interactive Mobile Tech Grid */}
      <section className="px-4 py-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {filteredItems.map((tech) => {
            const isSelected = selectedTech === tech.name;
            return (
              <button
                key={tech.name}
                onClick={() => setSelectedTech(tech.name)}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1.5 transition-all ${
                  isSelected
                    ? 'bg-[#1C1C1C] border-[#005EDA] ring-2 ring-[#005EDA]/30 shadow-md'
                    : 'bg-[#121212] border-white/10 active:bg-[#1A1A1A]'
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <TechIcon name={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-medium text-white truncate max-w-full">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono text-slate-400 truncate max-w-full">
                  {tech.categoryGroup.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Inspected Tech Detail Card */}
        {inspected && (
          <div className="bg-[#151515] border border-blue-500/30 rounded-2xl p-4 space-y-2 shadow-md mt-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#222] border border-white/10 p-2 flex items-center justify-center shrink-0">
                <TechIcon name={inspected.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">
                  {inspected.name}
                </div>
                <div className="text-[11px] font-semibold text-[#38BDF8]">
                  {inspected.role}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              {inspected.description}
            </p>
          </div>
        )}
      </section>

      {/* 3. Architectural Benchmarks */}
      <section className="px-4 py-6 border-t border-white/10 bg-[#0E0E0E] space-y-3">
        <div className="text-[10px] font-bold font-mono tracking-wider uppercase text-[#38BDF8]">
          CORE ARCHITECTURAL BENCHMARKS
        </div>
        <div className="space-y-2">
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Component Modularity:</strong>
              Declarative React architectures with strict TypeScript typings ensuring zero runtime surprises.
            </div>
          </div>
          <div className="bg-[#121212] border border-white/10 rounded-xl p-3 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Non-Blocking Node.js IO:</strong>
              Asynchronous event-loop servers built for concurrent operations and sub-millisecond API response times.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-4 pt-4">
        <div className="bg-gradient-to-tr from-[#005EDA]/20 via-[#151515] to-[#121212] border border-[#005EDA]/30 rounded-2xl p-5 space-y-3">
          <h3 className="text-base font-bold text-white font-display">
            Need a Stack Recommendation?
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our engineers will evaluate your workload and advise on the most sustainable technological stack.
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

