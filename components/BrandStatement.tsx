"use client";

export default function BrandStatement() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
          Our Philosophy
        </span>
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
          “At Phasecor, we don’t believe in quick fixes. We believe in phases. Skin doesn’t transform overnight; it evolves, adapts, repairs, and strengthens over time, and that’s exactly how we formulate.”
        </blockquote>
        <div className="pt-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Phasecor Healthcare
          </span>
        </div>
      </div>
    </section>
  );
}
