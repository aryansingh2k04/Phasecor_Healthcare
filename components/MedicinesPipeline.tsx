"use client";

import { ArrowUpRight } from "lucide-react";

export default function MedicinesPipeline() {
  const pipelineMedicines = [
    {
      title: "Barrier Repair Emulsion Rx",
      category: "Medical Dermatology",
      description:
        "Targeted physiological lipid replacement formulation optimized with physiological ceramide, cholesterol, and fatty acid ratios for compromised skin barriers.",
      indication: "Atopic Dermatitis, Xerosis, Post-Procedure Cutaneous Care",
      stage: "Clinical Stability Testing"
    },
    {
      title: "Selective Melanosome Modulation Therapy",
      category: "Targeted Therapeutics",
      description:
        "Non-hydroquinone pharmaceutical compound targeting tyrosinase activity and melanosome transfer pathways without cytotoxic melanocyte damage.",
      indication: "Refractory Melasma, Post-Inflammatory Hyperpigmentation",
      stage: "Pre-Clinical Evaluation"
    },
    {
      title: "Liposomal Cellular Bioactive Complex",
      category: "Oral Therapeutics",
      description:
        "Gastric-resistant liposomal vehicle engineered to protect reduced bio-actives through gastrointestinal transit, elevating systemic cellular bioavailability.",
      indication: "Systemic Oxidative Stress, Cellular Health",
      stage: "Formulation Development"
    },
    {
      title: "Actinic Cellular Photorepair Gel",
      category: "Photomedicine",
      description:
        "Enzyme-activated topical formulation designed to assist cellular recovery and repair from chronic solar radiation exposure.",
      indication: "Photo-aging Prevention, Post-Sun Recovery",
      stage: "Formulation Development"
    }
  ];

  return (
    <section id="pipeline" className="py-20 bg-[#f9faf9] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-semibold">
            Pharmaceutical Expansion
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Medicines & Therapeutic Pipeline
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expanding our clinical foundation into targeted pharmaceutical therapeutics, advanced liposomal delivery systems, and prescription-grade cutaneous repair.
          </p>
        </div>

        {/* Clean Cards - No Fake Numbers, No Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pipelineMedicines.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#2D8F7A] transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-semibold text-[#2D8F7A]">
                  {item.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {item.stage}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 text-xs border-t border-slate-100 text-slate-500">
                <span className="font-semibold text-slate-700">Target Indication: </span>
                {item.indication}
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-slate-900">
              Clinical &amp; Research Partnerships
            </h3>
            <p className="text-xs text-slate-600">
              Phasecor Healthcare collaborates with medical practitioners, dermatologists, and clinical trial investigators.
            </p>
          </div>
          <a
            href="#enquiry"
            className="px-6 py-3 rounded-full bg-[#2D8F7A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#237362] transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Inquire in R&D</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
