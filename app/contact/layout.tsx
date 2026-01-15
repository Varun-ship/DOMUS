import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a DOMUS ritual. Share your preferences and we will respond within 24 hours to confirm availability.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

