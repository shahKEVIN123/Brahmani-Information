import React, { useEffect, useRef } from 'react';

interface SignalOrbitCanvasProps {
  className?: string;
  speedMultiplier?: number;
}

export const SignalOrbitCanvas: React.FC<SignalOrbitCanvasProps> = ({
  className = "absolute inset-0 pointer-events-none",
  speedMultiplier = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool traveling along orbital ellipses
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      orbitIndex: Math.floor(Math.random() * 3), // 3 concentric orbits
      angle: Math.random() * Math.PI * 2,
      speed: (0.0006 + Math.random() * 0.0012) * speedMultiplier,
      size: 1 + Math.random() * 1.8,
      alpha: 0.2 + Math.random() * 0.6,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      pulseVal: Math.random() * Math.PI,
    }));

    // Primary bright signal pulses
    const signalPulses = [
      { orbitIndex: 0, angle: 0, speed: 0.0022 * speedMultiplier, length: 18 },
      { orbitIndex: 1, angle: Math.PI, speed: 0.0017 * speedMultiplier, length: 24 },
      { orbitIndex: 2, angle: Math.PI * 0.5, speed: 0.0013 * speedMultiplier, length: 14 },
    ];

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Center of the orbital ecosystem aligned with the right-side visualizer
      const isDesktop = width >= 1024;
      const centerX = isDesktop ? width * 0.74 : width * 10;
      const centerY = isDesktop ? height * 0.5 : height * 0.65;

      // Orbit radii (semi-major & semi-minor for elliptical path tilted like the logo)
      const orbits = [
        { rx: Math.min(width, height) * 0.52, ry: Math.min(width, height) * 0.26, tilt: -0.32, color: 'rgba(0, 94, 218, 0.16)' },
        { rx: Math.min(width, height) * 0.72, ry: Math.min(width, height) * 0.35, tilt: -0.28, color: 'rgba(0, 94, 218, 0.10)' },
        { rx: Math.min(width, height) * 0.92, ry: Math.min(width, height) * 0.44, tilt: -0.24, color: 'rgba(0, 94, 218, 0.06)' },
      ];

      // Draw faint orbital guide tracks
      orbits.forEach((orb) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orb.tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, orb.rx, orb.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = orb.color;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // Draw particles following the orbits
      particles.forEach((p) => {
        p.angle += p.speed;
        p.pulseVal += p.pulseSpeed;
        const orb = orbits[p.orbitIndex];

        // Position on tilted ellipse
        const cosAngle = Math.cos(p.angle);
        const sinAngle = Math.sin(p.angle);
        const rawX = orb.rx * cosAngle;
        const rawY = orb.ry * sinAngle;

        const rotX = rawX * Math.cos(orb.tilt) - rawY * Math.sin(orb.tilt);
        const rotY = rawX * Math.sin(orb.tilt) + rawY * Math.cos(orb.tilt);

        const px = centerX + rotX;
        const py = centerY + rotY;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulseVal));

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 148, 255, ${currentAlpha})`;
        ctx.shadowColor = '#005EDA';
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      // Draw bright traveling signal pulses with fading tails
      signalPulses.forEach((sp) => {
        sp.angle += sp.speed;
        const orb = orbits[sp.orbitIndex];

        // Draw tail
        for (let i = 0; i < sp.length; i++) {
          const tailAngle = sp.angle - (i * 0.02);
          const cosA = Math.cos(tailAngle);
          const sinA = Math.sin(tailAngle);
          const rawX = orb.rx * cosA;
          const rawY = orb.ry * sinA;
          const rotX = rawX * Math.cos(orb.tilt) - rawY * Math.sin(orb.tilt);
          const rotY = rawX * Math.sin(orb.tilt) + rawY * Math.cos(orb.tilt);

          const px = centerX + rotX;
          const py = centerY + rotY;
          const tailAlpha = (1 - (i / sp.length)) * 0.7;

          ctx.beginPath();
          ctx.arc(px, py, 2.2 * (1 - i / sp.length), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 132, 255, ${tailAlpha})`;
          ctx.fill();
        }

        // Head of the signal
        const cosA = Math.cos(sp.angle);
        const sinA = Math.sin(sp.angle);
        const headX = orb.rx * cosA;
        const headY = orb.ry * sinA;
        const headRotX = headX * Math.cos(orb.tilt) - headY * Math.sin(orb.tilt);
        const headRotY = headX * Math.sin(orb.tilt) + headY * Math.cos(orb.tilt);
        const hx = centerX + headRotX;
        const hy = centerY + headRotY;

        ctx.save();
        ctx.beginPath();
        ctx.arc(hx, hy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#3894FF';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
};
