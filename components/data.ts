export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  badge: string;
  mainImage: string;
  detailImage: string;
  summary: string;
  keyActives: string[];
  benefits: string[];
  howToUse: string;
  packaging: string;
  indications: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "niascobutin",
    name: "Niascobutin™ Face Serum",
    subtitle: "High-Potency Multi-Action Restorative Serum",
    category: "Topical Dermatology",
    badge: "Clinical Serum",
    mainImage: "/images/products/niascobutin_main.jpg",
    detailImage: "/images/products/niascobutin_detail.jpg",
    summary:
      "A dermatologist-formulated, high-performance treatment designed to transform dull, uneven skin into a visibly clearer, smoother, and healthier barrier without irritation.",
    keyActives: [
      "Niacinamide",
      "Alpha Arbutin",
      "Vitamin C (3-O-Ethyl Ascorbic Acid)",
      "Tranexamic Acid",
      "Bakuchiol",
      "Peptide Complex",
      "Zinc PCA",
      "Centella & Panthenol"
    ],
    benefits: [
      "Visibly brightens and unifies skin tone with synergistic Niacinamide & Alpha Arbutin",
      "Inhibits hyperpigmentation pathways and reduces post-inflammatory marks with Tranexamic Acid",
      "Stimulates collagen and enhances cutaneous elasticity via clean Bakuchiol & Peptides",
      "Clarifies sebum production and tightens pore texture with Zinc PCA and Salicylic Acid",
      "Delivers sustained 48-hour moisture barrier replenishment with Squalane & Hyaluronic Acid"
    ],
    howToUse:
      "Apply 2–3 drops to thoroughly cleansed face and neck morning and evening. Gently press until fully absorbed. Follow with UVoThera in the daytime.",
    packaging: "30 ml / 1.0 fl. oz. UV-Protective Dropper Bottle",
    indications: "Uneven pigmentation, photodamage, early cellular aging, dullness, barrier compromise"
  },
  {
    id: "primathion",
    name: "Primathion™ Oral Nutricosmetic",
    subtitle: "Advanced Dual-Delivery Cellular Rejuvenation Supplement",
    category: "Systemic Therapeutics",
    badge: "Oral Nutricosmetic",
    mainImage: "/images/products/primathion_main.jpg",
    detailImage: "/images/products/primathion_detail.png",
    summary:
      "A next-generation oral nutricosmetic engineered with proprietary Dual Delivery Technology to deliver differential sustained release, maximum bioavailability, and systemic skin vitality from within.",
    keyActives: [
      "Dual Delivery Bio-Actives",
      "Glutathione Precursors",
      "Astaxanthin Bio-Lipids",
      "Essential Amino Acids",
      "L-Cysteine & ALA",
      "Vitamin C & E Complex"
    ],
    benefits: [
      "Dual Delivery System: Encapsulates oil-based actives in powder alongside water-soluble nutrients for synchronized absorption",
      "Protects intracellular structures against systemic oxidative stress and photodamage",
      "Assists cellular melanogenesis reduction for clearer, unified skin tone",
      "Reinforces dermal matrix density and natural collagen synthesis pathways",
      "Enhances natural cellular hydration, vitality, and systemic radiance"
    ],
    howToUse:
      "Take 1 capsule in the morning and 1 capsule in the evening after meals with water, or as directed by your healthcare physician.",
    packaging: "60 Capsules / Dual-Sealed Pharmaceutical Blister Pack",
    indications: "Deep cellular hyperpigmentation, photo-aging, environmental toxic stress, skin fatigue"
  },
  {
    id: "uvothera",
    name: "UVoThera™ SPF 60++++ Sunscreen",
    subtitle: "Broad-Spectrum Photoprotective Ultra-Light Gel",
    category: "Photobiology",
    badge: "Broad-Spectrum Defense",
    mainImage: "/images/products/uvothera_main.jpg",
    detailImage: "/images/products/uvothera_detail.png",
    summary:
      "An advanced, medical-grade gel-based photoprotective matrix engineered to shield against UVA, UVB, Infrared Radiation (IR), and High-Energy Visible (HEV) Blue Light with an elegant matte finish.",
    keyActives: [
      "SPF 60 PA++++ Multi-Filter",
      "Infrared & HEV Shield",
      "Niacinamide (Vitamin B3)",
      "Multi-Molecular Hyaluronic Acid",
      "Tocopheryl Acetate (Vitamin E)",
      "Micronized Silica Matrix"
    ],
    benefits: [
      "Complete 4-tier photoprotection: Shields against UVA (aging), UVB (burns), IR (heat damage), and Blue Light",
      "Ultra-light, non-greasy gel matrix formulated specifically for humid, tropical conditions",
      "Delivers an immediate shine-free matte finish with zero white cast or pore clogging",
      "Fortifies cutaneous barrier resilience with clinical-grade Niacinamide",
      "Safe, soothing, and dermatologically verified for post-treatment and sensitive skin types"
    ],
    howToUse:
      "Dispense a generous amount (approx. 2 finger lengths) and apply evenly across face and neck 15 minutes before sun exposure. Reapply every 3–4 hours.",
    packaging: "50 g / 1.76 oz. Air-Tight Dermatological Tube",
    indications: "Daily photoprotection, prevention of melasma, post-peel/laser sun shield, anti-photoaging"
  }
];

export interface PipelineItem {
  code: string;
  therapeuticArea: string;
  name: string;
  description: string;
  target: string;
  phase: "Formulation" | "Pre-Clinical" | "Clinical Stability" | "Scale-Up";
  phaseNumber: number; // 1 to 4
  deliveryMethod: string;
}

export const MEDICINE_PIPELINE: PipelineItem[] = [
  {
    code: "PHC-MED-01",
    therapeuticArea: "Medical Dermatology",
    name: "Ceramide-Dominant Barrier Repair Emulsion Rx",
    description:
      "Targeted lipid-replacement formulation optimized with physiological 3:1:1:1 ceramide, cholesterol, and fatty acid ratios for atopic and compromised skin barriers.",
    target: "Atopic Dermatitis, Xerosis, Post-Procedure Cutaneous Repair",
    phase: "Clinical Stability",
    phaseNumber: 3,
    deliveryMethod: "Topical Lamellar Emulsion"
  },
  {
    code: "PHC-MED-02",
    therapeuticArea: "Targeted Therapeutics",
    name: "Selective Melanosome Modulation Gel",
    description:
      "Non-hydroquinone pharmaceutical compound targeting tyrosinase transcription and melanosome transfer pathways without cytotoxic melanocyte damage.",
    target: "Refractory Melasma, Post-Inflammatory Hyperpigmentation",
    phase: "Pre-Clinical",
    phaseNumber: 2,
    deliveryMethod: "Targeted Micro-Encapsulated Gel"
  },
  {
    code: "PHC-MED-03",
    therapeuticArea: "Systemic Pharmacology",
    name: "Liposomal Glutathione & Phytochemical Complex",
    description:
      "Gastric-resistant liposomal vehicle engineered to protect reduced L-Glutathione through GI transit, elevating systemic blood glutathione concentrations.",
    target: "Systemic Oxidative Stress, Hepatoprotection, Cellular Detoxification",
    phase: "Formulation",
    phaseNumber: 1,
    deliveryMethod: "Oral Liposomal Dispersion"
  },
  {
    code: "PHC-MED-04",
    therapeuticArea: "Photomedicine",
    name: "Actinic DNA Cellular Repair Complex",
    description:
      "Enzyme-activated post-photodamage topical formula designed to accelerate cyclobutane pyrimidine dimer (CPD) photo-adduct resolution in keratinocytes.",
    target: "Actinic Keratosis Prevention, Chronic Solar Elastosis",
    phase: "Formulation",
    phaseNumber: 1,
    deliveryMethod: "Hydro-Lipidic Topical Serum"
  }
];

export const TRUST_BADGES = [
  {
    title: "Dermatologist Tested",
    description: "Clinically tested by certified dermatologists for safety and biocompatibility across sensitive skin.",
    icon: "/images/icons/dermatologist_tested.png"
  },
  {
    title: "Paraben Free",
    description: "Formulated cleanly without parabens, phthalates, or questionable hormonal disruptors.",
    icon: "/images/icons/paraben_free.png"
  },
  {
    title: "Allergy Tested",
    description: "Rigorously evaluated through repeat insult patch testing to guarantee minimal sensitization.",
    icon: "/images/icons/allergy_tested.png"
  },
  {
    title: "Fragrance Free",
    description: "Pure, non-irritating active concentrations without synthetic perfumes or scent masking agents.",
    icon: "/images/icons/fragrance_free.png"
  }
];

export const COMPANY_CONTACT = {
  name: "Phasecor Healthcare",
  email: "support@phasecor.com",
  phone: "+91-9326421312",
  address: "Shop No. 4, Royal Residency Chs, Katemanevali, Opp. Vitthalwadi Station, Kalyan (E), Vitthalwadi, Kalyan, Maharashtra 421306, India",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  socials: {
    instagram: "https://www.instagram.com/phasecor__/",
    twitter: "https://x.com/phasecor"
  }
};
