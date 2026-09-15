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

    // Particle colors keeping Phasecor's #2D8F7A palette
    const colors = [
      "#2D8F7A",
      "#45C5A9",
      "#3ec7ab",
      "#7ff2d9",
      "#237362",
      "#1a5448"
    ];

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      color: string = "";
      vx: number = 0;
      vy: number = 0;
      density: number = 0;
      opacity: number = 0;
      pulse: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 0.6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.density = Math.random() * 30 + 1;
        this.opacity = Math.random() * 0.45 + 0.25;
        this.pulse = Math.random() * Math.PI * 2;
      }

      draw(c: CanvasRenderingContext2D) {
        this.pulse += 0.02;
        const alpha = this.opacity + Math.sin(this.pulse) * 0.15;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = Math.max(0.05, Math.min(1, alpha));
        c.fill();
      }

      update(c: CanvasRenderingContext2D, mX: number, mY: number) {
        const dx = mX - this.x;
        const dy = mY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Fluid magnetic influence matching portfolio behavior
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200;
          this.x += (dx / dist) * force * this.density * 0.25;
          this.y += (dy / dist) * force * this.density * 0.25;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around borders
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        this.draw(c);
      }
    }

    const particleCount = Math.min(Math.floor((width * height) / 12000), 65);
    const particles = Array.from({ length: particleCount }, () => new Particle());

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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting constellation lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = "#45C5A9";
            ctx.globalAlpha = (1 - dist / 120) * 0.09;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => p.update(ctx, mouseX, mouseY));
      ctx.globalAlpha = 1;

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

      {/* Subtle tech grid background matching portfolio aesthetic */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(45,143,122,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,143,122,0.07)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-80" />

      {/* Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-85"
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
