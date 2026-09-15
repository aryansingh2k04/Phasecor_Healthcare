"use client";

import Image from "next/image";

export default function MasonryBento() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from phasecor.com */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
            dual delivery system
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Science-Backed Skincare Solutions
          </h2>
        </div>

        {/* 3 Featured Blocks: Serum, Sunscreen, Nutricosmetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1: Serum */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#f9faf9] hover:border-[#2D8F7A] transition-all duration-300 flex flex-col">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/bento/niascobutin_serum.jpg"
                alt="SERUM"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900 tracking-wider uppercase">
                SERUM
              </h3>
              <p className="text-xs text-slate-500">
                Niascobutin Multi-Action Brightening
              </p>
            </div>
          </div>

          {/* Block 2: Sunscreen */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#f9faf9] hover:border-[#2D8F7A] transition-all duration-300 flex flex-col">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/bento/uvothera_sunscreen.jpg"
                alt="Sunscreen"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900 tracking-wider uppercase">
                Sunscreen
              </h3>
              <p className="text-xs text-slate-500">
                Uvothera SPF 60++++ Multi-Spectrum Shield
              </p>
            </div>
          </div>

          {/* Block 3: Nutricosmetic */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-[#f9faf9] hover:border-[#2D8F7A] transition-all duration-300 flex flex-col">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/images/bento/primathion_nutricosmetic.jpg"
                alt="NUTRICOSMETIC"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900 tracking-wider uppercase">
                NUTRICOSMETIC
              </h3>
              <p className="text-xs text-slate-500">
                Primathion Dual Delivery Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
