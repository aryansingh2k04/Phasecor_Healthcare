'use client';

import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { CheckCircle2, ShieldCheck, Microscope, Layers, Activity, FileCheck, ArrowRight } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  parameters: {
    label: string;
    value: string;
    tolerance: string;
  }[];
  instrumentation: string;
  regulatoryStandard: string;
}

const STAGES: Stage[] = [
  {
    id: 1,
    title: 'Pharmacopeial Raw Material Quarantine',
    subtitle: 'High-Performance Liquid Chromatography & Spectroscopy',
    badge: 'Stage 01 • Assay',
    icon: Microscope,
    description:
      'Every active compound—including L-Glutathione, N-Acetyl-L-Cysteine, Tranexamic Acid, and Alpha Arbutin—enters mandatory quarantine. Samples are assayed via HPLC against USP/IP reference standards to guarantee active potency prior to compounding approval.',
    parameters: [
      { label: 'Active Molecular Purity', value: '≥ 98.50%', tolerance: '± 0.20%' },
      { label: 'Heavy Metals (Pb, As, Hg, Cd)', value: '< 0.1 ppm', tolerance: 'ICP-MS Non-Detectable' },
      { label: 'Microbiological Bioburden', value: '< 10 CFU/g', tolerance: 'Zero Pathogens' },
      { label: 'Moisture Content (Karl Fischer)', value: '≤ 1.50%', tolerance: 'Automated Coulometric' },
    ],
    instrumentation: 'Shimadzu Prominence HPLC & Agilent 7850 ICP-MS',
    regulatoryStandard: 'IP / USP Pharmacopeial Monograph Specifications',
  },
  {
    id: 2,
    title: 'Cleanroom Compounding & Micro-Dispersion',
    subtitle: 'WHO-GMP Schedule M Positive Pressure Class 100,000 Environment',
    badge: 'Stage 02 • Cleanroom',
    icon: Layers,
    description:
      'Manufacturing takes place in positive-pressure cleanroom suites with automated HEPA air filtration. For Dual Delivery capsules, lipophilic liquid phases are compounded separately from enteric-coated micro-pellets to avoid premature hydrolytic interactions.',
    parameters: [
      { label: 'Cleanroom Air Classification', value: 'Class 100,000 (ISO 8)', tolerance: 'HEPA 0.3μm @ 99.97%' },
      { label: 'Ambient Temperature', value: '20.5°C ± 1.5°C', tolerance: 'HVAC Continuously Logged' },
      { label: 'Relative Humidity (RH)', value: '45.0% ± 3.0%', tolerance: 'Dehumidified Enclosure' },
      { label: 'Dispersion Homogeneity', value: '99.4%', tolerance: 'Laser Particle Size Analysis' },
    ],
    instrumentation: 'Clean Air Positive Pressure HVAC & High-Shear Homogenizer',
    regulatoryStandard: 'WHO-GMP Schedule M & ISO 14644-1 Cleanroom Compliance',
  },
  {
    id: 3,
    title: 'Independent Human Closed Patch Trials',
    subtitle: 'Mascot Spincontrol Human Repeat Insult Patch Testing (IS 4011:2018)',
    badge: 'Stage 03 • Clinical Safety',
    icon: Activity,
    description:
      'Formulations undergo closed dermal occlusive patch testing on human volunteers under Independent Ethics Committee (IEC) oversight. Cutaneous responses are evaluated at 24, 48, and 72 hours by board-certified dermatologists to confirm 0.00 zero-irritancy scores.',
    parameters: [
      { label: 'Primary Dermal Irritation Index', value: '0.00 / 4.00', tolerance: 'Non-Irritant Classification' },
      { label: 'Erythema / Edema Grade', value: 'Grade 0 (Absent)', tolerance: '100% Subject Panel' },
      { label: 'Phototoxicity Screening', value: 'Negative', tolerance: 'UV-A / Visible Challenge' },
      { label: 'Ethics Committee Approval', value: 'ECR/267/Indt/GJ/2016', tolerance: 'Mascot Spincontrol India' },
    ],
    instrumentation: 'Finn Chamber Occlusive Delivery & Polarized Chromametry',
    regulatoryStandard: 'IS 4011:2018 Third Revision & ISO 9001:2015 Bureau Veritas',
  },
  {
    id: 4,
    title: 'Accelerated Stability & Dissolution Modeling',
    subtitle: 'ICH Climatic Stress Testing & Enteric Release Profiling',
    badge: 'Stage 04 • Stability',
    icon: ShieldCheck,
    description:
      'Finished dosage units are incubated in accelerated climatic stability chambers at 40°C and 75% Relative Humidity. Enteric capsules undergo USP Type II dissolution bath testing in simulated gastric fluid (pH 1.2) followed by simulated intestinal fluid (pH 6.8).',
    parameters: [
      { label: 'Gastric Fluid Integrity (pH 1.2)', value: '0.0% Degradation', tolerance: 'Passed > 90 min Transit' },
      { label: 'Intestinal Release Rate (pH 6.8)', value: '94.8% in 45 min', tolerance: 'Full Mucosal Bioavailability' },
      { label: 'Accelerated Stability Shelf Life', value: '24 Months Projected', tolerance: 'Retained Active Potency > 98%' },
      { label: 'Packaging Seal Hermeticity', value: 'Passed Helium Leak Test', tolerance: 'Zero Vapor Transmission' },
    ],
    instrumentation: 'Electrolab Dissolution Tester & Binder Climatic Test Chamber',
    regulatoryStandard: 'ICH Q1A(R2) Stability Guidelines & USP 711 Dissolution',
  },
  {
    id: 5,
    title: 'Statutory Batch Release & Certificate of Analysis',
    subtitle: 'Central FSSAI & Cosmetic Licensing Release Protocol',
    badge: 'Stage 05 • Batch Release',
    icon: FileCheck,
    description:
      'Every finished commercial batch receives an individual batch dossier with quantitative assay values, microbiological clearance, and quality manager sign-off before statutory release under Central FSSAI License No. 12124999000251.',
    parameters: [
      { label: 'FSSAI Central Statutory Lic', value: '12124999000251', tolerance: 'Fully Registered & Audited' },
      { label: 'Finished Batch Assay Match', value: '100.2% of Claim', tolerance: 'Within Statutory 95-105%' },
      { label: 'Barcoding & Tamper Integrity', value: 'Cryptographic Batch QR', tolerance: 'Anti-Counterfeiting Verified' },
      { label: 'Released Batch Retention', value: 'Lot Sample Archived', tolerance: 'Retained for 36 Months' },
    ],
    instrumentation: 'Automated Blister Inspection & High-Resolution COA Generation',
    regulatoryStandard: 'FSSAI Central Regulatory Framework & Indian Drugs & Cosmetics Rules',
  },
];

export default function InteractivePipelineTracker() {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const stageCardRef = useRef<HTMLDivElement>(null);

  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  useEffect(() => {
    if (stageCardRef.current) {
      animate(stageCardRef.current, {
        opacity: [0.3, 1],
        translateY: [10, 0],
        duration: 380,
        ease: 'outQuad',
      });
    }
  }, [activeStageId]);

  return (
    <div className="w-full bg-white rounded-3xl border border-[#E3ECE9] shadow-sm overflow-hidden">
      {/* Tracker Top Bar */}
      <div className="bg-[#F8FBFA] border-b border-[#E3ECE9] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D8F7A]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#0E221E] font-bold">
            Interactive QA Release Protocol
          </span>
          <span className="text-[10px] text-[#789991] font-mono">
            [VERIFICATION_SEQ: 5-STAGES]
          </span>
        </div>
        <div className="text-xs text-[#4C655F]">
          Select any stage below to inspect analytical parameters & instrumentation
        </div>
      </div>

      {/* Stage Selector Navigation */}
      <div className="grid grid-cols-5 border-b border-[#E3ECE9] bg-[#F8FBFA]/50 divide-x divide-[#E3ECE9]">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          const isPassed = stage.id < activeStageId;
          const Icon = stage.icon;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 sm:p-4 text-left transition-all relative flex flex-col justify-between ${
                isActive
                  ? 'bg-white shadow-xs'
                  : 'hover:bg-white/80 opacity-75 hover:opacity-100'
              }`}
            >
              {/* Active Indicator Bar */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#2D8F7A]" />
              )}

              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                    isActive
                      ? 'bg-[#EEF8F5] text-[#2D8F7A]'
                      : isPassed
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-gray-100 text-[#4C655F]'
                  }`}
                >
                  0{stage.id}
                </span>
                <Icon
                  className={`w-4 h-4 hidden sm:block ${
                    isActive ? 'text-[#2D8F7A]' : 'text-[#789991]'
                  }`}
                />
              </div>

              <div className="truncate text-xs font-bold text-[#0E221E] mt-1">
                <span className="hidden md:inline">{stage.title.split(' ')[0]} </span>
                <span className="hidden lg:inline">{stage.title.split(' ')[1]}</span>
                <span className="md:hidden">S{stage.id}</span>
              </div>
              <span className="text-[10px] text-[#789991] hidden sm:block truncate mt-0.5">
                {stage.badge.split('•')[1] || stage.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Inspector Card */}
      <div ref={stageCardRef} className="p-6 sm:p-8 space-y-6">
        {/* Header with Title & Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E3ECE9] pb-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs uppercase font-mono font-bold text-[#2D8F7A] tracking-wider">
                {activeStage.badge}
              </span>
              <span className="text-[#789991] text-xs">&bull;</span>
              <span className="text-xs text-[#4C655F] font-mono">
                {activeStage.regulatoryStandard}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E221E]">
              {activeStage.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#2D8F7A] mt-0.5">
              {activeStage.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#EEF8F5] text-[#1F6959] border border-[#D9EFE9] flex items-center font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#2D8F7A]" />
              Standard Verified
            </span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-xs sm:text-sm text-[#4C655F] leading-relaxed">
          {activeStage.description}
        </p>

        {/* Analytical Parameters Grid */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#0E221E]">
              Analytical Release Parameters & Tolerances
            </span>
            <span className="text-[11px] text-[#789991] font-mono">
              Laboratory Certified Specs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeStage.parameters.map((param, idx) => (
              <div
                key={idx}
                className="bg-[#F8FBFA] p-3.5 rounded-xl border border-[#E3ECE9] space-y-1 relative group hover:border-[#2D8F7A]/50 transition-colors"
              >
                <span className="text-[10px] text-[#789991] block leading-tight font-medium">
                  {param.label}
                </span>
                <div className="text-sm sm:text-base font-extrabold text-[#0E221E] font-mono">
                  {param.value}
                </div>
                <div className="text-[10px] text-[#2D8F7A] font-mono font-medium truncate">
                  {param.tolerance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment & Verification Footer */}
        <div className="bg-[#EEF8F5]/40 rounded-xl p-4 border border-[#D9EFE9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[#789991] block text-[11px]">Primary Test Instrumentation:</span>
            <span className="font-semibold text-[#0E221E]">{activeStage.instrumentation}</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const nextId = activeStageId >= 5 ? 1 : activeStageId + 1;
                setActiveStageId(nextId);
              }}
              className="inline-flex items-center text-xs font-bold text-[#2D8F7A] hover:text-[#1F6959] transition-colors"
            >
              <span>Inspect Stage {activeStageId >= 5 ? '01' : `0${activeStageId + 1}`}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
