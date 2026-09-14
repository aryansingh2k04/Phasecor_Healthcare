'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(
    (0).toFixed(decimals)
  );
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const counterObj = { current: 0 };
          animate(counterObj, {
            current: value,
            duration,
            ease: 'easeOutExpo',
            onUpdate: () => {
              setDisplayValue(counterObj.current.toFixed(decimals));
            },
          });
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, decimals, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
