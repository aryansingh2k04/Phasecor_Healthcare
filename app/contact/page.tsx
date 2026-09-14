'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const FAQS = [
  {
    question: 'Can individual consumers purchase directly from this website?',
    answer:
      'No. Phasecor Healthcare operates this website strictly as a corporate and clinical monograph portal for medical practitioners, hospital formulary directors, pharmacists, and distribution partners. Direct retail e-commerce transactions are not conducted here. Formulations are accessible via authorized dermatology clinics and partner pharmacy networks.',
  },
  {
    question: 'How do dermatology clinics request clinical trial dossiers and sample kits?',
    answer:
      'Dermatology clinics and medical centers can submit their clinic details via the Institutional Inquiry form on this page or through the "Institutional Inquiry" button in the header. Once credentialed, our medical affairs liaison will dispatch clinical trial monographs, product brochures, and physician evaluation kits.',
  },
  {
    question: 'What independent clinical protocols validate Phasecor topical formulations?',
    answer:
      'Topical formulations like Niascobutin undergo closed human repeat insult patch testing (HRIPT) under protocol IS 4011:2018 (Third Revision) supervised by Mascot Spincontrol India. Testing is audited under ISO 9001:2015 Bureau Veritas certification and approved by an Independent Ethics Committee, achieving a confirmed 0.00 zero-irritancy score.',
  },
  {
    question: 'What is the regulatory licensing framework for Primathion Nutricosmetic?',
    answer:
      'Primathion is fully licensed under Central FSSAI License No. 12124999000251. It is manufactured in state-of-the-art facilities compliant with WHO-GMP and Schedule M standards, with every batch undergoing HPLC assay testing for 98%+ glutathione purity and ICP-MS testing for heavy metal absence.',
  },
  {
    question: 'What are the parameters for institutional hospital and distribution supply?',
    answer:
      'Institutional procurement is fulfilled in standardized shipper cartons with lot-specific Certificates of Analysis (COA) and validated shelf-life retention data. Temperature-monitored distribution logistics are provided for all regional healthcare distributors.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Practicing Dermatologist / Physician',
    organization: '',
    email: '',
    phone: '',
    city: '',
    department: 'Hospital / Clinic Direct Procurement',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = 'CORP-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO HEADER */}
      <section className="relative pt-16 pb-16 bg-gradient-to-b from-[#F8FBFA] to-white border-b border-[#E3ECE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs uppercase font-bold tracking-widest text-[#2D8F7A]">
            Corporate & Medical Affairs
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E221E] tracking-tight max-w-3xl mx-auto">
            Corporate Contact & Institutional Inquiries
          </h1>
          <p className="text-base sm:text-lg text-[#4C655F] max-w-2xl mx-auto leading-relaxed">
            Direct channels for healthcare institutions, hospital formulary committees, clinical investigators, and regional pharmaceutical distributors.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT & DIRECTORY GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Form Column */}
            <div className="lg:col-span-7 bg-[#F8FBFA] rounded-3xl p-6 sm:p-10 border border-[#E3ECE9] shadow-xs">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                  Official Submission Portal
                </span>
                <h2 className="text-2xl font-bold text-[#0E221E]">
                  Submit an Institutional Inquiry
                </h2>
                <p className="text-xs text-[#4C655F]">
                  Please provide your professional credentials and institutional details.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#E3ECE9] space-y-4 shadow-sm">
                  <div className="w-16 h-16 bg-[#EEF8F5] text-[#2D8F7A] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#EEF8F5]/50">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0E221E]">
                    Institutional Request Logged
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4C655F] max-w-md mx-auto">
                    Your institutional inquiry has been routed to Phasecor Medical Affairs. You will receive an official response and reference documentation within 24–48 business hours.
                  </p>
                  <div className="p-4 bg-[#F8FBFA] border border-[#E3ECE9] rounded-xl max-w-xs mx-auto text-left text-xs space-y-1">
                    <div className="flex justify-between text-[#4C655F]">
                      <span>Tracking ID:</span>
                      <strong className="text-[#0E221E] font-mono">{referenceId}</strong>
                    </div>
                    <div className="flex justify-between text-[#4C655F]">
                      <span>Submitted By:</span>
                      <strong className="text-[#0E221E]">{formData.name}</strong>
                    </div>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-[#2D8F7A] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                        Full Name & Title *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                        Professional Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                      >
                        <option value="Practicing Dermatologist / Physician">Practicing Dermatologist / Physician</option>
                        <option value="Hospital Pharmacy Director">Hospital Pharmacy Director</option>
                        <option value="Clinical Research Investigator">Clinical Research Investigator</option>
                        <option value="Pharmaceutical Distributor">Pharmaceutical Distributor</option>
                        <option value="Formulary Committee Member">Formulary Committee Member</option>
                        <option value="Other Medical Professional">Other Medical Professional</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                        Clinic / Hospital / Organization *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Organization Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                        City / State *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Mumbai, Maharashtra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                        Professional Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="doctor@institution.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                        Contact Telephone *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                      Target Department / Nature of Requirement
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                    >
                      <option value="Hospital / Clinic Direct Procurement">Hospital / Clinic Direct Procurement</option>
                      <option value="Dermatologist Clinical Evaluation Kit">Dermatologist Evaluation Kit & Samples</option>
                      <option value="Full Clinical Dossier / COA Request">Full Clinical Dossier & COA Request</option>
                      <option value="Regional Pharmaceutical Distribution">Regional Pharmaceutical Distribution</option>
                      <option value="Export & Institutional Partnerships">Export & Institutional Supply</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                      Requirement Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please indicate required formulations, batch volumes, or clinical trial documentation needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E3ECE9] rounded-xl focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center text-[11px] text-[#4C655F]">
                      <ShieldCheck className="w-4 h-4 mr-1 text-[#2D8F7A]" />
                      <span>Confidential corporate handling</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-[#2D8F7A] hover:bg-[#1F6959] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 mr-2" />
                          <span>Transmit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Information & Headquarters Column */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
                  Corporate Office
                </span>
                <h3 className="text-2xl font-bold text-[#0E221E]">
                  Phasecor Healthcare Operations
                </h3>
                <p className="text-xs sm:text-sm text-[#4C655F] leading-relaxed">
                  Headquartered in Mumbai with clinical testing coordination spanning Maharashtra and pan-India manufacturing partnerships.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0E221E]">Registered Office</h4>
                    <p className="text-xs text-[#4C655F] mt-0.5">
                      Phasecor Healthcare Operations<br />
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0E221E]">Direct Corporate Line</h4>
                    <a
                      href="tel:+919326421312"
                      className="text-xs text-[#2D8F7A] hover:underline font-semibold mt-0.5 block"
                    >
                      +91 9326421312
                    </a>
                    <span className="text-[11px] text-[#789991]">
                      Mon – Sat, 09:30 – 18:30 IST
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0E221E]">Medical Affairs & Care</h4>
                    <a
                      href="mailto:support@phasecor.com"
                      className="text-xs text-[#2D8F7A] hover:underline font-semibold mt-0.5 block"
                    >
                      support@phasecor.com
                    </a>
                    <span className="text-[11px] text-[#789991]">
                      Institutional correspondence & pharmacovigilance
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FBFA] border border-[#E3ECE9] flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF8F5] text-[#2D8F7A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0E221E]">Central Statutory Licensure</h4>
                    <p className="text-xs text-[#4C655F] mt-0.5">
                      FSSAI Central Lic No: <span className="font-mono text-[#0E221E] font-semibold">12124999000251</span>
                    </p>
                    <p className="text-[11px] text-[#789991] mt-0.5">
                      Cosmetic Mfg Lic: Cos/WZ/2022/91
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INSTITUTIONAL FAQ ACCORDION */}
      <section className="py-16 bg-[#F8FBFA] border-t border-[#E3ECE9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A]">
              Institutional Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0E221E]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#4C655F]">
              Governance, clinical trial verification, and distribution policies.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#E3ECE9] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between font-semibold text-sm text-[#0E221E] hover:text-[#2D8F7A] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#2D8F7A] shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4C655F] shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#4C655F] leading-relaxed border-t border-[#E3ECE9]/50">
                      {faq.answer}
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
