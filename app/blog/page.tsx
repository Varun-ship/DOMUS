'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RitualCard from '@/components/RitualCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';
import { getAllBlogPosts, getAllCategories, urlFor, type BlogPost, type Category } from '@/lib/sanity-queries';

const categories = ['All'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [posts, categories] = await Promise.all([
          getAllBlogPosts(),
          getAllCategories(),
        ]);
        
        setBlogPosts(posts);
        
        // Extract unique category titles
        const categoryTitles = ['All', ...new Set(posts.map(post => post.category?.title).filter(Boolean) as string[])];
        setAvailableCategories(categoryTitles);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category?.title === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Transform Sanity posts to RitualCard format
  const transformedPosts = filteredPosts.map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug.current}`,
    category: post.category?.title || 'Uncategorized',
    image: post.mainImage?.asset ? urlFor(post.mainImage.asset).width(800).height(600).url() : undefined,
  }));

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
            {availableCategories.map((category) => (
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
          {loading ? (
            <div className="text-center py-12">
              <p className="font-inter text-base text-ash-brown/60">
                Loading articles...
              </p>
            </div>
          ) : transformedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformedPosts.map((post, index) => (
                <AnimatedSection key={post.href} delay={index * 0.1}>
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

