"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#f9faf9] border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Bridging Clinical Science with Daily Care
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Born from a deep understanding of clinical care and everyday skin concerns, Phasecor was created to bridge the gap between medical-grade science and modern skincare rituals.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We saw a problem. People were chasing instant glow, viral trends, and aggressive actives often at the cost of long-term skin health. So we built something different. Every product is science-backed, thoughtfully dosed, barrier-conscious, and designed for long-term resilience.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 sm:p-6 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md hover:shadow-[0_16px_36px_-6px_rgba(45,143,122,0.5),0_8px_16px_-4px_rgba(45,143,122,0.25)] transition-all duration-300 hover:-translate-y-1.5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Our Mission</h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  To create thoughtful, science-backed formulations that strengthen skin over time, not overnight, focusing on purposeful formulas and long-term health.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md hover:shadow-[0_16px_36px_-6px_rgba(45,143,122,0.5),0_8px_16px_-4px_rgba(45,143,122,0.25)] transition-all duration-300 hover:-translate-y-1.5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Our Vision</h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  To become a trusted healthcare brand known for integrity, simplicity, and lasting results, built through consistency rather than trends.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg h-64 sm:h-80 md:h-96 rounded-md overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/bento/uvothera_banner.png"
                alt="Phasecor Philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
