'use client';

export default function PromoBanner() {
  return (
    <div
      id="promo-banner"
      className="sticky top-0 min-h-12 flex flex-col items-center justify-center bg-domus-green text-warm-stone text-center px-4 py-2 relative z-[60]"
    >
      <p className="font-inter text-sm font-light tracking-wide">
        <span className="font-semibold text-aureum-gold">100 AED off</span>
        {' '}your first massage — because everyone deserves a moment of sanctuary.
      </p>
    </div>
  );
}
