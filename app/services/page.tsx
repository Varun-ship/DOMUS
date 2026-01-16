import type { Metadata } from 'next';
import Image from 'next/image';
import RitualCard from '@/components/RitualCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our premium outcall home wellness rituals. Each service is designed to bring warmth, presence, and renewal into your space.',
};

const services = [
  {
    title: 'Balinese Massage',
    description: 'A traditional Indonesian massage combining acupressure, stretching, and aromatherapy. Promotes deep relaxation and energy flow.',
    href: '/services/balinese-massage',
    price: 'AED 320',
    featured: true,
  },
  {
    title: 'Thai Massage',
    description: 'Ancient Thai healing art combining acupressure, yoga-like stretching, and energy work. Performed on a mat with the client fully clothed.',
    href: '/services/thai-massage',
    price: 'AED 380',
    featured: true,
  },
  {
    title: 'Swedish Relaxing Massage',
    description: 'Classic European massage using long, flowing strokes, kneading, and circular movements. Perfect for stress relief and overall relaxation.',
    href: '/services/swedish-relaxing-massage',
    price: 'AED 320',
    featured: true,
  },
  {
    title: 'Deep Tissue Massage',
    description: 'Intensive massage targeting deeper layers of muscle and connective tissue. Ideal for chronic pain, tension, and injury recovery.',
    href: '/services/deep-tissue-massage',
    price: 'AED 400',
    featured: true,
  },
  {
    title: 'Couples Massage',
    description: 'Share a relaxing experience with your partner. Two therapists work simultaneously in the same space, creating a harmonious wellness journey.',
    href: '/services/couples-massage',
    price: 'AED 640',
    featured: false,
  },
  {
    title: 'Hot Stone Massage',
    description: 'Smooth, heated stones are placed on key points and used to massage the body. Deeply relaxing and helps release muscle tension.',
    href: '/services/hot-stone-massage',
    price: 'AED 400',
    featured: false,
  },
  {
    title: 'Sport Massage',
    description: 'Specialized massage for athletes focusing on muscle recovery, injury prevention, and performance enhancement. Combines deep tissue and stretching techniques.',
    href: '/services/sport-massage',
    price: 'AED 680',
    featured: false,
  },
  {
    title: 'Aromatherapy Massage',
    description: 'Swedish massage enhanced with essential oils chosen for their therapeutic properties. Promotes relaxation, mood enhancement, and overall well-being.',
    href: '/services/aromatherapy-massage',
    price: 'AED 400',
    featured: false,
  },
  {
    title: 'Four Hand Massage',
    description: 'Two therapists work in perfect synchronization, creating a unique and deeply relaxing experience. Double the touch, double the relaxation.',
    href: '/services/four-hand-massage',
    price: 'AED 550',
    featured: false,
  },
  {
    title: 'Head, Neck & Shoulder Massage',
    description: 'Focused massage targeting the upper body to relieve tension, headaches, and stress. Perfect for desk workers and those with neck and shoulder pain.',
    href: '/services/head-neck-shoulder-massage',
    price: 'AED 160',
    featured: false,
  },
  {
    title: 'Facial Massage',
    description: 'Gentle, rejuvenating massage for the face and neck. Promotes circulation, reduces tension, and enhances skin health.',
    href: '/services/facial-massage',
    price: 'AED 65',
    featured: false,
    isAddOn: true,
  },
  {
    title: 'Foot Massage',
    description: 'Reflexology-based foot massage targeting pressure points connected to the entire body. Relieves tension and promotes overall wellness.',
    href: '/services/foot-massage',
    price: 'AED 60',
    featured: false,
    isAddOn: true,
  },
  {
    title: 'Scalp Massage',
    description: 'Therapeutic scalp massage using gentle pressure and circular motions. Relieves tension, promotes relaxation, and improves scalp health.',
    href: '/services/scalp-massage',
    price: 'AED 60',
    featured: false,
    isAddOn: true,
  },
];

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

