"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedUp = 0;
    let accumulatedDown = 0;
    // Deliberate scroll-up: 8px filters touch micro-bounce while immediately responding to user scroll-up
    const SCROLL_UP_THRESHOLD = 8;
    const SCROLL_DOWN_THRESHOLD = 20;
    const TOP_THRESHOLD = 50;

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const deltaY = currentScrollY - lastScrollY;

      setIsScrolled(currentScrollY > 20);

      // Always visible near top of page
      if (currentScrollY <= TOP_THRESHOLD) {
        setVisible(true);
        accumulatedUp = 0;
        accumulatedDown = 0;
        lastScrollY = currentScrollY;
        return;
      }

      if (deltaY > 0) {
        // Scrolling down -> hide navbar after crossing threshold
        accumulatedDown += deltaY;
        accumulatedUp = 0;

        if (accumulatedDown >= SCROLL_DOWN_THRESHOLD) {
          setVisible(false);
          setMobileMenuOpen(false);
        }
      } else if (deltaY < 0) {
        // Scrolling up -> reappear only on deliberate, intentional upward scroll
        accumulatedUp += Math.abs(deltaY);
        accumulatedDown = 0;

        if (accumulatedUp >= SCROLL_UP_THRESHOLD) {
          setVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact Us", href: "/contact" },
    { label: "Store", href: "https://phasecor.com", isExternal: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#f9f9eb]/95 backdrop-blur-md border-b border-[#e8e4d2] transition-transform duration-300 ease-in-out will-change-transform ${
          visible || mobileMenuOpen
            ? "translate-y-0 pointer-events-auto"
            : "-translate-y-full pointer-events-none"
        } ${isScrolled ? "shadow-sm" : ""}`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between">
        {/* Brand Logo - Clean Logo Only */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative h-9 w-36 sm:h-10 sm:w-44 transition-transform duration-200 group-hover:opacity-90">
            <Image
              src="/images/brand/logo-dark-transparent.png"
              alt="Phasecor"
              fill
              className="object-contain object-left"
              priority
              sizes="176px"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links - Right Aligned */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = !link.isExternal && (
              link.href === "/"
                ? pathname === "/"
                : (pathname === link.href || pathname.startsWith(link.href))
            );

            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#2D8F7A] hover:text-[#237362] transition-colors duration-200 flex items-center gap-1"
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
                className={`text-base transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#2D8F7A] font-bold"
                    : "text-slate-800 font-semibold hover:text-[#2D8F7A]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2D8F7A] rounded-full"
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

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-slate-700 hover:text-[#2D8F7A] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e8e4d2] bg-[#f9f9eb] px-6 pt-3 pb-6 space-y-3 shadow-lg max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = !link.isExternal && (
                link.href === "/"
                  ? pathname === "/"
                  : (pathname === link.href || pathname.startsWith(link.href))
              );

              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold py-2.5 border-b border-[#e8e4d2] flex items-center justify-between text-[#2D8F7A]"
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
                  className={`text-base py-2.5 border-b border-[#e8e4d2] flex items-center justify-between ${
                    isActive
                      ? "text-[#2D8F7A] font-bold bg-[#e8f2ee]/50 px-3 rounded-lg border-none"
                      : "text-slate-800 font-semibold hover:text-[#2D8F7A]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
    {/* Spacer to preserve natural document flow so content never shifts */}
    <div className="h-16 sm:h-[68px] w-full shrink-0" aria-hidden="true" />
  </>
  );
}
