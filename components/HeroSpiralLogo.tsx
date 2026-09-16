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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
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
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation state
    let globalRotation = 0;
    let assembleStartTime = performance.now();
    let currentTriggerId = reassembleTriggerRef.current;
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // 3D perspective tilt
      const normX = (mouseX / rect.width) * 2 - 1;
      const normY = (mouseY / rect.height) * 2 - 1;
      setTilt({ x: -normY * 8, y: normX * 8 });
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      setTilt({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

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
      const scale = (Math.min(width, height) / 1000) * 0.96;

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

        // Dynamic vortex swirl when assembling (opening movement matches continuous rotation direction)
        if (rawProgress < 1) {
          const invProg = 1 - assembleProgress;
          // Negative sign ensures opening spiral unwinds in the exact same clockwise direction as globalRotation
          const swirlAngle = -invProg * (Math.PI * 2.4 + (dot.dist / 460) * 1.2);
          // Swirls from inner core outward, never exceeding 100% of radius so dots are never cut off
          const distMultiplier = 0.35 + 0.65 * Math.pow(assembleProgress, 0.85);

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
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none group cursor-pointer ${className}`}
      onClick={handleReassemble}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
      title="Phasecor Healthcare Emblem • Click to Re-form Logo"
    >
      {/* Background radial backlight glow matching hero */}
      <div className="absolute inset-4 rounded-full bg-[#2D8F7A]/20 blur-3xl pointer-events-none animate-pulse" />

      {/* Main Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 block"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
