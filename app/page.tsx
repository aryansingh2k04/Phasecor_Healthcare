import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  FlaskConical,
  Microscope,
  CheckCircle2,
  FileText,
  Layers,
  Activity,
  Sparkles,
} from 'lucide-react';
import InteractiveLogoMotif from '@/components/InteractiveLogoMotif';
import ProductCard from '@/components/ProductCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import DualDeliverySimulator from '@/components/DualDeliverySimulator';
import MolecularExplorer from '@/components/MolecularExplorer';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-[#E3ECE9] bg-gradient-to-b from-[#F8FBFA] via-white to-white">
        {/* Ambient Radial Aura & Clinical Coordinate Grid */}
        <div className="absolute inset-0 clinical-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D8F7A]/8 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              <div className="space-y-3">
                <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                  Evidence-Based Healthcare Formulations
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E221E] leading-[1.14]">
                  Pioneering <span className="text-[#2D8F7A]">Dual-Delivery</span> Nutricosmetics & Clinical Dermatology
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#4C655F] leading-relaxed max-w-2xl font-normal">
                Phasecor Healthcare advances therapeutic efficacy through pharmaceutical precision, patented dual-delivery encapsulation, human-tested topical serums, and certified broad-spectrum photoprotection.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
              <div className="pt-8 border-t border-[#E3ECE9] grid grid-cols-3 gap-6">
                <div className="border-l-2 border-[#2D8F7A] pl-3.5">
                  <div className="text-xs font-bold text-[#0E221E]">IS 4011:2018</div>
                  <div className="text-[11px] text-[#4C655F]">0.00 Irritation Score</div>
                </div>
                <div className="border-l-2 border-[#2D8F7A] pl-3.5">
                  <div className="text-xs font-bold text-[#0E221E]">SPF 96.78</div>
                  <div className="text-[11px] text-[#4C655F]">Tested Critical λ 379.4nm</div>
                </div>
                <div className="border-l-2 border-[#2D8F7A] pl-3.5">
                  <div className="text-xs font-bold text-[#0E221E]">FSSAI Central</div>
                  <div className="text-[11px] text-[#4C655F]">Lic #12124999000251</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Interactive Molecular Engine with Telemetry) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#EEF8F5]/50 via-white to-white border border-[#E3ECE9] shadow-xl backdrop-blur-sm flex flex-col items-center justify-center">
                <InteractiveLogoMotif size={320} showControls={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLINICAL METRICS SHOWCASE WITH ANIMATED COUNTERS */}
      <section className="py-16 bg-[#0E221E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2D8F7A_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-4 lg:pt-0 lg:px-6 text-center space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#89CEBF] tracking-tight">
                <AnimatedCounter value={0.0} decimals={2} duration={1200} />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white">
                Irritancy Index
              </div>
              <p className="text-[11px] text-[#C3DAD4] max-w-[200px] mx-auto">
                Zero erythema or edema in human patch testing (IS 4011:2018)
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#89CEBF] tracking-tight">
                <AnimatedCounter value={96.78} decimals={2} duration={2000} />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white">
                Tested In-Vitro SPF
              </div>
              <p className="text-[11px] text-[#C3DAD4] max-w-[200px] mx-auto">
                Independent laboratory spectrophotometry (Uvothera)
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#89CEBF] tracking-tight">
                <AnimatedCounter value={379.4} decimals={1} suffix=" nm" duration={2200} />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white">
                Critical Wavelength
              </div>
              <p className="text-[11px] text-[#C3DAD4] max-w-[200px] mx-auto">
                Far exceeds the 370 nm broad spectrum UVA-I threshold
              </p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 text-center space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#89CEBF] tracking-tight">
                <AnimatedCounter value={100} decimals={0} suffix="%" duration={1600} />
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-white">
                Batch Traceability
              </div>
              <p className="text-[11px] text-[#C3DAD4] max-w-[200px] mx-auto">
                WHO-GMP & FSSAI certified production protocol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCIENTIFIC PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
              Scientific Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              Four Core Pillars of Formulation Rigor
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Phasecor Healthcare bridges the gap between biochemical discovery and real-world clinical performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="group p-8 rounded-3xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center transition-colors group-hover:bg-[#2D8F7A] group-hover:text-white">
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
            <div className="group p-8 rounded-3xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center transition-colors group-hover:bg-[#2D8F7A] group-hover:text-white">
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
            <div className="group p-8 rounded-3xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center transition-colors group-hover:bg-[#2D8F7A] group-hover:text-white">
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
            <div className="group p-8 rounded-3xl bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center transition-colors group-hover:bg-[#2D8F7A] group-hover:text-white">
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
      <section className="py-24 bg-[#F8FBFA] border-y border-[#E3ECE9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="space-y-3">
              <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Pharmaceutical Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
                Current Formulation Monographs
              </h2>
              <p className="text-sm text-[#4C655F] max-w-xl">
                Explore our commercial portfolio designed for clinical dermatology clinics, hospitals, and institutional healthcare supply.
              </p>
            </div>

            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-[#2D8F7A] hover:text-[#1F6959] group"
            >
              <span>View Full Catalog & Matrix</span>
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

      {/* 5. INTERACTIVE DUAL DELIVERY PHARMACOKINETICS SIMULATOR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
              Proprietary Encapsulation Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              Explore Phasecor Dual Delivery In Action
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Interact with our simulated in-vivo digestion model below to see how lipid jackets and enteric beadlets achieve maximum active molecule bioavailability.
            </p>
          </div>

          <DualDeliverySimulator />
        </div>
      </section>

      {/* 6. INTERACTIVE MOLECULAR EXPLORER */}
      <section className="py-24 bg-[#F8FBFA] border-t border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
              Bio-Active Payload Matrix
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              Explore Active Molecules & Pathways
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Click any active compound below to examine molecular weights, biological targets, and clinical trial indications.
            </p>
          </div>

          <MolecularExplorer />
        </div>
      </section>

      {/* 7. INSTITUTIONAL INQUIRY / CLINIC SUPPLY BANNER */}
      <section className="py-20 bg-white border-t border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#EEF8F5] via-[#F8FBFA] to-white rounded-3xl p-8 sm:p-14 border border-[#D9EFE9] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                Institutional & Clinic Supply
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E221E]">
                Partner with Phasecor Healthcare
              </h3>
              <p className="text-sm text-[#4C655F] leading-relaxed">
                We collaborate with registered dermatology clinics, hospital pharmacies, clinical research investigators, and pharmaceutical distributors across India and international territories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#2D8F7A] hover:bg-[#1F6959] transition-all text-center shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Institutional Contact</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/certifications"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0E221E] bg-white hover:bg-[#F8FBFA] border border-[#E3ECE9] hover:border-[#2D8F7A]/40 transition-all text-center shadow-xs"
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
