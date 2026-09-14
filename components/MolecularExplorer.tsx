'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FlaskConical, ArrowRight, CheckCircle2, ShieldCheck, Activity, Dna } from 'lucide-react';

interface Molecule {
  id: string;
  name: string;
  chemicalClass: string;
  molecularWeight: string;
  targetPathway: string;
  productsUsedIn: string[];
  productSlugs: string[];
  mechanism: string;
  clinicalBenchmark: string;
  efficacyScore: number;
}

const MOLECULES: Molecule[] = [
  {
    id: 'glutathione',
    name: 'Liposomal L-Glutathione',
    chemicalClass: 'Endogenous Tripeptide (γ-L-glutamyl-L-cysteinylglycine)',
    molecularWeight: '307.32 g/mol',
    targetPathway: 'Intracellular Redox Equilibrium & Hepatic Transsulfuration',
    productsUsedIn: ['Primathion Dual-Delivery Capsules'],
    productSlugs: ['primathion'],
    mechanism:
      'Master intracellular antioxidant. Phospholipid liposomal encapsulation preserves reduced GSH state through gastric transit, permitting intact enterocyte absorption and replenishing endogenous glutathione synthetase substrate.',
    clinicalBenchmark: 'Assay verified 99.4% purity, >90min gastric dissolution survival',
    efficacyScore: 98,
  },
  {
    id: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    chemicalClass: 'Pyridine-3-Carboxamide / Physiological Amide',
    molecularWeight: '122.12 g/mol',
    targetPathway: 'Melanosome Transfer Inhibition & Ceramide Upregulation',
    productsUsedIn: ['Niascobutin Face Serum', 'Uvothera Sunscreen Gel'],
    productSlugs: ['niascobutin', 'uvothera'],
    mechanism:
      'Competitively inhibits 68% of melanosome transfer from melanocytes to basal keratinocytes, while boosting intracellular NAD+/NADH ratios to stimulate dermal ceramide synthase.',
    clinicalBenchmark: 'IS 4011:2018 0.00 zero-irritancy score across human patch volunteers',
    efficacyScore: 96,
  },
  {
    id: 'tranexamic',
    name: 'Tranexamic Acid',
    chemicalClass: 'Synthetic Lysine Derivative / Plasminogen Inhibitor',
    molecularWeight: '157.21 g/mol',
    targetPathway: 'Plasmin-Induced Melanogenesis Cascade Suppression',
    productsUsedIn: ['Niascobutin Face Serum'],
    productSlugs: ['niascobutin'],
    mechanism:
      'Reversibly blocks lysine-binding sites on plasminogen molecules, preventing UV-stimulated plasmin generation and blunting downstream arachidonic acid and prostaglandin release in melanocytes.',
    clinicalBenchmark: 'Highly effective against recalcitrant vascular melasma and erythema',
    efficacyScore: 94,
  },
  {
    id: 'arbutin',
    name: 'Alpha Arbutin',
    chemicalClass: '4-Hydroxyphenyl α-D-Glucopyranoside',
    molecularWeight: '272.25 g/mol',
    targetPathway: 'Competitive Tyrosinase Enzyme Blockade',
    productsUsedIn: ['Niascobutin Face Serum'],
    productSlugs: ['niascobutin'],
    mechanism:
      'Reversibly binds to catalytic tyrosinase sites, blocking L-tyrosine and L-DOPA oxidation without inducing the cytotoxic melanocyte death associated with historical hydroquinone use.',
    clinicalBenchmark: '9-fold higher tyrosinase inhibition potency than standard beta-arbutin',
    efficacyScore: 92,
  },
  {
    id: 'tinosorb',
    name: 'Tinosorb S UV Matrix',
    chemicalClass: 'Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine',
    molecularWeight: '627.81 g/mol',
    targetPathway: 'Broad Photostable Resonance Absorption (UVB & UVA-I)',
    productsUsedIn: ['Uvothera SPF 60++++ Sunscreen Gel'],
    productSlugs: ['uvothera'],
    mechanism:
      'Large high-molecular weight organic filter that resists cutaneous penetration while providing extreme photostability, dissipating UV photons harmlessly as thermal vibrations without photodegradation.',
    clinicalBenchmark: 'Certified Critical Wavelength of 379.4 nm; Boots Star 3-Star Rating',
    efficacyScore: 99,
  },
];

export default function MolecularExplorer() {
  const [selectedId, setSelectedId] = useState(MOLECULES[0].id);
  const active = MOLECULES.find((m) => m.id === selectedId) || MOLECULES[0];

  return (
    <div className="bg-white rounded-3xl border border-[#E3ECE9] shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="p-6 sm:p-8 border-b border-[#E3ECE9] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-widest text-[#2D8F7A] block">
            Molecular Pharmacodynamics
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0E221E] mt-1">
            Active Compound Interaction Explorer
          </h3>
        </div>
        <p className="text-xs text-[#4C655F] max-w-sm">
          Select any active molecule below to inspect targeted cellular pathways, pharmacological mechanism, and formulation vehicles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E3ECE9]">
        {/* Molecule Selector List */}
        <div className="lg:col-span-4 p-4 sm:p-6 space-y-2 bg-[#F8FBFA]/60">
          {MOLECULES.map((mol) => {
            const isSelected = mol.id === selectedId;
            return (
              <button
                key={mol.id}
                onClick={() => setSelectedId(mol.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white border border-[#2D8F7A] shadow-xs text-[#0E221E]'
                    : 'hover:bg-white/80 border border-transparent text-[#4C655F]'
                }`}
              >
                <div>
                  <h5 className={`text-sm font-bold ${isSelected ? 'text-[#2D8F7A]' : 'text-[#0E221E]'}`}>
                    {mol.name}
                  </h5>
                  <p className="text-[11px] text-[#789991] truncate max-w-[200px]">
                    {mol.chemicalClass.split(' (')[0]}
                  </p>
                </div>
                <div className={`w-2 h-2 rounded-full transition-all ${isSelected ? 'bg-[#2D8F7A]' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>

        {/* Molecule Detailed HUD */}
        <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E3ECE9] pb-4">
            <div>
              <h4 className="text-2xl font-bold text-[#0E221E]">
                {active.name}
              </h4>
              <p className="text-xs text-[#4C655F] mt-0.5 font-mono">
                {active.chemicalClass}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#789991] block">
                Molecular Mass
              </span>
              <span className="font-mono text-sm font-bold text-[#0E221E]">
                {active.molecularWeight}
              </span>
            </div>
          </div>

          {/* Biological Mechanism */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#2D8F7A]">
              Pharmacological Mechanism of Action:
            </span>
            <p className="text-xs sm:text-sm text-[#4C655F] leading-relaxed">
              {active.mechanism}
            </p>
          </div>

          {/* Key Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#789991] block">
                Cellular Target & Pathway
              </span>
              <p className="font-semibold text-[#0E221E]">
                {active.targetPathway}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FBFA] border border-[#E3ECE9] space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#789991] block">
                Clinical Testing Benchmark
              </span>
              <p className="font-semibold text-[#1F6959]">
                {active.clinicalBenchmark}
              </p>
            </div>
          </div>

          {/* Formulation Deployments */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#E3ECE9]">
            <div className="text-xs">
              <span className="text-[#789991]">Formulated in: </span>
              <strong className="text-[#0E221E]">{active.productsUsedIn.join(', ')}</strong>
            </div>

            <Link
              href={`/products/${active.productSlugs[0]}`}
              className="inline-flex items-center text-xs font-semibold text-[#2D8F7A] hover:text-[#1F6959]"
            >
              <span>View Product Monograph</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
