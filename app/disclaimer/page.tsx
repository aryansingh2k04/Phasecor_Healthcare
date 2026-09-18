import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Stethoscope, ShieldCheck, Sparkles, HeartPulse, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Phasecor Healthcare",
  description:
    "Read Phasecor Healthcare's medical and regulatory disclaimers concerning therapeutic formulations, dermatological care, and clinical consultations.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
      {/* ── Page Hero Header ── */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Medical &amp; Product Disclaimer
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              Please read this disclaimer carefully before exploring our therapeutic formulations, dermatological solutions, or scientific literature.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Disclaimer Content ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">

            {/* Crucial Notice Banner */}
            <div className="p-5 sm:p-6 rounded-md bg-amber-50/70 border border-amber-200 space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-amber-950 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Not a Substitute for Professional Medical Advice</span>
              </h2>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                The information provided across Phasecor Healthcare digital platforms (including phasecor.com, phasecorhealthcare.com, packaging brochures, and digital literature) is intended strictly for general informational, educational, and scientific reference purposes. It should not be considered, relied upon, or used as a substitute for professional clinical advice, medical diagnosis, or personalized treatment plans.
              </p>
            </div>

            {/* 1. Product Information & Descriptions */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">1</span>
                <span>Product Information &amp; Scientific Specifications</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                All product descriptions, key active compositions, molecular targets, packaging images, and specifications on this website are provided for reference purposes. While we maintain rigorous quality assurance to ensure product specifications reflect our cGMP manufacturing standards:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Visual packaging representations may undergo minor packaging redesigns or regulatory labeling modifications over time.</li>
                <li>Batch numbers, expiration dates, and manufacturing licensing details are printed directly on the primary and secondary packaging containers.</li>
                <li>Always inspect the physical product seal, label, and packaging inserts prior to initial administration.</li>
              </ul>
            </div>

            {/* 2. Individual Biological Variation */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">2</span>
                <span>Individual Cutaneous &amp; Physiological Variations</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Individual clinical outcomes, cutaneous absorption rates, and therapeutic responses vary significantly based on unique factors, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm">
                <div className="p-3 bg-[#f7faf8] rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block">Cutaneous Profile</strong>
                  <span className="text-slate-600 mt-1 block">Skin barrier thickness, sebum rate, sensitivity, and 28-day cellular turnover rhythm.</span>
                </div>
                <div className="p-3 bg-[#f7faf8] rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block">Underlying Health</strong>
                  <span className="text-slate-600 mt-1 block">Pre-existing dermatological conditions, systemic factors, allergies, or hormonal fluctuations.</span>
                </div>
                <div className="p-3 bg-[#f7faf8] rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block">External Variables</strong>
                  <span className="text-slate-600 mt-1 block">Climate, UV radiation intensity, concurrent medication, and lifestyle habits.</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic">
                Phasecor Healthcare does not guarantee identical results across all users. Statements regarding restorative or protective efficacy reflect active ingredient research and clinical formulation models.
              </p>
            </div>

            {/* 3. Patch Testing Protocol */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#e8f2ee]/50 border border-[#2D8F7A]/30 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#184a3f] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2D8F7A]" />
                <span>Recommended Dermatological Patch Test Protocol</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Prior to full application of any new topical skincare formulation (including UVoThera Sunscreen or concentrated active serums), Phasecor strongly recommends conducting an initial patch test:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Apply a small dime-sized amount of formulation to a discreet area (such as the inner forearm or behind the ear).</li>
                <li>Leave the product undisturbed for 24 to 48 hours.</li>
                <li>If redness, itching, burning, inflammation, or irritation develops, discontinue use immediately and cleanse the area.</li>
                <li>If irritation persists, consult a dermatologist or healthcare professional.</li>
              </ol>
            </div>

            {/* 4. Prescription Therapeutics & RMP Guidance */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">4</span>
                <span>Prescription Formulations &amp; Medical Consultations</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Therapeutic formulations (such as UTIcor&trade;, Chronicor&trade;, OvaPhase&trade;, and Primathion&trade;) are formulated for specialized clinical pathways.
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Nothing on this website constitutes a prescription, medical advice, or physician-patient relationship.</li>
                <li>Never discontinue, alter, or delay seeking professional medical treatment because of information read on our website.</li>
                <li>Always seek the advice of your physician, dermatologist, or licensed healthcare provider with any questions regarding a medical condition.</li>
              </ul>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">5</span>
                <span>Limitation of Liability for Misuse</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Phasecor Healthcare, its officers, medical advisors, and partners shall not be held liable for any adverse reactions, allergic episodes, direct, indirect, or consequential damages resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-600">
                <li>Improper application, off-label administration, or failure to follow labeled instructions.</li>
                <li>Concurrent use of incompatible active chemical compounds or dermatological treatments.</li>
                <li>Reliance on informational summaries as clinical diagnostics.</li>
              </ul>
            </div>

            {/* 6. External Links & Changes */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">6</span>
                <span>External Links &amp; Modifications</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                This website may link to external scientific journals, regulatory repositories, or clinical trials. Phasecor does not endorse and is not responsible for the accuracy or findings of third-party external literature.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Phasecor reserves the right to modify, amend, or update this Disclaimer at any time without prior individual notice. Continued interaction with our website after modifications indicates your acceptance.
              </p>
            </div>

            {/* Contact Box */}
            <div className="p-6 sm:p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white space-y-4 shadow-md">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span>Clinical &amp; Regulatory Inquiries</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                For medical dialogue, formulation inquiries, or regulatory queries, please reach out to our team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                <div className="space-y-1">
                  <span className="text-white/80 font-medium block">Clinical Inquiries:</span>
                  <a href="mailto:support@phasecor.com" className="text-white font-bold hover:underline">
                    support@phasecor.com
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="text-white/80 font-medium block">Compliance &amp; Legal:</span>
                  <a href="mailto:legal@phasecor.com" className="text-white font-bold hover:underline">
                    legal@phasecor.com
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/"
                className="text-xs font-semibold text-[#2D8F7A] hover:text-[#184a3f] transition-colors inline-flex items-center gap-1.5"
              >
                <span>&larr; Return to Home</span>
              </Link>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">
                  Privacy Policy
                </Link>
                <span>&bull;</span>
                <Link href="/terms-conditions" className="hover:text-slate-800 transition-colors">
                  Terms &amp; Conditions
                </Link>
                <span>&bull;</span>
                <Link href="/shipping-return-policy" className="hover:text-slate-800 transition-colors">
                  Shipping &amp; Returns
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
