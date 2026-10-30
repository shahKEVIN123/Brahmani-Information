import React, { useState } from 'react';

interface HeroImageVisualProps {
  src: string;
  alt: string;
  className?: string;
}

export const HeroImageVisual: React.FC<HeroImageVisualProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full max-w-[480px] xl:max-w-[540px] mx-auto select-none ${className}`}>
      
      {/* 2.5D Soft Ambient Depth Shadow Behind Visual */}
      <div 
        className="absolute -inset-3 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50/70 rounded-3xl blur-xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Art-Directed Visual Canvas */}
      <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1),0_4px_12px_rgba(0,94,218,0.04)] overflow-hidden aspect-[16/10] group">
        
        {/* Placeholder skeleton while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-100 animate-pulse" />
        )}

        {/* Generated Topic-Specific Artwork */}
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } group-hover:scale-[1.02]`}
          loading="eager"
        />

        {/* Subtle Brand Accent Reflection Edge */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#005EDA]/25 to-transparent pointer-events-none"
          aria-hidden="true" 
        />
      </div>
    </div>
  );
};

