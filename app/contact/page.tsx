"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Send,
  HelpCircle,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { COMPANY_CONTACT, PRODUCTS, MEDICINE_PIPELINE } from "@/components/data";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialProductParam = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "Practitioner / Clinic",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (initialProductParam) {
      setFormData((prev) => ({
        ...prev,
        subject: initialProductParam,
        message: `I would like to enquire about clinical specifications, bulk supply, or prescribing details for ${initialProductParam}.`,
      }));
    }
  }, [initialProductParam]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-[#fbfdfc] border border-slate-200 shadow-sm">
      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for contacting Phasecor Healthcare. Our medical liaison or corporate team will review your inquiry and respond within 24 business hours.
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
                  organization: "",
                  role: "Practitioner / Clinic",
                  subject: "",
                  message: "",
                });
              }}
              className="px-6 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:border-[#2D8F7A] hover:text-[#2D8F7A] uppercase tracking-wider transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="name@organization.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="role" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Inquirer Category
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
              >
                <option value="Dermatologist / Physician">Dermatologist / Physician</option>
                <option value="Clinic / Hospital Formulary">Clinic / Hospital Formulary</option>
                <option value="Pharmacy / Institutional Distributor">Pharmacy / Institutional Distributor</option>
                <option value="Clinical Researcher">Clinical Researcher</option>
                <option value="Patient / Consumer">Patient / Consumer</option>
                <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Subject / Inquired Product
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Niascobutin Serum / Batch COA Request / Distribution"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Detailed Inquiry <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Please provide details regarding your inquiry, patient quantities, or institutional requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8F7A] focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Submit Clinical Inquiry</span>
            <Send className="w-3.5 h-3.5" />
          </button>
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
      {/* Header Banner */}
      <section className="relative bg-[#071714] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_40%,rgba(45,143,122,0.25)_0%,rgba(7,23,20,0)_65%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D8F7A]/20 border border-[#2D8F7A]/30 text-[#45C5A9] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Communications</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Connect with <br />
              <span className="bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent">
                Phasecor Healthcare
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We welcome dialogue with dermatologists, medical clinics, institutional pharmacies, distributors, and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Direct Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
                  Corporate Coordinates
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Reach Our Healthcare Advisory Team
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have a clinical query or need institutional product supply? Reach out directly via our contact details or fill out the clinical inquiry form.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-[#fbfdfc] border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Email Inquiries</h3>
                    <p className="text-xs text-slate-500">For corporate, clinical, or patient queries</p>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="text-sm font-semibold text-[#2D8F7A] hover:underline block pt-1"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#fbfdfc] border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Direct Telephone</h3>
                    <p className="text-xs text-slate-500">Clinical liaison &amp; support desk</p>
                    <a
                      href={`tel:${COMPANY_CONTACT.phone}`}
                      className="text-sm font-semibold text-[#2D8F7A] hover:underline block pt-1"
                    >
                      {COMPANY_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#fbfdfc] border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Registered Corporate Office</h3>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {COMPANY_CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#fbfdfc] border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f2ee] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Operational Hours</h3>
                    <p className="text-xs text-slate-600 pt-1">
                      {COMPANY_CONTACT.hours}
                    </p>
                    <p className="text-[11px] text-[#2D8F7A] font-semibold pt-0.5">
                      Guaranteed response within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Retail store link callout */}
              <div className="p-6 rounded-2xl bg-[#e8f2ee]/50 border border-[#b5d5cb] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                  Looking for the Retail Storefront?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To purchase personal consumer quantities directly online, please visit our consumer storefront at phasecor.com.
                </p>
                <div className="pt-2">
                  <a
                    href="https://phasecor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D8F7A] hover:text-[#237362]"
                  >
                    <span>Go to phasecor.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form wrapped in Suspense */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f7faf8] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#2D8F7A] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Clinical &amp; Corporate Inquiries FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
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
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
