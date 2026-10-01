"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { COMPANY_CONTACT, PRODUCTS, MEDICINE_PIPELINE } from "@/components/data";
import HeroBackgroundEffect from "@/components/HeroBackgroundEffect";
import FadeIn from "@/components/animations/FadeIn";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const accessKey = "377d23dd-1993-4a7f-beca-cf791e7b77fe";

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject || "General Inquiry - Phasecor Healthcare",
        message: formData.message,
        from_name: "Phasecor Healthcare Inquiries",
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.message || "Failed to submit inquiry. Please check your network or try again."
        );
      }
    } catch {
      setErrorMessage("A network error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your message has been received by the Phasecor Healthcare team. We will review your inquiry and respond within 24 business hours.
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
          {/* Honeypot Botcheck (Spam Protection) */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          {errorMessage && (
            <div className="p-4 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-xs leading-relaxed">
              <strong>Submission note:</strong> {errorMessage}
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              required
              type="text"
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
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[200px] max-w-[240px] py-3.5 px-6 rounded-md bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md block text-center"
            >
              {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* ── Page Header Hero (Exact standard across all pages) ── */}
      <section className="relative bg-[#071714] text-white py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
        <HeroBackgroundEffect />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="block animate-hero-title">
                Get in
              </span>
              <span className="block mt-1 bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(45,143,122,0.45)] animate-hero-gradient animate-gradient-shift">
                Touch
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mx-auto max-w-2xl animate-hero-desc">
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
            <FadeIn delay={0.1} className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </FadeIn>

            {/* Right Column: Contact Details Panel (Standard Green Card Design) */}
            <FadeIn delay={0.2} className="lg:col-span-5">
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
                        Shop No. 4, Royal Residency Chs, Katemanevali, Opp. Vitthalwadi Station, Kalyan (E), Vitthalwadi, Kalyan, Maharashtra 421306, India
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
                        Monday – Saturday: 10:00 AM – 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Maps for Phasecor */}
                <div className="pt-2 border-t border-white/20">
                  <div className="rounded-md overflow-hidden border border-white/20 shadow-md">
                    <iframe
                      width="100%"
                      height="230"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://maps.google.com/maps?q=19.2274628,73.1477833&hl=en&z=17&output=embed"
                      title="Phasecor Location Map"
                    />
                  </div>
                  <div className="pt-2.5 flex items-center justify-between">
                    <span className="text-[11px] text-white/80 font-medium">
                      Phasecor &bull; Royal Residency, Opp. Vitthalwadi Station, Kalyan (E)
                    </span>
                    <a
                      href="https://maps.app.goo.gl/CizgU2pm6aXqY1Y98"
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
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
