"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SupportBlocks from "@/components/SupportBlocks";
import ProductsSection from "@/components/ProductsSection";
import MasonryBento from "@/components/MasonryBento";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import MedicinesPipeline from "@/components/MedicinesPipeline";
import Testimonials from "@/components/Testimonials";
import BrandStatement from "@/components/BrandStatement";
import AboutSection from "@/components/AboutSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import { PRODUCTS, Product } from "@/components/data";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string>("niascobutin");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const handleSelectProductForEnquiry = (productId: string) => {
    setSelectedProductId(productId);
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDetailsById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setModalProduct(prod);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#419a85]/20 selection:text-[#184a3f]">
      {/* 1. Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Slideshow matching phasecor.com */}
        <Hero
          onOpenDetails={(prod) => setModalProduct(prod)}
          onEnquire={handleSelectProductForEnquiry}
        />

        {/* 3. Four Support Feature Blocks (Fragrance Free, Allergy Tested, Paraben Free, Dermatologist Tested) */}
        <SupportBlocks />

        {/* 4. Products Portfolio - Exactly 2 Buttons: Details & Enquiry, No Badges */}
        <ProductsSection onSelectProductForEnquiry={handleSelectProductForEnquiry} />

        {/* 5. Masonry Grid: dual delivery system / Science-Backed Skincare Solutions (SERUM, Sunscreen, NUTRICOSMETIC) */}
        <MasonryBento />

        {/* 6. Featured Deal Banner: Advanced UV Protection Sunscreen */}
        <FeaturedSpotlight
          onOpenDetails={handleOpenDetailsById}
          onEnquire={handleSelectProductForEnquiry}
        />

        {/* 7. Medicines & Therapeutic Pipeline (No fake numbers, pure pharmaceutical expansion) */}
        <MedicinesPipeline />

        {/* 8. Testimonials from phasecor.com */}
        <Testimonials />

        {/* 9. Brand Statement & Philosophy */}
        <BrandStatement />

        {/* 10. About Us (Origin, Mission, Vision) */}
        <AboutSection />

        {/* 11. Contact / Enquiry Form */}
        <EnquirySection key={selectedProductId} initialProductId={selectedProductId} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Global Product Details Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onEnquire={handleSelectProductForEnquiry}
      />
    </div>
  );
}
