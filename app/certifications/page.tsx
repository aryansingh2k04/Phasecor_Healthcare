'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ZoomIn, CheckCircle2, Filter } from 'lucide-react';
import CertificateLightbox from '@/components/CertificateLightbox';
import ProductInquiryModal from '@/components/ProductInquiryModal';
import { CERTIFICATIONS, CertificationItem } from '@/data/certifications';

const CATEGORIES = [
  'All Accreditations',
  'Clinical Efficacy',
  'Quality Management',
  'Regulatory Approval',
  'Safety Testing',
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
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F8FBFA] to-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
            Quality & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E221E] tracking-tight max-w-3xl mx-auto">
            Certifications & Clinical Validation
          </h1>
          <p className="text-base sm:text-lg text-[#4C655F] max-w-2xl mx-auto leading-relaxed">
            Phasecor Healthcare formulations are backed by verifiable clinical evaluations, accredited ISO audits, and central statutory regulatory compliance.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="bg-white border-b border-[#E3ECE9] sticky top-20 z-20 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#789991] mr-2 shrink-0 flex items-center">
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

      {/* 3. VISUAL CERTIFICATE INSPECTION GALLERY */}
      <section className="py-16 bg-[#F8FBFA] border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Official Documents
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
              Audited Laboratory Certificates
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F]">
              Click on any official laboratory document below to inspect audit criteria, study codes, and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCertifications.filter((c) => c.image).map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveLightbox(cert)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#E3ECE9] hover:border-[#2D8F7A] p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#2D8F7A]">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-[#4C655F]">
                    {cert.credentialNumber}
                  </span>
                </div>

                {/* Certificate Preview Frame */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#F8FBFA] border border-[#E3ECE9] flex items-center justify-center p-2 group-hover:bg-[#EEF8F5]/30 transition-colors">
                  <Image
                    src={cert.image!}
                    alt={cert.title}
                    fill
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0E221E]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-white/95 text-[#0E221E] text-xs font-bold shadow-lg flex items-center space-x-2 border border-[#E3ECE9]">
                      <ZoomIn className="w-4 h-4 text-[#2D8F7A]" />
                      <span>Inspect Document</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h3 className="text-lg font-bold text-[#0E221E] group-hover:text-[#2D8F7A] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#2D8F7A]">
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

      {/* 4. COMPREHENSIVE ACCREDITATION REGISTRY */}
      <section id="accreditations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Quality Registry
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
              Complete Quality & Regulatory Standards
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F]">
              Phasecor Healthcare complies with Indian statutory mandates (FSSAI, CDSCO) and international quality benchmarks (ISO 9001, WHO-GMP).
            </p>
          </div>

          <div className="space-y-6">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-4 hover:border-[#2D8F7A]/40 transition-colors shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3ECE9] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2.5">
                      <h3 className="text-lg font-bold text-[#0E221E]">{cert.title}</h3>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white text-[#2D8F7A] font-semibold border border-[#D9EFE9]">
                        {cert.verifiedStatus}
                      </span>
                    </div>
                    <p className="text-xs text-[#4C655F]">
                      <strong className="text-[#0E221E]">{cert.issuer}</strong> &bull; Standard: {cert.dateOrStandard}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-[#789991] block">Credential Code:</span>
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
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveLightbox(cert)}
                      className="inline-flex items-center text-xs font-semibold text-[#2D8F7A] hover:text-[#1F6959]"
                    >
                      <ZoomIn className="w-3.5 h-3.5 mr-1" />
                      <span>Inspect Audit Scan</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL AUDIT REQUEST */}
      <section className="py-16 bg-[#EEF8F5] border-t border-[#D9EFE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-bold text-[#0E221E]">
              Require Batch Test Certificates (COA)?
            </h3>
            <p className="text-xs sm:text-sm text-[#4C655F] max-w-xl">
              Healthcare institutions and pharmacy distributors may request lot-specific Certificates of Analysis and technical monographs.
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
