import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about DOMUS outcall home wellness rituals, booking, preparation, and what to expect.',
};

const faqItems = [
  {
    question: 'How do I book a ritual?',
    answer: 'You can book a ritual through our contact form. We respond within 24 hours to confirm availability and discuss your preferences. We recommend booking at least one week in advance, though we may have availability for shorter notice requests.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We currently serve London, Manchester, Birmingham, and Edinburgh, with plans to expand. If you\'re unsure whether we serve your area, please contact us to confirm.',
  },
  {
    question: 'What do I need to prepare?',
    answer: 'Very little. We bring everything needed for the ritual. You\'ll need a quiet, comfortable space (bedroom or living room), clean linens or towels for the massage surface, dim lighting, and a comfortable temperature. We\'ll provide detailed guidance when you book.',
  },
  {
    question: 'How long do the rituals last?',
    answer: 'Ritual duration varies by service, typically ranging from 90 minutes to 3 hours. This includes consultation, the ritual itself, and aftercare guidance. We\'ll confirm the exact duration when you book.',
  },
  {
    question: 'What should I wear?',
    answer: 'Wear whatever feels comfortable. During the ritual, you\'ll be covered with linens, and we work with draping to ensure your comfort and privacy at all times.',
  },
  {
    question: 'Are your practitioners qualified?',
    answer: 'Yes. All DOMUS practitioners are fully trained and certified in our signature rituals. They undergo extensive training in technique, presence, and the principles that guide our practice.',
  },
  {
    question: 'Can I request a specific practitioner?',
    answer: 'We\'ll do our best to accommodate practitioner preferences when possible. Please mention this in your booking request, and we\'ll confirm availability.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer: 'We understand that plans change. Please contact us as soon as possible to cancel or reschedule. We have a cancellation policy that we\'ll share when you book.',
  },
  {
    question: 'Do you offer gift rituals?',
    answer: 'Yes. Gift rituals are available. Please contact us to discuss gifting options and we can help you create a meaningful gift experience.',
  },
  {
    question: 'What makes DOMUS different from other wellness services?',
    answer: 'DOMUS is built on the principles of slow luxury, presence, and ancient wisdom. We don\'t rush. We don\'t treat wellness as transactional. Every ritual is a dedicated time for restoration, delivered with full presence and care. We bring everything to your home, creating sanctuary wherever you are.',
  },
];

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="pt-24">
      <StructuredData data={faqSchema} />
      {/* Hero */}
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-bodoni text-5xl md:text-6xl mb-6 tracking-tight">
            Frequently Asked Questions
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto">
            Common questions about our rituals, booking, and what to expect. If you don't find what you're looking for, please contact us.
          </AnimatedText>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-warm-stone/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-bodoni text-3xl mb-6">Still have questions?</h2>
            <p className="font-inter text-base font-light text-ash-brown/70 mb-8">
              We're here to help. Contact us with any questions or to discuss your needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-domus-green text-warm-stone px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

