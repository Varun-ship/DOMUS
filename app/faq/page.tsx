import type { Metadata } from 'next';
import Image from 'next/image';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about DOMUS outcall home wellness rituals, booking, preparation, and what to expect.',
  alternates: {
    canonical: 'https://www.domusspa.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | DOMUS',
    description: 'Frequently asked questions about DOMUS outcall home wellness rituals, booking, preparation, and what to expect.',
    url: 'https://www.domusspa.com/faq',
  },
};

const faqItems = [
  {
    question: 'What is an in-home spa ritual?',
    answer: 'It\'s a guided wellness experience brought into your home. Combining touch, calm, and intention to transform your space into a place of renewal.',
  },
  {
    question: 'Why at home?',
    answer: 'Because true relaxation happens where you feel safest. No travel, no waiting rooms, no noise, just your space, reset.',
  },
  {
    question: 'What happens during the treatment?',
    answer: 'We arrive, set the atmosphere, guide you into stillness, and deliver a slow, intentional body ritual tailored to you.',
  },
  {
    question: 'Do I need to prepare anything?',
    answer: 'Just a quiet room and an open mindset. We bring everything else.',
  },
  {
    question: 'What should I wear?',
    answer: 'Wear whatever feels comfortable. During the ritual, you\'ll be covered with linens, and we work with draping to ensure your comfort and privacy at all times.',
  },
  {
    question: 'Are your practitioners qualified?',
    answer: 'Yes. All Domus practitioners are fully trained and certified in our signature rituals. They undergo extensive training in technique, presence, and the principles that guide our practice.',
  },
  {
    question: 'Who is Domus for?',
    answer: 'Anyone feeling overstimulated, burnt out, disconnected, or simply craving deep rest.',
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer: 'We understand that plans change. Please contact us as soon as possible to cancel or reschedule. We have a cancellation policy that we\'ll share when you book.',
  },
  {
    question: 'Can couples or friends book together?',
    answer: 'Yes, shared treatments can be arranged upon request and we do offer Couples massage.',
  },
  {
    question: 'How much are the treatments?',
    answer: 'Our treatments range from AED 160 to AED 1,100 depending on your needs.',
  },
  {
    question: 'How do I book?',
    answer: 'You can book your treatment simply by clicking "Book a Ritual" or the WhatsApp icon on our website.',
  },
  {
    question: 'Do you offer discounts or loyalty programs?',
    answer: 'Yes, we offer a loyalty program. After completing 10 treatments, you will receive a free 60 minute relaxing treatment on us',
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
            <h2 className="font-caudex text-3xl mb-6">Still have questions?</h2>
            <p className="font-inter text-base font-light text-ash-brown/70 mb-8">
              We're here to help. Contact us with any questions or to discuss your needs.
            </p>
            <a
              href="https://wa.me/971585227291?text=Hi%2C%20I%27d%20like%20to%20book%20a%20massage"
              target="_blank"
              rel="noopener noreferrer"
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

