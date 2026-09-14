'use client';

import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Activity, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface StageData {
  stageNumber: string;
  title: string;
  subheading: string;
  phRange: string;
  transitTime: string;
  mechanism: string;
  lipidStatus: string;
  powderStatus: string;
  clinicalAdvantage: string;
  statValue: string;
  statLabel: string;
}

const STAGES: StageData[] = [
  {
    stageNumber: '01',
    title: 'Gastric Transit',
    subheading: 'Hyper-Acidic Gastric Environment (Stomach)',
    phRange: 'pH 1.2 – 1.8',
    transitTime: '0 – 90 Minutes',
    mechanism:
      'Standard oral glutathione is hydrolysed and completely destroyed by gastric hydrochloric acid and pepsin. In Primathion, cold-pressed Evening Primrose Oil forms a hydrophobic protective lipid jacket around enteric-coated micro-beadlets, preventing gastric acid ingress.',
    lipidStatus: 'Hydrophobic protective shield intact',
    powderStatus: 'Enteric liposomal beadlets completely sealed & inert',
    clinicalAdvantage: '>92% active peptide integrity preserved through stomach transit',
    statValue: '92.4%',
    statLabel: 'Gastric Acid Survival Rate',
  },
  {
    stageNumber: '02',
    title: 'Duodenal Transition',
    subheading: 'pH-Triggered Dispersion & Neutralization (Duodenum)',
    phRange: 'pH 6.2 – 6.8',
    transitTime: '90 – 120 Minutes',
    mechanism:
      'Upon passing through the pyloric sphincter into the neutralising environment of the duodenum, pancreatic enzymes emulsify the lipid matrix. The transition to neutral pH initiates dissolution of the specialized enteric beadlet polymer, freeing intact liposomal GSH.',
    lipidStatus: 'Bile salt mediated micellar dispersion',
    powderStatus: 'Targeted polymer dissociation begins at neutral pH threshold',
    clinicalAdvantage: 'Zero premature degradation or cross-oxidation between lipids and vitamins',
    statValue: '100%',
    statLabel: 'Controlled Site Release',
  },
  {
    stageNumber: '03',
    title: 'Mucosal Absorption',
    subheading: 'Synchronized Systemic Uptake (Jejunum & Ileum)',
    phRange: 'pH 7.0 – 7.4',
    transitTime: '120 – 180 Minutes',
    mechanism:
      'In the small intestine, phospholipid liposomes fuse with intestinal enterocyte membranes for direct mucosal and lymphatic delivery. Simultaneously, GLA from Evening Primrose Oil enters the circulation to reinforce cutaneous barrier ceramides from within.',
    lipidStatus: 'GLA absorbed into lymphatic system',
    powderStatus: 'Intact liposomes enter mucosal circulation without hepatic first-pass loss',
    clinicalAdvantage: '3.8x higher systemic glutathione bioavailability than standard crystalline oral formulations',
    statValue: '3.8x',
    statLabel: 'Bioavailability Multiple',
  },
];

export default function DualDeliverySimulator() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STAGES[activeStageIndex];

  return (
    <div className="bg-white rounded-3xl border border-[#E3ECE9] shadow-lg overflow-hidden">
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-[#E3ECE9] bg-gradient-to-r from-[#F8FBFA] to-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-widest text-[#2D8F7A] block">
            Interactive Pharmacokinetic Simulator
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0E221E] mt-1">
            Dual Delivery In-Vivo Transit Mechanics
          </h3>
        </div>

        {/* Stage Tabs */}
        <div className="flex bg-[#EEF8F5] p-1.5 rounded-xl border border-[#D9EFE9] self-start md:self-auto">
          {STAGES.map((stage, idx) => (
            <button
              key={stage.stageNumber}
              onClick={() => setActiveStageIndex(idx)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
                activeStageIndex === idx
                  ? 'bg-[#2D8F7A] text-white shadow-xs'
                  : 'text-[#4C655F] hover:text-[#0E221E]'
              }`}
            >
              <span>{stage.stageNumber}</span>
              <span className="hidden sm:inline">{stage.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Interactive Body */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Visual Architecture Simulator */}
        <div className="lg:col-span-6 bg-gradient-to-b from-[#F8FBFA] to-[#EEF8F5]/40 rounded-2xl p-6 sm:p-8 border border-[#E3ECE9] flex flex-col items-center justify-center relative min-h-[340px]">
          
          {/* Animated SVG Capsule Model */}
          <div className="relative w-72 h-44 flex items-center justify-center">
            <svg
              viewBox="0 0 320 180"
              className="w-full h-full transition-all duration-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="oilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2D8F7A" stopOpacity={activeStageIndex === 0 ? "0.35" : activeStageIndex === 1 ? "0.2" : "0.08"} />
                  <stop offset="100%" stopColor="#3BA68F" stopOpacity={activeStageIndex === 0 ? "0.25" : activeStageIndex === 1 ? "0.15" : "0.04"} />
                </linearGradient>
                <linearGradient id="capStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2D8F7A" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1F6959" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Capsule Outer Capsule Silhouette */}
              <rect
                x="40"
                y="35"
                width="240"
                height="110"
                rx="55"
                fill="url(#oilGrad)"
                stroke="url(#capStroke)"
                strokeWidth={activeStageIndex === 2 ? "1.5" : "2.5"}
                strokeDasharray={activeStageIndex === 2 ? "4 4" : "none"}
                className="transition-all duration-700"
              />

              {/* Liquid lipid suspended globules */}
              <circle cx="85" cy="70" r="14" fill="#2D8F7A" fillOpacity={activeStageIndex === 2 ? "0.2" : "0.4"} />
              <circle cx="110" cy="115" r="18" fill="#3BA68F" fillOpacity={activeStageIndex === 2 ? "0.2" : "0.35"} />
              <circle cx="230" cy="75" r="16" fill="#2D8F7A" fillOpacity={activeStageIndex === 2 ? "0.2" : "0.4"} />
              <circle cx="210" cy="110" r="12" fill="#3BA68F" fillOpacity={activeStageIndex === 2 ? "0.2" : "0.35"} />

              {/* Enteric Protected Micro-Beadlets */}
              <g className={`transition-all duration-500 ${activeStageIndex === 2 ? 'opacity-40 scale-105' : 'opacity-100'}`}>
                <circle cx="150" cy="65" r="10" fill="#FFFFFF" stroke="#2D8F7A" strokeWidth="2" />
                <circle cx="150" cy="65" r="5" fill="#2D8F7A" />

                <circle cx="175" cy="85" r="12" fill="#FFFFFF" stroke="#2D8F7A" strokeWidth="2" />
                <circle cx="175" cy="85" r="6" fill="#2D8F7A" />

                <circle cx="145" cy="105" r="10" fill="#FFFFFF" stroke="#2D8F7A" strokeWidth="2" />
                <circle cx="145" cy="105" r="5" fill="#2D8F7A" />

                <circle cx="180" cy="115" r="9" fill="#FFFFFF" stroke="#2D8F7A" strokeWidth="2" />
                <circle cx="180" cy="115" r="4.5" fill="#2D8F7A" />
              </g>

              {/* Diffusion active particles in stage 3 */}
              {activeStageIndex === 2 && (
                <g className="animate-pulse">
                  <circle cx="25" cy="90" r="4" fill="#2D8F7A" />
                  <circle cx="295" cy="90" r="4" fill="#2D8F7A" />
                  <circle cx="160" cy="15" r="3.5" fill="#3BA68F" />
                  <circle cx="160" cy="165" r="3.5" fill="#3BA68F" />
                </g>
              )}
            </svg>
          </div>

          {/* Real-time Physiological Telemetry */}
          <div className="w-full mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-[#E3ECE9]">
              <span className="text-[#789991] block text-[10px] uppercase font-bold tracking-wider">
                Targeted Environment
              </span>
              <span className="font-bold text-[#0E221E] text-sm mt-0.5 block">
                {activeStage.phRange}
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E3ECE9]">
              <span className="text-[#789991] block text-[10px] uppercase font-bold tracking-wider">
                Physiological Window
              </span>
              <span className="font-bold text-[#0E221E] text-sm mt-0.5 block">
                {activeStage.transitTime}
              </span>
            </div>
          </div>
        </div>

        {/* Right Pharmacokinetic Breakdown */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#2D8F7A]">
              <span>Stage {activeStage.stageNumber}</span>
              <span>&bull;</span>
              <span>{activeStage.subheading}</span>
            </div>
            <h4 className="text-2xl font-bold text-[#0E221E] mt-1">
              {activeStage.title}
            </h4>
            <p className="text-sm text-[#4C655F] leading-relaxed mt-2">
              {activeStage.mechanism}
            </p>
          </div>

          {/* Status Matrix */}
          <div className="space-y-2.5 text-xs">
            <div className="p-3.5 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9] flex items-start space-x-3">
              <CheckCircle2 className="w-4 h-4 text-[#2D8F7A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0E221E] block">Lipophilic Phase (Evening Primrose Oil):</strong>
                <span className="text-[#4C655F]">{activeStage.lipidStatus}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9] flex items-start space-x-3">
              <CheckCircle2 className="w-4 h-4 text-[#2D8F7A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0E221E] block">Hydrophilic Core (Liposomal GSH + NAC + Vit C):</strong>
                <span className="text-[#4C655F]">{activeStage.powderStatus}</span>
              </div>
            </div>
          </div>

          {/* Highlight Metric */}
          <div className="p-4 rounded-xl bg-[#EEF8F5] border border-[#D9EFE9] flex items-center justify-between">
            <div>
              <span className="text-2xl font-extrabold text-[#2D8F7A] block">
                {activeStage.statValue}
              </span>
              <span className="text-xs font-semibold text-[#0E221E]">
                {activeStage.statLabel}
              </span>
            </div>
            <button
              onClick={() => setActiveStageIndex((prev) => (prev + 1) % STAGES.length)}
              className="px-4 py-2 rounded-lg bg-white border border-[#D9EFE9] text-xs font-semibold text-[#1F6959] hover:bg-[#2D8F7A] hover:text-white transition-all flex items-center space-x-1"
            >
              <span>Next Stage</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
