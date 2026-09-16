"use client";

import { Lightbulb, ShieldCheck, HeartHandshake } from "lucide-react";
import { BRAND_PHILOSOPHY } from "./data";

export default function BrandStatement() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Innovative Products",
      desc: "We develop advanced solutions that address evolving healthcare needs.",
    },
    {
      icon: ShieldCheck,
      title: "Most Affordable High Quality Products",
      desc: "We combine affordability with uncompromised quality to deliver the best value.",
    },
    {
      icon: HeartHandshake,
      title: "Committed to Better Health Outcomes",
      desc: "We are dedicated to improving lives through safe, effective, and reliable healthcare solutions.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header with Tagline & Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-[#e8f2ee] text-[#2D8F7A] text-xs font-bold uppercase tracking-wider">
            <span>Our Healthcare Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Quality Healthcare within Reach
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            {BRAND_PHILOSOPHY.statement}
          </p>
        </div>

        {/* 3 Green Pillars matching the official brochure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg space-y-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
