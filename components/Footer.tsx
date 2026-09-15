"use client";

import Image from "next/image";
import { ArrowUp, ExternalLink } from "lucide-react";
import { COMPANY_CONTACT } from "./data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f1a17] text-slate-400 text-xs border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="relative h-10 w-40">
              <Image
                src="/images/brand/logo-white-transparent.png"
                alt="Phasecor Healthcare"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Phasecor Healthcare bridges dermatological science and physiological healing. We engineer evidence-based formulations that restore skin barrier integrity in sustainable phases.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#2D8F7A] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={COMPANY_CONTACT.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#2D8F7A] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links matching user's exact pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-[#2D8F7A] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2D8F7A] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#2D8F7A] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2D8F7A] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://phasecor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2D8F7A] transition-colors inline-flex items-center gap-1 text-[#2D8F7A] font-semibold"
                >
                  <span>Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Formulations Products Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Products</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#products" className="hover:text-[#2D8F7A] transition-colors">
                  Niascobutin Face Serum
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2D8F7A] transition-colors">
                  Primathion Oral Supplement
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2D8F7A] transition-colors">
                  Uvothera Sunscreen
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[#2D8F7A] transition-colors">
                  Medicines Pipeline
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-[#2D8F7A] transition-colors block truncate">
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-[#2D8F7A] transition-colors">
                  {COMPANY_CONTACT.phone}
                </a>
              </li>
              <li className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                Shop No. 4, Royal Residency Chs, Katemanevali, Kalyan, Maharashtra 421306
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Medical Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            <strong className="text-slate-400">Medical Notice:</strong> This website serves corporate and clinical informational purposes for healthcare practitioners, researchers, institutional distributors, and patients. Phasecor Healthcare does not operate an open consumer storefront on this portal.
          </p>
          <p>
            Statements regarding dietary nutricosmetics and topical formulations are based on independent dermatological evaluations and analytical assays. Always consult a licensed dermatologist or medical practitioner for specific clinical conditions.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#09110f] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Phasecor Healthcare. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
