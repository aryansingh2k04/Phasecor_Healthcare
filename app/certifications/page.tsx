'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ZoomIn, CheckCircle2, ShieldCheck, Filter, FileText, ExternalLink } from 'lucide-react';
import CertificateLightbox from '@/components/CertificateLightbox';
import ProductInquiryModal from '@/components/ProductInquiryModal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { CERTIFICATIONS, CertificationItem } from '@/data/certifications';

const CATEGORIES = [
  'All Accreditations',
  'Clinical Safety & Dermatological Trials',
  'Quality Management Systems',
  'Statutory & Manufacturing Licenses',
] as const;

export default function CertificationsPage() {
  const [activeLightbox, setActiveLightbox] = useState<CertificationItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Accreditations');

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === 'All Accreditations') {
      return CERTIFICATIONS;
    }
    return CERTIFICATIONS.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO HEADER */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-[#F8FBFA] to-white border-b border-[#E3ECE9] clinical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest uppercase text-[#2D8F7A] bg-[#EEF8F5] px-3.5 py-1.5 rounded-full border border-[#D9EFE9]">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            <span>Independent Verification & Compliance Registry</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E221E] tracking-tight max-w-4xl mx-auto leading-tight">
            Clinical Proof & <br className="hidden sm:inline" />
            <span className="text-gradient">Regulatory Accreditations</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4C655F] max-w-2xl mx-auto leading-relaxed">
            Phasecor Healthcare holds verifiable accreditations spanning institutional ethics committee human patch testing, Bureau Veritas ISO audits, and central statutory licensing.
          </p>

          {/* Precision Metrics HUD */}
          <div className="pt-6 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">Patch Irritancy</span>
              <div className="text-2xl font-extrabold text-[#2D8F7A] font-mono mt-1">
                <AnimatedCounter value={0.0} decimals={2} />
              </div>
              <span className="text-[10px] text-[#4C655F] block mt-0.5">IS 4011:2018 Zero Reaction</span>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">ISO Audit</span>
              <div className="text-2xl font-extrabold text-[#0E221E] font-mono mt-1">
                9001:2015
              </div>
              <span className="text-[10px] text-[#2D8F7A] block mt-0.5">Bureau Veritas Certified</span>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">Ethics Clearance</span>
              <div className="text-2xl font-extrabold text-[#0E221E] font-mono mt-1">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <span className="text-[10px] text-[#4C655F] block mt-0.5">IEC Protocol Approved</span>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-[#E3ECE9] shadow-xs">
              <span className="text-[10px] text-[#789991] font-mono uppercase tracking-wider block">Central FSSAI</span>
              <div className="text-2xl font-extrabold text-[#0E221E] font-mono mt-1">
                Active
              </div>
              <span className="text-[10px] text-[#2D8F7A] block mt-0.5">Lic 12124999000251</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="bg-white border-b border-[#E3ECE9] sticky top-20 z-20 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#789991] mr-2 shrink-0 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Filter:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#2D8F7A] text-white shadow-xs font-semibold'
                      : 'bg-[#F8FBFA] hover:bg-[#EEF8F5] text-[#4C655F] border border-[#E3ECE9]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. VISUAL CERTIFICATE INSPECTION GALLERY */}
      <section className="py-16 bg-[#F8FBFA] border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A] font-mono">
              Primary Document Registry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E221E]">
              Audited Laboratory Certificates
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F]">
              Click on any official laboratory document below to inspect audit seals, study protocols, and certification criteria in high definition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCertifications.filter((c) => c.image).map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveLightbox(cert)}
                className="group cursor-pointer bg-white rounded-3xl border border-[#E3ECE9] hover:border-[#2D8F7A] p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col space-y-4 relative"
              >
                {/* Precision Crosshair in corner */}
                <div className="absolute top-3 right-3 text-[#2D8F7A]/30 group-hover:text-[#2D8F7A] text-xs font-mono transition-colors">
                  +
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase font-mono font-bold tracking-wider text-[#2D8F7A]">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-[#4C655F]">
                    {cert.credentialNumber}
                  </span>
                </div>

                {/* Certificate Preview Frame */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#F8FBFA] border border-[#E3ECE9] flex items-center justify-center p-2 group-hover:bg-[#EEF8F5]/30 transition-colors">
                  <Image
                    src={cert.image!}
                    alt={cert.title}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0E221E]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-white/95 text-[#0E221E] text-xs font-bold shadow-lg flex items-center space-x-2 border border-[#E3ECE9]">
                      <ZoomIn className="w-4 h-4 text-[#2D8F7A]" />
                      <span>Inspect Official Audit Scan</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h3 className="text-lg font-bold text-[#0E221E] group-hover:text-[#2D8F7A] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#2D8F7A] font-mono">
                    Issuer: {cert.issuer} &bull; {cert.dateOrStandard}
                  </p>
                  <p className="text-xs text-[#4C655F] leading-relaxed line-clamp-2">
                    {cert.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE ACCREDITATION REGISTRY */}
      <section id="accreditations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Regulatory Registry
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
              Complete Quality & Clinical Accreditations
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F]">
              Phasecor Healthcare complies with both Indian statutory mandates (FSSAI, CDSCO) and international quality benchmarks (ISO 9001, WHO-GMP).
            </p>
          </div>

          <div className="space-y-6">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-4 hover:border-[#2D8F7A]/50 transition-all relative group shadow-xs hover:shadow-md"
              >
                {/* Precision Corner Mark */}
                <div className="absolute top-4 right-4 text-[#2D8F7A]/25 group-hover:text-[#2D8F7A] text-xs font-mono transition-colors">
                  +
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3ECE9] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2.5">
                      <h3 className="text-lg font-bold text-[#0E221E]">{cert.title}</h3>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#2D8F7A] font-semibold font-mono border border-[#D9EFE9]">
                        {cert.verifiedStatus}
                      </span>
                    </div>
                    <p className="text-xs text-[#4C655F]">
                      <strong className="text-[#0E221E]">{cert.issuer}</strong> &bull; Standard: {cert.dateOrStandard}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-[#789991] font-mono block">Credential / Protocol Code:</span>
                    <span className="font-mono text-xs text-[#0E221E] font-bold">
                      {cert.credentialNumber}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4C655F] leading-relaxed">
                  {cert.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {cert.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#0E221E] bg-white p-2.5 rounded-xl border border-[#E3ECE9]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#2D8F7A] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {cert.image && (
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setActiveLightbox(cert)}
                      className="inline-flex items-center text-xs font-bold text-[#2D8F7A] hover:text-[#1F6959] transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5 mr-1.5" />
                      <span>Inspect Official Audit Certificate</span>
                    </button>
                    <span className="text-[11px] font-mono text-[#789991]">
                      Archived in Registry
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL AUDIT REQUEST */}
      <section className="py-16 bg-[#EEF8F5] border-t border-[#D9EFE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-bold text-[#0E221E]">
              Require Certified Batch Test Certificates (COA)?
            </h3>
            <p className="text-xs sm:text-sm text-[#4C655F] max-w-xl">
              Healthcare institutions and pharmacy distributors may request lot-specific Certificates of Analysis and raw chromatography data.
            </p>
          </div>
          <button
            onClick={() => setInquiryModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#2D8F7A] hover:bg-[#1F6959] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs shrink-0"
          >
            Request Batch Dossier
          </button>
        </div>
      </section>

      {/* Lightbox for certificates */}
      {activeLightbox && (
        <CertificateLightbox
          isOpen={!!activeLightbox}
          onClose={() => setActiveLightbox(null)}
          imageSrc={activeLightbox.image!}
          title={activeLightbox.title}
          issuer={activeLightbox.issuer}
          credentialNumber={activeLightbox.credentialNumber}
          summary={activeLightbox.summary}
        />
      )}

      {/* Inquiry Modal */}
      <ProductInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}
