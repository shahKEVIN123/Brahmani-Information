import React, { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export type ScrollSectionPreset = 'fadeUp' | 'fade' | 'slideLeft' | 'slideRight';

export interface ScrollSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  viewportAmount?: number;
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
  preset?: ScrollSectionPreset;
  'aria-label'?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  id,
  className = '',
  viewportAmount = 0.15,
  delay = 0.05,
  duration = 0.75,
  stagger = false,
  staggerDelay = 0.08,
  preset = 'fadeUp',
  'aria-label': ariaLabel,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const modernEase = [0.16, 1, 0.3, 1] as const;

  const sectionPresets: Record<ScrollSectionPreset, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 36 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: modernEase,
          ...(stagger && {
            staggerChildren: staggerDelay,
            delayChildren: delay + 0.08,
          }),
        },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: modernEase,
          ...(stagger && {
            staggerChildren: staggerDelay,
            delayChildren: delay + 0.08,
          }),
        },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
          ease: modernEase,
          ...(stagger && {
            staggerChildren: staggerDelay,
            delayChildren: delay + 0.08,
          }),
        },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: 40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
          ease: modernEase,
          ...(stagger && {
            staggerChildren: staggerDelay,
            delayChildren: delay + 0.08,
          }),
        },
      },
    },
  };

  const reducedMotionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.35,
        delay,
        ...(stagger && {
          staggerChildren: 0.05,
          delayChildren: delay,
        }),
      },
    },
  };

  const selectedVariants = shouldReduceMotion ? reducedMotionVariants : sectionPresets[preset];

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </section>
  );
};

export interface ScrollItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  xOffset?: number;
  duration?: number;
  delay?: number;
}

export const ScrollItem: React.FC<ScrollItemProps> = ({
  children,
  className = '',
  yOffset = 24,
  xOffset = 0,
  duration = 0.65,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const modernEase = [0.16, 1, 0.3, 1] as const;

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      x: shouldReduceMotion ? 0 : xOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.35 : duration,
        delay,
        ease: modernEase,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

