import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

type CursorMode = 'default' | 'interactive' | 'text';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Exact mouse coordinates (Zero latency tracking)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Fluid orbital spring for the outer ring
  const ringX = useSpring(dotX, { damping: 28, stiffness: 380, mass: 0.4 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 380, mass: 0.4 });

  const modeRef = useRef<CursorMode>('default');

  useEffect(() => {
    // Detect touch / coarse pointer devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const checkInteractiveTarget = (target: EventTarget | null): CursorMode => {
      if (!target || !(target instanceof Element)) return 'default';

      // 1. Text input or editable field check
      const textElement = target.closest('input, textarea, [contenteditable="true"]');
      if (textElement) {
        const type = (textElement as HTMLInputElement).type;
        const nonTextTypes = ['submit', 'button', 'checkbox', 'radio', 'range', 'color', 'file', 'image', 'reset'];
        if (!type || !nonTextTypes.includes(type) || textElement.tagName === 'TEXTAREA') {
          return 'text';
        }
        return 'interactive';
      }

      // 2. Comprehensive check for all clickable and interactive elements
      const isClickable = target.closest(
        'a, button, select, option, label, summary, ' +
        '[role="button"], [role="link"], [role="tab"], [role="checkbox"], ' +
        '[role="radio"], [role="menuitem"], [role="option"], [role="switch"], [role="combobox"], ' +
        '[tabindex]:not([tabindex="-1"]), ' +
        '.cursor-pointer, .interactive-target, [data-interactive], [onclick]'
      );
      if (isClickable) return 'interactive';

      // 3. Walk up the DOM for click handlers or cursor pointer classes on containers
      let el: Element | null = target;
      let depth = 0;
      while (el && el !== document.body && depth < 6) {
        if (el instanceof HTMLElement) {
          if (
            el.onclick ||
            el.getAttribute('role') === 'button' ||
            el.classList.contains('cursor-pointer') ||
            el.dataset.interactive
          ) {
            return 'interactive';
          }
        }
        el = el.parentElement;
        depth++;
      }

      return 'default';
    };

    const handlePointerMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      dotX.set(x);
      dotY.set(y);

      if (!isVisible) {
        setIsVisible(true);
      }

      const nextMode = checkInteractiveTarget(e.target);
      if (modeRef.current !== nextMode) {
        modeRef.current = nextMode;
        setCursorMode(nextMode);
      }
    };

    const handleWindowLeave = (e: MouseEvent) => {
      // Only hide if the cursor truly leaves the browser window
      if (!e.relatedTarget && !(e as unknown as { toElement?: Element }).toElement) {
        setIsVisible(false);
      }
    };

    const handleWindowEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseout', handleWindowLeave);
    window.addEventListener('mouseover', handleWindowEnter);
    document.addEventListener('mouseenter', handleWindowEnter);
    document.addEventListener('mouseleave', handleWindowLeave);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseout', handleWindowLeave);
      window.removeEventListener('mouseover', handleWindowEnter);
      document.removeEventListener('mouseenter', handleWindowEnter);
      document.removeEventListener('mouseleave', handleWindowLeave);
    };
  }, [dotX, dotY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const isInteractive = cursorMode === 'interactive';
  const isText = cursorMode === 'text';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999999] select-none custom-cursor-element"
      style={{ isolation: 'isolate' }}
    >
      {/* 1. Orbit Ring: Appears smoothly around clickable / interactive elements */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isInteractive ? 46 : 14,
          height: isInteractive ? 46 : 14,
          opacity: isInteractive ? 1 : 0,
          scale: isInteractive ? 1 : 0.35,
          borderColor: isInteractive ? 'rgba(56, 148, 255, 0.6)' : 'rgba(0, 94, 218, 0)',
          borderWidth: 1,
          borderStyle: 'solid',
          backgroundColor: isInteractive ? 'rgba(0, 94, 218, 0.06)' : 'transparent',
          boxShadow: isInteractive ? '0 0 18px rgba(0, 94, 218, 0.4)' : 'none',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 340 }}
      >
        {/* Micro-satellite dot rotating on orbit path */}
        {isInteractive && (
          <motion.div
            className="absolute w-1.5 h-1.5 bg-[#3894FF] rounded-full shadow-[0_0_8px_#3894FF]"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{
              originX: '23px',
              originY: '23px',
            }}
          />
        )}
      </motion.div>

      {/* 2. Delicate Signal Pulse Ripple: Radiates gently on interactive hover */}
      {isInteractive && (
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none border border-[#3894FF]/60"
          style={{
            x: dotX,
            y: dotY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ width: 10, height: 10, opacity: 0.8 }}
          animate={{
            width: [10, 48],
            height: [10, 48],
            opacity: [0.75, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}

      {/* 3. Central Core Signal Indicator */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isText ? 2.5 : isInteractive ? 9 : 5.5,
          height: isText ? 18 : isInteractive ? 9 : 5.5,
          borderRadius: isText ? 2 : 9999,
          backgroundColor: isText || isInteractive ? '#3894FF' : '#005EDA',
          boxShadow: isText
            ? '0 0 10px 1px rgba(56, 148, 255, 0.95)'
            : isInteractive
              ? '0 0 14px 2.5px rgba(56, 148, 255, 0.95), 0 0 25px rgba(0, 94, 218, 0.5)'
              : '0 0 8px 1.5px rgba(0, 94, 218, 0.7), 0 0 16px rgba(0, 94, 218, 0.25)',
        }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
      />
    </div>
  );
};
