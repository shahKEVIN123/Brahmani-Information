import React, { useEffect, useRef } from 'react';

interface SpaceUniverseBackgroundProps {
  className?: string;
  mouseParallax?: { x: number; y: number };
}

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: number; // 0 = distant, 1 = mid, 2 = prominent
  glowColor?: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  fadeSpeed: number;
  active: boolean;
}

interface CosmicParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const SpaceUniverseBackground: React.FC<SpaceUniverseBackgroundProps> = ({
  className = 'absolute inset-0 pointer-events-none overflow-hidden',
  mouseParallax,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Track mouse with smooth interpolation
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1 centered
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (hasFinePointer && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 1. Multi-tier Starfield
    const starCount = Math.floor(Math.min(width, 1920) / 9); // ~150-200 stars
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const rand = Math.random();
      let layer = 0; // 70% distant tiny stars
      let size = 0.5 + Math.random() * 0.9;
      let alpha = 0.2 + Math.random() * 0.5;
      let glowColor: string | undefined = undefined;

      if (rand > 0.88) {
        // Prominent stars with blue/cyan glow
        layer = 2;
        size = 1.8 + Math.random() * 1.2;
        alpha = 0.75 + Math.random() * 0.25;
        glowColor = Math.random() > 0.5 ? '#46D9FF' : '#008CFF';
      } else if (rand > 0.65) {
        // Mid-distance stars
        layer = 1;
        size = 1.1 + Math.random() * 0.8;
        alpha = 0.45 + Math.random() * 0.45;
        glowColor = '#126BFF';
      }

      const x = Math.random() * (width || window.innerWidth);
      const y = Math.random() * (height || window.innerHeight);

      stars.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size,
        alpha,
        baseAlpha: alpha,
        twinkleSpeed: 0.01 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        layer,
        glowColor,
      });
    }

    // 2. Cosmic Dust Particles
    const dustCount = 28;
    const dustParticles: CosmicParticle[] = Array.from({ length: dustCount }, () => ({
      x: Math.random() * (width || window.innerWidth),
      y: Math.random() * (height || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.1,
      size: 0.8 + Math.random() * 1.6,
      alpha: 0.15 + Math.random() * 0.4,
      color: Math.random() > 0.4 ? 'rgba(70, 217, 255,' : 'rgba(18, 107, 255,',
    }));

    // 3. Shooting Stars (Meteors)
    const shootingStars: ShootingStar[] = [];
    let lastMeteorTime = Date.now();
    let nextMeteorDelay = 3500 + Math.random() * 4500; // between 3.5s and 8s

    const spawnShootingStar = () => {
      if (prefersReducedMotion) return;
      const startX = Math.random() * width * 0.85 + width * 0.1;
      const startY = Math.random() * height * 0.4;
      const angle = (28 + Math.random() * 18) * (Math.PI / 180); // 28 - 46 deg downward streak
      const length = 90 + Math.random() * 80;
      const speed = 14 + Math.random() * 8;

      shootingStars.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        opacity: 1,
        fadeSpeed: 0.016 + Math.random() * 0.012,
        active: true,
      });
    };

    let time = 0;

    const render = () => {
      time += 0.016;

      // Smooth mouse parallax interpolation
      if (!prefersReducedMotion && hasFinePointer) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      }

      ctx.clearRect(0, 0, width, height);

      // Render Stars with Layered Parallax
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Parallax depth multiplier: layer 0 = 6px, layer 1 = 16px, layer 2 = 28px
        const parallaxDepth = star.layer === 0 ? 6 : star.layer === 1 ? 16 : 28;
        const offsetX = currentMouseX * parallaxDepth;
        const offsetY = currentMouseY * parallaxDepth;

        // Subtle twinkling calculation
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha * (0.65 + 0.35 * Math.sin(star.twinklePhase));

        const drawX = star.baseX + offsetX;
        const drawY = star.baseY + offsetY;

        // Wrap around viewport edges gracefully
        const wrappedX = ((drawX % width) + width) % width;
        const wrappedY = ((drawY % height) + height) % height;

        // Render prominent star glow
        if (star.layer === 2 && star.glowColor) {
          ctx.save();
          // Halo
          const glowRad = star.size * 3.5;
          const gradient = ctx.createRadialGradient(
            wrappedX,
            wrappedY,
            0,
            wrappedX,
            wrappedY,
            glowRad
          );
          gradient.addColorStop(0, star.glowColor === '#46D9FF' ? 'rgba(70, 217, 255, 0.45)' : 'rgba(0, 140, 255, 0.35)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(wrappedX, wrappedY, glowRad, 0, Math.PI * 2);
          ctx.fill();

          // Subtle diffraction spike on prominent stars
          ctx.strokeStyle = 'rgba(245, 248, 255, 0.25)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(wrappedX - star.size * 2.5, wrappedY);
          ctx.lineTo(wrappedX + star.size * 2.5, wrappedY);
          ctx.moveTo(wrappedX, wrappedY - star.size * 2.5);
          ctx.lineTo(wrappedX, wrappedY + star.size * 2.5);
          ctx.stroke();
          ctx.restore();
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(wrappedX, wrappedY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.layer === 2 
          ? `rgba(245, 248, 255, ${currentAlpha})` 
          : star.layer === 1 
          ? `rgba(168, 181, 204, ${currentAlpha})` 
          : `rgba(200, 220, 255, ${currentAlpha})`;
        ctx.fill();
      }

      // Render Cosmic Dust
      for (let i = 0; i < dustParticles.length; i++) {
        const p = dustParticles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();
      }

      // Handle Meteors / Shooting Stars
      const now = Date.now();
      if (!prefersReducedMotion && now - lastMeteorTime > nextMeteorDelay) {
        spawnShootingStar();
        lastMeteorTime = now;
        nextMeteorDelay = 4500 + Math.random() * 5500;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ms = shootingStars[i];
        ms.x += Math.cos(ms.angle) * ms.speed;
        ms.y += Math.sin(ms.angle) * ms.speed;
        ms.opacity -= ms.fadeSpeed;

        if (ms.opacity <= 0 || ms.x > width + 100 || ms.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ms.x - Math.cos(ms.angle) * ms.length;
        const tailY = ms.y - Math.sin(ms.angle) * ms.length;

        ctx.save();
        const gradient = ctx.createLinearGradient(tailX, tailY, ms.x, ms.y);
        gradient.addColorStop(0, 'rgba(18, 107, 255, 0)');
        gradient.addColorStop(0.6, `rgba(70, 217, 255, ${ms.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${ms.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ms.x, ms.y);
        ctx.stroke();

        // Glowing head of meteor
        ctx.beginPath();
        ctx.arc(ms.x, ms.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ms.opacity})`;
        ctx.shadowColor = '#46D9FF';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (hasFinePointer) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      {/* 1. Deep Space Cosmic Color Foundations */}
      <div className="absolute inset-0 bg-[#030713]" />

      {/* 2. Layered Cosmic Nebula Gas Clouds with Organic Breathing Motion */}
      {/* Upper-Right Planetary Nebula Core */}
      <div 
        className="absolute -top-24 right-0 w-[650px] h-[650px] lg:w-[850px] lg:h-[850px] rounded-full pointer-events-none opacity-40 mix-blend-screen blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 140, 255, 0.35) 0%, rgba(70, 217, 255, 0.18) 40%, rgba(7, 21, 45, 0.05) 75%, transparent 100%)',
          animation: 'nebulaBreathe 18s ease-in-out infinite alternate',
        }}
      />

      {/* Center Cyan Atmospheric Nebula */}
      <div 
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-30 mix-blend-screen blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(70, 217, 255, 0.3) 0%, rgba(18, 107, 255, 0.15) 50%, transparent 80%)',
          animation: 'nebulaBreathe 22s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Lower-Left Distant Cosmic Dust Reservoir */}
      <div 
        className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25 mix-blend-screen blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(7, 21, 45, 0.7) 0%, rgba(18, 107, 255, 0.15) 50%, transparent 85%)',
        }}
      />

      {/* 3. Subtle Digital Coordinate Grid (Deep Tech Agency Aesthetic) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(70, 217, 255, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(70, 217, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 4. Canvas-Powered Multi-Layer Starfield & Meteors */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none" 
      />

      {/* 5. Deep Space Radial Vignette (Preserves text readability on left side) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 45%, transparent 20%, rgba(3, 7, 19, 0.65) 60%, rgba(3, 7, 19, 0.95) 100%)',
        }}
      />
    </div>
  );
};
