'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, Building2, User, Mail, Phone, MapPin } from 'lucide-react';

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

function ProductInquiryContent({
  preselectedProduct,
  onClose,
}: {
  preselectedProduct?: string;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    city: '',
    product: preselectedProduct || 'All Formulations (Full Institutional Dossier)',
    inquiryType: 'Clinic & Hospital Supply',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = 'PH-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="relative bg-white rounded-2xl shadow-2xl border border-[#E3ECE9] max-w-xl w-full overflow-hidden transition-all"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="bg-[#EEF8F5] px-6 py-4 border-b border-[#E3ECE9] flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#2D8F7A] text-white flex items-center justify-center font-bold text-sm">
            PH
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#0E221E]">
              Institutional & Clinic Inquiry
            </h3>
            <p className="text-xs text-[#4C655F]">
              Product Dossiers, Clinical Samples & Bulk Supply Requests
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-[#4C655F] hover:text-[#0E221E] p-1.5 rounded-lg hover:bg-white/80 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-6">
        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-[#EEF8F5] text-[#2D8F7A] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#EEF8F5]/50">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0E221E]">
                Inquiry Dispatched Successfully
              </h4>
              <p className="text-sm text-[#4C655F] mt-1 max-w-sm mx-auto">
                Our corporate medical affairs team will review your credentials and provide the requested dossier or distribution prospectus.
              </p>
            </div>

            <div className="p-4 bg-[#F8FBFA] border border-[#E3ECE9] rounded-xl max-w-sm mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between text-[#4C655F]">
                <span>Reference ID:</span>
                <span className="font-mono font-bold text-[#0E221E]">{referenceId}</span>
              </div>
              <div className="flex justify-between text-[#4C655F]">
                <span>Applicant:</span>
                <span className="font-medium text-[#0E221E]">{formData.name}</span>
              </div>
              <div className="flex justify-between text-[#4C655F]">
                <span>Institution:</span>
                <span className="font-medium text-[#0E221E]">{formData.institution || 'Individual Practice'}</span>
              </div>
              <div className="flex justify-between text-[#4C655F]">
                <span>Selected Focus:</span>
                <span className="font-semibold text-[#2D8F7A]">{formData.product}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-lg bg-[#2D8F7A] text-white text-sm font-semibold hover:bg-[#1F6959] transition-colors"
              >
                Return to Portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                  Contact Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#4C655F] absolute left-3 top-2.5" />
                  <input
                    required
                    type="text"
                    placeholder="Dr. / Mr. / Ms. Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                  Clinic / Institution / Pharmacy *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#4C655F] absolute left-3 top-2.5" />
                  <input
                    required
                    type="text"
                    placeholder="Organization Name"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                  Professional Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#4C655F] absolute left-3 top-2.5" />
                  <input
                    required
                    type="email"
                    placeholder="name@institution.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                  Contact Phone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#4C655F] absolute left-3 top-2.5" />
                  <input
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                  Formulation Focus
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A] bg-white"
                >
                  <option value="All Formulations (Full Institutional Dossier)">
                    All Formulations (Full Institutional Dossier)
                  </option>
                  <option value="Niascobutin Face Serum (30ml)">
                    Niascobutin Face Serum (30ml)
                  </option>
                  <option value="Primathion Dual-Delivery Capsules (60 Caps)">
                    Primathion Dual-Delivery Capsules (60 Caps)
                  </option>
                  <option value="Uvothera Sunscreen Gel SPF 60++++ (50g)">
                    Uvothera Sunscreen Gel SPF 60++++ (50g)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                  Nature of Inquiry
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A] bg-white"
                >
                  <option value="Clinic & Hospital Supply">Clinic & Hospital Direct Supply</option>
                  <option value="Dermatologist Evaluation Kit">Dermatologist Evaluation Kit / Samples</option>
                  <option value="Clinical Dossier & COA Request">Clinical Trial Dossier & COA Request</option>
                  <option value="Regional Pharmacy Distribution">Regional Pharmacy Distribution</option>
                  <option value="Contract / Export Inquiries">Institutional Export Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                Location (City / State / Country)
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#4C655F] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Maharashtra"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0E221E] mb-1">
                Specific Requirements or Monograph Notes
              </label>
              <textarea
                rows={3}
                placeholder="Specify required batch volume, study documentation, or clinic requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-[#E3ECE9] rounded-lg focus:outline-none focus:border-[#2D8F7A] focus:ring-1 focus:ring-[#2D8F7A] resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#E3ECE9]">
              <div className="flex items-center text-[11px] text-[#4C655F]">
                <ShieldCheck className="w-4 h-4 mr-1 text-[#2D8F7A]" />
                <span>Verified institutional confidentiality</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#2D8F7A] hover:bg-[#1F6959] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ProductInquiryModal({
  isOpen,
  onClose,
  preselectedProduct,
}: ProductInquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0E221E]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <ProductInquiryContent
        key={preselectedProduct || 'default'}
        preselectedProduct={preselectedProduct}
        onClose={onClose}
      />
    </div>
  );
}
