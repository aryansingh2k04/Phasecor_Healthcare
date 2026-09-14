import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Phasecor Healthcare | Evidence-Based Pharmaceutical Formulations & Nutricosmetics',
    template: '%s | Phasecor Healthcare',
  },
  description:
    'Phasecor Healthcare is a research-driven pharmaceutical entity developing clinically proven topical dermatology and dual-delivery nutricosmetic formulations. Verified under IS 4011:2018 and ISO 9001:2015 protocols.',
  keywords: [
    'Phasecor Healthcare',
    'Niascobutin Serum',
    'Primathion Glutathione',
    'Uvothera Sunscreen',
    'Dual Delivery Technology',
    'Nutricosmetics India',
    'Dermatological Formulations',
    'IS 4011:2018',
    'FSSAI 12124999000251',
  ],
  authors: [{ name: 'Phasecor Healthcare' }],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased min-h-full flex flex-col bg-white text-[#0E221E] selection:bg-[#2D8F7A] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
