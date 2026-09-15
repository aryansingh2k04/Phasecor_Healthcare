"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import SupportBlocks from "@/components/SupportBlocks";
import ProductsSection from "@/components/ProductsSection";
import MasonryBento from "@/components/MasonryBento";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import MedicinesPipeline from "@/components/MedicinesPipeline";
import Testimonials from "@/components/Testimonials";
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

      {/* 2. Four Support Feature Blocks */}
      <SupportBlocks />

      {/* 3. Featured Products Portfolio */}
      <ProductsSection onSelectProductForEnquiry={handleSelectProductForEnquiry} />

      {/* 4. Masonry Bento Grid: Science-Backed Skincare Solutions */}
      <MasonryBento />

      {/* 5. Featured Deal Banner: Advanced UV Protection Sunscreen */}
      <FeaturedSpotlight
        onOpenDetails={handleOpenDetailsById}
        onEnquire={handleSelectProductForEnquiry}
      />

      {/* 6. Medicines & Therapeutic Pipeline */}
      <MedicinesPipeline />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Brand Statement & Philosophy */}
      <BrandStatement />

      {/* 9. Mission & About Us Teaser */}
      <section className="py-20 bg-[#f7faf8] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e8f2ee] text-[#2D8F7A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Phased Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Grounded in Biology. Formulated for Enduring Cellular Health.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Unlike superficial cosmetic brands promising overnight transformation, Phasecor Healthcare respects the 28-day cutaneous turnover cycle. Our formulations operate in calibrated phases to deliver sustainable resilience.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Discover Our Full Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/certifications"
                className="px-8 py-3.5 rounded-full border border-slate-300 text-slate-800 text-xs font-semibold tracking-wider uppercase hover:border-[#2D8F7A] hover:text-[#2D8F7A] transition-all inline-flex items-center gap-2"
              >
                <span>View Certifications</span>
                <ShieldCheck className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Direct Healthcare Partnerships & Contact Banner */}
      <section className="py-16 bg-[#071714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Connect with Phasecor Healthcare
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Have clinical questions, formulation inquiries, or require institutional hospital supply?
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <span>Contact Healthcare Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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
