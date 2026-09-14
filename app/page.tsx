import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  FlaskConical,
  Microscope,
  FileText,
  Layers,
} from 'lucide-react';
import InteractiveLogoMotif from '@/components/InteractiveLogoMotif';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E3ECE9] bg-gradient-to-b from-[#F8FBFA] via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                  Pharmaceutical & Nutricosmetic Sciences
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E221E] leading-[1.14]">
                  Advanced Dermatology & <span className="text-[#2D8F7A]">Specialized Nutricosmetics</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#4C655F] leading-relaxed max-w-2xl font-normal">
                Phasecor Healthcare develops clinically substantiated topical treatments and dual-action nutricosmetics engineered for physiological stability, patient safety, and genuine therapeutic efficacy.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/certifications"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0E221E] bg-white hover:bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/40 transition-all duration-200"
                >
                  <ShieldCheck className="w-4 h-4 mr-2 text-[#2D8F7A]" />
                  <span>Compliance & Quality</span>
                </Link>
              </div>

              {/* Credibility Badges */}
              <div className="pt-6 border-t border-[#E3ECE9] grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-xs font-bold text-[#0E221E]">Dermatologically Tested</div>
                  <div className="text-[11px] text-[#4C655F]">Human Patch Tested (IS 4011)</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E221E]">ISO 9001:2015</div>
                  <div className="text-[11px] text-[#4C655F]">Bureau Veritas Certified</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E221E]">Central FSSAI</div>
                  <div className="text-[11px] text-[#4C655F]">Lic #12124999000251</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#F8FBFA] border border-[#E3ECE9] shadow-sm flex flex-col items-center justify-center">
                <InteractiveLogoMotif size={300} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE FORMULATION PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              Evidence-Based Formulation Principles
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Every Phasecor product is created from clinical necessity, pharmaceutical-grade ingredients, and validated delivery systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0E221E]">Dual Delivery Technology</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Physical encapsulation of lipophilic oils and enteric micro-pellets within a single capsule ensures complete ingredient stability and targeted intestinal release.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0E221E]">Clinical Safety Testing</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                All topical formulations are tested on human volunteers under closed patch testing protocols (IS 4011:2018), achieving certified zero-irritancy ratings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0E221E]">High-Purity Actives</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Standardized pharmaceutical-grade active compounds selected for synergistic action, bio-availability, and sustained stability across shelf life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0E221E]">Compliance & Transparency</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Complete regulatory adherence with Central FSSAI licensing and WHO-GMP manufacturing partner facilities, with lot-specific certificates of analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG SHOWCASE */}
      <section className="py-20 bg-[#F8FBFA] border-y border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Product Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
                Our Formulations
              </h2>
              <p className="text-xs sm:text-sm text-[#4C655F] max-w-xl">
                Dermatologically tested skincare and specialized oral nutricosmetics available through partner clinics and pharmacies.
              </p>
            </div>

            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#2D8F7A] hover:text-[#1F6959]"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL INQUIRY / CORPORATE BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EEF8F5] rounded-3xl p-8 sm:p-12 border border-[#D9EFE9] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Healthcare Professionals & Distribution
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
                Collaborate with Phasecor Healthcare
              </h3>
              <p className="text-xs sm:text-sm text-[#4C655F] leading-relaxed">
                We work directly with dermatologists, aesthetic clinics, hospitals, and pharmaceutical distribution networks. Request clinical trial monographs, product samples, or institutional supply details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#2D8F7A] hover:bg-[#1F6959] transition-colors text-center shadow-xs"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
              <Link
                href="/certifications"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#0E221E] bg-white hover:bg-[#F8FBFA] border border-[#E3ECE9] transition-colors text-center"
              >
                <FileText className="w-3.5 h-3.5 mr-2 text-[#2D8F7A]" />
                <span>Quality & Compliance</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
