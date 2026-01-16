import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BookingCTA from '@/components/BookingCTA';
import StructuredData from '@/components/StructuredData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

const rituals: Record<string, {
  title: string;
  description: string;
  story: string;
  whoFor: string;
  included: string[];
  preparation: string[];
  aftercare: string;
}> = {
  'roman-renewal-ritual': {
    title: 'Roman Renewal Ritual',
    description: 'A full-body experience inspired by the thermae, combining warm oil massage, breathwork, and restorative stillness.',
    story: 'The ancient Romans understood that true renewal came through ritual. In the thermae, people moved through spaces of different temperatures, receiving massage, and taking time to restore. This ritual brings that wisdom home.',
    whoFor: 'Those seeking complete restoration, deep relaxation, and a return to balance. Ideal for anyone feeling overwhelmed, disconnected, or simply in need of profound care.',
    included: [
      'Full-body warm oil massage',
      'Breathwork guidance',
      'Heated stone placement',
      'Restorative stillness period',
      'Aftercare consultation',
    ],
    preparation: [
      'A quiet, comfortable space (bedroom or living room)',
      'Clean linens or towels for the massage surface',
      'Dim lighting (candles or soft lamps)',
      'Comfortable temperature',
      'Time to rest afterward (2-3 hours recommended)',
    ],
    aftercare: 'Rest for at least an hour. Hydrate with warm water. Avoid heavy meals or intense activity. The effects often deepen over 24-48 hours.',
  },
  'calm-body-release': {
    title: 'Calm Body Release',
    description: 'Gentle, flowing touch designed to release tension and restore nervous system balance. Slow, intentional movements.',
    story: 'This ritual is built on the understanding that the nervous system needs time and presence to release. We move slowly, allowing your body to respond naturally.',
    whoFor: 'Anyone experiencing tension, stress, or nervous system overwhelm. Particularly beneficial for those with chronic tension or anxiety.',
    included: [
      'Gentle, flowing massage techniques',
      'Nervous system regulation practices',
      'Warm oil application',
      'Breathwork integration',
      'Extended rest period',
    ],
    preparation: [
      'A quiet space free from interruption',
      'Comfortable surface (bed or floor mat)',
      'Soft lighting',
      'Warm, comfortable temperature',
      'Time for integration afterward',
    ],
    aftercare: 'Move slowly. Rest if possible. Notice how your body feels. Many clients experience a sense of lightness and calm that continues for days.',
  },
  'warm-oil-reset': {
    title: 'Warm Oil Reset',
    description: 'Aromatic oils warmed to body temperature, applied with rhythmic strokes. Deeply nourishing and grounding.',
    story: 'Warm oil has been used for thousands of years as a form of nourishment and grounding. This ritual focuses entirely on the restorative power of touch and warmth.',
    whoFor: 'Those seeking deep nourishment, grounding, and sensory restoration. Perfect for anyone feeling disconnected from their body or in need of gentle care.',
    included: [
      'Aromatic warm oil massage',
      'Full-body application',
      'Rhythmic, grounding strokes',
      'Extended session time',
      'Aftercare guidance',
    ],
    preparation: [
      'Comfortable space with massage surface',
      'Clean linens',
      'Dim, warm lighting',
      'Quiet environment',
      'Time to rest afterward',
    ],
    aftercare: 'Allow the oils to absorb naturally. Rest for at least an hour. The nourishing effects continue as your skin absorbs the oils.',
  },
  'deep-restore': {
    title: 'Deep Restore',
    description: 'Extended session for complete restoration. Multiple techniques woven together for profound relaxation and renewal.',
    story: 'Sometimes, a single technique isn\'t enough. This extended ritual combines multiple approaches—warm oil, heated elements, breathwork, and stillness—for complete restoration.',
    whoFor: 'Those in need of profound restoration, recovery from stress or overwhelm, or simply a dedicated time for complete renewal.',
    included: [
      'Extended session duration',
      'Multiple technique integration',
      'Warm oil massage',
      'Heated stone therapy',
      'Breathwork and stillness',
      'Comprehensive aftercare',
    ],
    preparation: [
      'A dedicated, quiet space',
      'Comfortable massage surface',
      'Clean linens',
      'Soft, warm lighting',
      'Full afternoon or evening for rest afterward',
    ],
    aftercare: 'This is a profound experience. Plan for complete rest afterward. Many clients find the effects continue to unfold over several days. Take time to integrate.',
  },
};

export async function generateStaticParams() {
  return Object.keys(rituals).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ritual = rituals[params.slug];
  if (!ritual) {
    return {};
  }

  return {
    title: ritual.title,
    description: ritual.description,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const ritual = rituals[params.slug];

  if (!ritual) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: ritual.title,
    description: ritual.description,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: 'DOMUS',
    },
    areaServed: {
      '@type': 'City',
      name: ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
    },
  };

  return (
    <div className="pt-24">
      <StructuredData data={serviceSchema} />
      {/* Hero */}
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedHeading as="h1" className="font-caudex text-5xl md:text-6xl mb-6 tracking-tight">
            {ritual.title}
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed">
            {ritual.description}
          </AnimatedText>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-3xl mb-6 tracking-tight">
              The Ritual Story
            </h2>
            <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed">
              {ritual.story}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-warm-stone/50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-3xl mb-6 tracking-tight">
              Who It's For
            </h2>
            <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed">
              {ritual.whoFor}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-3xl mb-6 tracking-tight">
              What's Included
            </h2>
            <ul className="space-y-3 font-inter text-base font-light text-ash-brown/80">
            {ritual.included.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-aureum-gold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-24 bg-warm-stone/50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-3xl mb-6 tracking-tight">
              Home Preparation
            </h2>
            <ul className="space-y-3 font-inter text-base font-light text-ash-brown/80">
            {ritual.preparation.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-aureum-gold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-3xl mb-6 tracking-tight">
              Aftercare
            </h2>
            <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed">
              {ritual.aftercare}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}

