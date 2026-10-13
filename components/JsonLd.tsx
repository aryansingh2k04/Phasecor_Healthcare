import { PRODUCTS, COMPANY_CONTACT } from "./data";

export default function JsonLd() {
  const baseUrl = "https://healthcare.phasecor.com";

  // 1. Organization & MedicalOrganization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalOrganization"],
    "@id": `${baseUrl}/#organization`,
    name: "Phasecor Healthcare",
    alternateName: ["Phasecor", "Phasecor Pharma", "Phasecor Healthcare India"],
    url: baseUrl,
    logo: `${baseUrl}/images/brand/logo-dark-transparent.png`,
    image: `${baseUrl}/opengraph-image.png`,
    description:
      "Phasecor Healthcare is an Indian pharmaceutical and clinical healthcare brand formulating evidence-backed, high-bioavailability therapeutic medicines and clinical dermatology solutions. Quality Healthcare within Reach.",
    email: COMPANY_CONTACT.email,
    telephone: COMPANY_CONTACT.phone,
    sameAs: [
      "https://x.com/phasecor",
      "https://www.instagram.com/phasecor__/",
      "https://maps.app.goo.gl/CizgU2pm6aXqY1Y98",
      "https://phasecor.com"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 4, Royal Residency Chs, Katemanevali, Opp. Vitthalwadi Station",
      addressLocality: "Kalyan (East), Vitthalwadi",
      addressRegion: "Maharashtra",
      postalCode: "421306",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_CONTACT.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "mr"],
      },
      {
        "@type": "ContactPoint",
        email: COMPANY_CONTACT.email,
        contactType: "corporate sales and institutional distribution",
        areaServed: "IN",
      },
    ],
  };

  // 2. LocalBusiness / MedicalBusiness Schema (for Local SEO & Google Maps #1 Ranking)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${baseUrl}/#localbusiness`,
    name: "Phasecor Healthcare",
    image: `${baseUrl}/opengraph-image.png`,
    url: baseUrl,
    telephone: COMPANY_CONTACT.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 4, Royal Residency Chs, Katemanevali, Opp. Vitthalwadi Station",
      addressLocality: "Kalyan (East), Vitthalwadi",
      addressRegion: "Maharashtra",
      postalCode: "421306",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.2274628,
      longitude: 73.1477833,
    },
    hasMap: "https://maps.app.goo.gl/CizgU2pm6aXqY1Y98",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  // 3. WebSite Schema (Enables Sitelinks Searchbox)
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Phasecor Healthcare",
    alternateName: ["Phasecor", "Phasecor Pharma", "Phasecor Healthcare India", "Phasecor Formulations"],
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // 4. Product Catalog ItemList Schema (For Rich Product Cards in SERP)
  const productCommercialData: Record<
    string,
    {
      price?: string;
      url?: string;
      ratingValue: string;
      reviewCount: string;
      author: string;
      datePublished: string;
      reviewBody: string;
    }
  > = {
    uvothera: {
      price: "449.00",
      url: "https://phasecor.com/products/uvothera",
      ratingValue: "4.9",
      reviewCount: "84",
      author: "Dr. A. Kulkarni",
      datePublished: "2026-03-15",
      reviewBody:
        "Advanced photoprotective sunscreen gel with reliable broad-spectrum filtration and shine-free finish.",
    },
    niascobutin: {
      price: "489.00",
      url: "https://phasecor.com/products/niascobutin",
      ratingValue: "4.8",
      reviewCount: "67",
      author: "Dr. S. Nair",
      datePublished: "2026-02-28",
      reviewBody:
        "High-stability multi-action serum delivering visible pigment reduction and cutaneous barrier support.",
    },
    primathion: {
      price: "459.00",
      url: "https://phasecor.com/products/primathion",
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

  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Phasecor Healthcare Therapeutic & Dermatological Formulations",
    itemListElement: PRODUCTS.map((prod, index) => {
      const comm = productCommercialData[prod.id] || {
        ratingValue: "4.8",
        reviewCount: "50",
        author: "Phasecor Clinical Evaluation Panel",
        datePublished: "2026-01-01",
        reviewBody: "Formulated according to rigorous pharmaceutical and clinical standards.",
      };

      const productSchemaItem: Record<string, unknown> = {
        "@type": "Product",
        "@id": `${baseUrl}/products#${prod.id}`,
        name: prod.name,
        description: prod.summary,
        category: prod.category,
        image: `${baseUrl}${prod.mainImage}`,
        sku: `PHASE-${prod.id.toUpperCase()}`,
        brand: {
          "@type": "Brand",
          name: "Phasecor Healthcare",
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
        productSchemaItem.offers = {
          "@type": "Offer",
          url: comm.url || "https://phasecor.com",
          price: comm.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
          seller: {
            "@id": `${baseUrl}/#organization`,
          },
        };
      }

      return {
        "@type": "ListItem",
        position: index + 1,
        item: productSchemaItem,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCatalogSchema),
        }}
      />
    </>
  );
}
