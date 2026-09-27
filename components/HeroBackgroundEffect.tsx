"use client";

import { useEffect, useRef } from "react";

export default function HeroBackgroundEffect() {
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

    const colors = ["#2D8F7A", "#45C5A9", "#3ec7ab", "#7ff2d9", "#237362", "#1a5448"];

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
        this.size = Math.random() * 2.2 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.density = Math.random() * 20 + 1;
        this.opacity = Math.random() * 0.4 + 0.2;
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

        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          this.x += (dx / dist) * force * this.density * 0.2;
          this.y += (dy / dist) * force * this.density * 0.2;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        this.draw(c);
      }
    }

    const particleCount = Math.min(Math.floor((width * height) / 14000), 45);
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

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = "#45C5A9";
            ctx.globalAlpha = (1 - dist / 110) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].y, particles[j].y);
            ctx.stroke();
          }
        }
      }

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
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(45,143,122,0.32)_0%,rgba(20,65,55,0.14)_45%,rgba(7,23,20,0)_75%)]" />

      {/* Floating Animated Light Orb 1 (Top-Left) */}
      <div className="absolute -top-16 -left-16 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#45C5A9]/20 blur-[90px] animate-orb-1" />

      {/* Floating Animated Light Orb 2 (Bottom-Right) */}
      <div className="absolute -bottom-16 -right-16 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#2D8F7A]/25 blur-[100px] animate-orb-2" />

      {/* Moving Ambient Light Beam */}
      <div className="absolute -top-32 -left-32 w-[200%] h-48 bg-gradient-to-r from-transparent via-[#7ff2d9]/15 to-transparent blur-[45px] pointer-events-none animate-light-beam" />

      {/* Subtle Tech Grid Texture with vignette mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,143,122,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,143,122,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_50%,transparent_100%)] opacity-75" />

      {/* Interactive Constellation / Dust Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80 pointer-events-none"
      />
    </div>
  );
}
