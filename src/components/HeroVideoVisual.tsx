import React, { useRef, useEffect, useState } from 'react';
import {
  Lock,
  ShieldCheck,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Code2,
  CheckCircle2,
  Activity
} from 'lucide-react';

export const HeroVideoVisual: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay policy handled gracefully
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative w-full max-w-[620px] xl:max-w-[660px] mx-auto select-none py-4 sm:py-6">
      
      {/* 2.5D Soft Ambient Glow Behind Workstation Frame */}
      <div 
        className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-blue-200/50 via-indigo-100/40 to-blue-100/50 rounded-3xl blur-2xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Floating 2.5D Telemetry Chip: Top Right (Enterprise Reliability SLA) */}
      <div className="absolute -top-1 sm:-top-2 right-2 sm:-right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14)] flex items-center space-x-2.5 transition-all duration-300 hover:-translate-y-0.5">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shadow-2xs">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
            <span>99.98% SLA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="text-[10px] text-slate-500 font-medium">Enterprise Standards</div>
        </div>
      </div>

      {/* Floating 2.5D Telemetry Chip: Bottom Left (Modern Architecture) */}
      <div className="absolute -bottom-1 sm:-bottom-2 left-2 sm:-left-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14)] flex items-center space-x-2.5 transition-all duration-300 hover:-translate-y-0.5">
        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#005EDA] shadow-2xs">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
            <span>Modern Stack</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-blue-100/70 text-[#005EDA]">v2.4</span>
          </div>
          <div className="text-[10px] text-slate-500 font-medium">React • Node • Cloud Native</div>
        </div>
      </div>

      {/* Main Workstation / Browser Product Showcase Window */}
      <div className="relative rounded-2xl border border-slate-300/80 bg-white shadow-[0_22px_50px_-12px_rgba(15,23,42,0.18),0_6px_16px_rgba(0,94,218,0.06)] overflow-hidden transition-all duration-300">
        
        {/* Browser Top Chrome Header Bar */}
        <div className="bg-slate-100/95 border-b border-slate-200/90 px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
          
          {/* Window Traffic Light Dots */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400/90 border border-rose-500/30" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/90 border border-amber-500/30" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400/90 border border-emerald-500/30" />
            <span className="ml-2 text-[11px] font-mono text-slate-500 font-medium hidden md:inline">
              brahmani-production.view
            </span>
          </div>

          {/* Center Domain & Secure SSL Pill */}
          <div className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-white border border-slate-200/80 shadow-2xs text-[11px] text-slate-600 font-mono">
            <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-[140px] sm:max-w-none">
              brahmaniinformation.com
            </span>
            <span className="text-slate-400 hidden sm:inline">/platform</span>
          </div>

          {/* Right Live Production Indicator */}
          <div className="flex items-center space-x-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-emerald-50 border border-emerald-200/70 text-[10px] font-semibold text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">LIVE PREVIEW</span>
            <span className="sm:hidden">LIVE</span>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="relative bg-slate-950 aspect-[16/10] overflow-hidden group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center block"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            aria-label="Brahmani Information Modern Digital Experiences and Website Development Video"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-workflow.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Subtle Hover Controls Overlay */}
          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-end justify-between p-3">
            <div className="pointer-events-auto flex items-center space-x-2">
              <button
                type="button"
                onClick={togglePlay}
                className="w-7 h-7 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-colors shadow-sm"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="w-7 h-7 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-colors shadow-sm"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="pointer-events-auto text-[10px] font-mono font-medium text-white/80 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
              High Definition 1080p
            </div>
          </div>
        </div>

        {/* Browser Bottom Telemetry Bar */}
        <div className="bg-slate-900 border-t border-slate-800/90 px-3.5 sm:px-4 py-2 flex items-center justify-between text-[11px] text-slate-300 font-mono">
          <div className="flex items-center space-x-2 truncate">
            <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
            <span className="text-slate-300 font-medium truncate">Digital Product Deployment</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400 flex-shrink-0">
            <span className="text-emerald-400 font-semibold">● 60 FPS</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">Low-Latency Delivery</span>
          </div>
        </div>

      </div>
    </div>
  );
};
