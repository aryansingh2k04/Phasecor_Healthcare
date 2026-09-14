import React from 'react';
import Image from 'next/image';

interface TrustPillar {
  icon: string;
  title: string;
  description: string;
}

const TRUST_PILLARS: TrustPillar[] = [
  {
    icon: '/images/icons/fragrance_free.png',
    title: 'Fragrance Free',
    description:
      'It offers fragrance-free formulas that soothe, protect, and care for sensitive skin naturally.',
  },
  {
    icon: '/images/icons/allergy_tested.png',
    title: 'Allergy Tested',
    description:
      'Products are allergy-tested to ensure safe, gentle, and irritation-free skincare for everyone.',
  },
  {
    icon: '/images/icons/paraben_free.png',
    title: 'Paraben Free',
    description:
      'It uses paraben-free formulas to ensure safer, cleaner, and naturally healthier skincare results.',
  },
  {
    icon: '/images/icons/dermatologist_tested.png',
    title: 'Dermatologist Tested',
    description:
      'Clinically tested by dermatologists to ensure safety, gentleness, and suitability for all skin types.',
  },
];

export default function PhasecorTrustStrip() {
  return (
    <section
      aria-label="Clinical Trust Standards"
      className="bg-[#F9F9EB] border-y border-[#ECECD8] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#ECECD8]">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="py-8 sm:py-10 px-6 sm:px-8 flex flex-col items-center text-center group transition-all duration-300 hover:bg-[#F4F4E2]/60"
            >
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={pillar.icon}
                  alt={pillar.title}
                  width={56}
                  height={56}
                  className="object-contain w-auto h-14"
                />
              </div>

              <h3 className="text-base font-semibold tracking-tight text-[#111111] mb-2 group-hover:text-[#2D8F7A] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5A5A5A] leading-relaxed max-w-[240px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
