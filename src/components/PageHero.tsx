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
  // Format string title into dual-color treatment if plain string is provided
  const renderTitle = (t: string | ReactNode): ReactNode => {
    if (typeof t !== 'string') return t;
    const words = t.trim().split(' ');
    if (words.length <= 2) {
      return (
        <>
          <span className="text-[#0F172A]">{words[0]} </span>
          <span className="text-[#005EDA]">{words.slice(1).join(' ')}</span>
        </>
      );
    }
    const mid = Math.ceil(words.length * 0.55);
    const part1 = words.slice(0, mid).join(' ');
    const part2 = words.slice(mid).join(' ');
    return (
      <>
        <span className="text-[#0F172A] block sm:inline">{part1} </span>
        <span className="text-[#005EDA] block sm:inline">{part2}</span>
      </>
    );
  };

  return (
    <section
      className={`relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/50 border-b border-slate-200/80 overflow-hidden ${className}`}
    >
      {/* Subtle 2.5D Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-corporate-grid opacity-60 pointer-events-none" />

      {/* Soft Ambient Depth Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-slate-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={item.label}>
                    {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                    <li>
                      {item.href && !isLast ? (
                        <Link to={item.href} className="hover:text-[#005EDA] transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-slate-800 font-semibold">{item.label}</span>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Text Content */}
          <div className={visual ? 'lg:col-span-7 xl:col-span-7 flex flex-col justify-center' : 'lg:col-span-10 xl:col-span-9'}>
            
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold uppercase tracking-wider text-[#005EDA] mb-5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
                <span>{badge}</span>
              </div>
            )}

            {/* Display Title with Dual-Color Brand Treatment */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] font-display mb-5">
              {renderTitle(title)}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Actions */}
            {actions && <div className="mt-8 flex flex-wrap gap-4 items-center">{actions}</div>}
          </div>

          {/* Right Visual Area */}
          {visual && (
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center w-full mt-6 lg:mt-0">
              {visual}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
