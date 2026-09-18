"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { COMPANY_CONTACT, PRODUCTS, MEDICINE_PIPELINE } from "@/components/data";

function formatProductName(param: string): string {
  if (!param) return "";
  const foundProduct = PRODUCTS.find(
    (p) =>
      p.id.toLowerCase() === param.toLowerCase() ||
      p.name.toLowerCase() === param.toLowerCase()
  );
  if (foundProduct) return foundProduct.name;

  const foundMed = MEDICINE_PIPELINE.find(
    (m) =>
      m.code.toLowerCase() === param.toLowerCase() ||
      m.name.toLowerCase() === param.toLowerCase()
  );
  if (foundMed) return foundMed.name;

  return param
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function ContactForm() {
  const searchParams = useSearchParams();
  const initialProductParam = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialProductParam ? `Product Enquiry for ${formatProductName(initialProductParam)}` : "",
    message: "",
  });

  useEffect(() => {
    if (initialProductParam) {
      const productName = formatProductName(initialProductParam);
      setFormData((prev) => ({
        ...prev,
        subject: `Product Enquiry for ${productName}`,
        message: "",
      }));
    }
  }, [initialProductParam]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 rounded-md bg-[#fbfdfc] border border-slate-200 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
        Send Us a Message
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
        Fill in your details below and our healthcare advisory or institutional supply team will get back to you promptly.
      </p>

      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-md bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for contacting Phasecor Healthcare. Our team will review your inquiry and respond within 24 business hours.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                });
              }}
              className="px-6 py-2.5 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:border-[#2D8F7A] hover:text-[#2D8F7A] uppercase tracking-wider transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              required
              type="text"
              placeholder="Dr. / Mr. / Ms. Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Subject / Product Inquiry
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Product details, distribution, or partnership inquiry"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="How can our clinical or corporate team help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-auto min-w-[200px] max-w-[240px] py-3.5 px-6 rounded-md bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all shadow-md block text-center"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Where can retail consumers purchase Phasecor formulations?",
      a: "Phasecor Healthcare operates as a corporate and clinical information platform without a direct consumer storefront here. Retail patients and individual consumers can purchase our released formulations through our official retail storefront at phasecor.com.",
    },
    {
      q: "How can clinics, dermatologists, and hospitals place institutional orders?",
      a: "Practitioners and formulary procurement officers can submit the inquiry form above with their practice details or contact info@phasecor.com directly. Our institutional team provides batch dossiers, practitioner pricing, and sample packages.",
    },
    {
      q: "How does Phasecor verify formulation biocompatibility?",
      a: "Every formulation undergoes rigorous repeated patch testing under independent board-certified dermatologists across Fitzpatrick skin types I through VI, alongside HPLC purity assays and accelerated stability testing in cGMP certified environments.",
    },
    {
      q: "Can researchers or healthcare institutions request a Certificate of Analysis (COA)?",
      a: "Yes. Every commercial production batch is issued an individualized Certificate of Analysis documenting chemical assay purity, microbiological incubation, and active stability. You may request specific batch records via our contact form.",
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Page Header Hero (Exact standard across all pages) ── */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl">
              Whether you have an inquiry about our products, want to explore a partnership, or need support, our global team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content: 2-Column Layout (Form on Left, Green Card on Right) ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Contact Details Panel (Standard Green Card Design) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-md hover:shadow-[0_16px_36px_-6px_rgba(45,143,122,0.5),0_8px_16px_-4px_rgba(45,143,122,0.25)] transition-all duration-300 hover:-translate-y-1.5 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Contact Details
                  </h2>
                  <p className="text-xs text-white/80 mt-1">
                    Corporate &amp; Pharmacy Distribution Coordinates
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white/80">Address</h3>
                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                        Shop No. A1/01, Building No. B, Twinkle Apartment, Katemanivali, Katemanivali Naka, Kalyan East, Thane, Maharashtra – 421306
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white/80">Phone</h3>
                      <p className="text-xs sm:text-sm text-white/95 font-medium">
                        <a href="tel:+919326421312" className="hover:underline">
                          +91 93264 21312
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white/80">Email</h3>
                      <p className="text-xs sm:text-sm text-white/95 font-medium">
                        <a href="mailto:support@phasecor.com" className="hover:underline">
                          support@phasecor.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white/80">Operating Hours</h3>
                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                        Monday – Saturday: 9:00 AM – 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Maps for Rxpert Pharma */}
                <div className="pt-2 border-t border-white/20">
                  <div className="rounded-md overflow-hidden border border-white/20 shadow-md">
                    <iframe
                      width="100%"
                      height="230"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://maps.google.com/maps?q=Rxperts%20Pharma,%20Katemanivali,%20Kalyan%20East&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      title="Rxpert Pharma Location Map"
                    />
                  </div>
                  <div className="pt-2.5 flex items-center justify-between">
                    <span className="text-[11px] text-white/80 font-medium">
                      Rxpert Pharma &bull; Kalyan East
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rxperts+Pharma+Katemanivali+Kalyan+East"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline"
                    >
                      <span>Open on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ Section (Clean Cards) ── */}
      <section className="py-14 sm:py-20 bg-[#f9faf9] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Clinical &amp; Corporate Inquiries FAQ
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-md bg-white border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#2D8F7A]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 sm:pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
