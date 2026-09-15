"use client";

import Image from "next/image";
import Link from "next/link";

export default function MasonryBento() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Asymmetric Bento Grid matching phasecor.com */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {/* Column 1 (Left): Full-Height Dual Delivery Feature Card */}
          <Link
            href="/products"
            className="group relative block w-full h-[520px] md:h-auto min-h-[520px] md:min-h-[640px] lg:min-h-[660px] rounded-2xl overflow-hidden bg-black border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
          >
            <Image
              src="/images/bento/primathion_dual.jpg"
              alt="Dual Delivery System"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Bottom Floating Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-black/95 text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl whitespace-nowrap border border-white/10 group-hover:bg-[#2D8F7A] transition-colors duration-300">
              DUAL DELIVERY SYSTEM
            </div>
          </Link>

          {/* Column 2 (Middle): Text Callout (Top) + Sunscreen Card (Bottom) */}
          <div className="flex flex-col gap-4 lg:gap-6 justify-between">
            {/* Middle Top: Science-Backed Skincare Solutions Text Card */}
            <div className="w-full h-[260px] sm:h-[300px] md:h-[310px] lg:h-[318px] rounded-2xl bg-[#fafbfa] border border-slate-200 p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D8F7A]">
                ADVANCED SKINCARE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug max-w-xs">
                Science-Backed Skincare Solutions
              </h3>
              <a
                href="https://phasecor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#2D8F7A] transition-colors duration-200 shadow-sm"
              >
                SHOP NOW
              </a>
            </div>

            {/* Middle Bottom: Sunscreen Card */}
            <Link
              href="/products"
              className="group relative block w-full h-[260px] sm:h-[300px] md:h-[310px] lg:h-[318px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Image
                src="/images/bento/uvothera_sunscreen.jpg"
                alt="Sunscreen"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-black/95 text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl whitespace-nowrap border border-white/10 group-hover:bg-[#2D8F7A] transition-colors duration-300">
                SUNSCREEN
              </div>
            </Link>
          </div>

          {/* Column 3 (Right): Serum Card (Top) + Nutricosmetic Card (Bottom) */}
          <div className="flex flex-col gap-4 lg:gap-6 justify-between">
            {/* Right Top: Serum Card */}
            <Link
              href="/products"
              className="group relative block w-full h-[260px] sm:h-[300px] md:h-[310px] lg:h-[318px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Image
                src="/images/bento/niascobutin_serum.jpg"
                alt="Serum"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-black/95 text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl whitespace-nowrap border border-white/10 group-hover:bg-[#2D8F7A] transition-colors duration-300">
                SERUM
              </div>
            </Link>

            {/* Right Bottom: Nutricosmetic Card */}
            <Link
              href="/products"
              className="group relative block w-full h-[260px] sm:h-[300px] md:h-[310px] lg:h-[318px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Image
                src="/images/bento/primathion_nutricosmetic.jpg"
                alt="Nutricosmetic"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-black/95 text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl whitespace-nowrap border border-white/10 group-hover:bg-[#2D8F7A] transition-colors duration-300">
                NUTRICOSMETIC
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
