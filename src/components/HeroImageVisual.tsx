import React from 'react';
import { OptimizedImage } from './OptimizedImage';

interface HeroImageVisualProps {
  src: string;
  alt: string;
  className?: string;
  frameless?: boolean;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
  fallbackSrc?: string;
}

export const HeroImageVisual: React.FC<HeroImageVisualProps> = ({
  src,
  alt,
  className = '',
  frameless = false,
  aspectRatio,
  objectFit = 'cover',
  fallbackSrc,
}) => {
  // High-Fidelity Frameless Floating Presentation (ideal for transparent 2.5D device mockups)
  if (frameless) {
    return (
      <div className={`relative w-full max-w-[560px] xl:max-w-[620px] mx-auto select-none ${className}`}>
        {/* Soft Ambient Depth Glow Behind Device Visual with Floating Motion */}
        <div 
          className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-950/30 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none animate-soft-float" 
          aria-hidden="true"
        />

        {/* Floating Device Showcase Graphic */}
        <div className="relative group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
          <OptimizedImage
            src={src}
            alt={alt}
            priority={true}
            objectFit="contain"
            aspectRatio="2.4/1"
            className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
            containerClassName="rounded-2xl bg-transparent"
            fallbackSrc={fallbackSrc}
          />
        </div>
      </div>
    );
  }

  // Standard Framed Visual Card with Interactive Depth
  return (
    <div className={`relative w-full max-w-[480px] xl:max-w-[540px] mx-auto select-none group/visual ${className}`}>
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Visual */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-600/25 via-slate-900/40 to-blue-500/20 rounded-3xl blur-xl -z-10 pointer-events-none animate-soft-float" 
        aria-hidden="true"
      />

      {/* Main Art-Directed Visual Canvas */}
      <div className={`relative rounded-2xl border border-white/10 group-hover/visual:border-blue-500/40 bg-[#151515] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,94,218,0.1)] group-hover/visual:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.9),0_6px_20px_rgba(0,94,218,0.25)] overflow-hidden ${aspectRatio || 'aspect-[16/10]'} transition-all duration-500 group-hover/visual:-translate-y-1`}>
        {/* Top Border Expand Accent */}
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent scale-x-0 group-hover/visual:scale-x-100 transition-transform duration-700 ease-out z-20 pointer-events-none" />

        <OptimizedImage
          src={src}
          alt={alt}
          priority={true}
          objectFit={objectFit}
          containerClassName={`w-full h-full bg-[#151515] ${objectFit === 'contain' ? 'p-3 sm:p-4 md:p-5 flex items-center justify-center' : ''}`}
          className={objectFit === 'contain' ? 'w-full h-full object-contain' : 'group-hover/visual:scale-[1.03] transition-transform duration-700 ease-out'}
          fallbackSrc={fallbackSrc}
        />
      </div>
    </div>
  );
};
