import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '../router/Router';

// Dedicated session storage key for full completion
const SESSION_KEY = 'brahmani_intro_v4';

export const CinematicBrandIntro: React.FC = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [overlayFading, setOverlayFading] = useState<boolean>(false);

  const [logoStyle, setLogoStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: 'translate3d(0, 0, 0) scale(1)',
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const isFlyingRef = useRef<boolean>(false);
  const hasTriggeredHoldRef = useRef<boolean>(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const retryIntervalRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // 1. Session check and mounting logic
  useEffect(() => {
    // Only run on the root / home route
    const isHome = pathname === '/' || pathname === '' || pathname === '/index.html';
    if (!isHome) return;

    // URL override (?intro=1, ?replay=1, ?reset=1) for manual testing / review
    const searchParams = new URLSearchParams(window.location.search);
    const forceReplay = searchParams.has('intro') || searchParams.has('replay') || searchParams.has('reset');

    if (!forceReplay) {
      try {
        const hasPlayed = sessionStorage.getItem(SESSION_KEY);
        if (hasPlayed === 'true') {
          return;
        }
      } catch {
        // Safe fallback
      }
    }

    // Mount intro overlay and body classes unconditionally on both desktop and mobile
    setIsActive(true);
    document.body.classList.add('intro-active', 'intro-running');

    return () => {
      document.body.classList.remove('intro-running', 'intro-active', 'intro-entering');
    };
  }, [pathname]);

  // 2. Video Autoplay & Synchronization
  useEffect(() => {
    if (!isActive) return;

    const video = videoRef.current;
    if (!video) return;

    // Enforce HTML5 DOM properties for universal browser autoplay
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');
    video.setAttribute('autoplay', '');

    // Function to trigger playback programmatically
    const triggerPlay = () => {
      if (!video) return;
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;

      if (!video.paused && video.currentTime > 0) {
        if (fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
        return;
      }

      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            // Cancel fallback once video successfully begins playing
            if (fallbackTimerRef.current) {
              clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
          })
          .catch(() => {
            // Silently retried via event listeners and retry loop
          });
      }
    };

    // Immediate attempt on mount
    triggerPlay();

    // Event-driven triggers as media buffers
    video.addEventListener('loadedmetadata', triggerPlay);
    video.addEventListener('loadeddata', triggerPlay);
    video.addEventListener('canplay', triggerPlay);
    video.addEventListener('canplaythrough', triggerPlay);
    video.addEventListener('play', () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    });

    // Active polling retry loop for the first 3 seconds
    let retries = 0;
    retryIntervalRef.current = window.setInterval(() => {
      retries++;
      if (!video) return;
      if (!video.paused && video.currentTime > 0.05) {
        if (retryIntervalRef.current) {
          clearInterval(retryIntervalRef.current);
          retryIntervalRef.current = null;
        }
        if (fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
        return;
      }
      triggerPlay();
      if (retries >= 30 && retryIntervalRef.current) {
        clearInterval(retryIntervalRef.current);
        retryIntervalRef.current = null;
      }
    }, 100);

    // Completely passive window listeners (NO UI buttons or gesture prompts)
    const onPassiveInteraction = () => {
      triggerPlay();
    };
    window.addEventListener('touchstart', onPassiveInteraction, { passive: true, once: true });
    window.addEventListener('pointerdown', onPassiveInteraction, { passive: true, once: true });
    window.addEventListener('mousemove', onPassiveInteraction, { passive: true, once: true });
    window.addEventListener('click', onPassiveInteraction, { passive: true, once: true });
    window.addEventListener('keydown', onPassiveInteraction, { passive: true, once: true });
    window.addEventListener('scroll', onPassiveInteraction, { passive: true, once: true });

    // Handle frame checking (used by both requestAnimationFrame and timeupdate)
    const handleProgressCheck = () => {
      if (!video || hasTriggeredHoldRef.current) return;

      const t = video.currentTime;

      // Cancel fallback timer once playback has started
      if (t > 0.05 && fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }

      // 4.2s - 5.2s: Lens flare burst reveals the Brahmani Information logo
      // Gradually fade in the crisp DOM logo overlay to match flare
      if (t >= 4.2 && t < 5.3 && !isFlyingRef.current) {
        const progress = Math.min(1, (t - 4.2) / 0.9);
        setLogoStyle({
          opacity: progress,
          transform: 'translate3d(0, 0, 0) scale(1)',
        });
      }

      // At 5.3s: Logo is fully centered and crystal clear; pause video before "COMING SOON" text
      if (t >= 5.3) {
        hasTriggeredHoldRef.current = true;
        video.pause();
        setLogoStyle({
          opacity: 1,
          transform: 'translate3d(0, 0, 0) scale(1)',
        });

        // Hold logo centered for ~550ms, then launch smooth flight toward navbar
        window.setTimeout(() => {
          launchFlight();
        }, 550);
      }
    };

    // Frame tracking loop
    const frameLoop = () => {
      handleProgressCheck();
      if (!hasTriggeredHoldRef.current) {
        animationFrameRef.current = requestAnimationFrame(frameLoop);
      }
    };
    animationFrameRef.current = requestAnimationFrame(frameLoop);

    // timeupdate as backup in case browser throttles rAF
    video.addEventListener('timeupdate', handleProgressCheck);

    // Fallback timer: Only if video completely fails to load after 10 full seconds
    fallbackTimerRef.current = window.setTimeout(() => {
      if (!hasTriggeredHoldRef.current && video.currentTime < 0.5) {
        hasTriggeredHoldRef.current = true;
        setLogoStyle({
          opacity: 1,
          transform: 'translate3d(0, 0, 0) scale(1)',
          transition: 'opacity 0.8s ease-out',
        });
        window.setTimeout(() => {
          launchFlight();
        }, 1000);
      }
    }, 10000);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (retryIntervalRef.current) {
        clearInterval(retryIntervalRef.current);
      }
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      video.removeEventListener('loadedmetadata', triggerPlay);
      video.removeEventListener('loadeddata', triggerPlay);
      video.removeEventListener('canplay', triggerPlay);
      video.removeEventListener('canplaythrough', triggerPlay);
      video.removeEventListener('timeupdate', handleProgressCheck);
      window.removeEventListener('touchstart', onPassiveInteraction);
      window.removeEventListener('pointerdown', onPassiveInteraction);
      window.removeEventListener('mousemove', onPassiveInteraction);
      window.removeEventListener('click', onPassiveInteraction);
      window.removeEventListener('keydown', onPassiveInteraction);
      window.removeEventListener('scroll', onPassiveInteraction);
    };
  }, [isActive]);

  // 3. Smooth Cinematic Flight into the Navbar Logo Position
  const launchFlight = () => {
    isFlyingRef.current = true;

    // Awaken home page hero elements underneath
    document.body.classList.add('intro-entering');
    setOverlayFading(true);

    const navbarLogo = document.getElementById('navbar-brand-logo');
    const centeredLogo = logoRef.current;

    if (!navbarLogo || !centeredLogo) {
      completeIntro(true);
      return;
    }

    // Dynamic measurement across mobile 360px/390px, tablet, and desktop viewports
    const targetRect = navbarLogo.getBoundingClientRect();
    const currentRect = centeredLogo.getBoundingClientRect();

    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;
    const currentCenterX = currentRect.left + currentRect.width / 2;
    const currentCenterY = currentRect.top + currentRect.height / 2;

    const deltaX = targetCenterX - currentCenterX;
    const deltaY = targetCenterY - currentCenterY;

    // Scale down proportionally to exact navbar logo height
    const scale = currentRect.height > 0 ? targetRect.height / currentRect.height : 0.25;

    // Apply hardware-accelerated GPU transform with smooth cubic-bezier easing
    setLogoStyle({
      opacity: 1,
      transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`,
      transition: 'transform 1.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out',
    });

    // When flight settles, hand off seamlessly to the real navbar logo
    window.setTimeout(() => {
      completeIntro(true);
    }, 1350);
  };

  // 4. Complete and unmount intro
  const completeIntro = (didCompleteSuccessfully: boolean) => {
    if (didCompleteSuccessfully) {
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch {}
    }

    // Reveal real navbar logo and remove intro classes
    document.body.classList.remove('intro-running');
    document.body.classList.remove('intro-active');
    document.body.classList.remove('intro-entering');

    setIsActive(false);
  };

  if (!isActive) return null;

  return (
    <div
      id="cinematic-brand-intro"
      className={`fixed inset-0 w-full h-full min-h-screen min-h-[100dvh] z-[99999] bg-[#020617] overflow-hidden select-none pointer-events-none transition-opacity duration-1000 ${
        overlayFading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-label="Brahmani Information Brand Reveal"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Cinematic Reveal Video (Autoplays automatically, muted, playsInline) */}
      <video
        ref={videoRef}
        src="/intro-reveal.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/intro-reveal.mp4" type="video/mp4" />
      </video>

      {/* Strategic Bottom Mask Gradient (Guarantees NO "COMING SOON" text is ever visible) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Ambient Vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#020617]/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Brand Logo that seamlessly takes over and flies into the Navbar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
        <div
          ref={logoRef}
          style={logoStyle}
          className="relative w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] max-w-[85vw] transform-gpu will-change-transform"
        >
          <img
            src="/Brahmani Information Logo.png"
            alt="Brahmani Information Logo"
            width="500"
            height="116"
            className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(56,189,248,0.55)]"
          />
        </div>
      </div>
    </div>
  );
};
