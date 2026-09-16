"use client";

import Image from "next/image";
import { Product } from "./data";

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onEnquire: (productId: string) => void;
}

export default function ProductCard({ product, onOpenDetails, onEnquire }: ProductCardProps) {
  return (
    <div className="group flex flex-col rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Product Image Area - Clean white background for packaging visibility */}
      <div className="relative w-full h-80 bg-white border-b border-white/20 overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-white leading-snug">
            {product.name}
          </h3>
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
            {product.packaging}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-3 font-normal">
          {product.summary}
        </p>

        {/* 2 Buttons Only: Details and Enquiry */}
        <div className="pt-4 mt-auto border-t border-white/20 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(product)}
            className="w-full py-2.5 rounded-md bg-white/15 border border-white/30 text-white hover:bg-white hover:text-[#237362] text-xs font-semibold tracking-wider uppercase transition-all duration-200"
          >
            Details
          </button>

          <button
            type="button"
            onClick={() => onEnquire(product.id)}
            className="w-full py-2.5 rounded-md bg-white text-[#237362] hover:bg-white/90 text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm"
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
