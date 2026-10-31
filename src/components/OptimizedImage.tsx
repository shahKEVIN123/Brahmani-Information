import React, { useState, useEffect, useRef } from 'react';

export interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  srcSet,
  sizes,
  width,
  height,
  aspectRatio,
  objectFit = 'cover',
  priority = false,
  className = '',
  containerClassName = '',
  fallbackSrc,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Progressive IntersectionObserver trigger for below-the-fold images
  useEffect(() => {
    if (priority || isInView) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '250px 0px', // start loading 250px before entering viewport for seamless UX
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, isInView]);

  const fitClass =
    objectFit === 'contain'
      ? 'object-contain'
      : objectFit === 'cover'
      ? 'object-cover'
      : objectFit === 'fill'
      ? 'object-fill'
      : 'object-none';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#121212] ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio || undefined,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {/* Lightweight Dark Solid Surface placeholder with smooth opacity fade */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-[#151515] transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {isInView && (
        <img
          src={hasError && fallbackSrc ? fallbackSrc : src}
          alt={alt}
          srcSet={!hasError ? srcSet : undefined}
          sizes={sizes}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...(priority ? { fetchPriority: 'high' } : {})}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (!hasError && fallbackSrc) {
              setHasError(true);
            }
          }}
          className={`w-full h-full ${fitClass} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};

