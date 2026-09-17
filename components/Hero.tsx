"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import HeroSpiralLogo from "./HeroSpiralLogo";

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
      {/* Deep Radial Glow background matching Phasecor teal palette (centered on spiral on mobile top & desktop right) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_22%,rgba(45,143,122,0.30)_0%,rgba(20,65,55,0.12)_40%,rgba(7,23,20,0)_70%)] lg:bg-[radial-gradient(circle_at_78%_50%,rgba(45,143,122,0.24)_0%,rgba(20,65,55,0.12)_38%,rgba(7,23,20,0)_70%)]" />
      <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none bg-[radial-gradient(circle,rgba(69,197,169,0.06)_0%,transparent_70%)]" />

      {/* Subtle tech grid background matching portfolio aesthetic */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(45,143,122,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,143,122,0.07)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-80" />

      {/* Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-85"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Graphic: Animated Rotating Phasecor Spiral Emblem (Order 1 on mobile: above text; Order 2 on desktop: right side) */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start items-center z-10">
            <div className="relative w-48 sm:w-64 md:w-80 lg:w-[390px] xl:w-[430px] aspect-square max-w-[75vw] sm:max-w-[85vw] flex items-center justify-center">
              <HeroSpiralLogo className="w-full h-full" />
            </div>
          </div>

          {/* Content: Headline, Subtitle, and 2 CTA Buttons (Order 2 on mobile: below SVG; Order 1 on desktop: left side) */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left z-10 lg:pl-10 xl:pl-16">
            <h1 className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.14] max-w-2xl">
              <span className="block animate-hero-title">
                Engineering the
              </span>
              <span className="block mt-1 bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(45,143,122,0.45)] animate-hero-gradient animate-gradient-shift">
                Future of Healthcare
              </span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-hero-desc">
              Next-gen dermatological formulations &amp; therapeutic medicines engineered for restorative cellular care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2 sm:pt-3 animate-hero-actions w-full sm:w-auto">
              <Link
                href="/products"
                className="w-auto min-w-[210px] max-w-[250px] text-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-md bg-[#2D8F7A] text-white text-sm font-semibold tracking-wide hover:bg-[#237362] transition-all duration-200 shadow-lg shadow-[#2D8F7A]/25 hover:shadow-xl hover:shadow-[#2D8F7A]/40 active:scale-95"
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="w-auto min-w-[210px] max-w-[250px] text-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-md bg-white/5 border border-white/30 text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-[#071714] transition-all duration-200 backdrop-blur-md active:scale-95"
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
