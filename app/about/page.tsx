import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Target, Award, HeartHandshake, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import SciencePhilosophy from "@/components/SciencePhilosophy";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us | Phasecor Healthcare",
  description:
    "Learn about Phasecor Healthcare's science-first philosophy, clinical origins, and commitment to phased cellular skin and systemic restoration.",
};

export default function AboutPage() {
  const corePhases = [
    {
      step: "Phase 01",
      title: "Barrier Stabilization & Quenching",
      desc: "Before active cellular modulation can begin, the stratum corneum barrier must be fortified. We eliminate micro-inflammation and strengthen lipid lamellae using bio-compatible ceramides, panthenol, and fatty acids.",
      highlight: "Barrier Integrity",
    },
    {
      step: "Phase 02",
      title: "Targeted Cellular Modulation",
      desc: "Once the barrier is resilient, precise clinical actives (such as Tranexamic Acid, Niascobutin, and Photolyase enzymes) modulate cellular pathways without triggering rebound irritation or inflammatory cascades.",
      highlight: "Targeted Efficacy",
    },
    {
      step: "Phase 03",
      title: "Systemic Reinforcement & Maintenance",
      desc: "Long-term homeostasis requires systemic cellular support. Our nutricosmetic dual-delivery formulations supply synchronized lipid- and water-soluble antioxidants (Glutathione, Astaxanthin, NAC) to lock in internal resilience.",
      highlight: "Long-Term Homeostasis",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "No Fleeting Trends",
      desc: "We do not formulate based on viral social fads or marketing hype. Every ingredient has demonstrable peer-reviewed biochemical efficacy.",
    },
    {
      icon: ShieldCheck,
      title: "Clinically Verified Actives",
      desc: "We calibrate active ingredient percentages to therapeutic, biologically effective levels that yield predictable, reproducible outcomes.",
    },
    {
      icon: Award,
      title: "Pharmaceutical-Grade Purity",
      desc: "Manufactured in certified cGMP cleanrooms with zero parabens, endocrine disruptors, sulfates, or artificial fragrances.",
    },
    {
      icon: HeartHandshake,
      title: "Physician & Patient Trust",
      desc: "Designed in collaboration with dermatologists and clinical practitioners who prioritize long-term skin health above instant cosmetic illusion.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header Hero */}
      <section className="relative bg-[#071714] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D8F7A]/20 border border-[#2D8F7A]/30 text-[#45C5A9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Phasecor Healthcare</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Engineering the <br />
              <span className="bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent">
                Phases of Health
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              At Phasecor, we don&apos;t believe in quick fixes. We believe in phases. Skin doesn&apos;t transform overnight; it evolves, adapts, repairs, and strengthens over time &mdash; and that&apos;s exactly how we formulate.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Philosophy Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
                <Image
                  src="/images/bento/primathion_dual.jpg"
                  alt="Phasecor Formulation Science"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                  <p className="text-xs font-semibold text-[#2D8F7A] uppercase tracking-wider">Our Core Conviction</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    “Formulate Right. Give It Time. See Real Change.”
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
                The Science of Phases
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Quick Fixes Fail &mdash; And Why Biological Phases Succeed
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  The commercial skincare industry has long promoted rapid, overnight miracles. However, human epidermal cellular turnover operates on an immutable 28-day biological cycle. Forcing drastic change through aggressive peels, excessive acid percentages, and overloaded formulas frequently leads to compromised stratum corneum integrity, chronic micro-inflammation, and rebound pigmentation.
                </p>
                <p>
                  Phasecor Healthcare was established by clinical researchers and dermatological specialists with a contrary imperative: build formulations that honor human cutaneous physiology. Our solutions deliver bio-available active compounds calibrated to work synchronously with your body&apos;s natural circadian and cellular repair schedules.
                </p>
                <p>
                  From topical targeted dermaceuticals to advanced oral nutricosmetics utilizing patented dual-delivery technology, Phasecor represents a rigorous, science-backed approach to enduring skin and systemic health.
                </p>
              </div>

              {/* Quick stats / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#f9faf9] border border-[#e8f2ee]">
                  <span className="text-2xl font-extrabold text-[#2D8F7A] block">28 Days</span>
                  <span className="text-xs text-slate-600 font-medium">Physiological turnover alignment</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f9faf9] border border-[#e8f2ee]">
                  <span className="text-2xl font-extrabold text-[#2D8F7A] block">100%</span>
                  <span className="text-xs text-slate-600 font-medium">Paraben &amp; fragrance-free</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f9faf9] border border-[#e8f2ee]">
                  <span className="text-2xl font-extrabold text-[#2D8F7A] block">cGMP</span>
                  <span className="text-xs text-slate-600 font-medium">Certified cleanroom quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Phases Detail */}
      <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              The Formulation Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Distinct Stages of Cellular Restoration
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every Phasecor product is categorized and formulated according to its biological role in restorative therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePhases.map((phase) => (
              <div
                key={phase.step}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#2D8F7A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#e8f2ee] text-[#2D8F7A] tracking-wider uppercase">
                      {phase.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {phase.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#2D8F7A]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Clinical Efficacy Target Met</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Philosophy 3-Pillar Component */}
      <SciencePhilosophy />

      {/* Core Values / Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Guiding Tenets of Phasecor Healthcare
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Commitments upheld across every batch, clinical assay, and institutional partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-[#fbfdfc] border border-slate-200 hover:border-[#2D8F7A] transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Action / Next Steps Banner */}
      <section className="py-16 bg-[#071714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to explore our therapeutic formulations?
            </h2>
            <p className="text-sm text-slate-300">
              Discover our clinical topicals, nutricosmetics, and expanding pharmaceutical medicine pipeline.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-full bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase hover:bg-white hover:text-slate-900 transition-all inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
