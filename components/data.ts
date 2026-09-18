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
    subtitle: "Cranberry Extract, D-Mannose & Potassium Magnesium Citrate Syrup",
    category: "Therapeutic Medicines",
    subCategory: "Urinary Health & Nephrology",
    badge: "Urinary Care",
    mainImage: "/images/products/placeholder.svg",
    detailImage: "/images/products/placeholder.svg",
    summary:
      "A physician-calibrated urinary health syrup combining high-potency Cranberry Extract, D-Mannose, and Potassium Magnesium Citrate to inhibit uropathogenic bacterial adherence, alkalize urinary pH, and provide rapid soothing relief from UTIs.",
    keyActives: [
      "Cranberry Extract (Standardized PACs)",
      "D-Mannose",
      "Potassium Magnesium Citrate",
      "Vitamin C (Ascorbic Acid)"
    ],
    benefits: [
      "Inhibits E. coli adhesion to the bladder urothelium via high-potency cranberry proanthocyanidins (PACs)",
      "Alkalizes acidic urine to promptly relieve burning micturition, dysuria, and pelvic discomfort",
      "Non-antibiotic urinary defense mechanism reducing recurrence of resistant bacterial infections",
      "Sugar-free formulation with a refreshing, pleasant natural cranberry flavor"
    ],
    howToUse:
      "Take 15 ml diluted in a glass of water twice daily, or as advised by your healthcare physician.",
    packaging: "200 ml Amber Bottle with Measuring Cup",
    indications: "Acute and recurrent urinary tract infections (UTIs), burning micturition, dysuria, prophylactic urinary wellness"
  },
  {
    id: "electcor",
    name: "Electcor™",
    subtitle: "Sugar-Free WHO Osmolarity Oral Rehydration Sachet with Co-Enzyme Q10",
    category: "Therapeutic Medicines",
    subCategory: "Electrolyte & Rehydration Therapy",
    badge: "With Co-Enzyme Q10",
    mainImage: "/images/products/placeholder.svg",
    detailImage: "/images/products/placeholder.svg",
    summary:
      "A specialized oral rehydration formulation compliant with WHO osmolarity standards (245–252 mOsm/L) and fortified with Co-Enzyme Q10 for rapid cellular rehydration, electrolyte restoration, and metabolic energy recovery.",
    keyActives: [
      "Co-Enzyme Q10",
      "Sodium Chloride",
      "Potassium Chloride",
      "Sodium Citrate",
      "Dextrose Anhydrous",
      "Zinc Sulphate",
      "Vitamin C"
    ],
    benefits: [
      "Calibrated to WHO-standard osmolarity (245–252 mOsm/L) for rapid fluid and ion transport across intestinal membranes",
      "Fortified with Co-Enzyme Q10 to stimulate cellular ATP bioenergetics and counter acute physical depletion",
      "Zero added sugar formulation suitable for diabetic and calorie-conscious patients",
      "Instant dissolvability in 1 litre water with a crisp, refreshing natural lemon flavour"
    ],
    howToUse:
      "Dissolve the entire contents of one 21.80g sachet in 1 litre of clean drinking water. Consume as directed for fluid replenishment.",
    packaging: "Box of 10 Sachets (21.80g each) / Lemon Flavour",
    indications: "Dehydration, heat exhaustion, gastrointestinal fluid loss, post-exercise electrolyte replenishment, chronic physical fatigue"
  },
  {
    id: "chronicor",
    name: "Chronicor™",
    subtitle: "Comprehensive Cartilage, Bone & Neuropathic Joint Restoration Tablets",
    category: "Therapeutic Medicines",
    subCategory: "Musculoskeletal & Joint Care",
    badge: "Joint & Bone Care",
    mainImage: "/images/products/placeholder.svg",
    detailImage: "/images/products/placeholder.svg",
    summary:
      "An advanced multi-ingredient therapeutic tablet formulated to support joint mobility, accelerate cartilage regeneration, restore bone mineral density, and calm neuropathic inflammation in chronic musculoskeletal disorders.",
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
      "Accelerates bone mineralization and osteoblast activity via bioactive Cissus Quadrangularis",
      "Superior bioavailable Calcium Orotate ensures high calcium delivery directly to bone matrix without arterial calcification risk",
      "Methylcobalamin, L-Methyl Folate, and Alpha Lipoic Acid regenerate nerve myelin sheaths to relieve peripheral neuropathy",
      "Omega-3 Fatty Acids and L-Carnitine alleviate synovial joint inflammation, morning stiffness, and chronic joint fatigue"
    ],
    howToUse:
      "Take 1 tablet daily after main meals with water, or as directed by an orthopaedic specialist or physician.",
    packaging: "10 x 1 x 10 Tablets / Blister Strip Box",
    indications: "Osteoarthritis, joint pain, osteoporosis, rheumatoid stiffness, post-trauma bone healing, peripheral neuropathy"
  },
  {
    id: "ovaphase",
    name: "OvaPhase™",
    subtitle: "Physiological 40:1 Inositol Formula for Women's Hormonal & PCOS Support",
    category: "Therapeutic Medicines",
    subCategory: "Women's Health & Gynaecology",
    badge: "Women's Health & PCOS",
    mainImage: "/images/products/placeholder.svg",
    detailImage: "/images/products/placeholder.svg",
    summary:
      "A physician-calibrated formulation engineered for women with PCOS/PCOD, metabolic irregularities, and ovulatory dysfunction. Combines physiological Myo-Inositol, D-Chiro Inositol (40:1 ratio), and essential co-factors to restore hormonal equilibrium.",
    keyActives: [
      "Myo-Inositol",
      "D-Chiro-Inositol (Physiological 40:1 Ratio)",
      "L-Methylfolate",
      "Vitamin D3",
      "Chromium Picolinate",
      "Zinc Sulphate",
      "Co-Enzyme Q10"
    ],
    benefits: [
      "Physiological 40:1 ratio of Myo to D-Chiro Inositol enhances follicular insulin sensitivity and restores regular ovulatory cycles",
      "Significantly reduces circulating hyperandrogenism, facial hirsutism, and hormonal acne flare-ups",
      "Supports regular menstrual cycle rhythm, ovarian microenvironment, and metabolic weight management",
      "Active L-Methylfolate and Vitamin D3 optimize oocyte quality and reproductive cellular wellness"
    ],
    howToUse:
      "Take 1 to 2 tablets daily after meals with water, or as recommended by your gynaecologist.",
    packaging: "10 x 10 Tablets / Blister Strip Box",
    indications: "Polycystic Ovary Syndrome (PCOS/PCOD), irregular menstrual cycles, insulin resistance, hyperandrogenism, ovulatory wellness"
  },

  // --- CLINICAL DERMATOLOGY & NUTRICOSMETIC RANGE ---
  {
    id: "niascobutin",
    name: "Niascobutin™",
    subtitle: "High-Potency Multi-Action Restorative Face Serum with Niacinamide",
    category: "Clinical Dermatology",
    subCategory: "Topical Dermaceuticals",
    badge: "Derma Formulation",
    mainImage: "/images/products/niascobutin_main.jpg",
    detailImage: "/images/products/niascobutin_detail.jpg",
    summary:
      "A dermatologist-formulated, high-performance treatment combining Niacinamide, Vitamin C, Tranexamic Acid, Peptides, Hyaluronic Acid, and Bakuchiol to visibly brighten, reduce stubborn hyperpigmentation, and fortify the skin barrier.",
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
      "Inhibits hyperpigmentation pathways and clears post-inflammatory marks with Tranexamic Acid",
      "Deep hydration and stratum corneum barrier reinforcement without greasy residue",
      "Stimulates collagen and improves skin texture with clean Bakuchiol and Peptide Complex"
    ],
    howToUse:
      "Apply 2–3 drops to thoroughly cleansed face and neck morning and evening. Gently press until absorbed. Follow with UVoThera in the daytime.",
    packaging: "30 ml / 1.0 fl. oz. UV-Protective Dropper Bottle",
    indications: "Uneven pigmentation, photodamage, early cellular aging, dullness, barrier compromise"
  },
  {
    id: "primathion",
    name: "Primathion™",
    subtitle: "Advanced Dual-Delivery Cellular Rejuvenation Oral Nutricosmetic",
    category: "Clinical Dermatology",
    subCategory: "Oral Nutricosmetics",
    badge: "Nutricosmetic",
    mainImage: "/images/products/primathion_main.jpg",
    detailImage: "/images/products/primathion_detail.png",
    summary:
      "A next-generation oral nutricosmetic engineered with proprietary Dual Delivery Technology to encapsulate oil-based actives in powder alongside water-soluble nutrients for differential sustained release and elevated systemic antioxidant defense.",
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
      "Dual Delivery System: Encapsulates lipid-soluble actives in powder alongside water-soluble nutrients for synchronized bioavailability",
      "Protects intracellular structures against systemic oxidative stress and environmental damage",
      "Assists cellular melanogenesis regulation for clearer, unified skin tone from within",
      "Reinforces dermal matrix density and natural collagen synthesis pathways"
    ],
    howToUse:
      "Take 1 capsule in the morning and 1 capsule in the evening after meals with water, or as directed by your healthcare physician.",
    packaging: "60 Capsules / Dual-Sealed Pharmaceutical Pack",
    indications: "Deep cellular hyperpigmentation, photo-aging, environmental oxidative stress, skin fatigue"
  },
  {
    id: "uvothera",
    name: "UVoThera™",
    subtitle: "Broad-Spectrum SPF 60+ PA++++ Photoprotective Ultra-Light Gel",
    category: "Clinical Dermatology",
    subCategory: "Photoprotection",
    badge: "Photoprotection",
    mainImage: "/images/products/uvothera_main.jpg",
    detailImage: "/images/products/uvothera_detail.png",
    summary:
      "An advanced, medical-grade gel-based photoprotective matrix engineered to shield against UVA, UVB, Infrared Radiation (IR), and High-Energy Visible (HEV) Blue Light with an elegant, non-greasy matte finish.",
    keyActives: [
      "SPF 60 PA++++ Multi-Filter Matrix",
      "Infrared & HEV Screen Shield",
      "Niacinamide (Vitamin B3)",
      "Multi-Molecular Hyaluronic Acid",
      "Tocopheryl Acetate (Vitamin E)",
      "Micronized Silica Matrix"
    ],
    benefits: [
      "Complete 4-tier photoprotection: Shields against UVA (aging), UVB (erythema), IR (thermal shock), and Blue Light",
      "Ultra-light, non-greasy gel matrix formulated specifically for humid, tropical conditions",
      "Delivers an immediate shine-free matte finish with zero white cast or pore clogging",
      "Fortifies cutaneous barrier resilience with clinical-grade Niacinamide"
    ],
    howToUse:
      "Dispense a generous amount (approx. 2 finger lengths) and apply evenly across face and neck 15 minutes before sun exposure. Reapply every 3–4 hours.",
    packaging: "50 g / 1.76 oz. Air-Tight Dermatological Tube",
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
  address: "Shop No. A1/01, Building No. B, Twinkle Apartment, Katemanivali, Katemanivali Naka, Kalyan East, Thane, Maharashtra – 421306, India",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  socials: {
    instagram: "https://www.instagram.com/phasecor__/",
    twitter: "https://x.com/phasecor"
  }
};
