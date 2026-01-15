'use client';

import { motion } from 'framer-motion';

export default function BookingCTA() {
  return (
    <section className="bg-domus-green text-warm-stone py-20 stone-texture">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-bodoni text-4xl md:text-5xl mb-6 tracking-tight text-warm-stone/90"
        >
          Book a ritual
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-inter text-lg font-light mb-8 text-warm-stone/90 max-w-2xl mx-auto"
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
            href="https://wa.me/971585227291"
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
          className="font-inter text-xs font-light mt-6 text-warm-stone/60"
        >
          Available by appointment • Response within 24 hours
        </motion.p>
      </div>
    </section>
  );
}



