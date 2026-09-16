"use client";

import Image from "next/image";
import { TRUST_BADGES } from "./data";

export default function SupportBlocks() {
  return (
    <section className="py-12 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BADGES.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-md bg-gradient-to-b from-[#2D8F7A] to-[#237362] text-white shadow-lg space-y-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
