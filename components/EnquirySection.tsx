"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_CONTACT, PRODUCTS, MEDICINE_PIPELINE } from "./data";

interface EnquirySectionProps {
  initialProductId?: string;
}

export default function EnquirySection({ initialProductId = "niascobutin" }: EnquirySectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Practitioner / Clinic",
    subject: initialProductId,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#419a85] font-semibold">
              Contact Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Clinical &amp; Product Inquiries
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              We welcome dialogue with dermatologists, medical clinics, pharmacies, distributors, and patients seeking detailed formulation information or medicine pipeline collaboration.
            </p>

            {/* Contact Info Box */}
            <div className="p-6 rounded-2xl bg-[#f9faf9] border border-slate-200 space-y-4">
              <div className="flex items-start gap-3 text-xs">
                <Mail className="w-4 h-4 text-[#419a85] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Drop Us Email</span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-[#419a85] font-medium hover:underline">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Phone className="w-4 h-4 text-[#419a85] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Call Us</span>
                  <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-[#419a85] font-medium hover:underline">
                    {COMPANY_CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-[#419a85] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Address</span>
                  <span className="text-slate-600 leading-relaxed block">
                    {COMPANY_CONTACT.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs border-t border-slate-200/60 pt-3">
                <Clock className="w-4 h-4 text-[#419a85] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Operating Hours</span>
                  <span className="text-slate-500">{COMPANY_CONTACT.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#fbfdfc] border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#e8f2ee] text-[#419a85] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Phasecor Healthcare. Our team will review your message and respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        role: "Practitioner / Clinic",
                        subject: "niascobutin",
                        message: ""
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#419a85] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2D8F7A]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#419a85] bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#419a85] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#419a85] bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Inquiry Type</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#419a85] bg-white"
                      >
                        <option value="Practitioner / Clinic">Dermatologist / Clinic</option>
                        <option value="Pharmacy / Distribution">Pharmacy / Distribution</option>
                        <option value="R&D Collaboration">R&amp;D Collaboration</option>
                        <option value="General Query">General Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Subject / Formulation</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#419a85] bg-white font-medium"
                    >
                      <optgroup label="Clinical Formulations">
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Medicines Pipeline">
                        {MEDICINE_PIPELINE.map((m) => (
                          <option key={m.code} value={m.name}>
                            {m.name}
                          </option>
                        ))}
                      </optgroup>
                      <option value="general">General Healthcare Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your inquiry or requirements here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#419a85] bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#419a85] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2D8F7A] transition-all shadow-sm"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
