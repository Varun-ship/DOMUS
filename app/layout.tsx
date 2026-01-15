import type { Metadata } from 'next';
import { Bodoni_Moda, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-bodoni',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'DOMUS — Premium Outcall Home Wellness Rituals',
    template: '%s | DOMUS',
  },
  description: 'Ancient Roman bath rituals reimagined for modern living. Premium outcall home wellness with warmth, presence, touch, and renewal.',
  keywords: ['wellness', 'home massage', 'outcall spa', 'wellness rituals', 'home wellness'],
  authors: [{ name: 'DOMUS' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DOMUS',
    title: 'DOMUS — Premium Outcall Home Wellness Rituals',
    description: 'Ancient Roman bath rituals reimagined for modern living. Premium outcall home wellness.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOMUS — Premium Outcall Home Wellness Rituals',
    description: 'Ancient Roman bath rituals reimagined for modern living.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'DOMUS',
    description: 'Premium outcall home wellness rituals inspired by ancient Roman bath traditions',
    url: 'https://domus.com',
    serviceType: 'Wellness Services',
  };

  return (
    <html lang="en" className={`${bodoniModa.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <StructuredData data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

