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
    <div className="relative w-full max-w-[580px] lg:max-w-[600px] xl:max-w-[640px] mx-auto select-none group/video">
      {/* Subtle 2.5D Ambient Depth Glow Behind Video with Gentle Float */}
      <div 
        className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-950/35 to-blue-500/20 rounded-3xl blur-2xl -z-10 pointer-events-none animate-soft-float" 
        aria-hidden="true"
      />

      {/* Clean Premium Video Container — Pure Video Only, Dark Theme Border & Depth with Subtle Hover Lift */}
      <div className="relative rounded-2xl border border-white/10 group-hover/video:border-blue-500/40 bg-slate-950 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_4px_16px_rgba(0,94,218,0.15)] overflow-hidden aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[5/4] transition-all duration-500 group-hover/video:-translate-y-1 group-hover/video:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.9),0_6px_24px_rgba(0,94,218,0.25)]">
        
        {/* Top Accent Expanding Light Bar */}
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent scale-x-0 group-hover/video:scale-x-100 transition-transform duration-700 ease-out z-20 pointer-events-none" />

        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center block transform group-hover/video:scale-[1.015] transition-transform duration-700 ease-out"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
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
