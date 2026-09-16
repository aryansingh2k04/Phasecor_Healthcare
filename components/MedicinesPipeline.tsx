"use client";

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
              className="p-7 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg space-y-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  {item.category}
                </span>
                <span className="text-xs text-white/80 font-medium">
                  {item.stage}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-2 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 text-xs border-t border-white/20 text-white/85">
                <span className="font-bold text-white">Target Indication: </span>
                {item.indication}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
