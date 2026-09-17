"use client";

import Image from "next/image";
import { PRODUCTS } from "./data";

interface FeaturedSpotlightProps {
  onOpenDetails: (productId: string) => void;
  onEnquire: (productId: string) => void;
}

export default function FeaturedSpotlight({ onOpenDetails, onEnquire }: FeaturedSpotlightProps) {
  const uvothera = PRODUCTS.find((p) => p.id === "uvothera") || PRODUCTS[2];

  return (
    <section className="py-14 sm:py-20 bg-[#f9fbf9] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Image Banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/bento/uvothera_banner.png"
                alt="Uvothera Sunscreen Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Copy matching phasecor.com */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
              DAILY SUN DEFENSE, HEALTHY GLOW
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Advanced UV Protection Sunscreen
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Shield your skin with Phasecor’s UVothera Sunscreen, formulated with skin-loving ingredients to protect against harmful UVA &amp; UVB rays. Lightweight, non-greasy, and suitable for all skin types, it helps prevent sun damage, premature aging, and pigmentation while keeping your skin hydrated, smooth, and healthy every day.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => onEnquire(uvothera.id)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all shadow-sm text-center"
              >
                Enquiry
              </button>
              <button
                type="button"
                onClick={() => onOpenDetails(uvothera.id)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-slate-300 text-slate-800 text-xs font-semibold tracking-wider uppercase hover:border-[#2D8F7A] hover:text-[#2D8F7A] transition-all text-center"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
