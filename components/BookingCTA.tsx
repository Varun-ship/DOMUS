'use client';

import { motion } from 'framer-motion';

export default function BookingCTA() {
  return (
    <section className="bg-warm-stone py-20 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-caudex text-4xl md:text-5xl mb-6 tracking-tight text-ash-brown"
        >
          Book a ritual
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-inter text-lg font-light mb-8 text-ash-brown/80 max-w-2xl mx-auto"
        >
          Experience sanctuary at home. Our rituals are available by appointment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            id="cta-begin-ritual"
            href="https://wa.me/971585227291?text=Hi%2C%20I%27d%20like%20to%20book%20a%20massage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-aureum-gold text-domus-green px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-aureum-gold/90 transition-colors"
          >
            Begin Your Ritual
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-inter text-xs font-light mt-6 text-ash-brown/60"
        >
          Available by appointment • Response within 24 hours
        </motion.p>
      </div>
    </section>
  );
}



