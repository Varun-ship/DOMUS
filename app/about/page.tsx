import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about DOMUS—our philosophy, approach, and commitment to bringing ancient Roman bath rituals into modern home wellness.',
};

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-bodoni text-5xl md:text-6xl mb-6 tracking-tight font-semibold">
            About DOMUS
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto">
            Ancient ritual meets modern living. We bring the essence of Roman thermae into your home.
          </AnimatedText>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-bodoni text-4xl mb-8 tracking-tight">
              Philosophy
            </h2>
            <div className="space-y-6 font-inter text-base font-light text-ash-brown/80 leading-relaxed">
            <p>
              The ancient Romans understood something profound: that ritual, warmth, and presence could transform a space into a sanctuary. In the thermae—their public baths—people gathered not just to cleanse, but to restore, to slow down, to reconnect with themselves and each other.
            </p>
            <p>
              DOMUS brings this wisdom into your home. We believe that wellness isn't found in clinical settings or rushed appointments. It's found in the quiet moments, the warmth of touch, the intentional pause. Our rituals are designed to create sanctuary wherever you are.
            </p>
            <p>
              Every session is a return to presence. We move slowly, with intention. We use warm oils, heated stones, and techniques that honor both ancient tradition and modern understanding of the nervous system. The goal isn't just relaxation—it's renewal.
            </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-warm-stone/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-bodoni text-4xl mb-12 text-center tracking-tight">
              Our Approach
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Presence Over Performance',
                description: 'We prioritize being fully present over doing more. Each ritual is a dedicated time, free from distraction.',
              },
              {
                title: 'Warmth as Medicine',
                description: 'Physical and emotional warmth are central to our approach. Warm oils, heated elements, and a calm presence.',
              },
              {
                title: 'Slow Luxury',
                description: 'We move at a pace that allows for true restoration. No rushing, no shortcuts—just intentional care.',
              },
              {
                title: 'Home as Sanctuary',
                description: 'Your space becomes the ritual space. We bring everything needed to transform your environment.',
              },
              {
                title: 'Ancient Wisdom, Modern Practice',
                description: 'We honor traditional techniques while integrating contemporary understanding of wellness and the nervous system.',
              },
              {
                title: 'Quiet Confidence',
                description: 'No loud claims or hard selling. Our work speaks through the quality of presence and care we bring.',
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="bg-warm-stone p-8 rounded-sm border border-aureum-gold/20">
                <h3 className="font-bodoni text-xl mb-4 text-domus-green">{value.title}</h3>
                <p className="font-inter text-sm font-light text-ash-brown/70 leading-relaxed">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="border-l-4 border-aureum-gold pl-8">
            <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed mb-6 italic">
              "DOMUS was born from a simple belief: that everyone deserves access to true sanctuary, and that sanctuary can be found at home. We're not trying to replicate a spa experience—we're creating something different. Something slower, more intentional, more connected to the ancient understanding that ritual and presence are essential to wellness."
            </p>
            <p className="font-inter text-sm font-normal text-ash-brown">
              — DOMUS Founder
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

