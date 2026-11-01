import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressSpineProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export const ScrollProgressSpine: React.FC<ScrollProgressSpineProps> = ({
  containerRef,
  className = '',
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={`absolute left-[39px] top-6 bottom-6 w-[2px] bg-white/10 overflow-hidden pointer-events-none hidden md:block ${className}`}
      aria-hidden="true"
    >
      {/* Animated Flowing Gradient Beam */}
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="w-full h-full bg-gradient-to-b from-[#005EDA] via-[#38BDF8] to-[#005EDA] shadow-[0_0_12px_rgba(56,189,248,0.7)]"
      />
    </div>
  );
};

