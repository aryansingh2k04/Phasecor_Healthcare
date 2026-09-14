import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sun } from 'lucide-react';

export default function PhasecorSunscreenBanner() {
  return (
    <section
      aria-label="Advanced UV Protection Spotlight"
      className="py-12 sm:py-16 bg-[#F8FBFA] border-t border-[#ECECD8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#EAF6F8] via-[#E1F1F4] to-[#D5EDF1] border border-[#CDE5E9] shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[420px] lg:min-h-[480px]">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 z-10 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#2D8F7A]/20 backdrop-blur-xs">
                <Sun className="w-3.5 h-3.5 text-[#2D8F7A]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D8F7A]">
                  Daily Sun Defense, Healthy Glow
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0E221E] leading-[1.15]">
                Advanced UV Protection <span className="font-semibold text-[#2D8F7A]">Sunscreen</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4C655F] leading-relaxed max-w-lg font-normal">
                Clinically formulated broad-spectrum SPF photoprotection designed with non-comedogenic, lightweight emollience that leaves zero white cast and protects sensitive skin barriers.
              </p>

              <div className="pt-3 flex flex-wrap gap-4 items-center">
                <Link
                  href="/products/uvothera"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-[#111111] hover:bg-[#2D8F7A] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>View UVOTHERA Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>

                <div className="flex items-center space-x-2 text-xs font-semibold text-[#25423B]">
                  <ShieldCheck className="w-4 h-4 text-[#2D8F7A]" />
                  <span>Dermatologist Formulated</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Banner packshot) */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] lg:h-full w-full min-h-[380px] lg:min-h-[480px]">
              <Image
                src="/images/bento/uvothera_banner.png"
                alt="Advanced UV Protection Sunscreen Texture and Packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center lg:object-right"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
