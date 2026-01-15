import type { Metadata } from 'next';
import RitualCard from '@/components/RitualCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'Ritual Library',
  description: 'Evergreen educational content about slow living, touch, nervous system calm, and home wellness. The Ritual Library is your guide to deeper understanding.',
};

const ritualArticles = [
  {
    title: 'The Art of Slow Touch',
    description: 'Understanding how intentional, slow touch can regulate the nervous system and create profound states of calm.',
    href: '/rituals/the-art-of-slow-touch',
    category: 'Calm',
  },
  {
    title: 'Warmth as Medicine',
    description: 'Exploring the therapeutic benefits of warmth—from heated oils to warm stones—and how they support restoration.',
    href: '/rituals/warmth-as-medicine',
    category: 'Warmth',
  },
  {
    title: 'Creating Sanctuary at Home',
    description: 'Practical guidance on transforming your space into a ritual environment, even in the smallest of homes.',
    href: '/rituals/creating-sanctuary-at-home',
    category: 'Recovery',
  },
  {
    title: 'The Nervous System and Rest',
    description: 'How touch, presence, and ritual support nervous system regulation and true rest.',
    href: '/rituals/nervous-system-and-rest',
    category: 'Sleep',
  },
  {
    title: 'Breathwork in Practice',
    description: 'Simple breathwork techniques that complement bodywork and deepen the experience of restoration.',
    href: '/rituals/breathwork-in-practice',
    category: 'Calm',
  },
  {
    title: 'Aftercare and Integration',
    description: 'How to extend the benefits of your ritual through thoughtful aftercare and integration practices.',
    href: '/rituals/aftercare-and-integration',
    category: 'Recovery',
  },
];

const categories = ['All', 'Calm', 'Warmth', 'Recovery', 'Sleep'];

export default function Rituals() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-bodoni text-5xl md:text-6xl mb-6 tracking-tight">
            Ritual Library
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto">
            Evergreen educational content about slow living, touch, nervous system calm, and home wellness. Deepen your understanding of ritual and restoration.
          </AnimatedText>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-warm-stone border-b border-aureum-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-aureum-gold/30 rounded-sm font-inter text-sm tracking-wide text-ash-brown hover:border-aureum-gold hover:bg-aureum-gold/5 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ritualArticles.map((article, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <RitualCard {...article} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

