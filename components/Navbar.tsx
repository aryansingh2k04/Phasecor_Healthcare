'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, FileText, ChevronRight } from 'lucide-react';
import ProductInquiryModal from './ProductInquiryModal';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Compliance & Quality' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(14,34,30,0.06)] border-b border-[#E3ECE9]'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#E3ECE9]/60'
        }`}
      >
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-10 w-44 sm:h-12 sm:w-52">
                <Image
                  src="/images/brand/logo-dark-transparent.png"
                  alt="Phasecor Healthcare Logo"
                  fill
                  className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                      isActive
                        ? 'text-[#2D8F7A] bg-[#EEF8F5] font-semibold'
                        : 'text-[#0E221E] hover:text-[#2D8F7A] hover:bg-[#F8FBFA]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg text-white bg-[#2D8F7A] hover:bg-[#1F6959] shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Institutional Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-90" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-2.5 py-1.5 text-[11px] font-semibold uppercase rounded-md text-white bg-[#2D8F7A]"
              >
                Inquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#0E221E] hover:text-[#2D8F7A] hover:bg-[#F8FBFA] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E3ECE9] bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg ${
                      isActive
                        ? 'bg-[#EEF8F5] text-[#2D8F7A] font-semibold'
                        : 'text-[#0E221E] hover:bg-[#F8FBFA]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#4C655F]" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E3ECE9] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInquiryModalOpen(true);
                }}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-lg text-white bg-[#2D8F7A] hover:bg-[#1F6959]"
              >
                <FileText className="w-4 h-4 mr-2" />
                Request Institutional Monograph
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Corporate Inquiry Modal */}
      <ProductInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </>
  );
}
