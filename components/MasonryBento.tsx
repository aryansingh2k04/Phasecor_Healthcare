"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
  id: string;
  name: string;
  badge: string;
  image: string;
  alt: string;
  href: string;
}

const MEDICAL_SLIDES: SlideItem[] = [
  {
    id: "uticor",
    name: "UTIcor™",
    badge: "UTICOR™ · URINARY HEALTH",
    image: "/images/products/uticor.png",
    alt: "UTIcor Syrup & Formulation Box",
    href: "/products?category=therapeutic",
  },
  {
    id: "electcor",
    name: "Electcor™",
    badge: "ELECTCOR™ · REHYDRATION THERAPY",
    image: "/images/products/electcor.png",
    alt: "Electcor Oral Rehydration Sachet & Box",
    href: "/products?category=therapeutic",
  },
  {
    id: "chronicor",
    name: "Chronicor™",
    badge: "CHRONICOR™ · JOINT RESTORATION",
    image: "/images/products/chronicor.png",
    alt: "Chronicor Tablets & Packaging Box",
    href: "/products?category=therapeutic",
  },
  {
    id: "ovaphase",
    name: "OvaPhase™",
    badge: "OVAPHASE™ · HORMONAL WELLNESS",
    image: "/images/products/ovaphase.png",
    alt: "OvaPhase 40:1 Inositol Tablets & Box",
    href: "/products?category=therapeutic",
  },
];

const DERMA_SLIDES: SlideItem[] = [
  {
    id: "niascobutin",
    name: "Niascobutin™",
    badge: "SERUM · RESTORATIVE FORMULA",
    image: "/images/bento/niascobutin_serum.jpg",
    alt: "Niascobutin Face Serum",
    href: "/products?category=derma",
  },
  {
    id: "uvothera",
    name: "UVoThera™",
    badge: "SUNSCREEN · SPF 60+ PA++++",
    image: "/images/bento/uvothera_sunscreen.jpg",
    alt: "UVoThera Photoprotective Sunscreen",
    href: "/products?category=derma",
  },
  {
    id: "primathion-nutri",
    name: "Primathion™ Nutricosmetic",
    badge: "NUTRICOSMETIC · CELLULAR DEFENSE",
    image: "/images/bento/primathion_nutricosmetic.jpg",
    alt: "Primathion Cellular Nutricosmetic Pack",
    href: "/products?category=derma",
  },
];

export default function MasonryBento() {
  const [medicalIndex, setMedicalIndex] = useState(0);
  const [dermaIndex, setDermaIndex] = useState(0);

  // Autoscroll for medical products (slides every 3.5s without requiring hover)
  useEffect(() => {
    const timer = setInterval(() => {
      setMedicalIndex((prev) => (prev + 1) % MEDICAL_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Autoscroll for derma products (slides every 4.0s with slight offset for dynamic rhythm)
  useEffect(() => {
    const timer = setInterval(() => {
      setDermaIndex((prev) => (prev + 1) % DERMA_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevMedical = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMedicalIndex((prev) => (prev - 1 + MEDICAL_SLIDES.length) % MEDICAL_SLIDES.length);
  };

  const handleNextMedical = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMedicalIndex((prev) => (prev + 1) % MEDICAL_SLIDES.length);
  };

  const handlePrevDerma = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDermaIndex((prev) => (prev - 1 + DERMA_SLIDES.length) % DERMA_SLIDES.length);
  };

  const handleNextDerma = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDermaIndex((prev) => (prev + 1) % DERMA_SLIDES.length);
  };

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Symmetrical Bento Grid with balanced width for laptop and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr_1.15fr] lg:grid-cols-[1.15fr_1fr_1.15fr] gap-2 sm:gap-2.5 lg:gap-3 items-stretch">
          
          {/* ── COLUMN 1 (LEFT): ALL MEDICAL PRODUCTS AUTOSCROLL SLIDESHOW ── */}
          <div className="group relative block w-full h-[260px] sm:h-[280px] md:h-[300px] lg:h-[325px] rounded-none overflow-hidden bg-white border border-slate-200 shadow-sm">
            {MEDICAL_SLIDES.map((slide, idx) => (
              <Link
                key={slide.id}
                href={slide.href}
                className={`absolute inset-0 block transition-opacity duration-700 ease-in-out ${
                  idx === medicalIndex
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-label={`View ${slide.name}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>
            ))}

            {/* Top Slide Indicators */}
            <div className="absolute top-3 sm:top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              {MEDICAL_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMedicalIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === medicalIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Subtle Prev/Next Navigation Controls on Hover */}
            <button
              type="button"
              onClick={handlePrevMedical}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous medicinal formulation"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNextMedical}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next medicinal formulation"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Bottom Floating Sharp Black Badge */}
            <Link
              href={MEDICAL_SLIDES[medicalIndex].href}
              className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 sm:px-5 py-2 bg-black text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-md whitespace-nowrap rounded-none hover:bg-[#2D8F7A] transition-colors duration-300 max-w-[90%] text-center"
            >
              THERAPEUTIC RANGE
            </Link>
          </div>

          {/* ── COLUMN 2 (CENTER): COMPACT CENTER BRAND BANNER (PARAGRAPH REMOVED) ── */}
          <div className="w-full h-[240px] sm:h-[260px] md:h-auto rounded-none bg-white border border-slate-200 p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 shadow-sm">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#2D8F7A]">
              ADVANCED HEALTHCARE
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug max-w-sm">
              Science-Backed Healthcare Solutions
            </h3>
            <div className="w-10 h-0.5 bg-[#2D8F7A]/40 my-0.5" />
            <Link
              href="/products"
              className="mt-1 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#2D8F7A] transition-colors duration-200 rounded-none shadow-sm inline-block"
            >
              SHOP NOW
            </Link>
          </div>

          {/* ── COLUMN 3 (RIGHT): ALL DERMA PRODUCTS AUTOSCROLL SLIDESHOW ── */}
          <div className="group relative block w-full h-[260px] sm:h-[280px] md:h-[300px] lg:h-[325px] rounded-none overflow-hidden bg-white border border-slate-200 shadow-sm">
            {DERMA_SLIDES.map((slide, idx) => (
              <Link
                key={slide.id}
                href={slide.href}
                className={`absolute inset-0 block transition-opacity duration-700 ease-in-out ${
                  idx === dermaIndex
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-label={`View ${slide.name}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>
            ))}

            {/* Top Slide Indicators */}
            <div className="absolute top-3 sm:top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              {DERMA_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDermaIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === dermaIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Subtle Prev/Next Navigation Controls on Hover */}
            <button
              type="button"
              onClick={handlePrevDerma}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous derma formulation"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNextDerma}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
              aria-label="Next derma formulation"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Bottom Floating Sharp Black Badge */}
            <Link
              href={DERMA_SLIDES[dermaIndex].href}
              className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 sm:px-5 py-2 bg-black text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-md whitespace-nowrap rounded-none hover:bg-[#2D8F7A] transition-colors duration-300 max-w-[90%] text-center"
            >
              DERMATOLOGICAL RANGE
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
