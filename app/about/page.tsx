'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Award, FlaskConical, ArrowRight } from 'lucide-react';
import ProductInquiryModal from '@/components/ProductInquiryModal';
import AnimatedCounter from '@/components/AnimatedCounter';
import DualDeliverySimulator from '@/components/DualDeliverySimulator';
import InteractivePipelineTracker from '@/components/InteractivePipelineTracker';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO HEADER */}
      <section className="relative pt-20 pb-20 bg-gradient-to-b from-[#F8FBFA] to-white border-b border-[#E3ECE9] overflow-hidden clinical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest uppercase text-[#2D8F7A] bg-[#EEF8F5] px-3.5 py-1.5 rounded-full border border-[#D9EFE9]">
            <span>Corporate Monograph & Analytical Standards</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E221E] tracking-tight max-w-4xl mx-auto leading-tight">
            Science Before Claims. <br className="hidden sm:inline" />
            <span className="text-gradient">Precision in Every Formulation.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4C655F] max-w-3xl mx-auto leading-relaxed">
            Phasecor Healthcare is dedicated to developing evidence-backed nutricosmetics and dermatological treatments with pharmaceutical-grade stability, zero marketing exaggeration, and independent clinical validation.
          </p>

          {/* Precision Key Performance Metrics */}
          <div className="pt-8 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs relative">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">Assay Purity</span>
              <div className="text-2xl font-extrabold text-[#0E221E] font-mono mt-1">
                <AnimatedCounter value={98.5} decimals={1} suffix="%" />
              </div>
              <span className="text-[10px] text-[#2D8F7A] font-medium block mt-0.5">HPLC USP/IP Benchmark</span>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs relative">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">Dermal Irritancy</span>
              <div className="text-2xl font-extrabold text-[#2D8F7A] font-mono mt-1">
                <AnimatedCounter value={0.0} decimals={2} />
              </div>
              <span className="text-[10px] text-[#4C655F] font-medium block mt-0.5">IS 4011:2018 Zero Irritation</span>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs relative">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">ICH Stability</span>
              <div className="text-2xl font-extrabold text-[#0E221E] font-mono mt-1">
                <AnimatedCounter value={24} suffix=" Mo." />
              </div>
              <span className="text-[10px] text-[#2D8F7A] font-medium block mt-0.5">40°C / 75% RH Tested</span>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs relative">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">Ethics Approval</span>
              <div className="text-2xl font-extrabold text-[#0E221E] font-mono mt-1">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <span className="text-[10px] text-[#4C655F] font-medium block mt-0.5">Independent Ethics Cleared</span>
            </div>
          </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A] font-mono">
              Proprietary Encapsulation System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E221E] tracking-tight">
              Phasecor Dual Delivery Technology
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              How our multi-compartment delivery architecture overcomes the enzymatic limitations of traditional oral glutathione supplementation.
            </p>
          </div>

          {/* Interactive Pharmacokinetics Simulator */}
          <DualDeliverySimulator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="bg-white p-8 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold text-lg font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">Phase Separation</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Lipophilic fatty acids (such as Evening Primrose Oil) and hydrophilic antioxidant crystals (Glutathione, Vitamin C) traditionally degrade one another if mixed. Dual Delivery physically suspends liquid oils around enteric micro-pellets, preventing premature chemical interaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold text-lg font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-[#0E221E]">Targeted Enteric Release</h3>
              <p className="text-xs text-[#4C655F] leading-relaxed">
                Oral glutathione is notoriously degraded by gastric peptidase and hydrochloric acid. Phasecor enteric polymers survive gastric transit for &gt;90 minutes, releasing active liposomes specifically within the alkaline pH (6.5–7.2) of the small intestine for optimal absorption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E3ECE9] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center font-bold text-lg font-mono">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A] font-mono">
              Quality Assurance Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E221E] tracking-tight">
              From Active Molecule to Statutory Batch Release
            </h2>
            <p className="text-sm sm:text-base text-[#4C655F]">
              Every Phasecor production batch adheres to an unyielding 5-stage analytical pathway. Click below to inspect assay benchmarks, cleanroom standards, and release criteria.
            </p>
          </div>

          {/* Interactive Pipeline Component */}
          <InteractivePipelineTracker />
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
