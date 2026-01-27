import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a DOMUS ritual. Share your preferences and we will respond within 24 hours to confirm availability.',
  alternates: {
    canonical: 'https://www.domusspa.com/contact',
  },
  openGraph: {
    title: 'Contact DOMUS | Book a Wellness Ritual',
    description: 'Request a DOMUS ritual. Share your preferences and we will respond within 24 hours to confirm availability.',
    url: 'https://www.domusspa.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

