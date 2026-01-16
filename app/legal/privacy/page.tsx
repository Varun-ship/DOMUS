import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DOMUS privacy policy and data protection information.',
};

export default function Privacy() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-caudex text-5xl md:text-6xl mb-6 tracking-tight">
            Privacy Policy
          </AnimatedHeading>
        </div>
      </section>

      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="space-y-8 font-inter text-base font-light text-ash-brown/80 leading-relaxed">
            <div>
              <h2 className="font-caudex text-2xl mb-4">Introduction</h2>
              <p>
                DOMUS is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services or visit our website.
              </p>
            </div>

            <div>
              <h2 className="font-caudex text-2xl mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including your name, email address, phone number, location, and any other information you choose to share when booking a ritual or contacting us.
              </p>
            </div>

            <div>
              <h2 className="font-caudex text-2xl mb-4">How We Use Your Information</h2>
              <p>
                We use your information to process bookings, communicate with you about your rituals, improve our services, and comply with legal obligations. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-caudex text-2xl mb-4">Data Security</h2>
              <p>
                We take appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-caudex text-2xl mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="font-caudex text-2xl mb-4">Contact</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through our contact form.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

