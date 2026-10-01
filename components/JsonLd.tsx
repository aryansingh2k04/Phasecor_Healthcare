import { PRODUCTS, COMPANY_CONTACT } from "./data";

export default function JsonLd() {
  const baseUrl = "https://phasecor.com";

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
    alternateName: "Phasecor",
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
  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Phasecor Healthcare Therapeutic & Dermatological Formulations",
    itemListElement: PRODUCTS.map((prod, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
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
        offers: {
          "@type": "Offer",
          url: "https://phasecor.com",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: {
            "@id": `${baseUrl}/#organization`,
          },
        },
      },
    })),
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
