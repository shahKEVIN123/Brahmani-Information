import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface TextSplitRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TextSplitReveal: React.FC<TextSplitRevealProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-[#005EDA]',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? '0%' : '100%',
      filter: shouldReduceMotion ? 'none' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: '0%',
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.35 : 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={i}
            className="inline-block overflow-hidden py-1 align-bottom mr-[0.26em] last:mr-0"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${wordClassName} ${isHighlighted ? highlightClassName : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};
