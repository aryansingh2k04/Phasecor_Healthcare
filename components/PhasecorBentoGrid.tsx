import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PhasecorBentoGrid() {
  return (
    <section
      aria-label="Phasecor Formulations Mosaic"
      className="py-12 sm:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          
          {/* ================= CARD 1: TALL LEFT (Primathion Dual Delivery) ================= */}
          <div className="group relative overflow-hidden bg-[#0A0A0A] border border-[#222222] min-h-[520px] md:min-h-[600px] lg:min-h-[660px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
            {/* Background Studio Packshot */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/bento/primathion_dual.jpg"
                alt="Primathion Oral Supplement - Dual Delivery System"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 p-6 sm:p-8 flex justify-center w-full">
              <Link
                href="/products/primathion"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xs bg-[#111111]/90 hover:bg-[#2D8F7A] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/10 text-center"
              >
                Dual Delivery System
              </Link>
            </div>
          </div>

          {/* ================= COLUMN 2: MIDDLE (2 Cards) ================= */}
          <div className="flex flex-col gap-4 lg:gap-5">
            
            {/* Card 2: Advanced Skincare Text Card */}
            <div className="group relative bg-[#FCFCF9] border border-[#ECECD8] p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:border-[#2D8F7A]/50 hover:shadow-lg">
              {/* Subtle accent corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#2D8F7A]/5 blur-2xl pointer-events-none" />

              <span className="text-[11px] font-bold tracking-[0.25em] text-[#787878] uppercase mb-3 block">
                Advanced Skincare
              </span>

              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111111] leading-snug max-w-[260px] mb-6">
                Science-Backed Skincare Solutions
              </h3>

              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xs bg-[#111111] hover:bg-[#2D8F7A] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Formulations
              </Link>
            </div>

            {/* Card 3: Uvothera Sunscreen */}
            <div className="group relative overflow-hidden bg-[#E2F0F7] border border-[#CCE3EE] min-h-[280px] lg:min-h-[320px] flex flex-col justify-end transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/bento/uvothera_sunscreen.jpg"
                  alt="Uvothera Sunscreen Formulation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="relative z-10 p-6 flex justify-center w-full">
                <Link
                  href="/products/uvothera"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-xs bg-[#111111]/90 hover:bg-[#2D8F7A] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/10"
                >
                  Sunscreen
                </Link>
              </div>
            </div>

          </div>

          {/* ================= COLUMN 3: RIGHT (2 Cards) ================= */}
          <div className="flex flex-col gap-4 lg:gap-5 md:col-span-2 lg:col-span-1">
            
            {/* Card 4: Niascobutin Serum */}
            <div className="group relative overflow-hidden bg-[#D9ECF2] border border-[#BFDFEA] min-h-[280px] lg:min-h-[320px] flex flex-col justify-end transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/bento/niascobutin_serum.jpg"
                  alt="Niascobutin Advanced Face Serum"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="relative z-10 p-6 flex justify-center w-full">
                <Link
                  href="/products/niascobutin"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-xs bg-[#111111]/90 hover:bg-[#2D8F7A] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/10"
                >
                  Serum
                </Link>
              </div>
            </div>

            {/* Card 5: Primathion Nutricosmetic */}
            <div className="group relative overflow-hidden bg-[#0F3528] border border-[#164F3C] min-h-[280px] lg:min-h-[320px] flex flex-col justify-end transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/bento/primathion_nutricosmetic.jpg"
                  alt="Primathion Specialized Oral Nutricosmetic"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="relative z-10 p-6 flex justify-center w-full">
                <Link
                  href="/products/primathion"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-xs bg-[#111111]/90 hover:bg-[#2D8F7A] text-white text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-white/10"
                >
                  Nutricosmetic
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
