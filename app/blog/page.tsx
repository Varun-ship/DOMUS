import type { Metadata } from 'next';
import RitualCard from '@/components/RitualCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'News, seasonal notes, and stories from DOMUS. Updates on our practice, reflections on wellness, and insights into slow living.',
};

const blogPosts = [
  {
    title: 'Welcoming Spring: Rituals for Renewal',
    description: 'As the seasons shift, our bodies and nervous systems respond. How to align your wellness practice with the rhythms of nature.',
    href: '/blog/welcoming-spring-rituals-for-renewal',
  },
  {
    title: 'The Gift of Presence',
    description: 'In a world of constant distraction, presence becomes a radical act. How we cultivate presence in our rituals and daily life.',
    href: '/blog/the-gift-of-presence',
  },
  {
    title: 'Touch and Connection',
    description: 'Exploring the profound role of touch in human connection, healing, and restoration. Why touch matters more than ever.',
    href: '/blog/touch-and-connection',
  },
];

export default function Blog() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-bodoni text-5xl md:text-6xl mb-6 tracking-tight">
            Journal
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto">
            News, seasonal notes, and stories from DOMUS. Updates on our practice, reflections on wellness, and insights into slow living.
          </AnimatedText>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <RitualCard {...post} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

