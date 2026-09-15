"use client";

import Image from "next/image";
import { TRUST_BADGES } from "./data";

export default function SupportBlocks() {
  return (
    <section className="py-12 sm:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TRUST_BADGES.map((item) => (
            <div
              key={item.title}
              className="group p-5 sm:p-6 rounded-2xl bg-[#f9f9eb] border border-[#e8e4d2] hover:border-[#2D8F7A] hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="relative w-12 h-12 p-2 rounded-xl bg-white border border-[#e8e4d2] shrink-0 flex items-center justify-center shadow-2xs">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                  sizes="48px"
                />
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#2D8F7A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
