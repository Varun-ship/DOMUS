import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import RitualCard from '@/components/RitualCard';
import Testimonial from '@/components/Testimonial';
import BookingCTA from '@/components/BookingCTA';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'DOMUS brings ancient Roman bath rituals to your home. Premium outcall wellness with warmth, presence, touch, and renewal.',
};

const featuredRituals = [
  {
    title: 'Roman Renewal Ritual',
    description: 'A full-body experience inspired by the thermae, combining warm oil massage, breathwork, and restorative stillness.',
    href: '/services/roman-renewal-ritual',
    image: '/images/ritual-roman.jpg',
  },
  {
    title: 'Calm Body Release',
    description: 'Gentle, flowing touch designed to release tension and restore nervous system balance. Slow, intentional movements.',
    href: '/services/calm-body-release',
    image: '/images/ritual-calm.jpg',
  },
  {
    title: 'Warm Oil Reset',
    description: 'Aromatic oils warmed to body temperature, applied with rhythmic strokes. Deeply nourishing and grounding.',
    href: '/services/warm-oil-reset',
    image: '/images/ritual-oil.jpg',
  },
  {
    title: 'Deep Restore',
    description: 'Extended session for complete restoration. Multiple techniques woven together for profound relaxation.',
    href: '/services/deep-restore',
    image: '/images/ritual-restore.jpg',
  },
];

const pillars = [
  {
    title: 'Presence',
    description: 'Fully present, attentive care. Each ritual is a dedicated time for you, without distraction.',
  },
  {
    title: 'Warmth',
    description: 'Physical and emotional warmth. Warm oils, heated stones, and a calm, welcoming presence.',
  },
  {
    title: 'Renewal',
    description: 'A return to yourself. These rituals are designed to restore balance, calm, and a sense of wholeness.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        headline="Sanctuary at Home"
        subcopy="At-home wellness rituals, reimagined for modern living.

Premium outcall spa treatments that bring warmth, presence, touch, and renewal into your home."
        videoSrc="/videos/hero-video.mp4"
      />

      {/* The Domus Promise */}
      <section className="pt-24 pb-12 bg-warm-stone">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bodoni text-4xl md:text-5xl text-center mb-16 tracking-tight font-semibold">
            The Domus Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <h3 className="font-bodoni text-2xl mb-4 text-domus-green">{pillar.title}</h3>
                <p className="font-inter text-sm font-light text-ash-brown/70 leading-relaxed">
                  {pillar.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
          {/* Image Gallery - Hidden until images are added */}
          {/* <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: '/images/gallery-1.jpg', alt: 'Wellness treatment' },
              { src: '/images/gallery-2.jpg', alt: 'Spa atmosphere' },
              { src: '/images/gallery-3.jpg', alt: 'Relaxation space' },
            ].map((img, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-sm overflow-hidden bg-gradient-to-br from-domus-green/20 to-soft-clay/20">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </AnimatedSection> */}
        </div>
      </section>

      {/* Featured Rituals */}
      <section className="pt-12 pb-24 bg-warm-stone/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bodoni text-4xl md:text-5xl mb-4 tracking-tight">
            Featured Rituals
          </h2>
          <p className="font-inter text-sm font-light text-ash-brown/60 mb-12 max-w-2xl">
            Each ritual is thoughtfully designed to bring ancient wisdom into your modern home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRituals.map((ritual, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <RitualCard {...ritual} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-bodoni text-4xl md:text-5xl mb-12 text-center tracking-tight">
            How It Works
          </h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Request', description: 'Share your preferred date, time, and location. We respond within 24 hours.' },
              { step: '02', title: 'Prepare', description: 'We guide you through simple home preparation. A quiet, comfortable space is all that\'s needed.' },
              { step: '03', title: 'Receive', description: 'Your practitioner arrives with everything needed. The ritual begins when you\'re ready.' },
              { step: '04', title: 'Restore', description: 'Aftercare guidance helps you extend the benefits. Take time to rest and integrate.' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="flex gap-6">
                <div className="font-bodoni text-3xl text-aureum-gold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bodoni text-xl mb-2 text-ash-brown">{item.title}</h3>
                  <p className="font-inter text-sm font-light text-ash-brown/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-warm-stone/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-bodoni text-4xl md:text-5xl mb-12 text-center tracking-tight">
            Reflections
          </h2>
          <div className="space-y-8">
            <Testimonial
              quote="The Roman Renewal Ritual transformed my home into a true sanctuary. The warmth, the presence, the care—it was unlike anything I've experienced."
              author="Sarah M."
              location="London"
            />
            <Testimonial
              quote="DOMUS brought ritual back into my life. It's not just a service; it's a practice of slowing down and returning to myself."
              author="James R."
              location="Manchester"
            />
            <Testimonial
              quote="The attention to detail, the calm atmosphere, the quality of touch—everything felt intentional and deeply restorative."
              author="Emma L."
              location="Birmingham"
            />
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

