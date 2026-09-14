export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Clinical Efficacy' | 'Quality Management' | 'Regulatory Approval' | 'Safety Testing';
  credentialNumber: string;
  dateOrStandard: string;
  summary: string;
  details: string[];
  image?: string;
  verifiedStatus: 'Verified & Active' | 'Accredited Laboratory' | 'Certified Protocol';
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Quality Management System',
    issuer: 'Bureau Veritas Certification',
    category: 'Quality Management',
    credentialNumber: 'IND18.8452U / BVQI',
    dateOrStandard: 'ISO 9001:2015 Standard',
    summary:
      'Accredited by Bureau Veritas for rigorous clinical testing protocols, traceable sample custody, and international quality management in dermatological safety evaluations.',
    details: [
      'Audited under Bureau Veritas global certification body standards.',
      'Validation of clinical trial execution, data acquisition, and statistical reporting.',
      'Comprehensive traceability across all analytical and clinical validation stages.',
      'Ensures reproducibility and international regulatory compliance for study outcomes.',
    ],
    image: '/images/certificates/certificate.jpg',
    verifiedStatus: 'Verified & Active',
  },
  {
    id: 'is-4011-patch',
    title: 'IS 4011:2018 Cutaneous Patch Safety Evaluation',
    issuer: 'Mascot Spincontrol India Clinical Research Center',
    category: 'Safety Testing',
    credentialNumber: 'Protocol Study Code: MSIN/DERM/2023-PATCH',
    dateOrStandard: 'IS 4011:2018 (Third Revision)',
    summary:
      'Human repeat insult patch testing (HRIPT) conducted under institutional ethics committee oversight. Evaluated Niascobutin formulation across healthy volunteers with 0.00 irritation score.',
    details: [
      'Conducted under Independent Ethics Committee (IEC) approved protocol.',
      'Single-center, 48-to-72 hour occlusive dermal contact across healthy human volunteers.',
      'Clinical dermatological evaluation scored 0.00 on the standardized erythema and edema scale.',
      'Certified as completely non-irritant and hypoallergenic for human skin application.',
    ],
    image: '/images/certificates/niascobutin_detail.jpg',
    verifiedStatus: 'Certified Protocol',
  },
  {
    id: 'fssai-central',
    title: 'FSSAI Central Regulatory Licensing',
    issuer: 'Food Safety and Standards Authority of India (Government of India)',
    category: 'Regulatory Approval',
    credentialNumber: 'Central License No: 12124999000251',
    dateOrStandard: 'Food Safety and Standards Act, 2006',
    summary:
      'Full statutory central licensing for the manufacture and distribution of specialized nutraceutical formulations and dual-delivery nutricosmetics (Primathion).',
    details: [
      'Granted under central regulatory jurisdiction for nutraceutical formulation safety.',
      'Compliance with Schedule VI nutritional and active compound limits.',
      'Pharmacopeial compliance for raw materials, liposomal carriers, and vegetable capsules.',
      'Ongoing post-market surveillance and mandatory analytical testing adherence.',
    ],
    verifiedStatus: 'Verified & Active',
  },
  {
    id: 'who-gmp',
    title: 'WHO-GMP & Schedule M Compliance',
    issuer: 'State Licensing Authority & Drug Control Administration',
    category: 'Quality Management',
    credentialNumber: 'GMP-CERT/WHOGMP/PH-2022',
    dateOrStandard: 'WHO Technical Report Series / Schedule M',
    summary:
      'Formulations are manufactured in state-of-the-art facilities compliant with World Health Organization Good Manufacturing Practices (WHO-GMP).',
    details: [
      'Class 100,000 cleanroom HVAC filtration systems with positive air pressure zones.',
      'Automated blister and bottle filling under laminar airflow conditions.',
      'Double-blind quality assurance checkpoints spanning raw ingredient quarantine to finished batch release.',
      'Strict analytical batch testing for dissolution, assay potency, and microbial limits.',
    ],
    verifiedStatus: 'Verified & Active',
  },
  {
    id: 'in-vitro-spf-96',
    title: 'Spectrophotometric In-Vitro Photoprotection Assay',
    issuer: 'Mascot Spincontrol Spectrophotometry Center',
    category: 'Clinical Efficacy',
    credentialNumber: 'SPF-REPORT/UV-2023-9678',
    dateOrStandard: 'ISO 24443 / COLIPA Broad Spectrum Protocol',
    summary:
      'Comprehensive in-vitro UV transmission and critical wavelength evaluation of Uvothera Gel. Certified SPF of 96.78 and Critical Wavelength of 379.4 nm.',
    details: [
      'Measured in-vitro SPF mean value of 96.78, validating label claim of SPF 60+.',
      'Critical wavelength established at 379.4 nm, exceeding the 370 nm broad-spectrum threshold.',
      'Boots Star Rating of 3 Stars (★★★☆☆), confirming balanced UVA-to-UVB absorbance ratio.',
      'Rated PA++++ for maximum persistent pigment darkening (PPD) protection factor.',
    ],
    verifiedStatus: 'Accredited Laboratory',
  },
];
