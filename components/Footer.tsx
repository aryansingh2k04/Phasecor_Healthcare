import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0E221E] text-white pt-16 pb-12 border-t border-[#1F6959]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-52 bg-white/95 px-3 py-1 rounded-lg">
                <Image
                  src="/images/brand/logo-dark-transparent.png"
                  alt="Phasecor Healthcare"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-sm text-[#C3DAD4] leading-relaxed max-w-sm">
              Phasecor Healthcare is a research-driven pharmaceutical entity specializing in bioavailability-engineered nutricosmetics and clinically proven topical dermatological formulations.
            </p>
            
            <div className="pt-2 text-xs text-[#789991] flex flex-wrap gap-x-3 gap-y-1">
              <span>IS 4011:2018 Validated</span>
              <span>&bull;</span>
              <span>ISO 9001:2015 Protocol</span>
              <span>&bull;</span>
              <span>FSSAI Central Licensed</span>
            </div>
          </div>

          {/* Quick Links: Formulations */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#89CEBF]">
              Formulations
            </h4>
            <ul className="space-y-2 text-sm text-[#C3DAD4]">
              <li>
                <Link
                  href="/products/niascobutin"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Niascobutin Serum</span>
                  <span className="text-[10px] text-[#2D8F7A] group-hover:text-white">Topical</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/primathion"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Primathion Oral</span>
                  <span className="text-[10px] text-[#2D8F7A] group-hover:text-white">Dual Delivery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/uvothera"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Uvothera SPF 60++++</span>
                  <span className="text-[10px] text-[#2D8F7A] group-hover:text-white">SPF 96.78</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xs text-[#2D8F7A] hover:text-white font-medium inline-flex items-center mt-2"
                >
                  View Complete Catalog
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#89CEBF]">
              Company & Standards
            </h4>
            <ul className="space-y-2 text-sm text-[#C3DAD4]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#dual-delivery" className="hover:text-white transition-colors">
                  Dual Delivery Innovation
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  Compliance & Quality
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters & Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#89CEBF]">
              Registered Office
            </h4>
            <div className="space-y-2 text-xs text-[#C3DAD4]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#2D8F7A] shrink-0 mt-0.5" />
                <span>
                  Phasecor Healthcare Operations<br />
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2D8F7A] shrink-0" />
                <a href="tel:+919326421312" className="hover:text-white">
                  +91 9326421312
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#2D8F7A] shrink-0" />
                <a href="mailto:support@phasecor.com" className="hover:text-white">
                  support@phasecor.com
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#789991]">
                FSSAI Central Lic No: <span className="text-white font-mono">12124999000251</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Institutional Notice */}
        <div className="py-6 border-b border-white/10 text-xs text-[#789991] leading-relaxed">
          <p>
            <strong className="text-white font-medium">Regulatory & Institutional Notice:</strong> This website is an informational and corporate dossier portal maintained by Phasecor Healthcare for medical practitioners, clinical researchers, pharmacists, and institutional distribution partners. In compliance with commercial and healthcare governance, Phasecor Healthcare does not conduct direct retail consumer transactions on this portal. All clinical trial claims reference verified independent testing protocols (IS 4011:2018 / ISO 9001:2015 by Mascot Spincontrol India).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#789991] space-y-3 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} Phasecor Healthcare. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Quality Policy
            </Link>
            <Link href="/certifications" className="hover:text-white transition-colors">
              Compliance Registry
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Institutional Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
