import React, { ReactNode, useState, useRef, MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  lineAccent?: boolean;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(0, 94, 218, 0.16)',
  lineAccent = true,
  onClick,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; isHovered: boolean }>({
    x: 0,
    y: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseEnter = () => {
    setMousePos((prev) => ({ ...prev, isHovered: true }));
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative group/card overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Top Animated Expanding Border Accent Line */}
      {lineAccent && (
        <span
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#005EDA] to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out z-20 pointer-events-none origin-center"
          aria-hidden="true"
        />
      )}

      {/* Subtle Dynamic Ambient Lighting Follower (Dark Premium Feel) */}
      {!shouldReduceMotion && mousePos.isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Card Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

