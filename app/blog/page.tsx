'use client';

import { useState } from 'react';
import Image from 'next/image';
import RitualCard from '@/components/RitualCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';

const blogPosts = [
  {
    title: 'Welcoming Spring: Rituals for Renewal',
    description: 'As the seasons shift, our bodies and nervous systems respond. How to align your wellness practice with the rhythms of nature.',
    href: '/blog/welcoming-spring-rituals-for-renewal',
    category: 'Wellness',
  },
  {
    title: 'The Gift of Presence',
    description: 'In a world of constant distraction, presence becomes a radical act. How we cultivate presence in our rituals and daily life.',
    href: '/blog/the-gift-of-presence',
    category: 'Philosophy',
  },
  {
    title: 'Touch and Connection',
    description: 'Exploring the profound role of touch in human connection, healing, and restoration. Why touch matters more than ever.',
    href: '/blog/touch-and-connection',
    category: 'Wellness',
  },
  {
    title: 'Slow Living in a Fast World',
    description: 'Finding moments of stillness and intentionality in our daily routines. Practical ways to embrace slow living.',
    href: '/blog/slow-living-in-a-fast-world',
    category: 'Lifestyle',
  },
  {
    title: 'The Art of Ritual',
    description: 'How small, intentional practices can transform ordinary moments into sacred experiences. Building your own ritual practice.',
    href: '/blog/the-art-of-ritual',
    category: 'Philosophy',
  },
  {
    title: 'Nervous System Calm',
    description: 'Understanding how our nervous system responds to stress and how intentional touch and warmth can support regulation.',
    href: '/blog/nervous-system-calm',
    category: 'Wellness',
  },
];

const categories = ['All', 'Wellness', 'Philosophy', 'Lifestyle'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 text-warm-stone overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Green overlay with 40% opacity */}
          <div className="absolute inset-0 bg-domus-green/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading as="h1" className="font-caudex text-5xl md:text-6xl mb-6 tracking-tight">
            Journal
          </AnimatedHeading>
          <AnimatedText delay={0.2} className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto">
            News, seasonal notes, and stories from DOMUS. Updates on our practice, reflections on wellness, and insights into slow living.
          </AnimatedText>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-warm-stone border-b border-aureum-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 border border-aureum-gold/30 rounded-sm font-inter text-sm bg-warm-stone text-ash-brown placeholder-ash-brown/50 focus:outline-none focus:border-aureum-gold focus:ring-1 focus:ring-aureum-gold/20 transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ash-brown/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border rounded-sm font-inter text-sm tracking-wide transition-colors ${
                  selectedCategory === category
                    ? 'border-aureum-gold bg-aureum-gold/10 text-ash-brown'
                    : 'border-aureum-gold/30 text-ash-brown hover:border-aureum-gold hover:bg-aureum-gold/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <RitualCard {...post} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-inter text-base text-ash-brown/60">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

