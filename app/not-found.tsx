import Link from "next/link";
import { Home, Package, ArrowRight, PhoneCall, Compass, AlertCircle } from "lucide-react";
import HeroBackgroundEffect from "@/components/HeroBackgroundEffect";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
      {/* ── Hero Section ── */}
      <section className="relative bg-[#071714] text-white py-20 sm:py-28 lg:py-32 overflow-hidden text-center">
        <HeroBackgroundEffect />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D8F7A]/20 border border-[#2D8F7A]/30 text-[#7ff2d9] text-xs sm:text-sm font-semibold mb-6">
            <AlertCircle className="w-4 h-4 text-[#45C5A9]" />
            <span>Error 404 &bull; Page Not Found</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block text-slate-100">
              Lost Your Way?
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[#2D8F7A] via-[#3ec7ab] to-[#7ff2d9] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(45,143,122,0.45)]">
              Quality Healthcare is Within Reach.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            The page you requested does not exist, has been relocated, or is no longer available. Explore our therapeutic formulations or return to the main portal.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#2D8F7A] hover:bg-[#257564] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#2D8F7A]/25 hover:shadow-xl hover:shadow-[#2D8F7A]/35 hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <Package className="w-4 h-4 text-[#7ff2d9]" />
              <span>Explore Products</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-transparent hover:bg-white/5 border border-white/15 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-slate-400" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Helpful Navigation Links ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#f9f9eb]/40 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2D8F7A] tracking-wider uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>Suggested Navigation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Where would you like to go?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="group p-6 rounded-lg bg-white border border-slate-200 hover:border-[#2D8F7A]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#2D8F7A]/10 text-[#2D8F7A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#2D8F7A] transition-colors">
                  Product Formulations
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Browse UTIcor, Electcor, Chronicor, OvaPhase, and UVoThera clinical ranges.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#2D8F7A] gap-1 group-hover:gap-2 transition-all">
                <span>View catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/about"
              className="group p-6 rounded-lg bg-white border border-slate-200 hover:border-[#2D8F7A]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#2D8F7A]/10 text-[#2D8F7A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#2D8F7A] transition-colors">
                  About Phasecor
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discover our therapeutic mission, clinical values, and healthcare reach across India.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#2D8F7A] gap-1 group-hover:gap-2 transition-all">
                <span>Read our mission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="group p-6 rounded-lg bg-white border border-slate-200 hover:border-[#2D8F7A]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#2D8F7A]/10 text-[#2D8F7A] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#2D8F7A] transition-colors">
                  Support &amp; Distribution
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get in touch for institutional orders, pharmacy inquiries, or Kalyan office visits.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#2D8F7A] gap-1 group-hover:gap-2 transition-all">
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
