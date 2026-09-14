'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FlaskConical,
  FileText,
  ArrowRight,
  Sun,
  Pill,
  Search,
  X,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductInquiryModal from '@/components/ProductInquiryModal';
import { PRODUCTS } from '@/data/products';

type CategoryFilter = 'All' | 'Topical Dermatology' | 'Dual-Delivery Nutricosmetics' | 'Advanced Photoprotection';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      activeCategory === 'All' || p.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.indications.some((ind) => ind.toLowerCase().includes(query)) ||
      p.keyActives.some((act) => act.name.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. CATALOG HERO */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F8FBFA] via-white to-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
            Product Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E221E] tracking-tight max-w-3xl mx-auto">
            Our Formulations
          </h1>
          <p className="text-base sm:text-lg text-[#4C655F] max-w-2xl mx-auto leading-relaxed">
            Formulations developed for clinical dermatology, hospital supply, and physician-prescribed patient regimens. Every product is substantiated with independent laboratory testing.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#789991] absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by product, active ingredient, or indication..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 text-xs sm:text-sm bg-white border border-[#E3ECE9] rounded-2xl shadow-xs focus:outline-none focus:border-[#2D8F7A] focus:ring-2 focus:ring-[#2D8F7A]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-[#789991] hover:text-[#0E221E]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="py-4 bg-white border-b border-[#E3ECE9] sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeCategory === 'All'
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'bg-[#F8FBFA] text-[#0E221E] hover:bg-[#EEF8F5] border border-[#E3ECE9]'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('Topical Dermatology')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
                activeCategory === 'Dual-Delivery Nutricosmetics'
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'bg-[#F8FBFA] text-[#0E221E] hover:bg-[#EEF8F5] border border-[#E3ECE9]'
              }`}
            >
              <Pill className="w-3.5 h-3.5" />
              <span>Nutricosmetics</span>
            </button>
            <button
              onClick={() => setActiveCategory('Advanced Photoprotection')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
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
            className="hidden sm:inline-flex items-center text-xs font-semibold text-[#2D8F7A] hover:text-[#1F6959] uppercase tracking-wider"
          >
            <FileText className="w-4 h-4 mr-1.5" />
            Request Full Catalog Dossier
          </button>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-16 bg-[#F8FBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#789991]">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} products
            </span>
            {searchQuery && (
              <span className="text-[#2D8F7A]">
                Filtered by &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white rounded-3xl border border-[#E3ECE9] p-8 space-y-3">
              <p className="text-base font-bold text-[#0E221E]">
                No formulations matched your query &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs text-[#4C655F]">
                Try adjusting your search term or select &quot;All Products&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] text-xs font-semibold hover:bg-[#D9EFE9] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. FORMULATION COMPARISON MATRIX */}
      <section className="py-20 bg-white border-t border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-2 mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
              Comparative Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
              Formulation Specifications Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F] max-w-2xl">
              Cross-reference dosage forms, active payloads, and clinical safety certifications.
            </p>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-[#E3ECE9] rounded-2xl bg-white shadow-xs">
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
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Category
                  </td>
                  <td className="p-4 sm:p-5">Topical Dermatology</td>
                  <td className="p-4 sm:p-5">Dual-Delivery Nutricosmetics</td>
                  <td className="p-4 sm:p-5">Advanced Photoprotection</td>
                </tr>
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Dosage & Packaging
                  </td>
                  <td className="p-4 sm:p-5">Dropper Bottle (30 ml)</td>
                  <td className="p-4 sm:p-5">Dual-Chamber Capsules (30 Units)</td>
                  <td className="p-4 sm:p-5">Gel Tube (50 g)</td>
                </tr>
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Key Ingredients
                  </td>
                  <td className="p-4 sm:p-5">
                    Niacinamide, Alpha Arbutin, Tranexamic Acid, Peptides, Hyaluronic Acid
                  </td>
                  <td className="p-4 sm:p-5">
                    L-Glutathione, Evening Primrose Oil, N-Acetyl Cysteine, Vitamin C
                  </td>
                  <td className="p-4 sm:p-5">
                    Tinosorb S, Octinoxate, Avobenzone, Niacinamide, Vitamin E
                  </td>
                </tr>
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Clinical Testing Benchmark
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#1F6959]">
                    IS 4011:2018 (0.00 Irritation Score)
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#1F6959]">
                    Enteric gastro-resistance; HPLC assayed potency
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#1F6959]">
                    SPF 96.78 in-vitro; Critical λ 379.4 nm; PA++++
                  </td>
                </tr>
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Testing Facility
                  </td>
                  <td className="p-4 sm:p-5">Mascot Spincontrol India (ISO 9001:2015)</td>
                  <td className="p-4 sm:p-5">WHO-GMP Compliant Quality Assurance</td>
                  <td className="p-4 sm:p-5">Mascot Spincontrol Spectrophotometry</td>
                </tr>
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Regulatory Code
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-xs text-[#0E221E]">Cos/WZ/2022/91</td>
                  <td className="p-4 sm:p-5 font-mono text-xs text-[#0E221E]">FSSAI Lic: 12124999000251</td>
                  <td className="p-4 sm:p-5 font-mono text-xs text-[#0E221E]">Cos/WZ/2022/98</td>
                </tr>
                <tr className="hover:bg-[#F8FBFA] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#0E221E] bg-[#F8FBFA]/60">
                    Details
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/products/niascobutin"
                      className="text-[#2D8F7A] hover:text-[#1F6959] font-bold inline-flex items-center"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/products/primathion"
                      className="text-[#2D8F7A] hover:text-[#1F6959] font-bold inline-flex items-center"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/products/uvothera"
                      className="text-[#2D8F7A] hover:text-[#1F6959] font-bold inline-flex items-center"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
