'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, ChevronRight, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import ProductInquiryModal from './ProductInquiryModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showDetailImage, setShowDetailImage] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-3xl border border-[#E3ECE9] hover:border-[#2D8F7A]/60 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden">
        
        {/* Subtle Precision Corner Crosshairs */}
        <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[#D9EFE9] group-hover:text-[#2D8F7A] transition-colors pointer-events-none select-none">
          +
        </div>
        <div className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-[#D9EFE9] group-hover:text-[#2D8F7A] transition-colors pointer-events-none select-none">
          +
        </div>

        {/* Top Header */}
        <div className="p-6 pb-2 flex items-center justify-between">
          <span className="text-[11px] uppercase font-bold tracking-widest text-[#2D8F7A]">
            {product.category}
          </span>
          <span className="text-xs font-mono text-[#789991]">
            {product.specifications.netContent}
          </span>
        </div>

        {/* Product Studio Visual Frame */}
        <div className="relative h-64 sm:h-72 w-full px-6 py-4 flex items-center justify-center bg-gradient-to-b from-[#F8FBFA]/40 to-[#F8FBFA]">
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={showDetailImage ? product.images.detail : product.images.main}
              alt={product.name}
              fill
              className="object-contain transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Quick View Angle Switcher */}
          <button
            onClick={() => setShowDetailImage(!showDetailImage)}
            className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-white/90 hover:bg-white text-[#4C655F] hover:text-[#0E221E] text-[10px] font-semibold border border-[#E3ECE9] shadow-xs flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-200"
            title="Toggle between pack shot and clinical detail"
          >
            <Eye className="w-3 h-3 text-[#2D8F7A]" />
            <span>{showDetailImage ? 'Pack Shot' : 'Inspect'}</span>
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 pt-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#0E221E] group-hover:text-[#2D8F7A] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs font-medium text-[#2D8F7A]">
              {product.subtitle}
            </p>
            
            {/* Clinical Certification Row */}
            <div className="text-[11px] font-medium text-[#1F6959] bg-[#EEF8F5] px-3 py-1.5 rounded-lg border border-[#D9EFE9] flex items-center justify-between">
              <span>{product.heroBadge}</span>
              <span className="text-[10px] text-[#2D8F7A] font-semibold">Validated</span>
            </div>

            <p className="text-xs text-[#4C655F] line-clamp-3 leading-relaxed pt-1">
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
          <div className="pt-4 border-t border-[#E3ECE9] grid grid-cols-2 gap-2.5">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0E221E] bg-[#F8FBFA] hover:bg-[#EEF8F5] hover:text-[#2D8F7A] border border-[#E3ECE9] transition-all group/btn"
            >
              <span>Monograph</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
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
