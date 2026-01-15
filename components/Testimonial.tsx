'use client';

import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  location?: string;
}

export default function Testimonial({ quote, author, location }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-warm-stone p-8 rounded-sm border-l-4 border-aureum-gold"
    >
      <p className="font-inter text-base font-light text-ash-brown leading-relaxed mb-4 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-2">
        <span className="font-inter text-sm font-normal text-ash-brown">{author}</span>
        {location && (
          <>
            <span className="text-aureum-gold">•</span>
            <span className="font-inter text-sm font-light text-ash-brown/60">{location}</span>
          </>
        )}
      </div>
    </motion.div>
  );
}



