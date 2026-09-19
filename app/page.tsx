"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import MasonryBento from "@/components/MasonryBento";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import BrandStatement from "@/components/BrandStatement";
import ProductModal from "@/components/ProductModal";
import { PRODUCTS, Product } from "@/components/data";

export default function Home() {
  const router = useRouter();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const handleSelectProductForEnquiry = (productId: string) => {
    router.push(`/contact?product=${encodeURIComponent(productId)}`);
  };

  const handleOpenDetailsById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setModalProduct(prod);
    }
  };

  return (
    <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
      {/* 1. Hero Section inspired by eynexapharma.com */}
      <Hero />

      {/* 2. Masonry Bento Grid: Science-Backed Skincare Solutions */}
      <MasonryBento />

      {/* 4. Featured Products Portfolio */}
      <ProductsSection onSelectProductForEnquiry={handleSelectProductForEnquiry} />

      {/* 5. Featured Deal Banner: Advanced UV Protection Sunscreen */}
      <FeaturedSpotlight
        onOpenDetails={handleOpenDetailsById}
        onEnquire={handleSelectProductForEnquiry}
      />

      {/* 6. Brand Statement & Philosophy */}
      <BrandStatement />

      {/* 9. Mission & About Us Teaser */}
      <section className="py-20 bg-[#f7faf8] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Grounded in Biology. Formulated for Enduring Overall Health.
            </h2>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="/about"
                className="w-auto min-w-[210px] max-w-[260px] justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-md bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Discover Our Full Mission</span>
              </Link>
              <Link
                href="/certifications"
                className="w-auto min-w-[210px] max-w-[260px] justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-md border border-slate-300 text-slate-800 text-xs font-semibold tracking-wider uppercase hover:border-[#2D8F7A] hover:text-[#2D8F7A] transition-all inline-flex items-center gap-2"
              >
                <span>View Certifications</span>
                <ShieldCheck className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Product Details Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onEnquire={handleSelectProductForEnquiry}
      />
    </div>
  );
}
