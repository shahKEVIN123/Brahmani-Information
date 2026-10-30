import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 lg:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-4`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#005EDA]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.16] font-display mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
