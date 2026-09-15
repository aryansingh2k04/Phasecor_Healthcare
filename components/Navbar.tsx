"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Formulations", href: "#formulations" },
    { label: "Medicines Pipeline", href: "#pipeline" },
    { label: "Science", href: "#science" },
    { label: "Contact Us", href: "#enquiry" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Clean Logo Only */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-40 sm:h-11 sm:w-48 transition-transform duration-200 group-hover:opacity-90">
            <Image
              src="/images/brand/logo-dark-transparent.png"
              alt="Phasecor"
              fill
              className="object-contain object-left"
              priority
              sizes="160px"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#419a85] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#enquiry"
            className="px-6 py-2.5 rounded-full bg-[#419a85] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#2D8F7A] transition-all duration-200"
          >
            Enquiry
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-[#419a85] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#419a85] py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 rounded-xl bg-[#419a85] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#2D8F7A]"
            >
              Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
