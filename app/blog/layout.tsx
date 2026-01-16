import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'News, seasonal notes, and stories from DOMUS. Updates on our practice, reflections on wellness, and insights into slow living.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

