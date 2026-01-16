import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BookingCTA from '@/components/BookingCTA';
import StructuredData from '@/components/StructuredData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';
import { servicesData } from '../services-data';

const rituals = servicesData;

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
      <section className="relative py-20 text-warm-stone overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Green overlay with 40% opacity */}
          <div className="absolute inset-0 bg-domus-green/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <AnimatedHeading as="h1" className="font-caudex text-5xl md:text-6xl mb-6 tracking-tight">
            {ritual.title}
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed mb-4">
            {ritual.description}
          </AnimatedText>
          {ritual.price && (
            <div className="mt-4">
              <span className="font-inter text-lg font-normal text-warm-stone">
                Starting from{' '}
                <span className="font-semibold text-aureum-gold">{ritual.price}</span>
              </span>
            </div>
          )}
          {ritual.isAddOn && (
            <div className="mt-4 inline-block px-4 py-2 bg-aureum-gold/20 border border-aureum-gold/40 rounded-sm">
              <p className="font-inter text-sm text-warm-stone">
                Available as an add-on with any 60-minute massage
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Story */}
      <section className="pt-16 pb-12 bg-warm-stone">
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
      <section className="pt-12 pb-12 bg-warm-stone/50">
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
      <section className="pt-12 pb-12 bg-warm-stone">
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
      <section className="pt-12 pb-12 bg-warm-stone/50">
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
      <section className="pt-12 pb-16 bg-warm-stone">
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

