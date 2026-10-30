import React, { useRef, useEffect } from 'react';

export const HeroVideoVisual: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy handled gracefully
      });
    }
  }, []);

  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[600px] xl:max-w-[640px] mx-auto select-none">
      {/* Subtle 2.5D Ambient Depth Glow Behind Video */}
      <div 
        className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-blue-200/35 via-indigo-100/25 to-blue-100/35 rounded-3xl blur-2xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Clean Premium Video Container — Pure Video Only, Taller on Desktop */}
      <div className="relative rounded-2xl border border-slate-200/90 bg-slate-950 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.14),0_4px_12px_rgba(0,94,218,0.04)] overflow-hidden aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[5/4]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center block"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Brahmani Information Digital Experiences Video"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-workflow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
