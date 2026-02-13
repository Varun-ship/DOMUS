'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-stone/95 backdrop-blur-sm border-b border-aureum-gold/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link id="header-logo" href="/" className="flex items-center">
          <Image
            src="/DomusLogo.png"
            alt="DOMUS"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            id="header-nav-about"
            href="/about" 
            className="text-ash-brown hover:text-aureum-gold transition-colors font-inter text-sm tracking-wide"
          >
            About
          </Link>
          <Link 
            id="header-nav-services"
            href="/services" 
            className="text-ash-brown hover:text-aureum-gold transition-colors font-inter text-sm tracking-wide"
          >
            Services
          </Link>
          <Link 
            id="header-nav-journal"
            href="/blog" 
            className="text-ash-brown hover:text-aureum-gold transition-colors font-inter text-sm tracking-wide"
          >
            Journal
          </Link>
          <Link 
            id="header-nav-faq"
            href="/faq" 
            className="text-ash-brown hover:text-aureum-gold transition-colors font-inter text-sm tracking-wide"
          >
            FAQ
          </Link>
          <a 
            id="header-cta-book"
            href="https://wa.me/971585227291?text=Hi%2C%20I%27d%20like%20to%20book%20a%20massage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-domus-green text-warm-stone px-6 py-2 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
          >
            Book a Ritual
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="header-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-ash-brown"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-stone border-t border-aureum-gold/10"
          >
            <div className="px-6 py-4 space-y-4">
              <Link id="header-mobile-nav-about" href="/about" className="block text-ash-brown hover:text-aureum-gold transition-colors">
                About
              </Link>
              <Link id="header-mobile-nav-services" href="/services" className="block text-ash-brown hover:text-aureum-gold transition-colors">
                Services
              </Link>
              <Link id="header-mobile-nav-journal" href="/blog" className="block text-ash-brown hover:text-aureum-gold transition-colors">
                Journal
              </Link>
              <Link id="header-mobile-nav-faq" href="/faq" className="block text-ash-brown hover:text-aureum-gold transition-colors">
                FAQ
              </Link>
              <a 
                id="header-mobile-cta-book"
                href="https://wa.me/971585227291?text=Hi%2C%20I%27d%20like%20to%20book%20a%20massage"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-domus-green text-warm-stone px-6 py-2 rounded-sm text-center mt-4"
              >
                Book a Ritual
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



