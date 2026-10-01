import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phasecor.com"),
  title: {
    default: "Phasecor Healthcare | Quality Healthcare within Reach",
    template: "%s | Phasecor Healthcare",
  },
  description:
    "Phasecor Healthcare bridges clinical science and therapeutic formulations engineered for restorative, phased systemic and skin health. Quality Healthcare within Reach.",
  keywords: [
    "Phasecor Healthcare",
    "Phasecor",
    "Phasecor pharma",
    "Phasecor Kalyan",
    "Phasecor Maharashtra",
    "UTIcor",
    "Electcor",
    "Chronicor",
    "OvaPhase",
    "UVoThera",
    "Niascobutin",
    "Primathion",
    "pharmaceutical formulations India",
    "urinary tract infection cranberry D-mannose",
    "WHO standard ORS with CoQ10",
    "calcium orotate tablets joint care",
    "PCOS myo-inositol 40:1",
    "SPF 60 sunscreen matte gel",
    "Kalyan pharmaceutical company",
    "quality healthcare within reach"
  ],
  authors: [{ name: "Phasecor Healthcare Pvt. Ltd.", url: "https://phasecor.com" }],
  creator: "Phasecor Healthcare",
  publisher: "Phasecor Healthcare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Phasecor Healthcare | Quality Healthcare within Reach",
    description:
      "Evidence-backed pharmaceutical formulations and clinical dermatology solutions delivering quality healthcare within reach.",
    url: "https://phasecor.com",
    siteName: "Phasecor Healthcare",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Phasecor Healthcare - Quality Healthcare within Reach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phasecor Healthcare | Quality Healthcare within Reach",
    description:
      "Evidence-backed pharmaceutical formulations and clinical dermatology solutions delivering quality healthcare within reach.",
    creator: "@phasecor",
    site: "@phasecor",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Pharmaceuticals & Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#f9f9eb] text-slate-900 min-h-screen flex flex-col antialiased selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
        <JsonLd />
        <Navbar />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
