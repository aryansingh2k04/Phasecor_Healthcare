import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Distribution Inquiries | Kalyan, Maharashtra",
  description:
    "Get in touch with Phasecor Healthcare for product inquiries, pharmacy distribution, and medical institutional supplies. Located at Royal Residency, Opp. Vitthalwadi Station, Kalyan (East), Maharashtra.",
  keywords: [
    "Phasecor Healthcare contact",
    "Phasecor address Kalyan",
    "Phasecor phone number",
    "Phasecor pharma distributor",
    "Vitthalwadi station pharmaceutical office",
    "Kalyan Maharashtra pharma company"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Distribution Inquiries | Phasecor Healthcare Kalyan",
    description:
      "Get in touch with Phasecor Healthcare for corporate and distribution inquiries in Kalyan, Maharashtra.",
    url: "https://phasecor.com/contact",
    siteName: "Phasecor Healthcare",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Phasecor Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Distribution Inquiries | Phasecor Healthcare",
    description:
      "Get in touch with Phasecor Healthcare for corporate and distribution inquiries in Kalyan, Maharashtra.",
    images: ["/twitter-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
