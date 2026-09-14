export interface ProductActives {
  name: string;
  role: string;
  mechanism: string;
}

export interface ProductClinicalTrial {
  laboratory: string;
  protocol: string;
  ethicsApproval: string;
  resultSummary: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ProductSpecification {
  category: 'Topical Dermatology' | 'Dual-Delivery Nutricosmetics' | 'Advanced Photoprotection';
  dosageForm: string;
  netContent: string;
  phRange?: string;
  storage: string;
  shelfLife: string;
  regulatoryCode: string;
  recommendedUse: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'Topical Dermatology' | 'Dual-Delivery Nutricosmetics' | 'Advanced Photoprotection';
  tagline: string;
  heroBadge: string;
  description: string;
  clinicalRationale: string;
  indications: string[];
  features: string[];
  keyActives: ProductActives[];
  clinicalData: ProductClinicalTrial;
  specifications: ProductSpecification;
  usageInstructions: string[];
  images: {
    main: string;
    detail: string;
    caption: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'niascobutin',
    slug: 'niascobutin',
    name: 'Niascobutin',
    subtitle: 'Cellular Restoration & Melanin Modulation Serum',
    category: 'Topical Dermatology',
    tagline: 'Multi-target topical formulation engineered for stubborn hyperpigmentation, melasma, and post-inflammatory erythema.',
    heroBadge: 'IS 4011:2018 Certified Non-Irritant',
    description:
      'Niascobutin Face Serum is a precision pharmaceutical-grade topical formulation combining physiological concentration Niacinamide, Alpha Arbutin, Tranexamic Acid, and cellular signaling Peptides. Clinically validated under rigorous human patch testing protocols.',
    clinicalRationale:
      'Hyperpigmentation involves complex interconnected pathways: UV-induced tyrosinase activation, plasmin cascade stimulation, and melanosome transfer to keratinocytes. Niascobutin simultaneously blocks tyrosinase activity via Alpha Arbutin, halts the inflammatory plasmin cascade via Tranexamic Acid, and prevents melanocyte-keratinocyte melanosome transport via Niacinamide.',
    indications: [
      'Resistant epidermal & dermal melasma',
      'Post-inflammatory hyperpigmentation (PIH) and erythema (PIE)',
      'Photoinduced solar lentigines and age spots',
      'Compromised epidermal barrier with uneven texture',
    ],
    features: [
      'Multi-Pathway Melanin Inhibition',
      'Human Repeat Insult Patch Tested (0.00 Irritation Score)',
      'Zero Sensitization under ISO 9001:2015 Protocol',
      'Rapidly Absorbing Hydrophilic Matrix',
      'Free from Parabens, Sulfates, and Artificial Fragrance',
    ],
    keyActives: [
      {
        name: 'Niacinamide (Vitamin B3)',
        role: 'Melanosome Transfer Blocker & Barrier Fortifier',
        mechanism: 'Inhibits 68% of melanosome transfer from melanocytes to keratinocytes while upregulating ceramide biosynthesis.',
      },
      {
        name: 'Alpha Arbutin',
        role: 'Reversible Tyrosinase Inhibitor',
        mechanism: 'Hydroquinone-derived glycoside that competitively down-regulates tyrosinase enzyme activity without cytotoxic melanocyte damage.',
      },
      {
        name: 'Tranexamic Acid',
        role: 'Anti-Plasmin / Anti-Inflammatory Agent',
        mechanism: 'Suppresses UV-stimulated plasminogen activator, blunting arachidonic acid release and prostaglandins that drive melanocyte activation.',
      },
      {
        name: 'Signal Peptide Complex',
        role: 'ECM Extracellular Matrix Remodeler',
        mechanism: 'Triggers dermal fibroblast collagen production, increasing dermal thickness and accelerating cellular turnover of pigmented cells.',
      },
      {
        name: 'Multi-Molecular Hyaluronic Acid',
        role: 'Deep Hydration Delivery Vehicle',
        mechanism: 'Ensures optimal stratum corneum hydration, enhancing active molecule penetration through uniform humectant diffusion.',
      },
    ],
    clinicalData: {
      laboratory: 'Mascot Spincontrol Clinical Research Center',
      protocol: 'IS 4011:2018 (Third Revision) - Method of Test for Safety Evaluation of Cosmetics',
      ethicsApproval: 'Independent Ethics Committee Protocol Approved',
      resultSummary:
        'Single-center closed patch test conducted on human healthy volunteers over 48-72 hours. All volunteers exhibited zero erythema and zero edema (Score 0.00). Formally designated clinically non-irritating.',
      metrics: [
        { label: 'Irritation Score', value: '0.00 / 4.0', description: 'Zero dermal irritation detected' },
        { label: 'Patch Test Protocol', value: 'IS 4011:2018', description: 'Bureau Veritas ISO 9001 certified' },
        { label: 'Volunteer Tolerance', value: '100%', description: 'Complete ocular & cutaneous tolerance' },
      ],
    },
    specifications: {
      category: 'Topical Dermatology',
      dosageForm: 'Liquid Dropper Emulsion',
      netContent: '30 ml (1.01 fl. oz.)',
      phRange: '5.5 – 6.0',
      storage: 'Store at controlled room temperature below 25°C. Avoid direct light exposure.',
      shelfLife: '24 Months from manufacturing date',
      regulatoryCode: 'Mfg Lic: Cos/WZ/2022/91',
      recommendedUse: 'Apply 3-4 drops morning and night to clean, dry skin prior to moisturizers or photoprotection.',
    },
    usageInstructions: [
      'Cleanse skin thoroughly with a mild, non-stripping cleanser.',
      'Dispense 3-4 drops of Niascobutin onto the fingertips.',
      'Gently pat across the entire facial and neck region, focusing on areas of irregular pigmentation.',
      'Allow 60 seconds for complete dermal absorption before layering moisturisers or sun protection.',
      'For optimal therapeutic outcomes, pair with Uvothera Sunscreen during daylight hours.',
    ],
    images: {
      main: '/images/products/niascobutin_main.jpg',
      detail: '/images/products/niascobutin_detail.jpg',
      caption: 'Niascobutin 30ml Precision Dropper Monograph & Clinical Packaging',
    },
  },
  {
    id: 'primathion',
    slug: 'primathion',
    name: 'Primathion',
    subtitle: 'Dual-Delivery Liposomal Glutathione Nutricosmetic',
    category: 'Dual-Delivery Nutricosmetics',
    tagline: 'Breakthrough dual-delivery oral supplement stabilizing lipophilic evening primrose oil alongside hydrophilic liposomal glutathione.',
    heroBadge: 'FSSAI Central Lic: 12124999000251',
    description:
      'Primathion represents an engineering leap in nutricosmetic delivery. Featuring Phasecor’s proprietary Dual Delivery Technology, each hard gelatin capsule encapsulates evening primrose oil in lipid-compatible suspension alongside enteric-protected micro-pellets of Liposomal L-Glutathione, N-Acetyl Cysteine, and Vitamin C.',
    clinicalRationale:
      'Conventional oral glutathione suffers rapid hepatic degradation and poor mucosal bioavailability. Primathion utilizes liposomal encapsulation combined with direct sulfur-donating precursor N-Acetyl Cysteine (NAC), replenishing endogenous intracellular GSH pools. Furthermore, evening primrose oil delivers gamma-linolenic acid (GLA) to reinforce stratum corneum intercellular lipids from within.',
    indications: [
      'Systemic oxidative stress and photoaging prevention',
      'Endogenous intracellular glutathione replenishment',
      'Generalized cutaneous hyperpigmentation and dullness',
      'Support for epidermal moisture retention and barrier integrity',
      'Adjunct therapy following dermatological laser or chemical peeling',
    ],
    features: [
      'Proprietary Dual Delivery Matrix (Lipid + Powder Separation)',
      'Enteric Liposomal Shield for Enhanced Intestinal Uptake',
      'Standardized 98% Ultra-Pure Reduced Glutathione',
      'Synergistic NAC Precursor and Redox-Recycling Vitamin C',
      'Manufactured in WHO-GMP & ISO 22000 Certified Facilities',
    ],
    keyActives: [
      {
        name: 'Liposomal L-Glutathione (Reduced)',
        role: 'Master Endogenous Antioxidant',
        mechanism: 'Phospholipid bilayer vehicle shields tripeptide molecules from gastric enzymolysis, facilitating direct lymphatic and mucosal transport.',
      },
      {
        name: 'N-Acetyl L-Cysteine (NAC)',
        role: 'Intracellular GSH Rate-Limiting Precursor',
        mechanism: 'Provides bioavailable L-cysteine required by gamma-glutamylcysteine synthetase to drive cellular glutathione biosynthesis in hepatocytes.',
      },
      {
        name: 'Cold-Pressed Evening Primrose Oil',
        role: 'Essential Fatty Acid (GLA 10%) Reservoir',
        mechanism: 'Supplies gamma-linolenic acid, metabolizing into anti-inflammatory prostaglandin E1 (PGE1) to calm cutaneous micro-inflammation.',
      },
      {
        name: 'Ascorbic Acid (Vitamin C)',
        role: 'Glutathione Redox Recycler',
        mechanism: 'Reduces oxidized glutathione disulfide (GSSG) back into active reduced GSH, creating an enduring antioxidant catalytic cycle.',
      },
      {
        name: 'Alpha Lipoic Acid',
        role: 'Universal Amphiphilic Antioxidant',
        mechanism: 'Operates in both aqueous and lipid environments to regenerate Vitamins C, E, and coenzyme Q10 while chelating transition metals.',
      },
    ],
    clinicalData: {
      laboratory: 'Phasecor Quality Analytical & Pharmacopeial Validation',
      protocol: 'Assay Protocol IP/USP for Liposomal Beadlet Integrity & Dissolution',
      ethicsApproval: 'FSSAI Central Regulatory Standard Compliance',
      resultSummary:
        'Dissolution testing demonstrates sustained gastro-resistance for over 90 minutes in simulated gastric fluid (pH 1.2), followed by rapid complete active release in simulated intestinal fluid (pH 6.8).',
      metrics: [
        { label: 'Liposomal Protection', value: '>92%', description: 'Gastric acid enzymatic resistance' },
        { label: 'Purity Standard', value: '99.4%', description: 'USP grade reduced L-Glutathione' },
        { label: 'Heavy Metals', value: 'ND (Not Detected)', description: 'ICP-MS verified zero lead, mercury, arsenic' },
      ],
    },
    specifications: {
      category: 'Dual-Delivery Nutricosmetics',
      dosageForm: 'Dual-Chamber Hard Gelatin Capsules',
      netContent: '60 Capsules (30-day course)',
      storage: 'Store below 25°C in a cool, dry place. Protect from moisture and direct sunlight.',
      shelfLife: '18 Months from manufacturing date',
      regulatoryCode: 'FSSAI Lic No: 12124999000251',
      recommendedUse: 'Take 1 to 2 capsules daily after main meals with water, or as directed by a healthcare professional.',
    },
    usageInstructions: [
      'Take 1 capsule twice daily, preferably following morning and evening meals.',
      'Swallow whole with a full glass of water. Do not chew or puncture the capsule.',
      'Maintain consistent intake for a minimum recommended clinical window of 60 to 90 days.',
      'Consult an attending physician if pregnant, nursing, or undergoing concurrent medical therapy.',
    ],
    images: {
      main: '/images/products/primathion_main.jpg',
      detail: '/images/products/primathion_detail.png',
      caption: 'Primathion Dual-Delivery Oral Capsules with Dual Delivery Beadlet Architecture',
    },
  },
  {
    id: 'uvothera',
    slug: 'uvothera',
    name: 'Uvothera SPF 60++++',
    subtitle: 'Broad-Spectrum Advanced Photoprotective Sunscreen Gel',
    category: 'Advanced Photoprotection',
    tagline: 'High-altitude, broad-spectrum UV/HEV photoprotective gel tested to SPF 96.78 with critical wavelength of 379.4 nm.',
    heroBadge: 'Tested SPF 96.78 | Boots 3-Star Rating',
    description:
      'Uvothera is a high-performance dermatological photoprotective gel delivering certified broad-spectrum shielding across UVB (290-320 nm), UVA-II (320-340 nm), UVA-I (340-400 nm), and High Energy Visible (HEV) blue light. Evaluated and accredited by Mascot Spincontrol Clinical Laboratories.',
    clinicalRationale:
      'Standard sunscreens often fail UVA-I protection or leave an occlusive white residue that discourages compliance. Uvothera utilizes a non-comedogenic silicone-elastomer matrix incorporating organic photostable filters with micronized shields, yielding an independently verified critical wavelength of 379.4 nm, far exceeding the ISO standard threshold of 370 nm.',
    indications: [
      'High-potency photoprotection against actinic damage and photoaging',
      'Post-procedure protection (chemical peels, microneedling, fractional laser)',
      'Hyperpigmentation-prone skin requiring maximum UVA-I filtration',
      'Protection against HEV blue light and environmental infrared radiation',
    ],
    features: [
      'Independently Tested SPF 96.78 (Label Claim: SPF 60+)',
      'Critical Wavelength 379.4 nm (Broad Spectrum UVA Shield)',
      'Boots Star Rating: 3 Stars (Balanced UVA/UVB Ratio)',
      'PA++++ Maximum Persistent Pigment Darkening Protection',
      'Ultra-Light, Non-Greasy Gel with Zero White Cast',
      'Sweat & Water Resistant for up to 80 Minutes',
    ],
    keyActives: [
      {
        name: 'Octinoxate & Avobenzone Matrix',
        role: 'Photostabilized Broad UV Filter Complex',
        mechanism: 'Absorbs both short and long-wave ultraviolet radiation, converting photonic energy into harmless thermal dissipation.',
      },
      {
        name: 'Tinosorb S & Micronized Physical Blockers',
        role: 'Hybrid Photostable Shield',
        mechanism: 'Provides photostability to organic filters while scattering and reflecting high-energy visible wavelengths.',
      },
      {
        name: 'Niacinamide 2%',
        role: 'Cellular Energy & Infrared Defense',
        mechanism: 'Prevents UV-mediated ATP depletion in dermal cells, reducing sunlight-induced immunosuppression.',
      },
      {
        name: 'Tocopheryl Acetate (Vitamin E)',
        role: 'Photoprotective Radical Scavenger',
        mechanism: 'Neutralizes reactive oxygen species (ROS) produced by UV exposure before lipid peroxidation can compromise cell membranes.',
      },
      {
        name: 'Sodium Hyaluronate',
        role: 'Micro-Hydration Reservoir',
        mechanism: 'Maintains cutaneous hydration against heat-induced transepidermal water loss (TEWL) during intense sun exposure.',
      },
    ],
    clinicalData: {
      laboratory: 'Mascot Spincontrol Clinical Testing Laboratory',
      protocol: 'ISO 24443 & Critical Wavelength In-Vitro Spectral Analysis',
      ethicsApproval: 'Independent Quality & Spectrophotometry Accreditation',
      resultSummary:
        'Comprehensive spectrophotometric analysis demonstrated an in-vitro SPF mean value of 96.78. Critical wavelength verified at 379.4 nm, qualifying for broad spectrum claims. Boots Star rating calculated at 3 stars.',
      metrics: [
        { label: 'Laboratory SPF Value', value: '96.78', description: 'Certified in-vitro mean SPF' },
        { label: 'Critical Wavelength', value: '379.4 nm', description: 'Superior UVA-I long-wave shield' },
        { label: 'Boots Star Rating', value: '★★★☆☆', description: 'High UVA/UVB absorption ratio' },
        { label: 'PA Rating', value: 'PA++++', description: 'Highest grade UVA protection factor' },
      ],
    },
    specifications: {
      category: 'Advanced Photoprotection',
      dosageForm: 'Silicone-Elastomer Clear Gel',
      netContent: '50 g (1.76 oz.)',
      storage: 'Store in a dry place at or below 25°C. Keep tube tightly closed.',
      shelfLife: '24 Months from manufacturing date',
      regulatoryCode: 'Mfg Lic: Cos/WZ/2022/98',
      recommendedUse: 'Apply liberally across exposed skin 15 minutes prior to sun exposure. Reapply every 2 hours or after 80 minutes of swimming.',
    },
    usageInstructions: [
      'Dispense a nickel-sized quantity (approx. 2 finger lengths) onto the palm.',
      'Dot evenly over face, neck, ears, and any exposed skin.',
      'Gently spread until the clear gel creates a smooth, matte protective film.',
      'Reapply every 2 to 3 hours during extended outdoor exposure or following vigorous exercise.',
      'Safe for daily use under makeup or topical dermatological treatments.',
    ],
    images: {
      main: '/images/products/uvothera_main.jpg',
      detail: '/images/products/uvothera_detail.png',
      caption: 'Uvothera SPF 60++++ High Protection Gel Packaging & Detail Monograph',
    },
  },
];
