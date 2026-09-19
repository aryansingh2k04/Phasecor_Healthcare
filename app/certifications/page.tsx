import { FileCheck2, CheckCircle2 } from "lucide-react";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "cGMP Certified Production",
      agency: "Good Manufacturing Practices",
      desc: "All Phasecor formulations are compounded and packaged in cGMP certified cleanroom environments with strictly monitored air filtration, particulate control, and sterile handling.",
      badge: "ISO CLEANROOM",
    },
    {
      title: "ISO 9001:2015 Quality Standards",
      agency: "International Organization for Standardization",
      desc: "Comprehensive quality management system protocols covering raw ingredient verification, batch manufacturing records, traceability, and post-market pharmacovigilance.",
      badge: "QUALITY ASSURED",
    },
    {
      title: "Dermatological Patch Tested",
      agency: "Independent Clinical Dermatologists",
      desc: "Evaluated through repetitive patch testing under clinical supervision across Fitzpatrick phototypes I through VI to confirm biocompatibility and non-irritancy.",
      badge: "CLINICALLY VERIFIED",
    },
    {
      title: "0% Parabens & Hormonal Disruptors",
      agency: "Toxicological Safety Screening",
      desc: "Formulations are rigorously assayed to guarantee complete freedom from parabens, phthalates, synthetic musk fragrances, and known endocrine-disrupting agents.",
      badge: "CLEAN CLINICAL",
    },
    {
      title: "100% Cruelty-Free & Ethical Testing",
      agency: "Ethical Research Guidelines",
      desc: "Zero testing on animals at any stage of active development, formulation, or finished batch evaluation, adhering to global ethical cosmetics and therapeutics directives.",
      badge: "ETHICAL FORMULATION",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Certifications &amp; <br />
              <span className="bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent">
                Clinical Rigor
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              Every Phasecor Healthcare formulation undergoes analytical chromatography, independent clinical testing, and certified cGMP quality control prior to clinical release.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Uncompromising Standards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Verified Testing Protocols for Guaranteed Biocompatibility
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Phasecor Healthcare bridges pharmaceutical diligence with dermatological cosmetics. We test every commercial batch beyond statutory regulatory baselines to ensure zero degradation of delicate actives, stable pH buffers, and complete microbiological safety.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Certifications */}
      <section className="py-14 sm:py-20 bg-[#f7faf8] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Compliance Frameworks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recognized Manufacturing &amp; Safety Accreditations
            </h2>
            <p className="text-sm text-slate-600">
              Each formulation complies with Indian and international medical cosmetology guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 sm:p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md hover:shadow-[0_16px_36px_-6px_rgba(45,143,122,0.5),0_8px_16px_-4px_rgba(45,143,122,0.25)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white tracking-wider uppercase">
                      {cert.badge}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-white/80">
                    {cert.agency}
                  </p>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    {cert.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/20 text-[11px] font-medium text-white/85 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Compliant &amp; Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
