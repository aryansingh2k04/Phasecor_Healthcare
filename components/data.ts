export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "Therapeutic Medicines" | "Clinical Dermatology";
  subCategory?: string;
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
  // --- CORE THERAPEUTIC HEALTHCARE MEDICINES (MAIN FOCUS) ---
  {
    id: "uticor",
    name: "UTIcor™",
    subtitle: "Cranberry Extract, D-Mannose, NAC & Pot. Mag. Citrate Syrup",
    category: "Therapeutic Medicines",
    subCategory: "Urinary Health & Nephrology",
    badge: "Urinary Care",
    mainImage: "/images/products/uticor.png",
    detailImage: "/images/products/uticor.png",
    summary:
      "Physician-calibrated urinary health syrup combining high-potency Cranberry Extract, D-Mannose, NAC, and Potassium Magnesium Citrate to inhibit bacterial adhesion, alkalize urinary pH, and soothe urinary tract discomfort.",
    keyActives: [
      "Cranberry Extract (Standardized PACs)",
      "D-Mannose",
      "N-Acetylcysteine (NAC)",
      "Potassium Magnesium Citrate"
    ],
    benefits: [
      "Inhibits bacterial adhesion to bladder walls with standardized cranberry PACs",
      "Alkalizes acidic urine to promptly relieve burning and urinary discomfort",
      "N-Acetylcysteine (NAC) helps break down protective bacterial biofilms",
      "Refreshing sugar-free formulation for comfortable daily compliance"
    ],
    howToUse:
      "Take 15 ml diluted in a glass of water twice daily, or as advised by your healthcare physician.",
    packaging: "100 ml Amber Bottle with Measuring Cup",
    indications: "Acute and recurrent urinary tract infections (UTIs), burning micturition, dysuria, prophylactic urinary wellness"
  },
  {
    id: "electcor",
    name: "Electcor™",
    subtitle: "WHO-Standard Oral Rehydration & Electrolyte Sachet with Co-Q10",
    category: "Therapeutic Medicines",
    subCategory: "Electrolyte & Rehydration Therapy",
    badge: "With Co-Enzyme Q10",
    mainImage: "/images/products/electcor.png",
    detailImage: "/images/products/electcor.png",
    summary:
      "Specialized oral rehydration formula calibrated to WHO osmolarity standards (245 mOsm/L) and fortified with Co-Enzyme Q10 for rapid cellular rehydration, electrolyte restoration, and metabolic energy recovery.",
    keyActives: [
      "Co-Enzyme Q10",
      "Sodium Chloride",
      "Potassium Chloride",
      "Sodium Citrate",
      "Dextrose Anhydrous",
      "Zinc Sulphate",
      "Vitamin C & Essential Vitamins"
    ],
    benefits: [
      "Calibrated to WHO osmolarity standards (245 mOsm/L) for rapid fluid and ion absorption",
      "Fortified with Co-Enzyme Q10 to stimulate cellular ATP and metabolic recovery",
      "Provides essential electrolytes, zinc, and vitamins for physical revitalization",
      "Instant dissolvability in 500 ml drinking water with natural lemon flavour"
    ],
    howToUse:
      "Dissolve the entire contents of one 10g sachet in 500 ml of clean drinking water. Consume as directed for fluid replenishment.",
    packaging: "Box of 3 Sachets (10g Each)",
    indications: "Dehydration, heat exhaustion, gastrointestinal fluid loss, post-exercise electrolyte replenishment, chronic physical fatigue"
  },
  {
    id: "chronicor",
    name: "Chronicor™",
    subtitle: "Cartilage, Bone & Neuropathic Joint Restoration Tablets",
    category: "Therapeutic Medicines",
    subCategory: "Musculoskeletal & Joint Care",
    badge: "Joint & Bone Care",
    mainImage: "/images/products/chronicor.png",
    detailImage: "/images/products/chronicor.png",
    summary:
      "Advanced therapeutic tablet formulated to support joint mobility, cartilage renewal, bone mineral density, and calm neuropathic inflammation in chronic musculoskeletal disorders.",
    keyActives: [
      "Calcium Orotate",
      "Cissus Quadrangularis",
      "Methylcobalamin (Active B12)",
      "L-Methyl Folate",
      "Vitamin D3",
      "L-Carnitine",
      "Omega-3 Fatty Acids",
      "Alpha Lipoic Acid & Calcium Pantothenate"
    ],
    benefits: [
      "Accelerates bone mineralization and osteoblast activity with Cissus Quadrangularis",
      "High-bioavailability Calcium Orotate delivers calcium directly to bone matrix",
      "Methylcobalamin, L-Methyl Folate, and ALA support nerve myelin sheath renewal",
      "Omega-3 fatty acids help alleviate joint stiffness, inflammation, and fatigue"
    ],
    howToUse:
      "Take 1 tablet daily after main meals with water, or as directed by an orthopaedic specialist or physician.",
    packaging: "10 x 1 x 10 Tablets / Blister Box",
    indications: "Osteoarthritis, joint pain, osteoporosis, rheumatoid stiffness, post-trauma bone healing, peripheral neuropathy"
  },
  {
    id: "ovaphase",
    name: "OvaPhase™",
    subtitle: "Physiological 40:1 Inositol Formula for Women's PCOS Support",
    category: "Therapeutic Medicines",
    subCategory: "Women's Health & Gynaecology",
    badge: "Women's Health & PCOS",
    mainImage: "/images/products/ovaphase.png",
    detailImage: "/images/products/ovaphase.png",
    summary:
      "Physician-calibrated formulation combining physiological Myo-Inositol and D-Chiro Inositol (40:1 ratio) with NAC and Berberine to restore hormonal balance, ovarian wellness, and metabolic rhythm.",
    keyActives: [
      "Myo-Inositol & D-Chiro-Inositol (40:1 Ratio)",
      "N-Acetylcysteine (NAC)",
      "Berberine HCl",
      "Vitex Agnus Extract (Chasteberry)",
      "Chromium Picolinate",
      "L-Methylfolate & Vitamin D3"
    ],
    benefits: [
      "Physiological 40:1 Myo to D-Chiro Inositol ratio restores regular ovulatory cycles",
      "Helps regulate androgen levels to reduce hormonal acne and facial hirsutism",
      "Supports ovarian microenvironment, insulin sensitivity, and cycle regularity",
      "Fortified with active L-Methylfolate and Vitamin D3 for reproductive cellular wellness"
    ],
    howToUse:
      "Take 1 to 2 tablets daily after meals with water, or as recommended by your gynaecologist.",
    packaging: "10 x 1 x 10 Tablets / Blister Box",
    indications: "Polycystic Ovary Syndrome (PCOS/PCOD), irregular menstrual cycles, insulin resistance, hyperandrogenism, ovulatory wellness"
  },

  // --- CLINICAL DERMATOLOGY & NUTRICOSMETIC RANGE ---
  {
    id: "niascobutin",
    name: "Niascobutin™",
    subtitle: "Multi-Action Restorative Face Serum with Niacinamide & Vit C",
    category: "Clinical Dermatology",
    subCategory: "Topical Dermaceuticals",
    badge: "Derma Formulation",
    mainImage: "/images/products/niascobutin.png",
    detailImage: "/images/products/niascobutin.png",
    summary:
      "Dermatologist-formulated treatment combining Niacinamide, Vitamin C, Tranexamic Acid, Peptides, Hyaluronic Acid, and Bakuchiol to visibly brighten skin, reduce hyperpigmentation, and fortify the barrier.",
    keyActives: [
      "Niacinamide",
      "Alpha Arbutin",
      "Vitamin C (3-O-Ethyl Ascorbic Acid)",
      "Tranexamic Acid",
      "Bakuchiol",
      "Peptide Complex",
      "Hyaluronic Acid & Panthenol"
    ],
    benefits: [
      "Visibly brightens and unifies skin tone with synergistic Niacinamide and Alpha Arbutin",
      "Inhibits hyperpigmentation pathways and clears post-inflammatory marks",
      "Reinforces the skin barrier and delivers deep hydration without greasy residue",
      "Stimulates collagen and smooths skin texture with Bakuchiol and Peptide Complex"
    ],
    howToUse:
      "Apply 2–3 drops to thoroughly cleansed face and neck morning and evening. Gently press until absorbed. Follow with UVoThera in the daytime.",
    packaging: "30 ml / 1.0 fl. oz. Dropper Bottle",
    indications: "Uneven pigmentation, photodamage, early cellular aging, dullness, barrier compromise"
  },
  {
    id: "primathion",
    name: "Primathion™",
    subtitle: "Dual-Delivery Cellular Rejuvenation Oral Nutricosmetic",
    category: "Clinical Dermatology",
    subCategory: "Oral Nutricosmetics",
    badge: "Nutricosmetic",
    mainImage: "/images/products/primathion.png",
    detailImage: "/images/products/primathion.png",
    summary:
      "Next-generation oral nutricosmetic engineered with Dual Delivery Technology to encapsulate oil-based actives in powder alongside water-soluble nutrients for sustained release and systemic antioxidant defense.",
    keyActives: [
      "Liposomal Glutathione (250 mg)",
      "N-Acetyl Cysteine / NAC (50 mg)",
      "Evening Primrose Oil",
      "Grape Seed Extract",
      "Natural Vitamin E",
      "Vitamin C (Ascorbic Acid 40 mg)",
      "L-Lysine (5 mg)"
    ],
    benefits: [
      "Dual Delivery System synchronizes uptake of lipid-soluble and water-soluble actives",
      "Protects cellular structures against systemic oxidative stress and photodamage",
      "Assists melanogenesis regulation for a clearer, unified complexion from within",
      "Reinforces dermal matrix density, elasticity, and natural collagen synthesis"
    ],
    howToUse:
      "Take 1 capsule in the morning and 1 capsule in the evening after meals with water, or as directed by your healthcare physician.",
    packaging: "60 Capsules / Pharmaceutical Pack",
    indications: "Deep cellular hyperpigmentation, photo-aging, environmental oxidative stress, skin fatigue"
  },
  {
    id: "uvothera",
    name: "UVoThera™",
    subtitle: "Broad-Spectrum SPF 60+ PA++++ Photoprotective Ultra-Light Gel",
    category: "Clinical Dermatology",
    subCategory: "Photoprotection",
    badge: "Photoprotection",
    mainImage: "/images/products/uvothera.png",
    detailImage: "/images/products/uvothera.png",
    summary:
      "UVoThera SPF 60++++ is an advanced, gel-based sunscreen designed to provide broad-spectrum protection against UVA, UVB, Infrared Radiation (IR), and Visible Light. Its lightweight, non-greasy texture absorbs quickly, controls shine, and delivers a smooth matte finish perfect for humid and hot climates. Enriched with Niacinamide, Hyaluronic Acid, Vitamin E, and antioxidant-rich ingredients, it hydrates, brightens, and strengthens the skin while protecting it from environmental and UV-induced damage. Suitable for all skin types, including sensitive and acne-prone skin.",
    keyActives: [],
    benefits: [
      "Broad-spectrum protection against UVA, UVB, Infrared Radiation (IR), and Visible Light",
      "Lightweight, non-greasy gel texture that absorbs rapidly with a shine-free matte finish",
      "Specially engineered for humid and hot climates to control shine and resist sweat",
      "Enriched with Niacinamide, Hyaluronic Acid, and Vitamin E to hydrate and brighten",
      "Gentle, non-comedogenic formula suitable for all skin types including sensitive skin"
    ],
    howToUse:
      "Dispense a generous amount (approx. 2 finger lengths) and apply evenly across face and neck 15 minutes before sun exposure. Reapply every 3–4 hours.",
    packaging: "50 g / 1.76 oz. Dermatological Tube",
    indications: "Daily photoprotection, prevention of melasma, post-procedure sun shield, anti-photoaging"
  }
];

export interface PipelineItem {
  code: string;
  therapeuticArea: string;
  name: string;
  description: string;
  target: string;
  phase: "Formulation" | "Pre-Clinical" | "Clinical Stability" | "Scale-Up";
  phaseNumber: number;
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

// Phasecor Healthcare Core Philosophy & Pillars (from Official Brochure)
export const BRAND_PHILOSOPHY = {
  tagline: "Quality Healthcare within Reach",
  statement:
    "Phasecor is committed to delivering innovative, high-quality, and affordable healthcare solutions that empower better lives.",
  pillars: [
    {
      title: "Innovative Products",
      description: "We develop advanced solutions that address evolving healthcare needs.",
      iconName: "Lightbulb"
    },
    {
      title: "Most Affordable High Quality Products",
      description: "We combine affordability with uncompromised quality to deliver the best value.",
      iconName: "ShieldCheck"
    },
    {
      title: "Committed to Better Health Outcomes",
      description: "We are dedicated to improving lives through safe, effective, and reliable healthcare solutions.",
      iconName: "HeartPulse"
    }
  ]
};

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
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
  socials: {
    instagram: "https://www.instagram.com/phasecor__/",
    twitter: "https://x.com/phasecor"
  }
};
