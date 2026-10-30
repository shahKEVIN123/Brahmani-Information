import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '../router/Router';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string | ReactNode;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  visual?: ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  actions,
  visual,
  className = '',
}) => {
  // Format string title into dual-color treatment (White + Brahmani Brand Blue in Dark Theme)
  const renderTitle = (t: string | ReactNode): ReactNode => {
    if (typeof t !== 'string') return t;
    const words = t.trim().split(' ');
    if (words.length <= 2) {
      return (
        <>
          <span className="text-white">{words[0]} </span>
          <span className="text-[#005EDA]">{words.slice(1).join(' ')}</span>
        </>
      );
    }
    const mid = Math.ceil(words.length * 0.55);
    const part1 = words.slice(0, mid).join(' ');
    const part2 = words.slice(mid).join(' ');
    return (
      <>
        <span className="text-white block sm:inline">{part1} </span>
        <span className="text-[#005EDA] block sm:inline">{part2}</span>
      </>
    );
  };

  return (
    <section
      className={`relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0E0E0E] border-b border-white/10 overflow-hidden ${className}`}
    >
      {/* Subtle 2.5D Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-corporate-grid opacity-50 pointer-events-none" />

      {/* Soft Ambient Depth Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={item.label}>
                    {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                    <li>
                      {item.href && !isLast ? (
                        <Link to={item.href} className="hover:text-[#005EDA] transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-slate-200 font-semibold">{item.label}</span>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Main Text Content */}
          <div className={visual ? 'lg:col-span-6 xl:col-span-6 flex flex-col justify-center' : 'lg:col-span-10 xl:col-span-9'}>
            
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                <span>{badge}</span>
              </div>
            )}

            {/* Display Title with Dual-Color Brand Treatment */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] font-display mb-5">
              {renderTitle(title)}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Actions */}
            {actions && <div className="mt-8 flex flex-wrap gap-4 items-center">{actions}</div>}
          </div>

          {/* Right Visual Area */}
          {visual && (
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end w-full mt-6 lg:mt-0">
              {visual}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
