import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Lightbulb,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Activity,
  Pill,
  Award
} from "lucide-react";
import { BRAND_PHILOSOPHY } from "@/components/data";

export const metadata: Metadata = {
  title: "About Us | Phasecor Healthcare",
  description:
    "Discover Phasecor Healthcare's mission: Quality Care within Reach. Delivering innovative, affordable, and high-quality multi-specialty healthcare and dermatological solutions.",
};

export default function AboutPage() {
  const brochurePillars = [
    {
      icon: Lightbulb,
      title: "Innovative Products",
      desc: "We develop advanced solutions that address evolving healthcare needs with cutting-edge active delivery mechanisms and targeted formulations.",
    },
    {
      icon: ShieldCheck,
      title: "Most Affordable High Quality Products",
      desc: "We combine affordability with uncompromised clinical quality to deliver the best value to physicians, pharmacies, and patients.",
    },
    {
      icon: HeartHandshake,
      title: "Committed to Better Health Outcomes",
      desc: "We are dedicated to improving lives through safe, effective, and reliable healthcare solutions backed by rigorous laboratory quality control.",
    },
  ];

  const therapeuticAreas = [
    {
      title: "Urinary Tract & Renal Care",
      desc: "Targeted non-antibiotic solutions (UTIcor™) with cranberry PACs and D-Mannose to inhibit bacterial adhesion and alkalize urinary pH.",
      badge: "Urology & Nephrology",
    },
    {
      title: "Electrolyte & Rehydration Therapy",
      desc: "Sugar-free WHO-osmolarity electrolyte formulations (Electcor™) fortified with Co-Enzyme Q10 for rapid cellular revitalisation.",
      badge: "Critical Hydration",
    },
    {
      title: "Joint, Bone & Neuropathic Health",
      desc: "Multi-modal musculoskeletal formulations (Chronicor™) combining Calcium Orotate, Cissus Quadrangularis, and Active B12.",
      badge: "Orthopaedics & Rheumatology",
    },
    {
      title: "Women’s Hormonal & Ovulatory Care",
      desc: "Physiological 40:1 Inositol formulations (OvaPhase™) specifically engineered for PCOS/PCOD and metabolic endocrine balance.",
      badge: "Gynaecology & Endocrinology",
    },
    {
      title: "Clinical Dermatology & Photobiology",
      desc: "High-potency multi-action serums, dual-delivery oral nutricosmetics, and broad-spectrum SPF 60+ UV/IR shields.",
      badge: "Cutaneous Medicine",
    },
    {
      title: "Investigational R&D Pipeline",
      desc: "Expanding prescription-grade lipid barrier repair emulsions, melanosome modulators, and DNA photolyase repair complexes.",
      badge: "Pharmaceutical Innovation",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header Hero */}
      <section className="relative bg-[#071714] text-white py-20 lg:py-28 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Quality Care <br />
              <span className="bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent">
                within Reach
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              {BRAND_PHILOSOPHY.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Official 3 Pillars from Brochure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Our Guiding Tenets
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Pillars of Healthcare Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Guiding our product formulation, pricing ethics, and medical collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brochurePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-md bg-[#fbfdfc] border border-slate-200 hover:border-[#2D8F7A] hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="w-14 h-14 rounded-md bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#2D8F7A]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Phasecor Core Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapeutic Specialties Grid */}
      <section className="py-20 bg-[#f7faf8] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Specialized Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Therapeutic Spectrum
            </h2>
            <p className="text-sm text-slate-600">
              Targeting high-burden medical and dermatological conditions with evidence-based active synergies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapeuticAreas.map((area) => (
              <div
                key={area.title}
                className="p-8 rounded-md bg-white border border-slate-200 hover:border-[#2D8F7A] transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-md bg-[#e8f2ee] text-[#2D8F7A] uppercase tracking-wider">
                    {area.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{area.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
