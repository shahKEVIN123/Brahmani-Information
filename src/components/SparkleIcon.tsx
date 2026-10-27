import React from 'react';

interface SparkleIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({ 
  className = "w-5 h-5", 
  size,
  glow = true 
}) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor"
      width={size}
      height={size}
      className={`inline-block ${glow ? 'drop-shadow-[0_0_8px_rgba(0,94,218,0.7)]' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* 4-pointed concave diamond star exactly matching the Brahmani Information logo sparkle */}
      <path 
        d="M 50 0 Q 50 50 100 50 Q 50 50 50 100 Q 50 50 0 50 Q 50 50 50 0 Z" 
        fill="#005EDA"
      />
    </svg>
  );
};
