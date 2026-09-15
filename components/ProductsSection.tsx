"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "./data";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface ProductsSectionProps {
  onSelectProductForEnquiry: (productId: string) => void;
}

export default function ProductsSection({ onSelectProductForEnquiry }: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEnquire = (productId: string) => {
    onSelectProductForEnquiry(productId);
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="formulations" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#419a85] font-semibold">
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
