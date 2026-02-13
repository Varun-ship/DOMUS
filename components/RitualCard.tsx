'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface RitualCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  price?: string;
  isAddOn?: boolean;
}

export default function RitualCard({ title, description, href, image, price, isAddOn }: RitualCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link id={`ritual-card-${href.replace(/\//g, '-').replace(/^-/, '')}`} href={href} className="block h-full">
        <div className="bg-warm-stone rounded-sm border border-aureum-gold/20 overflow-hidden hover:border-aureum-gold/40 transition-all shadow-sm hover:shadow-md relative h-full flex flex-col">
          {/* Add-on Badge */}
          {isAddOn && (
            <div className="absolute top-4 right-4 z-10">
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <span className="inline-block px-3 py-1 bg-aureum-gold/90 text-domus-green text-xs font-inter font-semibold tracking-wide rounded-full">
                  Add-on
                </span>
                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-warm-stone border border-aureum-gold/30 rounded-sm shadow-lg z-20">
                    <p className="font-inter text-xs text-ash-brown leading-relaxed">
                      Available as an add-on with any 60-minute massage. Perfect for enhancing your wellness experience.
                    </p>
                    <div className="absolute -top-1 right-4 w-2 h-2 bg-warm-stone border-l border-t border-aureum-gold/30 transform rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0">
            {image ? (
              <>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-domus-green/20 via-soft-clay/20 to-aureum-gold/10 flex items-center justify-center hidden">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-warm-stone/30 flex items-center justify-center">
                      <svg className="w-8 h-8 text-aureum-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-domus-green/20 via-soft-clay/20 to-aureum-gold/10 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-warm-stone/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-aureum-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-caudex text-lg md:text-xl mb-3 text-ash-brown group-hover:text-domus-green transition-colors line-clamp-2 min-h-[3.5rem] flex items-start">
              {title}
            </h3>
            <p className="font-inter text-sm font-light text-ash-brown/70 leading-relaxed mb-4 flex-grow line-clamp-3 min-h-[4.5rem]">
              {description}
            </p>
            {price && (
              <div className="mb-4 flex-shrink-0">
                <span className="font-inter text-sm font-normal text-ash-brown">
                  Starting from{' '}
                  <span className="font-semibold text-domus-green">{price}</span>
                </span>
              </div>
            )}
            <div className="flex items-center text-aureum-gold font-inter text-xs tracking-wide flex-shrink-0">
              Learn more
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}



