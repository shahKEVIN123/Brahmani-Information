import React, { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export type MotionPreset =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'maskUp'
  | 'scaleUp'
  | 'zoomIn'
  | 'blurIn';

interface MotionRevealProps {
  children: ReactNode;
  preset?: MotionPreset;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  preset = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  viewportAmount = 0.15,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Modern ease curve (smooth deceleration inspired by high-end design systems)
  const modernEase = [0.16, 1, 0.3, 1] as const;

  const presets: Record<MotionPreset, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: modernEase },
      },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: modernEase },
      },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -36 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: modernEase },
      },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 36 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: modernEase },
      },
    },
    maskUp: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration, delay, ease: modernEase },
      },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.94, y: 16 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration, delay, ease: modernEase },
      },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.97 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: duration + 0.1, delay, ease: modernEase },
      },
    },
    blurIn: {
      hidden: { opacity: 0, filter: 'blur(6px)', y: 18 },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { duration, delay, ease: modernEase },
      },
    },
  };

  const reducedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, delay } },
  };

  const activeVariants = shouldReduceMotion ? reducedVariants : presets[preset];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={activeVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MotionStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayStart?: number;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
}

export const MotionStagger: React.FC<MotionStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  delayStart = 0.05,
  className = '',
  viewportAmount = 0.12,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.04 : staggerDelay,
        delayChildren: delayStart,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MotionStaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}

export const MotionStaggerItem: React.FC<MotionStaggerItemProps> = ({
  children,
  className = '',
  yOffset = 24,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.35 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
