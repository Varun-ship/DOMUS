'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  headline: string;
  subcopy: string;
  ctaText?: string;
  ctaLink?: string;
  videoSrc?: string;
}

export default function Hero({ headline, subcopy, ctaText = 'Book a ritual', ctaLink = '/contact', videoSrc }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-domus-green">
      {/* Video Background */}
      {videoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Brown Overlay */}
          <div className="absolute inset-0 bg-ash-brown/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-ash-brown/70 via-soft-clay/50 to-ash-brown/60 z-10" />
        </div>
      )}
      
      {/* Fallback background if no video */}
      {!videoSrc && (
        <div className="absolute inset-0 stone-texture">
          <div className="absolute inset-0 bg-domus-green/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-domus-green via-domus-green/80 to-domus-green" />
        </div>
      )}

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-warm-stone">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6 text-balance"
        >
          {headline}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="font-inter text-lg md:text-xl font-light leading-relaxed mb-10 text-warm-stone/90 max-w-2xl mx-auto"
        >
          {subcopy}
        </motion.p>

        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <a
              href="https://wa.me/971585227291?text=Hello%2C%20I%20would%20like%20to%20book%20a%20ritual"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-aureum-gold text-domus-green px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-aureum-gold/90 transition-colors"
            >
              {ctaText}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}



