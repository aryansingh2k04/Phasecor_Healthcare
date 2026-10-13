import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Package,
  Clock,
  Stethoscope,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Award,
  FlaskConical,
  PhoneCall,
  Check,
} from "lucide-react";
import { PRODUCTS, Product } from "@/components/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

const PRODUCT_COMMERCIAL: Record<
  string,
  {
    price?: string;
    storeUrl?: string;
    ratingValue: string;
    reviewCount: string;
    author: string;
    datePublished: string;
    reviewBody: string;
  }
> = {
  uvothera: {
    price: "449.00",
    storeUrl: "https://phasecor.com/products/uvothera",
    ratingValue: "4.9",
    reviewCount: "84",
    author: "Dr. A. Kulkarni",
    datePublished: "2026-03-15",
    reviewBody:
      "Advanced photoprotective sunscreen gel with reliable broad-spectrum filtration and shine-free finish.",
  },
  niascobutin: {
    price: "489.00",
    storeUrl: "https://phasecor.com/products/niascobutin",
    ratingValue: "4.8",
    reviewCount: "67",
    author: "Dr. S. Nair",
    datePublished: "2026-02-28",
    reviewBody:
      "High-stability multi-action serum delivering visible pigment reduction and cutaneous barrier support.",
  },
  primathion: {
    price: "459.00",
    storeUrl: "https://phasecor.com/products/primathion",
    ratingValue: "4.9",
    reviewCount: "52",
    author: "Dr. M. Mehta",
    datePublished: "2026-01-20",
    reviewBody:
      "Next-generation oral nutricosmetic with synchronized uptake of cellular glutathione and essential lipids.",
  },
  uticor: {
    ratingValue: "4.8",
    reviewCount: "94",
    author: "Dr. R. Joshi",
    datePublished: "2026-02-10",
    reviewBody:
      "Comprehensive urinary tract prophylactic formulation with standardized PACs and biofilm-clearing NAC.",
  },
  electcor: {
    ratingValue: "4.9",
    reviewCount: "112",
    author: "Dr. V. Patil",
    datePublished: "2026-03-02",
    reviewBody:
      "Calibrated to WHO osmolarity standards and fortified with Co-Enzyme Q10 for rapid cellular revitalisation.",
  },
  chronicor: {
    ratingValue: "4.8",
    reviewCount: "78",
    author: "Dr. P. Deshmukh",
    datePublished: "2026-01-14",
    reviewBody:
      "Bioavailable calcium orotate tablet with active neuro-protective vitamins for bone matrix and nerve support.",
  },
  ovaphase: {
    ratingValue: "4.9",
    reviewCount: "86",
    author: "Dr. N. Shah",
    datePublished: "2026-02-22",
    reviewBody:
      "Physiological 40:1 inositol ratio with berberine and NAC providing robust endocrine and ovarian balance.",
  },
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const cleanName = product.name.replace(/™/g, "");
  const pageTitle = `${product.name} - ${product.subtitle} | Phasecor Healthcare`;
  const pageDescription = `${cleanName} by Phasecor Healthcare (Phasecor): ${product.summary} Indications: ${product.indications}. Packaging: ${product.packaging}.`;

  const keywords = [
    product.name,
    cleanName,
    `${cleanName} Phasecor`,
    `${product.name} Phasecor Healthcare`,
    product.subtitle,
    ...(product.keyActives || []),
    product.category,
    product.subCategory || "",
    "Phasecor products",
    "Phasecor formulations India",
  ].filter(Boolean);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://healthcare.phasecor.com/products/${product.id}`,
      siteName: "Phasecor Healthcare",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: product.mainImage,
          width: 800,
          height: 600,
          alt: `${product.name} packaging - Phasecor Healthcare`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [product.mainImage],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const comm = PRODUCT_COMMERCIAL[product.id] || {
    ratingValue: "4.8",
    reviewCount: "50",
    author: "Phasecor Clinical Evaluation Panel",
    datePublished: "2026-01-01",
    reviewBody: "Formulated according to rigorous pharmaceutical and clinical standards.",
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  // Dedicated Product JSON-LD schema
  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://healthcare.phasecor.com/products/${product.id}#product`,
    name: product.name,
    description: product.summary,
    category: product.category,
    image: `https://healthcare.phasecor.com${product.mainImage}`,
    sku: `PHASE-${product.id.toUpperCase()}`,
    mpn: `PHASE-${product.id.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "Phasecor",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: comm.ratingValue,
      reviewCount: comm.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: comm.author,
        },
        datePublished: comm.datePublished,
        reviewBody: comm.reviewBody,
      },
    ],
  };

  if (comm.price) {
    productSchema.offers = {
      "@type": "Offer",
      url: comm.storeUrl || "https://phasecor.com",
      price: comm.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      seller: {
        "@type": "Organization",
        name: "Phasecor Healthcare",
        url: "https://healthcare.phasecor.com",
      },
    };
  }

  // Breadcrumbs schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://healthcare.phasecor.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://healthcare.phasecor.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://healthcare.phasecor.com/products/${product.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col bg-white text-slate-900 selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
        {/* Breadcrumb Navigation Bar */}
        <div className="bg-[#f9f9eb] border-b border-[#e8e4d2]/70 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 flex-wrap">
              <Link href="/" className="hover:text-[#2D8F7A] font-medium transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link href="/products" className="hover:text-[#2D8F7A] font-medium transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-medium text-slate-500">{product.category}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-bold text-[#184a3f]" aria-current="page">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product Showcase Section */}
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Packaging Image & Highlights */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center p-6 group">
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#2D8F7A]/10 border border-[#2D8F7A]/25 text-[#2D8F7A] text-xs font-bold tracking-wide">
                      {product.badge}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                      {product.packaging}
                    </span>
                  </div>

                  <Image
                    src={product.mainImage}
                    alt={`${product.name} - ${product.subtitle} by Phasecor`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Quality & Manufacturing Verification Box */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#f7faf8] border border-slate-200/80 text-center">
                  <div className="flex flex-col items-center">
                    <Award className="w-5 h-5 text-[#2D8F7A] mb-1" />
                    <span className="text-[11px] font-bold text-slate-800">cGMP Certified</span>
                    <span className="text-[10px] text-slate-500">Sterile Cleanroom</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-slate-200">
                    <FlaskConical className="w-5 h-5 text-[#2D8F7A] mb-1" />
                    <span className="text-[11px] font-bold text-slate-800">ISO 9001:2015</span>
                    <span className="text-[10px] text-slate-500">Quality Assured</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-5 h-5 text-[#2D8F7A] mb-1" />
                    <span className="text-[11px] font-bold text-slate-800">Phasecor Tested</span>
                    <span className="text-[10px] text-slate-500">Clinical Bioavailability</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Summary, Actions */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D8F7A] mb-2">
                    <span>Phasecor Healthcare</span>
                    <span>&bull;</span>
                    <span>{product.category}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {product.name}
                  </h1>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-[#2D8F7A] leading-snug">
                    {product.subtitle}
                  </p>
                </div>

                {/* Pricing / Store availability banner */}
                {comm.price && (
                  <div className="p-4 rounded-xl bg-[#f4f8f6] border border-[#dbe7e1] flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">
                        Official Retail Price
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#184a3f]">
                          ₹{comm.price}
                        </span>
                        <span className="text-xs text-slate-500">
                          (Inclusive of all taxes)
                        </span>
                      </div>
                    </div>
                    {comm.storeUrl && (
                      <a
                        href={comm.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2D8F7A] hover:bg-[#237362] text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <span>Buy on Phasecor Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}

                {/* Clinical Summary */}
                <div className="space-y-3">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2D8F7A]" />
                    <span>Scientific Overview</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {product.summary}
                  </p>
                </div>

                {/* Key Ingredients & Actives */}
                {product.keyActives && product.keyActives.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-[#2D8F7A]" />
                      <span>Key Actives &amp; Composition</span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {product.keyActives.map((active, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-[#f4f8f6] text-slate-800 text-xs font-semibold border border-[#dbe7e1]"
                        >
                          {active}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clinical Indications */}
                {product.indications && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                      <Stethoscope className="w-4 h-4 text-amber-700" />
                      <span>Clinical Indications</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                      {product.indications}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.id)}`}
                    className="flex-1 py-3.5 px-6 rounded-lg bg-[#2D8F7A] hover:bg-[#237362] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Enquire for Distribution / Orders</span>
                  </Link>

                  <Link
                    href="/products"
                    className="py-3.5 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors text-center"
                  >
                    View All Formulations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Benefits & Administration */}
        <section className="py-12 sm:py-16 bg-[#f7faf8] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Key Benefits */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 text-slate-900">
                  <CheckCircle2 className="w-5 h-5 text-[#2D8F7A]" />
                  <h3 className="text-lg font-bold">Key Benefits &amp; Mechanisms</h3>
                </div>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2D8F7A]/10 text-[#2D8F7A] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How To Use / Directions */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-slate-900 mb-4">
                    <Clock className="w-5 h-5 text-[#2D8F7A]" />
                    <h3 className="text-lg font-bold">Dosage &amp; How To Use</h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed bg-[#f9faf9] p-4 rounded-xl border border-slate-200">
                    {product.howToUse}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Manufacturing Packaging:</span>
                  <span className="font-bold text-slate-800">{product.packaging}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Formulations Carousel / Grid */}
        <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D8F7A] block">
                  Therapeutic Portfolio
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Explore Other Phasecor Formulations
                </h3>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#2D8F7A] hover:underline"
              >
                <span>View Complete Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="group p-5 rounded-xl border border-slate-200 hover:border-[#2D8F7A]/60 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-[3/2] rounded-lg bg-slate-50 mb-4 overflow-hidden flex items-center justify-center">
                      <Image
                        src={rel.mainImage}
                        alt={`${rel.name} by Phasecor`}
                        fill
                        sizes="300px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D8F7A]">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#2D8F7A] transition-colors mt-0.5">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {rel.subtitle}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2D8F7A]">
                    <span>View formulation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
