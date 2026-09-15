import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phasecor.com"),
  title: "Phasecor Healthcare | Quality Care within Reach",
  description:
    "Phasecor Healthcare bridges clinical science and therapeutic formulations engineered for restorative, phased systemic and skin health.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Phasecor Healthcare | Quality Care within Reach",
    description:
      "Innovative, high-quality, and affordable multi-specialty therapeutics and clinical formulations.",
    url: "https://phasecor.com",
    siteName: "Phasecor Healthcare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phasecor Healthcare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phasecor Healthcare | Quality Care within Reach",
    description:
      "Innovative, high-quality, and affordable multi-specialty therapeutics and clinical formulations.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 min-h-screen flex flex-col antialiased selection:bg-[#2D8F7A]/20 selection:text-[#184a3f]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
