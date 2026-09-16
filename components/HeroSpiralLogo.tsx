"use client";

import { useEffect, useRef, useState } from "react";
import { LOGO_DOTS } from "./logo-dots";

interface HeroSpiralLogoProps {
  className?: string;
}

export default function HeroSpiralLogo({ className = "" }: HeroSpiralLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reassembleTriggerRef = useRef(0);
  const [isFormed, setIsFormed] = useState(false);

  // Trigger assembly animation
  const handleReassemble = () => {
    reassembleTriggerRef.current = performance.now();
    setIsFormed(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      dpr = Math.max(window.devicePixelRatio || 1, 2);
      const side = Math.floor(Math.min(rect.width, rect.height));
      if (side <= 0) return;
      width = side;
      height = side;
      canvas.width = Math.round(side * dpr);
      canvas.height = Math.round(side * dpr);
      canvas.style.width = `${side}px`;
      canvas.style.height = `${side}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation state
    let globalRotation = 0;
    let assembleStartTime = performance.now();
    let currentTriggerId = reassembleTriggerRef.current;

    // Smooth ease-out curve with subtle overshoot for biological springiness
    const easeOutCubic = (t: number) => {
      const inv = 1 - t;
      return 1 - inv * inv * inv;
    };

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (width <= 20 || height <= 20) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      // Coordinate scale from 1000x1000 viewBox with comfortable margin
      const scale = (Math.min(width, height) / 1000) * 0.985;

      // Check if user clicked to re-assemble
      if (reassembleTriggerRef.current !== currentTriggerId) {
        currentTriggerId = reassembleTriggerRef.current;
        assembleStartTime = time;
      }

      // Progress calculation for initial / reassembly animation
      const elapsed = (time - assembleStartTime) / 1000;
      const assembleDuration = 1.6; // Graceful 1.6s vortex formation
      const rawProgress = Math.min(1, Math.max(0, elapsed / assembleDuration));
      const assembleProgress = easeOutCubic(rawProgress);

      if (rawProgress >= 1 && !isFormed) {
        setIsFormed(true);
      }

      // Continuous majestic circular rotation (~32 seconds per full 360 rotation)
      globalRotation += delta * 0.196;

      // Render the 97 exact Phasecor dots matching emblem-vector.svg
      const cosGlobal = Math.cos(globalRotation);
      const sinGlobal = Math.sin(globalRotation);

      for (let i = 0; i < LOGO_DOTS.length; i++) {
        const dot = LOGO_DOTS[i];

        // Exact relative coordinates scaled to canvas
        const baseX = dot.relX * scale;
        const baseY = dot.relY * scale;
        const baseR = dot.r * scale;

        // Continuous circular rotation around center (100% exact logo preserved)
        const rotX = baseX * cosGlobal - baseY * sinGlobal;
        const rotY = baseX * sinGlobal + baseY * cosGlobal;

        let posX = rotX;
        let posY = rotY;
        let currentR = baseR;
        let dotAlpha = 1;

        // Dynamic vortex swirl when assembling (unwinds strictly clockwise matching continuous rotation)
        if (rawProgress < 1) {
          const invProg = 1 - assembleProgress;
          // Smooth clockwise sweep (~120 deg) with outer lead to completely align spiral unwinding with rotation
          const swirlAngle = -invProg * (Math.PI * (2 / 3) - (dot.dist / 460) * 0.7);
          // Expands smoothly from 45% radius to 100% with power 1.4 for clean, non-abrupt expansion
          const distMultiplier = 0.45 + 0.55 * Math.pow(assembleProgress, 1.4);

          const sCos = Math.cos(swirlAngle);
          const sSin = Math.sin(swirlAngle);

          posX = (rotX * sCos - rotY * sSin) * distMultiplier;
          posY = (rotX * sSin + rotY * sCos) * distMultiplier;

          currentR = baseR * Math.min(1, Math.max(0.05, assembleProgress * 1.2));
          dotAlpha = Math.min(1, Math.max(0.05, assembleProgress * 1.3));
        }

        // Final canvas screen coordinates
        const drawX = centerX + posX;
        const drawY = centerY + posY;

        // Draw solid flat vector circle matching emblem-vector.svg (fill="#2D8F7A")
        ctx.beginPath();
        ctx.arc(drawX, drawY, Math.max(0.6, currentR), 0, Math.PI * 2);
        ctx.fillStyle = "#2D8F7A";
        ctx.globalAlpha = dotAlpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none group cursor-pointer aspect-square ${className}`}
      onClick={handleReassemble}
      title="Phasecor Healthcare Emblem • Click to Re-form Logo"
    >
      {/* Background radial backlight glow matching hero */}
      <div className="absolute inset-4 rounded-full bg-[#2D8F7A]/20 blur-3xl pointer-events-none animate-pulse" />

      {/* Main Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full aspect-square relative z-10 block"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
