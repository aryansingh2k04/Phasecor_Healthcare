"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Pill, Activity } from "lucide-react";
import { PRODUCTS, Product, MEDICINE_PIPELINE } from "@/components/data";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import SupportBlocks from "@/components/SupportBlocks";

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: "All Formulations" },
    { id: "therapeutic", label: "Therapeutic Medicines" },
    { id: "derma", label: "Clinical Dermatology" },
    { id: "pipeline", label: "R&D Pipeline" },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "therapeutic") {
      return product.category === "Therapeutic Medicines";
    }
    if (selectedCategory === "derma") {
      return product.category === "Clinical Dermatology";
    }
    return true;
  });

  const handleEnquire = (productId: string) => {
    router.push(`/contact?product=${encodeURIComponent(productId)}`);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="relative bg-[#071714] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(45,143,122,0.22)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D8F7A]/20 border border-[#2D8F7A]/30 text-[#45C5A9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pharmaceutical &amp; Dermaceutical Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Quality Care within Reach: <br />
              <span className="bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent">
                Therapeutics &amp; Formulations
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Engineered with medical rigor, verified therapeutic dosages, and uncompromised purity &mdash; providing essential urinary, metabolic, rehydration, musculoskeletal, and dermatological healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Quality Trust Blocks */}
      <SupportBlocks />

      {/* Filter Tabs & Catalog */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    if (cat.id === "pipeline") {
                      const el = document.getElementById("pipeline-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-[#2D8F7A] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing {filteredProducts.length} Formulations
            </div>
          </div>

          {/* Product Cards Grid: Exactly 2 buttons per card, no badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(prod) => setModalProduct(prod)}
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Therapy Highlights: Primary Medicines Showcase */}
      <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Multi-Specialty Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Essential Therapeutics Engineered for Maximum Bioavailability
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Expanding healthcare access across high-incidence clinical conditions with science-backed formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#2D8F7A] transition-all space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">UTI &amp; Renal Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Non-antibiotic urinary tract support combining PAC-rich Cranberry, D-Mannose, and urinary alkalizers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#2D8F7A] transition-all space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Cellular Bioenergetics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sugar-free WHO-osmolarity electrolyte formulation fortified with Co-Enzyme Q10 for rapid rehydration.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#2D8F7A] transition-all space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center">
                <Pill className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Joint &amp; Bone Density</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Synergistic Calcium Orotate, Cissus Quadrangularis, and Active B12 for cartilage and neuropathic recovery.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#2D8F7A] transition-all space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Women’s PCOS Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physiological 40:1 Myo to D-Chiro Inositol ratio to regulate ovulation, insulin sensitivity, and cycle rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medicines & Therapeutic Pipeline Section */}
      <section id="pipeline-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f2ee] text-[#2D8F7A] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pharmaceutical Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Investigational Therapeutic Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              In addition to our released formulations, Phasecor Healthcare investigates advanced liposomal systems and targeted therapeutics to meet evolving medical needs.
            </p>
          </div>

          {/* Pipeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MEDICINE_PIPELINE.map((item) => (
              <div
                key={item.name}
                className="p-8 rounded-3xl bg-[#fbfdfc] border border-slate-200 hover:border-[#2D8F7A] hover:shadow-lg transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2D8F7A] uppercase tracking-wider">
                      {item.therapeuticArea}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 px-3 py-1 rounded-full bg-slate-100">
                      {item.deliveryMethod}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    Target: <span className="font-semibold text-slate-800">{item.target}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => router.push(`/contact?product=${encodeURIComponent(item.name)}`)}
                    className="text-xs font-bold text-[#2D8F7A] hover:text-[#237362] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Clinical Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Supply Banner */}
      <section className="py-16 bg-[#071714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Hospital &amp; Clinic Inquiries
            </h2>
            <p className="text-sm text-slate-300">
              Are you a physician, hospital formulary officer, or pharmaceutical distributor? Connect with our medical team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <span>Request Institutional Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Global Product Details Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onEnquire={handleEnquire}
      />
    </div>
  );
}
