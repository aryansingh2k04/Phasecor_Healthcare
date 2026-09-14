'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import ProductInquiryModal from '@/components/ProductInquiryModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO HEADER */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F8FBFA] to-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
            Corporate Profile & Standards
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E221E] tracking-tight max-w-3xl mx-auto">
            Science Before Claims. <br className="hidden sm:inline" />
            <span className="text-[#2D8F7A]">Precision in Every Formulation.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#4C655F] max-w-2xl mx-auto leading-relaxed">
            Phasecor Healthcare is dedicated to developing evidence-backed nutricosmetics and dermatological treatments with pharmaceutical-grade stability, zero marketing exaggeration, and independent clinical validation.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE MISSION & PHILOSOPHY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                The Phasecor Standard
              </span>
              <h2 className="text-3xl font-bold text-[#0E221E] tracking-tight">
                Reframing Healthcare Through Bioavailability & Clinical Transparency
              </h2>
              <p className="text-sm sm:text-base text-[#4C655F] leading-relaxed">
                The healthcare and nutricosmetic marketplace is often crowded with unsubstantiated claims and unstable formulations that degrade before reaching target cells. Phasecor Healthcare was founded to solve this structural flaw.
              </p>
              <p className="text-sm sm:text-base text-[#4C655F] leading-relaxed">
                We design formulations from the molecule up. Whether overcoming the enzymatic breakdown of oral glutathione in gastric acid or engineering multi-active serums that deliver simultaneous tyrosinase and plasmin inhibition without skin irritation, every Phasecor product is governed by clinical necessity and rigorous analytical testing.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E3ECE9]">
                <div className="p-4 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9]">
                  <h4 className="font-bold text-[#0E221E] text-base">Human Tested</h4>
                  <p className="text-xs text-[#4C655F] mt-1">
                    100% evaluated under IEC-approved human closed patch protocols (IS 4011:2018).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9]">
                  <h4 className="font-bold text-[#0E221E] text-base">Zero Deception</h4>
                  <p className="text-xs text-[#4C655F] mt-1">
                    Full disclosure of active percentages, critical wavelengths, and regulatory licenses.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Brand Image */}
            <div className="relative rounded-3xl overflow-hidden border border-[#E3ECE9] shadow-lg bg-[#F8FBFA] p-8 flex flex-col items-center justify-center min-h-[380px]">
              <div className="relative h-24 w-64 mb-6">
                <Image
                  src="/images/brand/logo-dark-transparent.png"
                  alt="Phasecor Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full bg-white p-6 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#1F6959]">
                  <ShieldCheck className="w-4 h-4 text-[#2D8F7A]" />
                  <span>Institutional Credibility Index</span>
                </div>
                <div className="space-y-2 text-xs text-[#4C655F]">
                  <div className="flex justify-between border-b border-[#E3ECE9] pb-1.5">
                    <span>Clinical Research Partner:</span>
                    <strong className="text-[#0E221E]">Mascot Spincontrol India</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#E3ECE9] pb-1.5">
                    <span>Quality Audit Standard:</span>
                    <strong className="text-[#0E221E]">ISO 9001:2015 Bureau Veritas</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#E3ECE9] pb-1.5">
                    <span>Central Regulatory Lic:</span>
                    <strong className="text-[#0E221E]">FSSAI 12124999000251</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Manufacturing Facility:</span>
                    <strong className="text-[#0E221E]">WHO-GMP Schedule M Certified</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SCIENTIFIC SPOTLIGHT: DUAL DELIVERY TECHNOLOGY */}
      <section id="dual-delivery" className="py-20 bg-[#F8FBFA] border-y border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Proprietary Encapsulation System
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              Phasecor Dual Delivery Technology
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              How our patented multi-compartment delivery architecture overcomes the limitations of traditional oral supplementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">Phase Separation</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Lipophilic fatty acids (such as Evening Primrose Oil) and hydrophilic antioxidant crystals (Glutathione, Vitamin C) traditionally degrade one another if mixed. Dual Delivery physically suspends liquid oils around enteric micro-pellets, preventing premature chemical interaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">Targeted Enteric Release</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Oral glutathione is notoriously degraded by gastric peptidase and hydrochloric acid. Phasecor enteric polymers survive gastric transit for &gt;90 minutes, releasing active liposomes specifically within the alkaline pH (6.5–7.2) of the small intestine for optimal absorption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">Bio-Recycling Synergy</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Reduced L-Glutathione works alongside N-Acetyl Cysteine (precursor supply) and Vitamin C (redox recycling agent). This multi-compound cascade keeps glutathione in its active GSH state rather than converting rapidly to inactive oxidized GSSG.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL QUALITY ASSURANCE PIPELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Quality Assurance Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E221E] tracking-tight">
              From Active Molecule to Clinical Release
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Every Phasecor production batch adheres to an unyielding 5-stage pharmaceutical verification pathway.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0E221E]">
                    Pharmacopeial Raw Material Quarantine & Assay
                  </h4>
                  <p className="text-xs text-[#4C655F] mt-0.5">
                    High-Performance Liquid Chromatography (HPLC) verification of active purity (minimum 98%+ benchmark) and ICP-MS clearance for heavy metals (Lead, Arsenic, Mercury).
                  </p>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-white text-[#1F6959] font-medium border border-[#E3ECE9] shrink-0">
                Stage 1 Assay
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0E221E]">
                    Cleanroom Compounding & Micro-Dispersion
                  </h4>
                  <p className="text-xs text-[#4C655F] mt-0.5">
                    Executed within Class 100,000 cleanroom environments adhering strictly to WHO-GMP and Schedule M technical protocols, maintaining positive air pressure and temperature moderation.
                  </p>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-white text-[#1F6959] font-medium border border-[#E3ECE9] shrink-0">
                WHO-GMP Standard
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0E221E]">
                    Independent Clinical Safety Trials (Mascot Spincontrol)
                  </h4>
                  <p className="text-xs text-[#4C655F] mt-0.5">
                    Human Repeat Insult Patch Testing under Bureau Veritas ISO 9001:2015 accredited laboratory oversight (IS 4011:2018), evaluating dermal response for 0.00 zero-irritancy scores.
                  </p>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-white text-[#1F6959] font-medium border border-[#E3ECE9] shrink-0">
                IS 4011:2018
              </span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0E221E]">
                    Accelerated Stability & Dissolution Modeling
                  </h4>
                  <p className="text-xs text-[#4C655F] mt-0.5">
                    Finished dosage forms endure climatic chamber challenge (40°C / 75% RH) to model shelf life and confirm active molecule retention through 18–24 months.
                  </p>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-white text-[#1F6959] font-medium border border-[#E3ECE9] shrink-0">
                ICH Stability
              </span>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0E221E]">
                    Statutory Batch Release & Certificate of Analysis (COA)
                  </h4>
                  <p className="text-xs text-[#4C655F] mt-0.5">
                    Authorized release under Central FSSAI License 12124999000251 and Cosmetic State Licensing. Complete analytical dossier and COA issued for every finished production lot.
                  </p>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-white text-[#1F6959] font-medium border border-[#E3ECE9] shrink-0">
                COA Batch Release
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL ENGAGEMENT */}
      <section className="py-16 bg-[#EEF8F5] border-t border-[#D9EFE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
            Request Institutional Dossiers & Technical Data
          </h3>
          <p className="text-sm text-[#4C655F] max-w-xl mx-auto">
            Dermatologists, hospital formulary committees, and institutional distributors can request clinical testing monographs, batch COAs, and trial data sheets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-[#2D8F7A] hover:bg-[#1F6959] text-white text-sm font-semibold transition-all shadow-xs"
            >
              Request Technical Dossier
            </button>
            <Link
              href="/certifications"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#F8FBFA] text-[#0E221E] border border-[#E3ECE9] text-sm font-semibold transition-all"
            >
              View Accredited Reports
            </Link>
          </div>
        </div>
      </section>

      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
