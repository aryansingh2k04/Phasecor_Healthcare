"use client";

import Image from "next/image";
import { TRUST_BADGES } from "./data";

export default function SupportBlocks() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_BADGES.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#fbfdfc] transition-colors"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
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
