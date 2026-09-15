"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "./data";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface ProductsSectionProps {
  onSelectProductForEnquiry?: (productId: string) => void;
}

export default function ProductsSection({ onSelectProductForEnquiry }: ProductsSectionProps) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEnquire = (productId: string) => {
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(productId);
    }
    router.push(`/contact?product=${encodeURIComponent(productId)}`);
  };

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
            Clinical Formulations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Discover Our Products
          </h2>
          <p className="text-sm text-slate-500">
            Formulate right. Give it time. See real change.
          </p>
        </div>

        {/* 3-Column Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(prod) => setSelectedProduct(prod)}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Explore All Formulations CTA */}
        <div className="pt-12 flex justify-center">
          <Link
            href="/products"
            className="px-8 py-3.5 rounded-full bg-slate-900 text-white hover:bg-[#2D8F7A] text-xs font-semibold tracking-wider uppercase transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>Explore All Formulations &amp; Pipeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
}
