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
    <section className="py-16 sm:py-20 bg-[#f9fbf9] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image Banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/bento/uvothera_banner.png"
                alt="Uvothera Sunscreen Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Copy matching phasecor.com */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#419a85] font-semibold">
              DAILY SUN DEFENSE, HEALTHY GLOW
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Advanced UV Protection Sunscreen
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Shield your skin with Phasecor’s UVothera Sunscreen, formulated with skin-loving ingredients to protect against harmful UVA &amp; UVB rays. Lightweight, non-greasy, and suitable for all skin types, it helps prevent sun damage, premature aging, and pigmentation while keeping your skin hydrated, smooth, and healthy every day.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onEnquire(uvothera.id)}
                className="px-8 py-3.5 rounded-full bg-[#419a85] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#256658] transition-all shadow-sm"
              >
                Enquiry
              </button>
              <button
                type="button"
                onClick={() => onOpenDetails(uvothera.id)}
                className="px-8 py-3.5 rounded-full border border-slate-300 text-slate-800 text-xs font-semibold tracking-wider uppercase hover:border-[#419a85] hover:text-[#419a85] transition-all"
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
