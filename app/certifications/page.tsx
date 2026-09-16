"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  Eye,
  X,
  Sparkles,
  FlaskConical,
  Award,
  Microscope,
  FileText,
  ArrowRight
} from "lucide-react";

export default function CertificationsPage() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const certifications = [
    {
      title: "cGMP Certified Production",
      agency: "Good Manufacturing Practices",
      desc: "All Phasecor formulations are compounded and packaged in cGMP certified cleanroom environments with strictly monitored air filtration, particulate control, and sterile handling.",
      badge: "ISO CLEANROOM",
    },
    {
      title: "ISO 9001:2015 Quality Standards",
      agency: "International Organization for Standardization",
      desc: "Comprehensive quality management system protocols covering raw ingredient verification, batch manufacturing records, traceability, and post-market pharmacovigilance.",
      badge: "QUALITY ASSURED",
    },
    {
      title: "Dermatological Patch Tested",
      agency: "Independent Clinical Dermatologists",
      desc: "Evaluated through repetitive patch testing under clinical supervision across Fitzpatrick phototypes I through VI to confirm biocompatibility and non-irritancy.",
      badge: "CLINICALLY VERIFIED",
    },
    {
      title: "0% Parabens & Hormonal Disruptors",
      agency: "Toxicological Safety Screening",
      desc: "Formulations are rigorously assayed to guarantee complete freedom from parabens, phthalates, synthetic musk fragrances, and known endocrine-disrupting agents.",
      badge: "CLEAN CLINICAL",
    },
    {
      title: "Tropical Climate Stability Chamber Tested",
      agency: "ICH Q1A Accelerated Stability Protocols",
      desc: "Batches are subjected to 40°C / 75% relative humidity testing over extended periods to ensure active ingredient molecular potency remains stable throughout the product shelf life.",
      badge: "ICH STABILITY",
    },
    {
      title: "100% Cruelty-Free & Ethical Testing",
      agency: "Ethical Research Guidelines",
      desc: "Zero testing on animals at any stage of active development, formulation, or finished batch evaluation, adhering to global ethical cosmetics and therapeutics directives.",
      badge: "ETHICAL FORMULATION",
    },
  ];

  const qualityStages = [
    {
      step: "01",
      title: "Active Compound Assay",
      desc: "Raw ingredients undergo High-Performance Liquid Chromatography (HPLC) to verify active purity, molecular weight, and absence of heavy metals.",
      icon: FlaskConical,
    },
    {
      step: "02",
      title: "Cleanroom Compounding",
      desc: "Formulations are homogenized under laminar flow hoods in cleanrooms meeting ISO-classified environmental standards.",
      icon: ShieldCheck,
    },
    {
      step: "03",
      title: "Microbiological Screening",
      desc: "Every batch is incubated for aerobic microbial count, yeast, mold, and pathogenic organisms prior to packaging.",
      icon: Microscope,
    },
    {
      step: "04",
      title: "Real-Time Stability Validation",
      desc: "Samples from every commercial run are archived in climate-controlled stability chambers for continuous long-term monitoring.",
      icon: Award,
    },
    {
      step: "05",
      title: "Certificate of Analysis Release",
      desc: "An individualized batch COA is signed off by certified quality control officers before distribution to clinics and pharmacies.",
      icon: FileText,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="relative bg-[#071714] text-white py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Certifications &amp; <br />
              <span className="bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent">
                Clinical Rigor
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              Every Phasecor Healthcare formulation undergoes analytical chromatography, independent clinical dermatology patch testing, and certified cGMP quality control prior to clinical release.
            </p>
          </div>
        </div>
      </section>

      {/* Main Certification Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Official Certificate Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setCertModalOpen(true)}
                className="group relative w-full max-w-md rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
              >
                <div className="relative w-full h-80 sm:h-96 rounded-md bg-white border border-white/20 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/certificates/certificate.jpg"
                    alt="Phasecor Quality Certification"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 px-5 py-2.5 rounded-md bg-white text-slate-900 text-xs font-bold shadow-lg transition-opacity duration-200 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#2D8F7A]" />
                      Click to View Document
                    </span>
                  </div>
                </div>

                <div className="pt-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Certificate of Analysis &amp; Compliance</h3>
                    <p className="text-xs text-white/80">Official Laboratory Testing Documentation</p>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white tracking-wider">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
                Uncompromising Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Verified Testing Protocols for Guaranteed Biocompatibility
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Phasecor Healthcare bridges pharmaceutical diligence with dermatological cosmetics. We test every commercial batch beyond statutory regulatory baselines to ensure zero degradation of delicate actives, stable pH buffers, and complete microbiological safety.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Third-Party Laboratory Verification
                    </h4>
                    <p className="text-xs text-white/90 leading-relaxed mt-1 font-normal">
                      Independent analytical laboratories verify our active assay percentages (e.g. 5% Niacinamide, 2% Alpha Arbutin, 1.5% Tranexamic Acid) to prevent batch-to-batch variability.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Photostability &amp; Broad-Spectrum IR Shielding
                    </h4>
                    <p className="text-xs text-white/90 leading-relaxed mt-1 font-normal">
                      Sun protection products undergo rigorous in-vitro and in-vivo spectrophotometry to ensure sustained SPF 60+ and PA++++ protection against UVA, UVB, and High Energy Visible (HEV) screen light.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Certifications */}
      <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Compliance Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recognized Manufacturing &amp; Safety Accreditations
            </h2>
            <p className="text-sm text-slate-600">
              Each formulation complies with Indian and international medical cosmetology guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white tracking-wider uppercase">
                      {cert.badge}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-white/80">
                    {cert.agency}
                  </p>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    {cert.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/20 text-[11px] font-medium text-white/85 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Compliant &amp; Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Quality Assurance Lifecycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              The Quality Assurance Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5-Stage Batch Testing Lifecycle
            </h2>
            <p className="text-sm text-slate-600">
              How Phasecor guarantees zero-defect medical formulation safety from raw chemical active to patient bottle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {qualityStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="p-6 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-white/40">{stage.step}</span>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{stage.title}</h3>
                    <p className="text-xs text-white/90 leading-relaxed font-normal">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Lightbox Modal */}
      {certModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-md p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#2D8F7A]" />
                <h4 className="text-sm font-bold text-slate-900">Official Quality Certification</h4>
              </div>
              <button
                type="button"
                onClick={() => setCertModalOpen(false)}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[70vh] rounded-md overflow-hidden bg-slate-50">
              <Image
                src="/images/certificates/certificate.jpg"
                alt="Quality Certification Detail"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
