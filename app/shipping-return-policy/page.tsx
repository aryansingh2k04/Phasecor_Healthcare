import type { Metadata } from "next";
import Link from "next/link";
import { Truck, RotateCcw, Clock, ShieldCheck, CheckCircle2, AlertCircle, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Return Policy | Phasecor Healthcare",
  description:
    "Review Phasecor Healthcare's nationwide shipping timelines, order fulfillment, 7-day return policy, and doorstep reverse pickup procedure.",
};

export default function ShippingReturnPolicyPage() {
  return (
    <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
      {/* ── Page Hero Header ── */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Shipping &amp; Return Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              At Phasecor &ndash; Expert Skincare. Elevated., we prioritize delivering your skincare and healthcare formulations safely, reliably, and on time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content ── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">

            {/* Introductory Commitment */}
            <div className="p-5 sm:p-6 rounded-md bg-[#fbfdfc] border border-slate-200 space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2D8F7A]" />
                <span>Our Delivery &amp; Satisfaction Commitment</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our goal is to make your procurement and clinical supply experience smooth, reliable, and worry-free. Every parcel is dispatched in tamper-evident, climate-resilient packaging to protect active formulation integrity.
              </p>
            </div>

            {/* ══════════ SECTION 1: SHIPPING POLICY ══════════ */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-[#2D8F7A] text-white flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Shipping Policy</h2>
                  <p className="text-xs text-slate-500">Order processing, transit times, and delivery coordination</p>
                </div>
              </div>

              {/* 1.1 Order Processing */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2D8F7A]" />
                  <span>1. Order Processing Timeline</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  All orders are verified, packaged, and handed over to our premier logistics partners within <strong className="text-slate-800">1&ndash;2 business days</strong> (excluding national holidays and Sundays).
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  You will receive an automated dispatch confirmation email and SMS containing your airway bill (AWB) number once your package has shipped.
                </p>
              </div>

              {/* 1.2 Shipping Methods & Delivery Times */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#2D8F7A]" />
                  <span>2. Delivery Timelines</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block text-sm">Standard Domestic Shipping:</strong>
                    <span className="text-slate-600 block">
                      Typically delivered within <strong className="text-[#2D8F7A]">3&ndash;7 business days</strong> across serviceable pin codes in India.
                    </span>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block text-sm">Metros &amp; Tier-1 Cities:</strong>
                    <span className="text-slate-600 block">
                      Expedited routing generally reaches major metropolitan hubs within <strong className="text-[#2D8F7A]">2&ndash;4 business days</strong>.
                    </span>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 italic">
                  Note: Delivery timelines may experience minor variance during extreme weather events, regional elections, public holidays, or regulatory checkpost inspections.
                </p>
              </div>

              {/* 1.3 Charges & Tracking */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8F7A]" />
                  <span>3. Shipping Charges &amp; Live Tracking</span>
                </h3>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li><strong className="text-slate-800">Transparent Pricing:</strong> Applicable shipping fees are calculated dynamically at checkout based on package weight and destination pin code.</li>
                  <li><strong className="text-slate-800">Free Shipping Offers:</strong> Eligible orders exceeding promotional cart thresholds qualify for zero-cost standard shipping.</li>
                  <li><strong className="text-slate-800">Real-Time Tracking:</strong> Track your shipment end-to-end using the tracking link emailed upon dispatch until it reaches your doorstep.</li>
                </ul>
              </div>

              {/* 1.4 Transit Damage */}
              <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1.5">
                <strong className="flex items-center gap-1.5 font-bold">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>In-Transit Issues (Delays, Damage, or Loss)</span>
                </strong>
                <p className="text-amber-900/90 leading-relaxed">
                  If your package appears damaged upon delivery, or tracking indicates an unexplained halt, notify us immediately at <a href="mailto:support@phasecor.com" className="font-bold underline text-amber-950">support@phasecor.com</a> with your order number and photos of the outer box. We will coordinate directly with the carrier for immediate resolution or replacement.
                </p>
              </div>
            </div>

            {/* ══════════ SECTION 2: RETURN & REFUND POLICY ══════════ */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-[#2D8F7A] text-white flex items-center justify-center">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Return &amp; Refund Policy</h2>
                  <p className="text-xs text-slate-500">Eligibility conditions, 7-day window, and doorstep reverse pickup</p>
                </div>
              </div>

              {/* 2.1 Eligibility */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  1. Eligible Cases for Return or Replacement
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  We gladly approve returns, replacements, or full refunds under any of the following verified conditions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm pt-1">
                  <div className="p-3.5 bg-[#f7faf8] rounded-lg border border-[#dbe7e1]">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold text-[#2D8F7A]">Case A</strong>
                    <span className="text-slate-700 mt-1 block font-medium">Wrong Product Received</span>
                    <span className="text-slate-500 mt-0.5 block text-xs">Item delivered does not match your confirmed order invoice.</span>
                  </div>
                  <div className="p-3.5 bg-[#f7faf8] rounded-lg border border-[#dbe7e1]">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold text-[#2D8F7A]">Case B</strong>
                    <span className="text-slate-700 mt-1 block font-medium">Transit Damage</span>
                    <span className="text-slate-500 mt-0.5 block text-xs">Bottle, tube, sachet, or seal was cracked, leaked, or crushed during courier handling.</span>
                  </div>
                  <div className="p-3.5 bg-[#f7faf8] rounded-lg border border-[#dbe7e1]">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-bold text-[#2D8F7A]">Case C</strong>
                    <span className="text-slate-700 mt-1 block font-medium">Expired Product</span>
                    <span className="text-slate-500 mt-0.5 block text-xs">Delivered batch has exceeded its labeled expiration date upon receipt.</span>
                  </div>
                </div>
              </div>

              {/* 2.2 How to Request */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  2. How to Request Return / Replacement
                </h3>
                <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2D8F7A] text-white text-xs font-bold shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-slate-900">Contact Support within 7 Days:</strong>
                      <p className="text-slate-600 mt-0.5">
                        Email <a href="mailto:support@phasecor.com" className="text-[#2D8F7A] font-semibold underline">support@phasecor.com</a> within <strong className="text-slate-800">7 calendar days</strong> of receiving your delivery. Include your order ID, a brief explanation, and photos of the defective item and invoice.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2D8F7A] text-white text-xs font-bold shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-slate-900">Prompt Review (Within 48 Hours):</strong>
                      <p className="text-slate-600 mt-0.5">
                        Our quality team reviews your request within 48 business hours and notifies you of approval status.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2D8F7A] text-white text-xs font-bold shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-slate-900">Hassle-Free Doorstep Reverse Pickup:</strong>
                      <p className="text-slate-600 mt-0.5">
                        Once approved, we dispatch a courier partner to pick up the product directly from your address at zero cost to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.3 Refund & Replacement Processing */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  3. Inspection, Refunds &amp; Replacements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 bg-[#f7faf8] rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-sm">Refund Timelines:</strong>
                    <p className="text-slate-600 mt-1">
                      Once received and checked by our warehouse, refunds are initiated within <strong className="text-slate-900">7&ndash;10 business days</strong> directly to your original payment method (Credit/Debit Card, UPI, Net Banking).
                    </p>
                  </div>
                  <div className="p-4 bg-[#f7faf8] rounded-lg border border-slate-200">
                    <strong className="text-slate-900 block text-sm">Replacement Timelines:</strong>
                    <p className="text-slate-600 mt-1">
                      If you selected a replacement, a brand-new, quality-checked formulation unit is dispatched immediately following verification of the returned item.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2.4 Safety & Hygiene Clause */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <strong className="text-slate-900 block font-bold">Important Hygiene &amp; Safety Standard:</strong>
                <p className="text-slate-600">
                  In compliance with Indian pharmaceutical, cosmetic, and drug safety norms, opened, unsealed, or partially consumed skincare/medicinal formulations <strong className="text-slate-900">cannot be returned or refunded</strong>, except in verified cases of transit damage or pre-existing manufacturer defects.
                </p>
              </div>
            </div>

            {/* Contact Box */}
            <div className="p-6 sm:p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white space-y-4 shadow-md">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span>Need Assistance with an Order or Return?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Our support team is on standby to assist with tracking updates, reverse logistics, or product queries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                <div className="space-y-1">
                  <span className="text-white/80 font-medium block">Dedicated Support:</span>
                  <a href="mailto:support@phasecor.com" className="text-white font-bold hover:underline">
                    support@phasecor.com
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="text-white/80 font-medium block">Headquarters:</span>
                  <span className="text-white/90 font-medium">Phasecor Healthcare &bull; Kalyan, Maharashtra 421306, India</span>
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
                <Link href="/disclaimer" className="hover:text-slate-800 transition-colors">
                  Disclaimer
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
