'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText } from 'lucide-react';
import { Product } from '@/data/products';
import ProductInquiryModal from './ProductInquiryModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl border border-[#E3ECE9] hover:border-[#2D8F7A]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
        {/* Top Clinical Header */}
        <div className="p-5 pb-0 flex items-center justify-between">
          <span className="text-[11px] uppercase font-bold tracking-wider text-[#2D8F7A]">
            {product.category}
          </span>
          <span className="text-xs font-medium text-[#789991]">
            {product.specifications.netContent}
          </span>
        </div>

        {/* Product Visual Frame */}
        <div className="relative h-64 sm:h-72 w-full p-4 flex items-center justify-center bg-gradient-to-b from-white to-[#F8FBFA]">
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={product.images.main}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 pt-4 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#0E221E] group-hover:text-[#2D8F7A] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs font-medium text-[#2D8F7A]">
              {product.subtitle}
            </p>
            <div className="text-[11px] font-medium text-[#1F6959] bg-[#F8FBFA] px-2.5 py-1 rounded border border-[#E3ECE9]">
              {product.heroBadge}
            </div>
            <p className="text-xs text-[#4C655F] line-clamp-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Actives Pill Matrix */}
          <div className="space-y-1.5 pt-2 border-t border-[#E3ECE9]/70">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#789991]">
              Primary Molecules:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.keyActives.slice(0, 3).map((active) => (
                <span
                  key={active.name}
                  className="text-[10px] px-2 py-0.5 rounded bg-[#F8FBFA] border border-[#E3ECE9] text-[#0E221E] font-medium"
                >
                  {active.name.split(' (')[0]}
                </span>
              ))}
              {product.keyActives.length > 3 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EEF8F5] text-[#2D8F7A] font-medium">
                  +{product.keyActives.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Bottom Action Grid */}
          <div className="pt-4 border-t border-[#E3ECE9] grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center justify-center px-3 py-2.5 rounded-lg text-xs font-semibold text-[#0E221E] bg-[#F8FBFA] hover:bg-[#EEF8F5] hover:text-[#2D8F7A] border border-[#E3ECE9] transition-colors"
            >
              <span>Monograph</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 mr-1" />
              <span>Dossier</span>
            </button>
          </div>
        </div>
      </div>

      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedProduct={`${product.name} (${product.specifications.netContent})`}
      />
    </>
  );
}
