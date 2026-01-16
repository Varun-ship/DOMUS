import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-warm-stone">
      <AnimatedSection className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-caudex text-6xl md:text-8xl mb-6 tracking-tight">
          404
        </h1>
        <p className="font-inter text-lg font-light text-ash-brown/80 leading-relaxed mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-domus-green text-warm-stone px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
        >
          Return Home
        </Link>
      </AnimatedSection>
    </div>
  );
}

