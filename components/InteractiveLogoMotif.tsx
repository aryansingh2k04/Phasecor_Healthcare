'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

interface InteractiveLogoMotifProps {
  size?: number;
  className?: string;
  showControls?: boolean;
}

// Precomputed mathematical spiral coordinates with fixed decimal precision to prevent SSR float discrepancies
const NODES = [
  { id: 1, cx: 183.78, cy: 214.86, radius: 2.63, opacity: 0.37 },
  { id: 2, cx: 202.71, cy: 169.01, radius: 2.75, opacity: 0.38 },
  { id: 3, cx: 223.2, cy: 230.23, radius: 2.88, opacity: 0.4 },
  { id: 4, cx: 156.67, cy: 192.36, radius: 3.0, opacity: 0.42 },
  { id: 5, cx: 241.49, cy: 173.57, radius: 3.13, opacity: 0.43 },
  { id: 6, cx: 186.05, cy: 252.05, radius: 3.25, opacity: 0.45 },
  { id: 7, cx: 173.12, cy: 148.37, radius: 3.38, opacity: 0.47 },
  { id: 8, cx: 258.47, cy: 221.28, radius: 3.5, opacity: 0.48 },
  { id: 9, cx: 139.02, cy: 225.26, radius: 3.63, opacity: 0.5 },
  { id: 10, cx: 229.4, cy: 136.95, radius: 3.75, opacity: 0.52 },
  { id: 11, cx: 221.94, cy: 269.59, radius: 3.88, opacity: 0.53 },
  { id: 12, cx: 134.0, cy: 161.89, radius: 4.0, opacity: 0.55 },
  { id: 13, cx: 277.44, cy: 182.83, radius: 4.13, opacity: 0.57 },
  { id: 14, cx: 152.79, cy: 267.43, radius: 4.25, opacity: 0.58 },
  { id: 15, cx: 188.88, cy: 115.52, radius: 4.38, opacity: 0.6 },
  { id: 16, cx: 267.41, cy: 256.57, radius: 4.5, opacity: 0.62 },
  { id: 17, cx: 109.38, cy: 203.96, radius: 4.63, opacity: 0.63 },
  { id: 18, cx: 266.0, cy: 134.0, radius: 4.75, opacity: 0.65 },
  { id: 19, cx: 195.82, cy: 295.8, radius: 4.88, opacity: 0.67 },
  { id: 20, cx: 136.76, cy: 124.63, radius: 5.0, opacity: 0.68 },
  { id: 21, cx: 299.95, cy: 213.16, radius: 5.13, opacity: 0.7 },
  { id: 22, cx: 115.47, cy: 259.19, radius: 5.25, opacity: 0.72 },
  { id: 23, cx: 222.84, cy: 96.99, radius: 5.38, opacity: 0.73 },
  { id: 24, cx: 253.89, cy: 293.34, radius: 5.5, opacity: 0.75 },
  { id: 25, cx: 95.09, cy: 166.92, radius: 5.63, opacity: 0.77 },
  { id: 26, cx: 301.67, cy: 152.59, radius: 5.75, opacity: 0.78 },
  { id: 27, cx: 156.25, cy: 305.61, radius: 5.88, opacity: 0.8 },
  { id: 28, cx: 160.18, cy: 90.61, radius: 6.0, opacity: 0.82 },
  { id: 29, cx: 305.09, cy: 254.71, radius: 6.13, opacity: 0.83 },
  { id: 30, cx: 83.61, cy: 231.19, radius: 6.25, opacity: 0.85 },
  { id: 31, cx: 265.81, cy: 96.69, radius: 6.38, opacity: 0.87 },
  { id: 32, cx: 221.61, cy: 322.56, radius: 6.5, opacity: 0.88 },
  { id: 33, cx: 99.74, cy: 123.06, radius: 6.63, opacity: 0.9 },
  { id: 34, cx: 327.79, cy: 188.82, radius: 6.75, opacity: 0.92 },
  { id: 35, cx: 112.07, cy: 295.96, radius: 6.88, opacity: 0.93 },
  { id: 36, cx: 200.0, cy: 68.0, radius: 7.0, opacity: 0.95 },
];

export default function InteractiveLogoMotif({
  size = 360,
  className = '',
  showControls = true,
}: InteractiveLogoMotifProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'equilibrium' | 'dispersion' | 'uptake'>('equilibrium');

  useEffect(() => {
    if (!containerRef.current) return;

    // Speeds and durations based on active mode
    const speedMultiplier = activeMode === 'dispersion' ? 0.6 : activeMode === 'uptake' ? 1.8 : 1.0;

    // Animate outer ring rotation
    const ringAnim = animate(containerRef.current.querySelectorAll('.motif-ring'), {
      rotate: [0, 360],
      duration: 35000 / speedMultiplier,
      loop: true,
      ease: 'linear',
    });

    // Animate inner ring counter-rotation
    const innerRingAnim = animate(containerRef.current.querySelectorAll('.motif-inner-ring'), {
      rotate: [360, 0],
      duration: 25000 / speedMultiplier,
      loop: true,
      ease: 'linear',
    });

    // Node pulse
    const nodeAnim = animate(containerRef.current.querySelectorAll('.motif-node'), {
      scale: activeMode === 'uptake' ? [0.9, 1.4] : [0.85, 1.25],
      opacity: activeMode === 'dispersion' ? [0.3, 1] : [0.4, 0.95],
      delay: stagger(140 / speedMultiplier),
      duration: 2400 / speedMultiplier,
      direction: 'alternate',
      loop: true,
      ease: 'easeInOutSine',
    });

    return () => {
      try {
        ringAnim.revert();
        innerRingAnim.revert();
        nodeAnim.revert();
      } catch {
        // Safe cleanup
      }
    };
  }, [activeMode]);

  const handleInteractionClick = () => {
    if (!containerRef.current) return;
    // Interactive ripple wave on click
    animate(containerRef.current.querySelectorAll('.motif-node'), {
      scale: [1, 1.6, 1],
      delay: stagger(40, { from: 'center' }),
      duration: 800,
      ease: 'easeOutElastic(1, .6)',
    });
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div
        ref={containerRef}
        onClick={handleInteractionClick}
        className={`relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${className}`}
        style={{ width: size, height: size }}
        title="Click to trigger molecular dispersion ripple"
        suppressHydrationWarning
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          suppressHydrationWarning
        >
          <defs>
            <radialGradient id="tealGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2D8F7A" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#2D8F7A" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#2D8F7A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="orbitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D8F7A" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#3BA68F" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1F6959" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="200" cy="200" r="185" fill="url(#tealGlow)" />

          {/* Outer Orbital Orbit Ring */}
          <g className="motif-ring origin-center">
            <circle
              cx="200"
              cy="200"
              r="165"
              stroke="url(#orbitStroke)"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />
            <circle cx="200" cy="35" r="4.5" fill="#2D8F7A" />
            <circle cx="365" cy="200" r="3.5" fill="#3BA68F" />
          </g>

          {/* Mid Orbital Orbit Ring */}
          <g className="motif-inner-ring origin-center">
            <circle
              cx="200"
              cy="200"
              r="120"
              stroke="url(#orbitStroke)"
              strokeWidth="1"
              strokeDasharray="6 10"
            />
            <circle cx="200" cy="80" r="3.5" fill="#2D8F7A" />
            <circle cx="80" cy="200" r="4" fill="#1F6959" />
          </g>

          {/* Innermost Guide Ring */}
          <circle
            cx="200"
            cy="200"
            r="65"
            stroke="#2D8F7A"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />

          {/* Mathematical Molecular Nodes */}
          {NODES.map((node) => (
            <circle
              key={node.id}
              cx={node.cx}
              cy={node.cy}
              r={node.radius}
              fill="#2D8F7A"
              className="motif-node origin-center transition-colors duration-300 hover:fill-[#1F6959]"
              style={{
                opacity: node.opacity,
              }}
            />
          ))}

          {/* Core Center Nucleus */}
          <circle cx="200" cy="200" r="11" fill="#2D8F7A" />
          <circle cx="200" cy="200" r="5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Interactive Micro Telemetry HUD */}
      {showControls && (
        <div className="mt-4 flex items-center space-x-1.5 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-[#E3ECE9] shadow-xs text-[11px]">
          <button
            onClick={() => setActiveMode('equilibrium')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              activeMode === 'equilibrium'
                ? 'bg-[#2D8F7A] text-white'
                : 'text-[#4C655F] hover:text-[#0E221E]'
            }`}
          >
            Equilibrium
          </button>
          <button
            onClick={() => setActiveMode('dispersion')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              activeMode === 'dispersion'
                ? 'bg-[#2D8F7A] text-white'
                : 'text-[#4C655F] hover:text-[#0E221E]'
            }`}
          >
            Dispersion
          </button>
          <button
            onClick={() => setActiveMode('uptake')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
              activeMode === 'uptake'
                ? 'bg-[#2D8F7A] text-white'
                : 'text-[#4C655F] hover:text-[#0E221E]'
            }`}
          >
            Cellular Uptake
          </button>
        </div>
      )}
    </div>
  );
}
