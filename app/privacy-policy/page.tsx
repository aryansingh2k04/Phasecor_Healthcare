import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Phasecor Healthcare",
  description:
    "Learn how Phasecor Healthcare collects, safeguards, and processes personal and clinical inquiry information under the Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
      {/* ── Page Hero Header ── */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              At Phasecor, we are committed to protecting your privacy and ensuring that your personal and clinical information is handled responsibly, securely, and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">

            {/* Introductory Notice */}
            <div className="p-5 sm:p-6 rounded-md bg-[#fbfdfc] border border-slate-200 space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2D8F7A]" />
                <span>Commitment to Data Privacy</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This Privacy Policy explains how Phasecor Healthcare (&ldquo;Phasecor&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, processes, and safeguards the personal and health-related details you provide when accessing our website (phasecor.com and phasecorhealthcare.com) or submitting inquiries.
              </p>
              <div className="text-xs text-slate-500 border-t border-slate-200/80 pt-2.5">
                <strong className="text-slate-700">Note:</strong> Our privacy policy may be updated periodically to reflect legislative updates or system improvements. We encourage you to review this page periodically to stay informed.
              </div>
            </div>

            {/* 1. Collection of Personally Identifiable Information */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">1</span>
                <span>Collection of Personally Identifiable Information</span>
              </h3>
              <p>
                We collect personal information that is necessary for providing our products, clinical literature, and therapeutic services. This information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-xs sm:text-sm">
                <li><strong className="text-slate-800">Identity &amp; Contact Details:</strong> Name, email address, telephone number, physical shipping and billing address.</li>
                <li><strong className="text-slate-800">Demographic Information:</strong> City, postal code, region, personal preferences, and clinical product interests.</li>
                <li><strong className="text-slate-800">Dermatological &amp; Health Concerns:</strong> Information you voluntarily share regarding skin concerns, physiological indications, or product usage preferences via inquiry forms.</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600">
                We collect information through multiple channels including website inquiry forms, email communications, telephone calls, customer support touchpoints, and voluntary surveys.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 italic">
                Whenever possible, we collect information directly from you and notify you of the purpose of collection. If you choose not to provide requested information, we may be unable to provide the formulation, inquiry fulfillment, or expected level of service.
              </p>
            </div>

            {/* 2. Use & Disclosure of Information */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">2</span>
                <span>Use &amp; Disclosure of Information</span>
              </h3>
              <p>
                We use your personal data primarily to deliver, improve, and administer our healthcare products and digital services. Specifically, this includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Responding promptly to your clinical inquiries, product queries, and orders",
                  "Maintaining secure internal regulatory and customer records",
                  "Improving formulations, packaging, website usability, and clinical services",
                  "Sending periodic updates, product announcements, and scientific notices (with your explicit consent)"
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-slate-200 bg-white flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2D8F7A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pt-2">
                We treat your information as strictly confidential. <strong className="text-slate-800">We do not sell, trade, or rent your personal information to third parties.</strong> Data may be disclosed strictly under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li><strong className="text-slate-800">Trusted Service Partners:</strong> Vetted third parties who assist us in operating our digital infrastructure, conducting fulfillment, or servicing customers under strict contractual confidentiality obligations.</li>
                <li><strong className="text-slate-800">Legal Compliance:</strong> When disclosure is mandatory to comply with Indian statutory laws, court orders, or governmental directives, or to protect the vital rights, safety, and property of Phasecor or others.</li>
                <li><strong className="text-slate-800">Aggregated Non-Personal Data:</strong> Anonymized statistical information may be utilized for clinical research, web analytics, and operational metrics.</li>
              </ul>
            </div>

            {/* 3. Use of Cookies & Tracking Technologies */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">3</span>
                <span>Use of Cookies &amp; Digital Identifiers</span>
              </h3>
              <p>
                Our website utilizes cookies &mdash; small data files placed on your browser or device &mdash; to deliver an optimized browsing experience. Cookies allow Phasecor to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Remember your regional preferences and active sessions.</li>
                <li>Analyze aggregate website traffic patterns, navigation speeds, and popular formulation views.</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600">
                You can configure your browser to decline or selectively disable cookies. Please note that disabling essential cookies may impact certain interactive functionalities on the site.
              </p>
            </div>

            {/* 4. Data Protection & Security Safeguards */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">4</span>
                <span>Data Security &amp; Retention Safeguards</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We implement robust technical and managerial safeguards, including SSL/TLS 256-bit encryption in transit, strict access control protocols, and isolated database storage to protect your personal information against unauthorized access, loss, alteration, or misuse.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Personal data is retained only for as long as necessary to fulfill the operational, clinical, and legal purposes for which it was gathered, or as mandated under Indian drug regulatory and taxation archiving requirements.
              </p>
            </div>

            {/* 5. Compliance with DPDP Act, 2023 (Your Rights) */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#e8f2ee]/70 to-[#f7faf8] border border-[#2D8F7A]/30 space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#184a3f] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2D8F7A]" />
                <span>Your Rights under the Digital Personal Data Protection Act, 2023</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In compliance with the Digital Personal Data Protection Act, 2023 (DPDPA), as a Data Principal you hold the following statutory rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800">
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/15 shadow-2xs">
                  <strong>Right to Access:</strong> Request a summary of the personal data we process about you and the identities of any data fiduciaries with whom it has been shared.
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/15 shadow-2xs">
                  <strong>Right to Correction &amp; Erasure:</strong> Request the correction of inaccurate data, completion of incomplete data, or deletion of data no longer required.
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/15 shadow-2xs">
                  <strong>Right of Grievance Redressal:</strong> Register any concerns or complaints regarding our data handling practices with our dedicated Grievance Officer.
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#2D8F7A]/15 shadow-2xs">
                  <strong>Right to Nominate:</strong> Nominate another individual to exercise these rights on your behalf in the event of incapacity or demise.
                </div>
              </div>
            </div>

            {/* 6. Links to Other Websites */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">6</span>
                <span>Links to Third-Party Websites</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Our website may contain links to external websites, including clinical databases, medical journals, regulatory portals, or e-commerce store platforms. Phasecor is not responsible for the privacy practices, policies, or content of these external domains. We encourage you to review the privacy notices of any external site you visit.
              </p>
            </div>

            {/* 7. Consent & Updates */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#2D8F7A] text-white text-xs font-bold">7</span>
                <span>Your Consent &amp; Policy Revisions</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                By accessing Phasecor Healthcare’s digital properties or submitting your information through our contact channels, you consent to the collection, processing, and storage of your information as delineated in this Privacy Policy.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Whenever changes are introduced to this document, the updated text will be published on this page with an updated &ldquo;Last Updated&rdquo; date.
              </p>
            </div>

            {/* 8. Grievance Redressal & Contact Info */}
            <div className="p-6 sm:p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white space-y-4 shadow-md">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span>Grievance Redressal &amp; Data Privacy Inquiries</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                For questions regarding this Privacy Policy, your statutory data rights, or to submit a grievance, please contact our designated compliance team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                <div className="space-y-1">
                  <div className="text-white/80 font-medium">Compliance &amp; Legal Division:</div>
                  <a href="mailto:legal@phasecor.com" className="text-white font-bold hover:underline">
                    legal@phasecor.com
                  </a>
                </div>
                <div className="space-y-1">
                  <div className="text-white/80 font-medium">Customer Support Helpdesk:</div>
                  <a href="mailto:support@phasecor.com" className="text-white font-bold hover:underline">
                    support@phasecor.com
                  </a>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-white/20 text-xs text-white/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white shrink-0" />
                  <span>Phasecor Healthcare &bull; Kalyan, Maharashtra 421306, India</span>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/"
                className="text-xs font-semibold text-[#2D8F7A] hover:text-[#184a3f] transition-colors inline-flex items-center gap-1.5"
              >
                <span>&larr; Return to Home</span>
              </Link>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <Link href="/terms-conditions" className="hover:text-slate-800 transition-colors">
                  Terms &amp; Conditions
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
