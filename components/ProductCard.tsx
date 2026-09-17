"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ShieldCheck, Activity, Sparkles, CheckCircle2, HeartPulse } from "lucide-react";
import { Product } from "./data";

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product) => void;
  onEnquire: (productId: string) => void;
}

const BENEFIT_ICONS = [ShieldCheck, Activity, Sparkles, CheckCircle2, HeartPulse];

export default function ProductCard({ product, onOpenDetails, onEnquire }: ProductCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  // Helper to get consistent icon per benefit index
  const getBenefitIcon = (index: number) => {
    const IconComponent = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
    return <IconComponent className="w-3.5 h-3.5 text-[#7ff2d9] shrink-0" />;
  };

  return (
    <div className="relative group flex flex-col w-full max-w-[320px] mx-auto rounded-xl bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* ── DEFAULT CARD VIEW ── */}
      <div className="flex flex-col flex-1">
        {/* Product Image Area - Seamlessly connected with rounded corners and no dividing line */}
        <div className="p-3 pb-0">
          <div className="relative w-full h-[220px] rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src={product.mainImage}
              alt={product.name}
              fill
              sizes="320px"
              className="object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
        </div>

        {/* Product Info Section - Seamlessly connected with no dead empty space */}
        <div className="flex flex-col flex-1 p-5 pt-3">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-white leading-snug line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-2 min-h-[2.25rem]">
              {product.subtitle}
            </p>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                {product.packaging}
              </span>
            </div>
          </div>

          {/* Single Full-Width "View Details" Button - Sits directly below packaging without huge gap */}
          <div className="mt-4 pt-1">
            <button
              type="button"
              onClick={() => setShowOverlay(true)}
              className="w-full py-2.5 px-4 rounded-md bg-white text-[#237362] hover:bg-white/95 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* ── IN-CARD DETAILS OVERLAY (Eynexa Pharma Style) ── */}
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowOverlay(false);
          }
        }}
        className={`absolute inset-0 z-20 bg-[#071c17]/95 backdrop-blur-md border border-white/20 text-white p-5 rounded-xl flex flex-col justify-between transition-all duration-300 ease-out cursor-default ${
          showOverlay
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Overlay Header: Product Title & Close Button */}
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-white/20">
            <h4 className="text-lg sm:text-xl font-bold text-[#7ff2d9] line-clamp-1">
              {product.name}
            </h4>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowOverlay(false);
              }}
              className="p-1 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors shrink-0 ml-2 cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Content Area */}
          <div className="mt-3 space-y-2.5 max-h-[300px] overflow-y-auto pr-1 text-left scrollbar-thin">
            {/* Composition */}
            <p className="text-xs text-white/90 leading-relaxed">
              <strong className="text-white font-semibold">Composition: </strong>
              {product.keyActives.join(" + ")}
            </p>

            {/* Formulation Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-white/15 text-[#7ff2d9] border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ff2d9]"></span>
                {product.badge || product.category}
              </span>
            </div>

            {/* Key Benefits List with Icons */}
            <ul className="space-y-1.5 pt-1">
              {product.benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-white/90">
                  <span className="mt-0.5">{getBenefitIcon(idx)}</span>
                  <span className="line-clamp-1 leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Short Summary */}
            <p className="text-xs text-white/80 leading-relaxed line-clamp-3 pt-1 border-t border-white/15">
              {product.summary}
            </p>
          </div>
        </div>

        {/* Bottom Button: Send Inquiry */}
        <div className="pt-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEnquire(product.id);
            }}
            className="w-full py-2.5 px-4 rounded-md bg-white text-[#237362] hover:bg-white/95 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center tracking-wide cursor-pointer"
          >
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
