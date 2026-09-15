"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for molecular/clinical network
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    const maxDist = 130;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 143, 122, 0.7)";
        ctx.fill();

        // Connect to neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(45, 143, 122, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mouseDx = p1.x - mouseX;
        const mouseDy = p1.y - mouseY;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        if (mouseDist < 160) {
          const alpha = (1 - mouseDist / 160) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(69, 197, 169, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center bg-[#071714] text-white overflow-hidden">
      {/* Deep Radial Glow background matching Phasecor teal palette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_25%_50%,rgba(45,143,122,0.22)_0%,rgba(20,65,55,0.12)_35%,rgba(7,23,20,0)_70%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none bg-[radial-gradient(circle,rgba(69,197,169,0.08)_0%,transparent_70%)]" />

      {/* Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Graphic: Floating Illuminated Phasecor Emblem */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Pulsing Backlight Glows */}
              <div className="absolute inset-0 rounded-full bg-[#2D8F7A]/25 blur-3xl animate-pulse" />
              <div className="absolute w-48 h-48 rounded-full bg-[#45C5A9]/20 blur-2xl" />

              {/* Glowing Outer Rings */}
              <div className="absolute inset-2 rounded-full border border-[#2D8F7A]/30 scale-95" />
              <div className="absolute inset-6 rounded-full border border-[#45C5A9]/20 scale-90 border-dashed animate-[spin_60s_linear_infinite]" />

              {/* Central Floating Phasecor Emblem */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 z-10 drop-shadow-[0_10px_35px_rgba(45,143,122,0.6)] animate-float">
                <Image
                  src="/images/brand/mark-teal-transparent.png"
                  alt="Phasecor Emblem"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
            </div>
          </div>

          {/* Right Content: Headline, Subtitle, and 2 CTA Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering the{" "}
              <span className="block mt-1 bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(45,143,122,0.45)]">
                Phases of Health
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Next-gen dermatological formulations &amp; therapeutic medicines engineered for restorative cellular care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-full bg-[#2D8F7A] text-white text-sm font-semibold tracking-wide hover:bg-[#237362] transition-all duration-200 shadow-lg shadow-[#2D8F7A]/25 hover:shadow-xl hover:shadow-[#2D8F7A]/40 active:scale-95"
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full bg-white/5 border border-white/30 text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-[#071714] transition-all duration-200 backdrop-blur-md active:scale-95"
              >
                Discover Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
