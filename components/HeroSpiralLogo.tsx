"use client";

import { useEffect, useRef, useState } from "react";
import { LOGO_DOTS } from "./logo-dots";
import { RotateCw, Sparkles } from "lucide-react";

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
      dpr = Math.min(window.devicePixelRatio || 1, 2.5);
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

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      // Coordinate scale from 1000x1000 viewBox to canvas size
      const scale = (Math.min(width, height) / 1000) * 0.96;

      // Check if user clicked to re-assemble
      if (reassembleTriggerRef.current !== currentTriggerId) {
        currentTriggerId = reassembleTriggerRef.current;
        assembleStartTime = time;
      }

      // Progress calculation for initial / reassembly animation
      const elapsed = (time - assembleStartTime) / 1000;
      const assembleDuration = 2.0; // 2 seconds graceful vortex formation
      const rawProgress = Math.min(1, Math.max(0, elapsed / assembleDuration));
      const assembleProgress = easeOutCubic(rawProgress);

      if (rawProgress >= 1 && !isFormed) {
        setIsFormed(true);
      }

      // Continuous majestic circular rotation (approx 32 seconds per full 360 rotation)
      globalRotation += delta * 0.196;

      // Draw subtle background glowing radial aura
      const aura = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width * 0.44);
      aura.addColorStop(0, "rgba(45, 143, 122, 0.18)");
      aura.addColorStop(0.55, "rgba(69, 197, 169, 0.06)");
      aura.addColorStop(1, "rgba(7, 23, 20, 0)");
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(centerX, centerY, width * 0.44, 0, Math.PI * 2);
      ctx.fill();

      // Precision background measurement rings (concentric tech/biology calibration)
      ctx.save();
      ctx.strokeStyle = "rgba(45, 143, 122, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 460 * scale, 0, Math.PI * 2);
      ctx.stroke();

      // Dashed outer ring rotating counter-clockwise
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-globalRotation * 0.35);
      ctx.strokeStyle = "rgba(69, 197, 169, 0.16)";
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, 482 * scale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Render the 97 exact Phasecor dots
      const cosGlobal = Math.cos(globalRotation);
      const sinGlobal = Math.sin(globalRotation);

      for (let i = 0; i < LOGO_DOTS.length; i++) {
        const dot = LOGO_DOTS[i];

        // Exact relative coordinates scaled to canvas
        const baseX = dot.relX * scale;
        const baseY = dot.relY * scale;
        const baseR = Math.max(1.8, dot.r * scale);

        // Continuous circular rotation around center (100% exact logo preserved)
        const rotX = baseX * cosGlobal - baseY * sinGlobal;
        const rotY = baseX * sinGlobal + baseY * cosGlobal;

        // Dynamic vortex swirl when assembling
        let posX = rotX;
        let posY = rotY;
        let currentR = baseR;
        let dotAlpha = 1;

        if (rawProgress < 1) {
          const invProg = 1 - assembleProgress;
          // Smooth swirl angle that reaches exactly 0 at assembleProgress = 1
          const swirlAngle = invProg * (Math.PI * 2.6 + (dot.dist / 460) * 1.5);
          const distMultiplier = 1 + invProg * 2.2;

          const sCos = Math.cos(swirlAngle);
          const sSin = Math.sin(swirlAngle);

          posX = (rotX * sCos - rotY * sSin) * distMultiplier;
          posY = (rotX * sSin + rotY * sCos) * distMultiplier;

          currentR = baseR * Math.min(1, assembleProgress * 1.35);
          dotAlpha = Math.max(0.05, Math.min(1, assembleProgress * 1.25));
        }

        // Final canvas screen coordinates
        const drawX = centerX + posX;
        const drawY = centerY + posY;

        // Cellular Phase Shimmer Wave: Traveling radial luminescence along the spiral arms
        const wave = Math.sin((time / 1000) * 2.8 - (dot.dist / 460) * Math.PI * 2.6);
        const radiusPulse = currentR * (1 + 0.055 * wave);

        // Cursor proximity glow
        const distToMouse = Math.hypot(mouseX - drawX, mouseY - drawY);
        let hoverBoost = 0;
        if (distToMouse < 130 && distToMouse >= 0) {
          hoverBoost = (1 - distToMouse / 130) * 0.4;
        }

        const finalAlpha = Math.max(0.12, Math.min(1, (dotAlpha * (0.86 + 0.14 * wave)) + hoverBoost));

        // Draw dot with luminous teal radial gradient
        const dotGrad = ctx.createRadialGradient(
          drawX - radiusPulse * 0.28,
          drawY - radiusPulse * 0.28,
          radiusPulse * 0.08,
          drawX,
          drawY,
          radiusPulse
        );

        if (hoverBoost > 0.1) {
          dotGrad.addColorStop(0, "#b8fff1");
          dotGrad.addColorStop(0.35, "#45C5A9");
          dotGrad.addColorStop(1, "#237362");
        } else {
          dotGrad.addColorStop(0, "#6ff3d9");
          dotGrad.addColorStop(0.35, "#3ec7ab");
          dotGrad.addColorStop(0.85, "#2D8F7A");
          dotGrad.addColorStop(1, "#1c5d50");
        }

        // Outer soft glow for medium/larger dots
        if (radiusPulse > 3.2) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(drawX, drawY, radiusPulse * 1.55, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(69, 197, 169, ${0.15 * finalAlpha})`;
          ctx.fill();
          ctx.restore();
        }

        // Draw the solid dot
        ctx.beginPath();
        ctx.arc(drawX, drawY, radiusPulse, 0, Math.PI * 2);
        ctx.fillStyle = dotGrad;
        ctx.globalAlpha = finalAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      ctx.restore();

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
      {/* Background radial backlight glows matching hero */}
      <div className="absolute inset-4 rounded-full bg-[#2D8F7A]/25 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-56 h-56 rounded-full bg-[#45C5A9]/20 blur-2xl pointer-events-none" />

      {/* Main Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 block"
        style={{ touchAction: "none" }}
      />

      {/* Subtle interaction pill at bottom */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#071714]/85 border border-[#2D8F7A]/40 backdrop-blur-md shadow-lg shadow-black/40 whitespace-nowrap">
          <RotateCw className="w-3 h-3 text-[#45C5A9] animate-spin" style={{ animationDuration: "14s" }} />
          <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-slate-300">
            Rotating Logo • Click to Re-form
          </span>
        </div>
      </div>
    </div>
  );
}
