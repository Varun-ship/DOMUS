'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-warm-stone">
      <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-caudex text-6xl md:text-8xl mb-6 tracking-tight">
          Oops!
        </h1>
        <p className="font-inter text-lg font-light text-ash-brown/80 leading-relaxed mb-8">
          Something went wrong. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-domus-green text-warm-stone px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block bg-ash-brown/10 text-ash-brown px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-ash-brown/20 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}


