import type { Metadata } from 'next';
import Image from 'next/image';
import RitualCard from '@/components/RitualCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';
import { servicesData } from './services-data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our premium outcall home wellness rituals. Each service is designed to bring warmth, presence, and renewal into your space.',
  alternates: {
    canonical: 'https://www.domus.com/services',
  },
  openGraph: {
    title: 'Wellness Services | DOMUS',
    description: 'Explore our premium outcall home wellness rituals. Each service is designed to bring warmth, presence, and renewal into your space.',
    url: 'https://www.domus.com/services',
  },
};

// Convert servicesData to array format with images
const services = Object.entries(servicesData).map(([slug, data]) => ({
  title: data.title,
  description: data.description,
  href: `/services/${slug}`,
  price: data.price,
  featured: ['balinese-massage', 'thai-massage', 'swedish-relaxing-massage', 'deep-tissue-massage'].includes(slug),
  isAddOn: data.isAddOn,
  image: data.image,
}));


export default function Services() {
  return (
    <div className="pt-24">
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-caudex text-5xl md:text-6xl mb-6 tracking-tight">
            Our Rituals
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto">
            Each ritual is thoughtfully designed to bring ancient wisdom into your modern home. Premium outcall wellness that honors both tradition and your individual needs.
          </AnimatedText>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-caudex text-4xl md:text-5xl mb-12 tracking-tight">
            All Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <RitualCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-warm-stone/50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-4xl mb-8 tracking-tight">
              What to Expect
            </h2>
            <div className="space-y-6 font-inter text-base font-light text-ash-brown/80 leading-relaxed">
            <p>
              Every DOMUS ritual begins with a brief consultation. We'll discuss your preferences, any areas of focus, and how to prepare your space. Your practitioner arrives with everything needed—oils, linens, heated elements, and a calm, professional presence.
            </p>
            <p>
              The ritual itself unfolds at a slow, intentional pace. We move with presence, allowing time for your nervous system to settle and respond. Touch is warm, grounding, and respectful. The goal is restoration, not just relaxation.
            </p>
            <p>
              After the session, we provide gentle aftercare guidance to help you extend the benefits. We recommend taking time to rest, hydrate, and allow the experience to integrate. Many clients find that the effects deepen over the following days.
            </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Aftercare Excerpt */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-caudex text-4xl mb-8 tracking-tight">
              Aftercare
            </h2>
            <div className="bg-warm-stone border border-aureum-gold/20 p-8 rounded-sm">
            <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed mb-4">
              After your ritual, we encourage you to move slowly. Rest if possible. Hydrate with warm water or herbal tea. Avoid heavy meals or intense activity for a few hours.
            </p>
            <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed">
              The benefits of touch and presence often continue to unfold over the following days. Notice how you feel. Many clients report improved sleep, reduced tension, and a greater sense of calm that extends well beyond the session itself.
            </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

