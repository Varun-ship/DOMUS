import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedHeading from '@/components/AnimatedHeading';
import AnimatedText from '@/components/AnimatedText';
import BlogFilters from '@/components/BlogFilters';
import { getAllBlogPosts, type BlogPost, urlFor } from '@/lib/sanity-queries';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'News, seasonal notes, and stories from DOMUS. Updates on our practice, reflections on wellness, and insights into slow living.',
  alternates: {
    canonical: 'https://www.domusspa.com/blog',
  },
  openGraph: {
    title: 'Journal | DOMUS',
    description: 'News, seasonal notes, and stories from DOMUS. Updates on our practice, reflections on wellness, and insights into slow living.',
    url: 'https://www.domusspa.com/blog',
    type: 'website',
  },
};

export default async function Blog() {
  // Fetch blog posts on the server
  const blogPosts: BlogPost[] = await getAllBlogPosts();

  // Pre-process posts to include image URLs (server-side only)
  const postsWithImages = blogPosts.map((post) => ({
    ...post,
    imageUrl: post.mainImage?.asset 
      ? urlFor(post.mainImage.asset).width(800).height(600).url() 
      : undefined,
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

      {/* Search, Categories, and Blog Posts Grid */}
      <BlogFilters posts={postsWithImages} />
    </div>
  );
}

