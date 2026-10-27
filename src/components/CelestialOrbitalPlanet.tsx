import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SparkleIcon } from './SparkleIcon';

interface CelestialOrbitalPlanetProps {
  className?: string;
}

export const CelestialOrbitalPlanet: React.FC<CelestialOrbitalPlanetProps> = ({
  className = 'relative w-full flex items-center justify-center',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${className} select-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container with responsive aspect ratio */}
      <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] aspect-square flex items-center justify-center">
        
        {/* 1. Deep Atmospheric Outer Halo Glow */}
        <div 
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#008CFF]/20 via-[#46D9FF]/15 to-transparent blur-3xl pointer-events-none transition-all duration-700 ${
            isHovered ? 'scale-110 opacity-80' : 'scale-100 opacity-50'
          }`}
        />

        {/* 2. Secondary Diffuse Cosmic Nebula Core */}
        <div 
          className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none opacity-40 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(70, 217, 255, 0.25) 0%, rgba(0, 140, 255, 0.15) 45%, rgba(18, 107, 255, 0.05) 70%, transparent 100%)',
          }}
        />

        {/* 3. Outer Distant Orbit 3 (Large low-opacity dotted path) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 600 600" className="w-full h-full">
            {/* Tilted outer ellipse */}
            <ellipse
              cx="300"
              cy="300"
              rx="275"
              ry="125"
              transform="rotate(-12 300 300)"
              fill="none"
              stroke="rgba(18, 107, 255, 0.25)"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            />
          </svg>

          {/* Micro node on Orbit 3 */}
          <div className="absolute top-[28%] left-[7%] -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#126BFF] border border-[#46D9FF]/60 shadow-[0_0_8px_#126BFF]" />
            <span className="hidden sm:inline text-[9px] font-mono tracking-widest text-[#A8B5CC]/60 uppercase">
              NODE // 03
            </span>
          </div>
        </motion.div>

        {/* 4. Counter-Tilted Orbit 2 (Electric blue dashed path) */}
        <motion.div
          className="absolute inset-4 sm:inset-6 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 540 540" className="w-full h-full">
            <ellipse
              cx="270"
              cy="270"
              rx="235"
              ry="105"
              transform="rotate(32 270 270)"
              fill="none"
              stroke="rgba(0, 140, 255, 0.4)"
              strokeWidth="1.4"
              strokeDasharray="6 8"
            />
          </svg>

          {/* Orbiting Tech Satellite Node 2 */}
          <div className="absolute top-[82%] left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#008CFF] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008CFF] border border-white shadow-[0_0_12px_#008CFF]"></span>
            </div>
          </div>
        </motion.div>

        {/* 5. Primary Luminous Orbit 1 (Luminous Cyan Highlighted Track) */}
        <motion.div
          className="absolute inset-8 sm:inset-10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 480 480" className="w-full h-full">
            <defs>
              <linearGradient id="primaryOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#46D9FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#008CFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#126BFF" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <ellipse
              cx="240"
              cy="240"
              rx="205"
              ry="92"
              transform="rotate(-26 240 240)"
              fill="none"
              stroke="url(#primaryOrbitGrad)"
              strokeWidth="1.8"
            />
          </svg>

          {/* Primary Celestial Luminous Orbiting Node with Energy Tail */}
          <div className="absolute top-[21%] right-[10%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Pulsing energy wave */}
              <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-[#46D9FF] opacity-50"></span>
              {/* Bright glowing core */}
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#46D9FF] shadow-[0_0_16px_#46D9FF,0_0_30px_#008CFF]"></span>
            </div>
          </div>
        </motion.div>

        {/* 6. Orbital Apex Celestial Sparkle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[12%] right-[18%] z-20 pointer-events-none"
        >
          <div className="relative p-1">
            <SparkleIcon className="w-8 h-8 text-[#46D9FF] filter drop-shadow-[0_0_12px_#46D9FF]" />
            <div className="absolute inset-0 bg-[#46D9FF]/30 rounded-full blur-md -z-10" />
          </div>
        </motion.div>

        {/* 7. Floating Technology Nodes (Brahmani Ecosystem Points) */}
        {/* Tech Node 01: Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute -top-1 left-[14%] sm:left-[18%] z-20 hidden xs:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#050B1B]/85 border border-[#126BFF]/35 backdrop-blur-md shadow-[0_4px_20px_rgba(3,7,19,0.7)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46D9FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008CFF]"></span>
          </span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-[#F5F8FF]">
            01 // ARCHITECTURE
          </span>
        </motion.div>

        {/* Tech Node 02: Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-2 left-[8%] sm:left-[12%] z-20 hidden xs:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#050B1B]/85 border border-[#126BFF]/35 backdrop-blur-md shadow-[0_4px_20px_rgba(3,7,19,0.7)]"
        >
          <span className="h-2 w-2 rounded-full bg-[#46D9FF] shadow-[0_0_8px_#46D9FF]" />
          <span className="text-[10px] font-mono tracking-wider font-semibold text-[#F5F8FF]">
            02 // INTELLIGENCE
          </span>
        </motion.div>

        {/* Tech Node 03: Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute -bottom-2 right-[12%] sm:right-[16%] z-20 hidden xs:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#050B1B]/85 border border-[#008CFF]/35 backdrop-blur-md shadow-[0_4px_20px_rgba(3,7,19,0.7)]"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-[10px] font-mono tracking-wider font-semibold text-[#F5F8FF]">
            03 // INTERACTION
          </span>
        </motion.div>

        {/* 8. Faint Circular Telemetry Radar Sweep (Delicate Secondary Detail) */}
        <div className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#126BFF]/15 pointer-events-none flex items-center justify-center">
          {/* Subtle crosshair ticks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-[#46D9FF]/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-[#46D9FF]/40" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-3 bg-[#46D9FF]/40" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-3 bg-[#46D9FF]/40" />

          {/* Rotating radar scan line */}
          <motion.div
            className="w-full h-full rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, transparent 320deg, rgba(70, 217, 255, 0.12) 360deg)',
            }}
          />
        </div>

        {/* 9. CENTRAL CELESTIAL ENERGY PLANET SPHERE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full flex flex-col items-center justify-center p-6 cursor-pointer group"
          style={{
            // Volumetric spherical body with Fresnel atmospheric limb
            background: 'radial-gradient(circle at 35% 30%, #0a2663 0%, #06173d 35%, #040e29 70%, #020718 100%)',
            boxShadow: `
              inset 14px 14px 30px rgba(70, 217, 255, 0.45),
              inset -14px -14px 35px rgba(0, 140, 255, 0.35),
              0 0 50px rgba(0, 140, 255, 0.35),
              0 0 100px rgba(70, 217, 255, 0.15)
            `,
            border: '1px solid rgba(70, 217, 255, 0.3)',
          }}
        >
          {/* Spherical Latitude & Longitude Digital Grid Coordinates (SVG) */}
          <svg
            viewBox="0 0 240 240"
            className="absolute inset-0 w-full h-full rounded-full pointer-events-none opacity-25"
          >
            {/* Latitude parallels */}
            <ellipse cx="120" cy="60" rx="90" ry="25" fill="none" stroke="#46D9FF" strokeWidth="0.75" strokeDasharray="3 4" />
            <ellipse cx="120" cy="120" rx="116" ry="34" fill="none" stroke="#46D9FF" strokeWidth="1" />
            <ellipse cx="120" cy="180" rx="90" ry="25" fill="none" stroke="#46D9FF" strokeWidth="0.75" strokeDasharray="3 4" />
            {/* Longitude meridian */}
            <ellipse cx="120" cy="120" rx="42" ry="116" fill="none" stroke="#008CFF" strokeWidth="0.75" strokeDasharray="2 4" />
          </svg>

          {/* Internal rotating light sweep */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'radial-gradient(circle at 75% 25%, rgba(70, 217, 255, 0.4) 0%, transparent 60%)',
            }}
          />

          {/* Core Brand Identity: The Official Brahmani Information Brand Logo */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
            <div className="relative">
              <img 
                src="/brahmani-logo-darkmode.png" 
                alt="Brahmani Information Digital Core"
                className="w-36 sm:w-40 lg:w-44 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(70,217,255,0.5)] transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Live System Telemetry Status Indicator */}
            <div className="flex items-center space-x-2 px-2.5 py-1 rounded-full bg-[#030713]/80 border border-[#46D9FF]/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46D9FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#46D9FF]"></span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#46D9FF] uppercase font-semibold">
                ECOSYSTEM ACTIVE
              </span>
            </div>

            {/* Coordinate Telemetry Line */}
            <span className="text-[8px] font-mono tracking-widest text-[#A8B5CC]/70 uppercase">
              23.02° N // 72.57° E
            </span>
          </div>

          {/* Micro Telemetry Flank Nodes */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md bg-[#050B1B] border border-[#008CFF]/40 text-[9px] font-mono text-[#F5F8FF] shadow-lg">
            SYS:ON
          </div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md bg-[#050B1B] border border-[#008CFF]/40 text-[9px] font-mono text-[#F5F8FF] shadow-lg">
            ORBIT:SYNC
          </div>
        </motion.div>

      </div>
    </div>
  );
};
