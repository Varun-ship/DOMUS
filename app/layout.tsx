import type { Metadata } from 'next';
import { Caudex, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const caudex = Caudex({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-caudex',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.domus.com'),
  title: {
    default: 'DOMUS — Premium Outcall Home Wellness Rituals',
    template: '%s | DOMUS',
  },
  description: 'Ancient Roman bath rituals reimagined for modern living. Premium outcall home wellness with warmth, presence, touch, and renewal.',
  keywords: ['wellness', 'home massage', 'outcall spa', 'wellness rituals', 'home wellness', 'massage therapy', 'spa services', 'wellness at home'],
  authors: [{ name: 'DOMUS' }],
  creator: 'DOMUS',
  publisher: 'DOMUS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.domus.com',
    siteName: 'DOMUS',
    title: 'DOMUS — Premium Outcall Home Wellness Rituals',
    description: 'Ancient Roman bath rituals reimagined for modern living. Premium outcall home wellness.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DOMUS Premium Outcall Home Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOMUS — Premium Outcall Home Wellness Rituals',
    description: 'Ancient Roman bath rituals reimagined for modern living.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.domus.com',
  },
  verification: {
    // Add when you have verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
    <html lang="en" className={`${caudex.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <StructuredData data={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}

