import type { Metadata } from "next";
import Link from "next/link";
import { Scale, FileCheck, ShieldAlert, CheckCircle2, RotateCcw, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Phasecor Healthcare",
  description:
    "Review the terms, conditions, and user agreements governing your access to Phasecor Healthcare digital platforms, clinical formulations, and services.",
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
      {/* ── Page Hero Header ── */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              By accessing or using the Phasecor Healthcare website, you enter into a legally binding contract with Phasecor. Please read these guidelines, rights, and responsibilities carefully.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Terms Content ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">

            {/* Introductory Agreement Box */}
            <div className="p-5 sm:p-6 rounded-md bg-[#fbfdfc] border border-slate-200 space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#2D8F7A]" />
                <span>User Agreement &amp; Acceptance</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website operated by Phasecor Healthcare (&ldquo;Phasecor&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By browsing the website, reviewing formulations, or submitting clinical inquiries, you acknowledge and agree to be bound by these rules.
              </p>
            </div>

            {/* 1. Who Can Use the Website */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">1</span>
                <span>Who Can Use the Website (Eligibility)</span>
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-xs sm:text-sm">
                <li><strong className="text-slate-800">Legal Capacity:</strong> You must be legally capable of entering into binding contracts under the Indian Contract Act, 1872.</li>
                <li><strong className="text-slate-800">Minors &amp; Guardians:</strong> Individuals under 18 years of age or those under legal guardianship should access or browse this website only under the active supervision and consent of a parent or legal guardian.</li>
                <li><strong className="text-slate-800">User Confirmation:</strong> By accessing this platform, you affirm that you satisfy all statutory eligibility requirements.</li>
              </ul>
            </div>

            {/* 2. Account Registration & Security */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">2</span>
                <span>Account Registration &amp; Credential Security</span>
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-xs sm:text-sm">
                <li><strong className="text-slate-800">Account Creation:</strong> Certain features, such as placing formulation orders via our store or tracking inquiries, may require creating an account.</li>
                <li><strong className="text-slate-800">Accuracy of Information:</strong> You agree to provide truthful, accurate, current, and complete details during registration and promptly update them if changes occur.</li>
                <li><strong className="text-slate-800">Confidentiality:</strong> You are responsible for safeguarding your login credentials. You must notify Phasecor immediately at <span className="font-semibold text-slate-800">legal@phasecor.com</span> if you suspect unauthorized access to your account.</li>
              </ul>
            </div>

            {/* 3. Code of Conduct */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">3</span>
                <span>Acceptable Use &amp; Code of Conduct</span>
              </h3>
              <p>When interacting with our platform, you agree to adhere to lawful, ethical behavior:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Statutory Compliance", desc: "Abide by all applicable local, national, and international laws, medical device, and drug advertising regulations." },
                  { title: "Respect Intellectual Rights", desc: "Do not infringe on the copyright, trademark, patent, trade secret, or privacy rights of Phasecor or others." },
                  { title: "Veracity & Honesty", desc: "Do not transmit false, misleading, defamatory, fraudulent, or impersonating communications." },
                  { title: "System Integrity", desc: "Do not attempt unauthorized access, inject malicious code, or engage in activity that disrupts website stability." }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-slate-200 bg-white">
                    <strong className="text-xs sm:text-sm text-slate-900 block">{item.title}</strong>
                    <span className="text-xs text-slate-600 mt-0.5 block">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Intellectual Property */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">4</span>
                <span>Intellectual Property &amp; Proprietary Rights</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                All brand logos, trademarks (including Phasecor&trade;, UTIcor&trade;, Electcor&trade;, Chronicor&trade;, OvaPhase&trade;, Niascobutin&trade;, Primathion&trade;, UVoThera&trade;), graphics, illustrations, product packaging photography, scientific copy, and website code are the exclusive intellectual property of Phasecor Healthcare.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                You may not copy, reproduce, download, distribute, modify, or create derivative works from our proprietary content without express prior written consent from Phasecor.
              </p>
            </div>

            {/* 5. Product Information & Clinical Formulations */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">5</span>
                <span>Formulations &amp; Clinical Information</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                All formulations, therapeutic indications, and active ingredient descriptions are provided for reference, educational, and medical dialogue purposes. Formulations are manufactured in WHO-GMP, cGMP, and ISO-certified facilities under stringent regulatory oversight.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Prescription products must be dispensed and consumed only under the advice, prescription, and supervision of a licensed Registered Medical Practitioner (RMP).
              </p>
            </div>

            {/* 6. Return & Refund Policy (Integrated Phasecor Policy) */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#f7faf8] to-[#e8f2ee]/50 border border-[#2D8F7A]/30 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#2D8F7A]" />
                <span>Return &amp; Refund Policy &ndash; Phasecor</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                At Phasecor, every formulation is developed with precision and dermatological rigor. If an issue occurs with your purchase, our customer care process ensures prompt resolution:
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                <strong>Eligible Circumstances for Return or Replacement:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>You received an incorrect product differing from your order.</li>
                  <li>Your package was physically damaged during transit.</li>
                  <li>You received an expired product batch.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/20">
                  <strong className="text-slate-900 block">1. Raise Request within 7 Days:</strong>
                  <span className="text-slate-600 mt-1 block">
                    Contact <a href="mailto:support@phasecor.com" className="text-[#2D8F7A] font-semibold underline">support@phasecor.com</a> within 7 days of delivery. Our team reviews submissions within 48 hours.
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/20">
                  <strong className="text-slate-900 block">2. Doorstep Reverse Pickup:</strong>
                  <span className="text-slate-600 mt-1 block">
                    Upon approval, we arrange reverse pickup directly from your doorstep at zero additional courier fee.
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/20">
                  <strong className="text-slate-900 block">3. Inspection &amp; Refund:</strong>
                  <span className="text-slate-600 mt-1 block">
                    Upon receipt and verification of the product, refunds are processed within 7&ndash;10 business days to your original payment method.
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/20">
                  <strong className="text-slate-900 block">4. Replacement Dispatch:</strong>
                  <span className="text-slate-600 mt-1 block">
                    If replacement was requested, a fresh verified batch is dispatched immediately following verification.
                  </span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 italic pt-1 border-t border-slate-200">
                Important: For strict hygiene, safety, and drug stability reasons, opened, unsealed, or partially used formulations cannot be returned unless eligible under the transit damage or expiry criteria above.
              </p>
            </div>

            {/* 7. Electronic Contract Validity */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">7</span>
                <span>Electronic Contract Enforceability (IT Act, 2000)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                This document is an electronic record generated by a computer system in terms of the Information Technology Act, 2000, and rules thereunder. This record is generated by an electronic system and does not require physical or digital signatures. Your continued use of the website constitutes full legal acceptance.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">8</span>
                <span>Liability &amp; Limitations</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                To the maximum extent permitted by applicable Indian law, Phasecor Healthcare, its founders, directors, and affiliates shall not be liable for any indirect, incidental, punitive, or consequential damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-slate-600">
                <li>Internet outages, ISP telecommunication delays, or temporary website maintenance.</li>
                <li>Events outside our reasonable control, including natural catastrophes, strikes, civil disruptions, or regulatory embargoes.</li>
                <li>Individual allergic skin sensitivities or improper application contrary to labeled usage instructions.</li>
              </ul>
            </div>

            {/* 9. Indemnification */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">9</span>
                <span>Indemnification</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                You agree to indemnify, defend, and hold harmless Phasecor Healthcare, its officers, employees, and authorized distributors against any claims, losses, damages, liabilities, and legal expenses resulting from your violation of these Terms, unlawful conduct, or infringement of third-party rights.
              </p>
            </div>

            {/* 10. Governing Law & Dispute Resolution */}
            <div className="p-6 sm:p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white space-y-3 shadow-md hover:shadow-[0_16px_36px_-6px_rgba(45,143,122,0.5),0_8px_16px_-4px_rgba(45,143,122,0.25)] transition-all duration-300 hover:-translate-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-white" />
                <span>Governing Law &amp; Exclusive Jurisdiction</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                These Terms shall be interpreted and governed in accordance with the substantive laws of the Republic of India.
              </p>
              <div className="p-3.5 bg-white/10 rounded-md border border-white/20 text-xs text-white/90 leading-relaxed">
                <strong className="text-white font-bold">Exclusive Jurisdiction:</strong> Any legal dispute, arbitration, claim, or proceeding arising out of or in connection with Phasecor shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Kalyan, District Thane, Maharashtra, India</strong>.
              </div>
            </div>

            {/* 11. Contact & Legal Inquiries */}
            <div className="p-6 sm:p-7 rounded-md bg-[#fbfdfc] border border-slate-200 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#2D8F7A]" />
                <span>Legal Inquiries &amp; Official Communications</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                For questions concerning these Terms, contractual rights, or corporate notices, please contact:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                <div>
                  <span className="text-slate-500 font-medium block">Legal Department:</span>
                  <a href="mailto:legal@phasecor.com" className="text-[#2D8F7A] font-bold hover:underline">
                    legal@phasecor.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">Order Support Helpdesk:</span>
                  <a href="mailto:support@phasecor.com" className="text-[#2D8F7A] font-bold hover:underline">
                    support@phasecor.com
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
                <Link href="/disclaimer" className="hover:text-slate-800 transition-colors">
                  Disclaimer
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
