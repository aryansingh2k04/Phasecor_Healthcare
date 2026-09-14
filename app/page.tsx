import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  FlaskConical,
  Microscope,
  CheckCircle2,
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
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E3ECE9] bg-gradient-to-b from-[#F8FBFA] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#2D8F7A_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Evidence-Based Healthcare Formulations
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E221E] leading-[1.12]">
                Pioneering <span className="text-[#2D8F7A]">Dual-Delivery</span> Nutricosmetics & Clinical Dermatology
              </h1>

              <p className="text-base sm:text-lg text-[#4C655F] leading-relaxed max-w-2xl font-normal">
                Phasecor Healthcare advances patient outcomes through pharmaceutical precision, patented dual-delivery encapsulation, human repeat patch tested topical serums, and certified broad-spectrum photoprotection.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/certifications"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0E221E] bg-white hover:bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/40 transition-all duration-200 shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4 mr-2 text-[#2D8F7A]" />
                  <span>Clinical Evidence</span>
                </Link>
              </div>

              {/* Regulatory Accreditations Strip */}
              <div className="pt-8 border-t border-[#E3ECE9] grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs font-bold text-[#0E221E]">IS 4011:2018</div>
                  <div className="text-[11px] text-[#4C655F]">0.00 Irritation Score</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E221E]">SPF 96.78</div>
                  <div className="text-[11px] text-[#4C655F]">Tested Critical λ 379.4nm</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0E221E]">FSSAI Central</div>
                  <div className="text-[11px] text-[#4C655F]">Lic #12124999000251</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Animated Anime.js Motif) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#EEF8F5]/50 to-white/80 border border-[#E3ECE9] shadow-sm flex items-center justify-center">
                <InteractiveLogoMotif size={320} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLINICAL METRICS SHOWCASE */}
      <section className="py-14 bg-[#0E221E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-4 lg:pt-0 lg:px-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#89CEBF] tracking-tight">
                0.00
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white mt-1">
                Irritancy Index
              </div>
              <p className="text-[11px] text-[#C3DAD4] mt-1">
                Zero erythema or edema in human patch testing (IS 4011:2018)
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#89CEBF] tracking-tight">
                96.78
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white mt-1">
                Tested In-Vitro SPF
              </div>
              <p className="text-[11px] text-[#C3DAD4] mt-1">
                Independent laboratory spectrophotometry (Uvothera)
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#89CEBF] tracking-tight">
                379.4 nm
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white mt-1">
                Critical Wavelength
              </div>
              <p className="text-[11px] text-[#C3DAD4] mt-1">
                Far exceeds the 370 nm broad spectrum UVA-I threshold
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#89CEBF] tracking-tight">
                100%
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white mt-1">
                Batch Traceability
              </div>
              <p className="text-[11px] text-[#C3DAD4] mt-1">
                WHO-GMP & FSSAI certified production protocol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCIENTIFIC PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2D8F7A]">
              Scientific Methodology
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              Four Core Pillars of Formulation Rigor
            </p>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Phasecor Healthcare bridges the gap between biochemical discovery and real-world clinical performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/50 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">
                Dual Delivery Matrix
              </h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Breakthrough physical separation allows lipophilic oils and hydrophilic enteric beadlets to coexist stably in a single capsule without degradation.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/50 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">
                Ethical Clinical Trials
              </h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Every topical formulation undergoes Institutional Ethics Committee approved Human Repeat Insult Patch Testing under Bureau Veritas ISO 9001 audits.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/50 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">
                Targeted Bioavailability
              </h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Liposomal encapsulation shields fragile tripeptides like L-Glutathione from destructive stomach acid, ensuring optimal mucosal uptake.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/50 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">
                Regulatory Governance
              </h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Adherence to central FSSAI licensing and WHO-GMP cleanroom standards, enforcing continuous assay purity and zero heavy metal tolerance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORMULATION PORTFOLIO SHOWCASE */}
      <section className="py-20 bg-[#F8FBFA] border-y border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#2D8F7A]">
                Pharmaceutical Portfolio
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
                Current Formulation Monographs
              </p>
              <p className="text-sm text-[#4C655F] max-w-xl">
                Explore our commercial portfolio designed for clinical dermatology clinics, hospitals, and institutional healthcare supply.
              </p>
            </div>

            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-[#2D8F7A] hover:text-[#1F6959] group"
            >
              <span>View Detailed Specifications</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPOTLIGHT: DUAL DELIVERY TECHNOLOGY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual breakdown diagram */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#F8FBFA] rounded-3xl p-6 sm:p-10 border border-[#E3ECE9] shadow-inner relative overflow-hidden">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/products/primathion_detail.png"
                    alt="Primathion Dual Delivery Beadlet Architecture"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Proprietary Formulation Science
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
                Solving the Intestinal Degradation Dilemma
              </h2>

              <p className="text-sm sm:text-base text-[#4C655F] leading-relaxed">
                Standard oral antioxidant combinations suffer from chemical cross-reactivity and enzymatic degradation in gastric acids. Phasecor’s Dual Delivery Technology bridges hydrophilic and lipophilic bio-actives in a single, high-stability vehicle:
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9]">
                  <CheckCircle2 className="w-5 h-5 text-[#2D8F7A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0E221E] block font-semibold">Lipid-Suspended Phase:</strong>
                    <span className="text-[#4C655F]">Standardized cold-pressed Evening Primrose Oil delivering 10% Gamma-Linolenic Acid (GLA) directly into the intestinal lumen.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9]">
                  <CheckCircle2 className="w-5 h-5 text-[#2D8F7A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0E221E] block font-semibold">Enteric-Coated Beadlet Core:</strong>
                    <span className="text-[#4C655F]">Phospholipid-encapsulated Liposomal Glutathione, N-Acetyl Cysteine, and Ascorbic Acid bypass stomach acid for maximum mucosal bioavailability.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9]">
                  <CheckCircle2 className="w-5 h-5 text-[#2D8F7A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0E221E] block font-semibold">Stability Without Interaction:</strong>
                    <span className="text-[#4C655F]">Eliminates premature oxidation between lipids and crystalline vitamins, maintaining potency through 18 months of shelf stability.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about#dual-delivery"
                  className="inline-flex items-center text-xs font-semibold text-[#2D8F7A] hover:text-[#1F6959]"
                >
                  <span>Learn more about Phasecor Delivery Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL INQUIRY / CLINIC SUPPLY BANNER */}
      <section className="py-16 bg-[#EEF8F5] border-t border-[#D9EFE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D9EFE9] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Institutional & Clinic Supply
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
                Partner with Phasecor Healthcare
              </h3>
              <p className="text-sm text-[#4C655F] leading-relaxed">
                We collaborate with registered dermatology clinics, hospital pharmacies, clinical research investigators, and pharmaceutical distributors across India and international territories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] transition-all text-center shadow-xs"
              >
                <span>Institutional Contact</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/certifications"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0E221E] bg-[#F8FBFA] hover:bg-[#EEF8F5] border border-[#E3ECE9] transition-all text-center"
              >
                <FileText className="w-4 h-4 mr-2 text-[#2D8F7A]" />
                <span>Inspect Study Reports</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
