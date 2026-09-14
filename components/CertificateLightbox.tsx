'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ShieldCheck } from 'lucide-react';

interface CertificateLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  issuer: string;
  credentialNumber: string;
  summary: string;
}

export default function CertificateLightbox({
  isOpen,
  onClose,
  imageSrc,
  title,
  issuer,
  credentialNumber,
  summary,
}: CertificateLightboxProps) {
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
    <div
      className="fixed inset-0 z-50 bg-[#0E221E]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl border border-[#E3ECE9] max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="bg-[#EEF8F5] px-6 py-4 border-b border-[#E3ECE9] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#2D8F7A]" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#0E221E]">{title}</h3>
              <p className="text-xs text-[#4C655F]">
                {issuer} &bull; <span className="font-mono text-[#0E221E]">{credentialNumber}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#4C655F] hover:text-[#0E221E] hover:bg-white/80 transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] bg-[#F8FBFA] p-4 flex items-center justify-center overflow-auto">
          <div className="relative w-full h-[60vh] max-w-2xl shadow-lg border border-[#E3ECE9] rounded-lg overflow-hidden bg-white">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Caption and Verification Strip */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E3ECE9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <p className="text-[#4C655F] max-w-xl">{summary}</p>
          <div className="flex items-center space-x-2 shrink-0">
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#EEF8F5] text-[#2D8F7A] font-semibold border border-[#D9EFE9]">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Verified Authenticity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
