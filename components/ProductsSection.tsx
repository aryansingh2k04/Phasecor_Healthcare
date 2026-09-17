"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PRODUCTS, Product } from "./data";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface ProductsSectionProps {
  onSelectProductForEnquiry?: (productId: string) => void;
}

export default function ProductsSection({ onSelectProductForEnquiry }: ProductsSectionProps) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Exactly 3 featured formulations on homepage: ORS (Electcor) + 2 with photos (Niascobutin & UVoThera)
  const featuredIds = ["electcor", "niascobutin", "uvothera"];
  const featuredProducts = featuredIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const handleEnquire = (productId: string) => {
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(productId);
    }
    router.push(`/contact?product=${encodeURIComponent(productId)}`);
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
            Quality Healthcare within Reach
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Therapeutics &amp; Clinical Formulations
          </h2>
          <p className="text-sm text-slate-500">
            Innovative, high-quality, and affordable healthcare solutions that empower better lives.
          </p>
        </div>

        {/* 3-Column Product Cards Grid (Exactly 3 Products) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(prod) => setSelectedProduct(prod)}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Explore All Formulations CTA */}
        <div className="pt-10 sm:pt-12 flex justify-center">
          <Link
            href="/products"
            className="w-full sm:w-auto text-center justify-center px-8 py-3.5 rounded-md bg-[#2D8F7A] text-white hover:bg-[#237362] text-xs font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center shadow-sm hover:shadow-md"
          >
            Explore All Formulations
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
