'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FlaskConical,
  FileText,
  ArrowRight,
  Sun,
  Pill,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductInquiryModal from '@/components/ProductInquiryModal';
import { PRODUCTS } from '@/data/products';

type CategoryFilter = 'All' | 'Topical Dermatology' | 'Dual-Delivery Nutricosmetics' | 'Advanced Photoprotection';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. CATALOG HERO */}
      <section className="relative pt-16 pb-16 bg-gradient-to-b from-[#F8FBFA] to-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
            Pharmaceutical Monographs
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E221E] tracking-tight max-w-3xl mx-auto">
            Clinical Monographs & Formulations
          </h1>
          <p className="text-base sm:text-lg text-[#4C655F] max-w-2xl mx-auto leading-relaxed">
            Institutional portfolio developed for clinical dermatology, hospital supply, and physician-prescribed patient regimens. Every monograph is substantiated with independent laboratory test reports.
          </p>

          {/* Corporate Notice */}
          <p className="pt-2 text-xs font-medium text-[#789991]">
            Institutional & clinic supply only &bull; Direct consumer checkout is not conducted on this portal
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="py-8 bg-white border-b border-[#E3ECE9] sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeCategory === 'All'
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'bg-[#F8FBFA] text-[#0E221E] hover:bg-[#EEF8F5] border border-[#E3ECE9]'
              }`}
            >
              All Formulations ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('Topical Dermatology')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
                activeCategory === 'Topical Dermatology'
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'bg-[#F8FBFA] text-[#0E221E] hover:bg-[#EEF8F5] border border-[#E3ECE9]'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Topical Dermatology</span>
            </button>
            <button
              onClick={() => setActiveCategory('Dual-Delivery Nutricosmetics')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
                activeCategory === 'Dual-Delivery Nutricosmetics'
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'bg-[#F8FBFA] text-[#0E221E] hover:bg-[#EEF8F5] border border-[#E3ECE9]'
              }`}
            >
              <Pill className="w-3.5 h-3.5" />
              <span>Dual-Delivery Nutricosmetics</span>
            </button>
            <button
              onClick={() => setActiveCategory('Advanced Photoprotection')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
                activeCategory === 'Advanced Photoprotection'
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'bg-[#F8FBFA] text-[#0E221E] hover:bg-[#EEF8F5] border border-[#E3ECE9]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Photoprotection</span>
            </button>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden sm:inline-flex items-center text-xs font-bold text-[#2D8F7A] hover:text-[#1F6959] uppercase tracking-wider"
          >
            <FileText className="w-4 h-4 mr-1.5" />
            Request Full Catalog Dossier
          </button>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-16 bg-[#F8FBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORMULATION COMPARISON SPECIFICATION MATRIX */}
      <section className="py-20 bg-white border-t border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Comparative Specifications
            </span>
            <h2 className="text-3xl font-bold text-[#0E221E]">
              Clinical Formulations Specification Matrix
            </h2>
            <p className="text-sm text-[#4C655F] max-w-2xl">
              Cross-reference vehicle matrices, therapeutic indications, active payloads, and clinical safety certifications.
            </p>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-[#E3ECE9] rounded-2xl shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#EEF8F5] border-b border-[#E3ECE9] text-[#0E221E]">
                  <th className="p-4 sm:p-5 font-bold">Parameter</th>
                  <th className="p-4 sm:p-5 font-bold">Niascobutin Serum</th>
                  <th className="p-4 sm:p-5 font-bold">Primathion Oral Supplement</th>
                  <th className="p-4 sm:p-5 font-bold">Uvothera Sunscreen Gel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3ECE9] text-[#4C655F]">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Category
                  </td>
                  <td className="p-4 sm:p-5">Topical Dermatology</td>
                  <td className="p-4 sm:p-5">Dual-Delivery Nutricosmetics</td>
                  <td className="p-4 sm:p-5">Advanced Photoprotection</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Vehicle Format
                  </td>
                  <td className="p-4 sm:p-5">Hydrophilic Dropper Serum (30 ml)</td>
                  <td className="p-4 sm:p-5">Dual-Chamber Hard Gelatin Capsules (60 Caps)</td>
                  <td className="p-4 sm:p-5">Silicone-Elastomer Clear Gel (50 g)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Primary Actives
                  </td>
                  <td className="p-4 sm:p-5">
                    Niacinamide, Alpha Arbutin, Tranexamic Acid, Peptides, Hyaluronic Acid
                  </td>
                  <td className="p-4 sm:p-5">
                    Liposomal L-Glutathione, Evening Primrose Oil (GLA 10%), NAC, Vitamin C
                  </td>
                  <td className="p-4 sm:p-5">
                    Tinosorb S, Octinoxate, Avobenzone, Niacinamide 2%, Vitamin E
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Clinical Testing Benchmark
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#1F6959]">
                    IS 4011:2018 (0.00 Irritation Score, 100% Volunteer Tolerance)
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#1F6959]">
                    Dissolution &gt;90 min gastric survival; HPLC 99.4% Glutathione assay
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#1F6959]">
                    Tested SPF 96.78; Critical λ 379.4 nm; Boots 3 Stars; PA++++
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Accredited Testing Facility
                  </td>
                  <td className="p-4 sm:p-5">Mascot Spincontrol India (ISO 9001:2015)</td>
                  <td className="p-4 sm:p-5">Phasecor Pharmacopeial Analytical Lab</td>
                  <td className="p-4 sm:p-5">Mascot Spincontrol Spectrophotometry</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Regulatory Code
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-xs text-[#0E221E]">Cos/WZ/2022/91</td>
                  <td className="p-4 sm:p-5 font-mono text-xs text-[#0E221E]">FSSAI Lic: 12124999000251</td>
                  <td className="p-4 sm:p-5 font-mono text-xs text-[#0E221E]">Cos/WZ/2022/98</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Detailed Monograph
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/products/niascobutin"
                      className="text-[#2D8F7A] hover:text-[#1F6959] font-bold inline-flex items-center"
                    >
                      View Monograph <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/products/primathion"
                      className="text-[#2D8F7A] hover:text-[#1F6959] font-bold inline-flex items-center"
                    >
                      View Monograph <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/products/uvothera"
                      className="text-[#2D8F7A] hover:text-[#1F6959] font-bold inline-flex items-center"
                    >
                      View Monograph <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. INQUIRY MODAL */}
      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
