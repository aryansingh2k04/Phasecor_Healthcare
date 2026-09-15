"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact Us", href: "/contact" },
    { label: "Store", href: "https://phasecor.com", isExternal: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f9eb]/95 backdrop-blur-md border-b border-[#e8e4d2] transition-all duration-300">
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
          {navLinks.map((link) => {
            const isActive = !link.isExternal && (
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            );

            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#2D8F7A] hover:text-[#237362] transition-colors duration-200 flex items-center gap-1"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#2D8F7A] font-semibold"
                    : "text-slate-700 hover:text-[#2D8F7A]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2D8F7A] shadow-[0_0_8px_rgba(45,143,122,0.8)] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Direct link to Phasecor Store */}
        <div className="hidden md:flex items-center">
          <a
            href="https://phasecor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#2D8F7A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#237362] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm hover:shadow"
          >
            <span>Visit Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-[#2D8F7A] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e8e4d2] bg-[#f9f9eb] px-6 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = !link.isExternal && (
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              );

              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold py-2.5 border-b border-slate-100 flex items-center justify-between text-[#2D8F7A]"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 border-b border-slate-100 flex items-center justify-between ${
                    isActive
                      ? "text-[#2D8F7A] font-semibold bg-[#e8f2ee]/40 px-3 rounded-lg border-none"
                      : "text-slate-800 hover:text-[#2D8F7A]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <a
              href="https://phasecor.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2D8F7A] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#237362]"
            >
              <span>Visit Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
