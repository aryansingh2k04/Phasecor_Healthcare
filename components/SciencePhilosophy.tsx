"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function SciencePhilosophy() {
  const pillars = [
    {
      title: "Dual Delivery Bioavailability",
      subtitle: "Patented Synchronized Uptake",
      description:
        "Conventional oral supplements struggle with simultaneous lipid and aqueous nutrient absorption. Our Dual Delivery Technology encapsulates oil-based actives in powder alongside water-soluble nutrients for differential sustained release and elevated cellular bioavailability.",
      image: "/images/bento/primathion_dual.jpg",
      tag: "Nutricosmetic Innovation"
    },
    {
      title: "Multi-Spectrum Photobiology",
      subtitle: "Beyond Standard UV Filters",
      description:
        "Modern photodamage is not limited to UV rays. Phasecor photoprotection creates a non-greasy silica shield against UVA (photo-aging), UVB (erythema), Infrared Radiation (thermal shock), and high-energy visible screen blue light.",
      image: "/images/bento/uvothera_sunscreen.jpg",
      tag: "Photoprotection"
    },
    {
      title: "Barrier-Conscious Dermatology",
      subtitle: "Strength Over Harsh Exfoliation",
      description:
        "Rather than overloading skin with aggressive stripping acids, Phasecor pairs clinical brightening actives like Niacinamide and Tranexamic Acid with barrier lipids, Centella, and Panthenol for sustained cellular repair.",
      image: "/images/bento/niascobutin_serum.jpg",
      tag: "Cutaneous Biology"
    }
  ];

  return (
    <section id="science" className="py-20 sm:py-28 bg-[#f7faf8] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Phasecor Core Philosophy */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e8f2ee] text-[#2D8F7A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Clinical Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            “Formulate Right. Give It Time. See Real Change.”
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Phasecor Healthcare, we don’t chase fleeting trends or viral fads. True cellular healing operates in physiological phases. We engineer formulations that respect human biology, restore the barrier, and cultivate lasting resilience.
          </p>
        </div>

        {/* 3 Scientific Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-[#419a85] hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#2D8F7A] border border-[#b5d5cb]">
                    {pillar.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#419a85] uppercase tracking-wider block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#419a85] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Principles Summary Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-2xl font-extrabold text-[#419a85]">01</span>
            <h4 className="text-sm font-bold text-slate-900">Science-Backed</h4>
            <p className="text-xs text-slate-500">Every active verified through peer-reviewed dermatological literature.</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-extrabold text-[#419a85]">02</span>
            <h4 className="text-sm font-bold text-slate-900">Thoughtfully Dosed</h4>
            <p className="text-xs text-slate-500">Therapeutic concentrations calibrated to avoid cellular fatigue and irritation.</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-extrabold text-[#419a85]">03</span>
            <h4 className="text-sm font-bold text-slate-900">Barrier-Conscious</h4>
            <p className="text-xs text-slate-500">Formulated to protect and fortify the stratum corneum at all times.</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-extrabold text-[#419a85]">04</span>
            <h4 className="text-sm font-bold text-slate-900">Lasting Results</h4>
            <p className="text-xs text-slate-500">Cultivating sustained skin resilience and internal health over overnight illusions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
