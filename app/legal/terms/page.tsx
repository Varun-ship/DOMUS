import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'DOMUS terms of service and conditions.',
};

export default function Terms() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-bodoni text-5xl md:text-6xl mb-6 tracking-tight">
            Terms of Service
          </AnimatedHeading>
        </div>
      </section>

      <section className="py-24 bg-warm-stone">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="space-y-8 font-inter text-base font-light text-ash-brown/80 leading-relaxed">
            <div>
              <h2 className="font-bodoni text-2xl mb-4">Agreement to Terms</h2>
              <p>
                By using DOMUS services, you agree to these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-bodoni text-2xl mb-4">Services</h2>
              <p>
                DOMUS provides premium outcall home wellness rituals. All services are provided by trained practitioners in accordance with our standards of care and professionalism.
              </p>
            </div>

            <div>
              <h2 className="font-bodoni text-2xl mb-4">Booking and Cancellation</h2>
              <p>
                Bookings are confirmed upon our acceptance of your request. Cancellation policies will be communicated at the time of booking. We reserve the right to cancel or reschedule appointments when necessary.
              </p>
            </div>

            <div>
              <h2 className="font-bodoni text-2xl mb-4">Health and Safety</h2>
              <p>
                Please inform us of any health conditions, injuries, or concerns before your ritual. Our services are not a substitute for medical care. If you have serious health concerns, please consult a healthcare provider.
              </p>
            </div>

            <div>
              <h2 className="font-bodoni text-2xl mb-4">Limitation of Liability</h2>
              <p>
                DOMUS is not liable for any indirect, incidental, or consequential damages arising from the use of our services, except where prohibited by law.
              </p>
            </div>

            <div>
              <h2 className="font-bodoni text-2xl mb-4">Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-bodoni text-2xl mb-4">Contact</h2>
              <p>
                If you have questions about these Terms of Service, please contact us through our contact form.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

