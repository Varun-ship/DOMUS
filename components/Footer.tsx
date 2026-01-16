import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-domus-green text-warm-stone">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Story */}
          <div className="md:col-span-2">
            <Image
              src="/DomusLogo.png"
              alt="DOMUS"
              width={180}
              height={60}
              className="h-10 w-auto mb-4"
            />
            <p className="font-inter text-sm font-light leading-relaxed text-warm-stone/80 max-w-md">
              At-home wellness rituals, reimagined for modern living. Premium outcall spa treatments that bring warmth, presence, touch, and renewal into your home.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bodoni text-lg mb-4">Explore</h4>
            <ul className="space-y-2 font-inter text-sm font-light">
              <li>
                <Link href="/about" className="hover:text-aureum-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-aureum-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/rituals" className="hover:text-aureum-gold transition-colors">
                  Ritual Library
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-aureum-gold transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bodoni text-lg mb-4">Connect</h4>
            <ul className="space-y-2 font-inter text-sm font-light">
              <li>
                <Link href="/contact" className="hover:text-aureum-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-aureum-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-aureum-gold transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-aureum-gold transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-stone/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-xs font-light text-warm-stone/60">
            © {new Date().getFullYear()} DOMUS. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social links placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
}



