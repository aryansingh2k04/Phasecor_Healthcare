'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ShieldCheck,
  FlaskConical,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { Product } from '@/data/products';
import ProductInquiryModal from '@/components/ProductInquiryModal';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<'main' | 'detail'>('main');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. BREADCRUMBS & TOP STRIP */}
      <section className="bg-[#F8FBFA] border-b border-[#E3ECE9] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <nav className="flex items-center space-x-2 text-[#4C655F]">
            <Link href="/products" className="hover:text-[#0E221E] flex items-center">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              <span>Back to Formulations</span>
            </Link>
            <span>/</span>
            <span className="text-[#2D8F7A] font-semibold">{product.name}</span>
          </nav>
          <div className="hidden sm:flex items-center space-x-2 text-[11px] text-[#789991]">
            <span>Regulatory Code:</span>
            <span className="font-mono text-[#0E221E] font-medium">
              {product.specifications.regulatoryCode}
            </span>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT HERO & MONOGRAPH SUMMARY */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Image Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl border border-[#E3ECE9] bg-[#F8FBFA] p-6 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src={selectedImage === 'main' ? product.images.main : product.images.detail}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 transition-all duration-300"
                  priority
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-md text-[11px] font-semibold text-[#1F6959] border border-[#E3ECE9]">
                  {product.specifications.netContent}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedImage('main')}
                  className={`relative h-20 w-24 rounded-xl border overflow-hidden transition-all ${
                    selectedImage === 'main'
                      ? 'border-[#2D8F7A] ring-2 ring-[#2D8F7A]/30'
                      : 'border-[#E3ECE9] opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={product.images.main}
                    alt="Packaging View"
                    fill
                    sizes="96px"
                    className="object-contain p-1.5 bg-[#F8FBFA]"
                  />
                </button>

                <button
                  onClick={() => setSelectedImage('detail')}
                  className={`relative h-20 w-24 rounded-xl border overflow-hidden transition-all ${
                    selectedImage === 'detail'
                      ? 'border-[#2D8F7A] ring-2 ring-[#2D8F7A]/30'
                      : 'border-[#E3ECE9] opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={product.images.detail}
                    alt="Monograph & Detail View"
                    fill
                    sizes="96px"
                    className="object-contain p-1.5 bg-[#F8FBFA]"
                  />
                </button>

                <div className="flex-1 flex items-center px-4 text-xs text-[#789991] bg-[#F8FBFA] rounded-xl border border-[#E3ECE9]">
                  <span>{product.images.caption}</span>
                </div>
              </div>
            </div>

            {/* Monograph Overview Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
                  {product.category}
                </p>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E221E] tracking-tight">
                  {product.name}
                </h1>
                <p className="text-base font-semibold text-[#2D8F7A]">
                  {product.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#4C655F] leading-relaxed pt-2">
                  {product.description}
                </p>
              </div>

              {/* Clinical Standard Row */}
              <div className="py-3 px-4 rounded-lg bg-[#F8FBFA] border border-[#E3ECE9] flex items-center space-x-2 text-xs">
                <span className="font-semibold text-[#0E221E]">{product.heroBadge}</span>
                <span className="text-[#4C655F]">&bull;</span>
                <span className="text-[#4C655F]">Mascot Spincontrol Protocols</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#2D8F7A] hover:bg-[#1F6959] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Request Clinical Dossier & Samples
                </button>
                <Link
                  href="/certifications"
                  className="px-5 py-3.5 rounded-xl bg-[#F8FBFA] hover:bg-[#EEF8F5] text-[#0E221E] text-xs font-semibold uppercase tracking-wider border border-[#E3ECE9] transition-colors flex items-center"
                >
                  <ShieldCheck className="w-4 h-4 mr-2 text-[#2D8F7A]" />
                  View Lab Reports
                </Link>
              </div>

              {/* Quick Specs Strip */}
              <div className="pt-4 border-t border-[#E3ECE9] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#789991] block">Dosage Form:</span>
                  <span className="font-semibold text-[#0E221E]">
                    {product.specifications.dosageForm}
                  </span>
                </div>
                <div>
                  <span className="text-[#789991] block">Recommended Administration:</span>
                  <span className="font-semibold text-[#0E221E]">
                    {product.specifications.recommendedUse}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CLINICAL RATIONALE & INDICATIONS */}
      <section className="py-16 bg-[#F8FBFA] border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                Pharmacological Rationale
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
                Biochemical Mechanism of Action
              </h2>
              <p className="text-sm text-[#4C655F] leading-relaxed">
                {product.clinicalRationale}
              </p>

              <div className="pt-4 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E221E]">
                  Formulation Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-xs text-[#0E221E] bg-white p-2.5 rounded-lg border border-[#E3ECE9]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2D8F7A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3ECE9] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                Therapeutic Indications
              </span>
              <h3 className="text-xl font-bold text-[#0E221E]">Clinical Applications</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4C655F]">
                {product.indications.map((ind, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8F7A] mt-2 shrink-0"></span>
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ACTIVE MOLECULAR INGREDIENTS BREAKDOWN */}
      <section className="py-16 bg-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Active Molecule Payload
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
              Key Active Ingredients & Biological Function
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F] max-w-2xl">
              Each compound is selected for pharmacological synergy, standardized purity, and proven cutaneous or systemic absorption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.keyActives.map((active, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[#0E221E]">{active.name}</h4>
                    <FlaskConical className="w-4 h-4 text-[#2D8F7A]" />
                  </div>
                  <span className="text-xs font-semibold text-[#2D8F7A] block">
                    {active.role}
                  </span>
                  <p className="text-xs text-[#4C655F] leading-relaxed pt-1">
                    {active.mechanism}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLINICAL VALIDATION & LABORATORY DATA */}
      <section className="py-16 bg-[#EEF8F5]/60 border-b border-[#D9EFE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                Laboratory Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
                Clinical Evaluation & Analytical Metrics
              </h2>
              <p className="text-xs sm:text-sm text-[#4C655F] max-w-xl">
                {product.clinicalData.resultSummary}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-xs font-medium text-[#1F6959] bg-white px-3.5 py-1.5 rounded-lg border border-[#D9EFE9]">
                {product.clinicalData.laboratory}
              </span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {product.clinicalData.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#D9EFE9] shadow-xs text-center space-y-2"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2D8F7A]">
                  {metric.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E221E]">
                  {metric.label}
                </div>
                <p className="text-xs text-[#4C655F]">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPECIFICATIONS & ADMINISTRATION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Administration Protocol */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                Protocol Guidelines
              </span>
              <h3 className="text-2xl font-bold text-[#0E221E]">
                Dosage & Administration Protocol
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-[#4C655F]">
                {product.usageInstructions.map((inst, i) => (
                  <li key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9]">
                    <span className="w-5 h-5 rounded-full bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Specifications Box */}
            <div className="bg-[#F8FBFA] p-8 rounded-2xl border border-[#E3ECE9] space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                Technical Monograph
              </span>
              <h3 className="text-2xl font-bold text-[#0E221E]">
                Pharmaceutical Specifications
              </h3>
              
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-2 border-b border-[#E3ECE9]">
                  <span className="text-[#789991]">Dosage Form:</span>
                  <strong className="text-[#0E221E]">{product.specifications.dosageForm}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E3ECE9]">
                  <span className="text-[#789991]">Net Content:</span>
                  <strong className="text-[#0E221E]">{product.specifications.netContent}</strong>
                </div>
                {product.specifications.phRange && (
                  <div className="flex justify-between py-2 border-b border-[#E3ECE9]">
                    <span className="text-[#789991]">Physiological pH:</span>
                    <strong className="text-[#0E221E]">{product.specifications.phRange}</strong>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-[#E3ECE9]">
                  <span className="text-[#789991]">Storage Condition:</span>
                  <strong className="text-[#0E221E]">{product.specifications.storage}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E3ECE9]">
                  <span className="text-[#789991]">Shelf Life:</span>
                  <strong className="text-[#0E221E]">{product.specifications.shelfLife}</strong>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#789991]">Statutory License Code:</span>
                  <strong className="text-[#0E221E] font-mono">{product.specifications.regulatoryCode}</strong>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#2D8F7A] hover:bg-[#1F6959] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Request Commercial Supply / COA
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <ProductInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedProduct={`${product.name} (${product.specifications.netContent})`}
      />
    </div>
  );
}
