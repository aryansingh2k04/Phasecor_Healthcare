"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f9f9eb] text-slate-800 text-sm border-t border-[#ede8d8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#e8e4d2]">
          {/* Column 1: Logo & Philosophy */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/brand/logo-dark-transparent.png"
                  alt="Phasecor"
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                />
              </div>
            </Link>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              At Phasecor, we don’t believe in quick fixes. We believe in phases. Skin doesn’t transform overnight; it evolves, adapts, repairs, and strengthens over time, and that’s exactly how we formulate.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li>
                <Link href="/" className="hover:text-[#2D8F7A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2D8F7A] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://phasecor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2D8F7A] transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2D8F7A] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-900">
              Important Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li>
                <a
                  href="https://phasecor.com/pages/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2D8F7A] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://phasecor.com/pages/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2D8F7A] transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://phasecor.com/pages/shipping-return-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2D8F7A] transition-colors"
                >
                  Shipping &amp; Return policy
                </a>
              </li>
              <li>
                <a
                  href="https://phasecor.com/pages/disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2D8F7A] transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-normal">
            &copy; 2025 Phasecor. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {/* X / Twitter Icon */}
            <a
              href="https://x.com/phasecor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-[#2D8F7A] transition-colors p-1"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/phasecor__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-[#2D8F7A] transition-colors p-1"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Back to top circle button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-black text-white hover:bg-[#2D8F7A] transition-colors flex items-center justify-center shadow-md ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
