"use client";

import Image from "next/image";
import { X, Check } from "lucide-react";
import { Product } from "./data";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productId: string) => void;
}

export default function ProductModal({ product, onClose, onEnquire }: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-md shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-full sm:w-44 h-52 rounded-md bg-[#f9faf9] border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
            <Image
              src={product.detailImage || product.mainImage}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="space-y-2 flex-1">
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              {product.name}
            </h2>
            <p className="text-sm font-semibold text-[#2D8F7A]">
              {product.packaging}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {product.summary}
            </p>
          </div>
        </div>

        {/* Key Actives */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Key Ingredients & Actives
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.keyActives.map((active) => (
              <span
                key={active}
                className="px-3 py-1 rounded-md bg-[#f4f8f6] text-slate-800 text-xs font-medium border border-[#dbe7e1]"
              >
                {active}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Key Benefits
          </h3>
          <ul className="space-y-2">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <Check className="w-4 h-4 text-[#2D8F7A] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How to use */}
        <div className="p-4 rounded-md bg-[#f9faf9] border border-slate-200 space-y-1">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            How To Use
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {product.howToUse}
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-md border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onEnquire(product.id);
            }}
            className="px-8 py-2.5 rounded-md bg-[#2D8F7A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#237362] transition-all shadow-sm"
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
