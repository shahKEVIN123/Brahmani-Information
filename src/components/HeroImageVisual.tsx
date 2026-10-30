import React, { useState } from 'react';

interface HeroImageVisualProps {
  src: string;
  alt: string;
  className?: string;
  frameless?: boolean;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
}

export const HeroImageVisual: React.FC<HeroImageVisualProps> = ({
  src,
  alt,
  className = '',
  frameless = false,
  aspectRatio,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // High-Fidelity Frameless Floating Presentation (ideal for transparent 2.5D device mockups)
  if (frameless) {
    return (
      <div className={`relative w-full max-w-[560px] xl:max-w-[620px] mx-auto select-none ${className}`}>
        {/* Soft Ambient Depth Glow Behind Device Visual */}
        <div 
          className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-950/30 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none" 
          aria-hidden="true"
        />

        {/* Floating Device Showcase Graphic */}
        <div className="relative group transition-transform duration-300 hover:scale-[1.015]">
          {!isLoaded && (
            <div className="w-full aspect-[2.4/1] bg-white/5 rounded-2xl animate-pulse" />
          )}

          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-auto object-contain transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]`}
            loading="eager"
          />
        </div>
      </div>
    );
  }

  // Standard Framed Visual Card
  return (
    <div className={`relative w-full max-w-[480px] xl:max-w-[540px] mx-auto select-none ${className}`}>
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Visual */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-600/20 via-slate-900/40 to-blue-500/15 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Art-Directed Visual Canvas */}
      <div className={`relative rounded-2xl border border-white/10 bg-[#151515] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,94,218,0.1)] overflow-hidden ${aspectRatio || 'aspect-[16/10]'} group`}>
        
        {/* Placeholder skeleton while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}

        {/* Generated Topic-Specific Artwork */}
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } group-hover:scale-[1.02]`}
          loading="eager"
        />

        {/* Subtle Brand Accent Reflection Edge */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#005EDA]/40 to-transparent pointer-events-none" 
          aria-hidden="true" 
        />
      </div>
    </div>
  );
};
