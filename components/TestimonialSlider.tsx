'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonial from './Testimonial';

interface TestimonialData {
  quote: string;
  author: string;
  location?: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialData[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Show 2 at a time, so move by 1 each time
        const nextIndex = prevIndex + 1;
        // If we've shown all pairs, loop back to start
        return nextIndex >= testimonials.length - 1 ? 0 : nextIndex;
      });
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get current pair of testimonials
  const currentTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: index * 0.2 }}
          >
            <Testimonial
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
            />
          </motion.div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: testimonials.length - 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-aureum-gold w-8'
                : 'bg-aureum-gold/30 hover:bg-aureum-gold/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

