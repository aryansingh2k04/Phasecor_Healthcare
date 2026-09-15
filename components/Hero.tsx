"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, Product } from "./data";

interface HeroProps {
  onOpenDetails: (product: Product) => void;
  onEnquire: (productId: string) => void;
}

export default function Hero({ onOpenDetails, onEnquire }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      product: PRODUCTS[0],
      title: "Niascobutin Face Serum",
      tagline: "High-Performance Multi-Action Treatment",
      description:
        "Niascobutin Face Serum is a high-performance, multi-action treatment designed to transform dull, uneven skin into a visibly brighter, smoother, and healthier complexion.",
      image: "/images/products/niascobutin_main.jpg",
      bgGradient: "from-[#f4f8f6] to-white"
    },
    {
      product: PRODUCTS[1],
      title: "Primathion Oral Supplement",
      tagline: "Dual-Action Oral Skin Rejuvenation",
      description:
        "Primathion is a next-generation oral skin rejuvenation supplement designed to transform your skin from within using innovative Dual Delivery Technology.",
      image: "/images/products/primathion_main.jpg",
      bgGradient: "from-[#fafbf9] to-white"
    },
    {
      product: PRODUCTS[2],
      title: "Uvothera Sunscreen SPF 60++++",
      tagline: "Advanced Broad-Spectrum Protection",
      description:
        "Uvothera SPF 60++++ is an advanced, gel-based sunscreen designed to provide broad-spectrum protection against UVA, UVB, Infrared Radiation (IR), and Visible Light.",
      image: "/images/products/uvothera_main.jpg",
      bgGradient: "from-[#f4f7f6] to-white"
    }
  ];

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100">
      {/* Slideshow Container */}
      <div className={`relative w-full bg-gradient-to-r ${slide.bgGradient} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#419a85]">
                {slide.tagline}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                {slide.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {slide.description}
              </p>

              {/* 2 Buttons Only: Enquiry and Details */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onEnquire(slide.product.id)}
                  className="px-8 py-3.5 rounded-full bg-[#419a85] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#2D8F7A] transition-all duration-200 shadow-sm"
                >
                  Enquiry
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDetails(slide.product)}
                  className="px-8 py-3.5 rounded-full border border-slate-300 text-slate-800 text-xs font-semibold tracking-wider uppercase hover:border-[#419a85] hover:text-[#419a85] transition-all duration-200"
                >
                  Details
                </button>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg bg-white p-3 border border-slate-100 transition-all duration-500">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Slider Navigation Dots & Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-4">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="p-2 rounded-full border border-slate-200 hover:border-[#419a85] text-slate-600 hover:text-[#419a85] transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.title}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-8 bg-[#419a85]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="p-2 rounded-full border border-slate-200 hover:border-[#419a85] text-slate-600 hover:text-[#419a85] transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
