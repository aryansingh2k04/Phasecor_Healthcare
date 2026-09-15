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
    <div className="group flex flex-col bg-white rounded-md border border-slate-200 overflow-hidden hover:border-[#2D8F7A] hover:shadow-lg transition-all duration-300">
      {/* Product Image Area - Clean, No Badges */}
      <div className="relative w-full h-80 bg-[#f9faf9] border-b border-slate-100 overflow-hidden flex items-center justify-center p-4">
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
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2D8F7A] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-[#2D8F7A] font-semibold">
            {product.packaging}
          </p>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
          {product.summary}
        </p>

        {/* 2 Buttons Only: Details and Enquiry */}
        <div className="pt-4 mt-auto border-t border-slate-100 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(product)}
            className="w-full py-2.5 rounded-md border border-slate-300 text-slate-800 hover:border-[#2D8F7A] hover:text-[#2D8F7A] text-xs font-semibold tracking-wider uppercase transition-all duration-200"
          >
            Details
          </button>

          <button
            type="button"
            onClick={() => onEnquire(product.id)}
            className="w-full py-2.5 rounded-md bg-[#2D8F7A] text-white hover:bg-[#237362] text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-2xs"
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
