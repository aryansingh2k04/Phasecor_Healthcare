"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, FileCheck2, CheckCircle2, Eye, X } from "lucide-react";

export default function QualityCertifications() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const standards = [
    {
      title: "cGMP Certified Production",
      desc: "Manufactured in certified cleanroom facilities adhering strictly to current Good Manufacturing Practices."
    },
    {
      title: "Dermatological Patch Testing",
      desc: "Evaluated under clinical supervision across diverse Fitzpatrick phototypes to guarantee biocompatibility."
    },
    {
      title: "0% Parabens & Hormonal Disruptors",
      desc: "Clean formulations completely free from endocrine-disrupting chemicals, synthetic perfumes, and harsh sulfates."
    },
    {
      title: "Tropical Climate Stability",
      desc: "Formulations undergo high-temperature and humidity chamber testing to ensure active potency over shelf life."
    }
  ];

  return (
    <section id="certifications" className="py-14 sm:py-20 bg-white border-t border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Quality Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-[#e8f2ee] text-[#2D8F7A] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Quality Assurance & Rigor</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Verified Testing Protocols for Uncompromising Safety
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every Phasecor Healthcare batch is subjected to multi-stage analytical chromatography, microbiological evaluation, and independent dermatological safety validation before release.
            </p>

            {/* Standards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {standards.map((std) => (
                <div
                  key={std.title}
                  className="p-5 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md hover:shadow-[0_16px_36px_-6px_rgba(45,143,122,0.5),0_8px_16px_-4px_rgba(45,143,122,0.25)] space-y-2 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <h3 className="text-xs font-bold text-white">{std.title}</h3>
                  </div>
                  <p className="text-xs text-white/90 pl-6 leading-relaxed font-normal">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificate Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setCertModalOpen(true)}
              className="group relative w-full max-w-sm rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
            >
              <div className="relative w-full h-72 rounded-md bg-white border border-white/20 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/certificates/certificate.jpg"
                  alt="Quality Certificate Phasecor"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-md bg-white text-slate-900 text-xs font-bold shadow-md transition-opacity duration-200 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#2D8F7A]" />
                    Click to View Document
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-white">Certificate of Analysis &amp; Compliance</h3>
                  <p className="text-[11px] text-white/80">Official Laboratory Testing Documentation</p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {certModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-md p-4 sm:p-6 shadow-2xl space-y-4"
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

            <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-md overflow-hidden bg-slate-50">
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
    </section>
  );
}
