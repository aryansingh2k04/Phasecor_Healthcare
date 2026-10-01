import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapeutic Medicines & Clinical Formulations Portfolio",
  description:
    "Explore Phasecor Healthcare's complete formulation portfolio: UTIcor (Urinary Care), Electcor (Cellular ORS + CoQ10), Chronicor (Joint & Neuropathic Tablets), OvaPhase (40:1 Inositol PCOS Care), and UVoThera SPF 60++++ Sunscreen.",
  keywords: [
    "Phasecor products",
    "UTIcor syrup",
    "Electcor sachets",
    "Chronicor tablets",
    "OvaPhase PCOS",
    "UVoThera sunscreen",
    "Niascobutin serum",
    "Primathion glutathione",
    "therapeutic medicines India",
    "pharmaceutical formulation catalogue"
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Therapeutic Medicines & Clinical Formulations Portfolio | Phasecor Healthcare",
    description:
      "Explore Phasecor Healthcare's complete formulation portfolio: UTIcor, Electcor, Chronicor, OvaPhase, and UVoThera SPF 60++++.",
    url: "https://phasecor.com/products",
    siteName: "Phasecor Healthcare",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Phasecor Healthcare Formulations Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Medicines & Clinical Formulations Portfolio | Phasecor Healthcare",
    description:
      "Explore Phasecor Healthcare's complete formulation portfolio: UTIcor, Electcor, Chronicor, OvaPhase, and UVoThera SPF 60++++.",
    images: ["/twitter-image.png"],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
