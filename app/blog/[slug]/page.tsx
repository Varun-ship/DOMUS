import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts, formatDate, urlFor } from '@/lib/sanity-queries';
import PortableText from '@/components/PortableText';

export async function generateStaticParams() {
  // For static export, Next.js requires this function to return at least one param
  // If no posts exist, we return a placeholder that will trigger notFound()
  try {
    const posts = await getAllBlogPosts();
    if (posts && posts.length > 0) {
      return posts
        .filter((post) => post?.slug?.current)
        .map((post) => ({
          slug: post.slug.current,
        }));
    }
  } catch (error) {
    // If Sanity is unavailable, log but continue
    console.warn('generateStaticParams: Could not fetch blog posts', error);
  }
  
  // Return placeholder to satisfy static export requirement
  // The page component will handle this with notFound()
  return [{ slug: '__placeholder__' }];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const imageUrl = post.mainImage?.asset ? urlFor(post.mainImage.asset).width(1200).height(630).url() : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.domusspa.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.domusspa.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['DOMUS'],
      images: imageUrl ? [imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Handle placeholder slug used for static export when no posts exist
  if (params.slug === '__placeholder__') {
    notFound();
  }

  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <AnimatedSection>
          <Link id="blog-back-to-journal" href="/blog" className="inline-block mb-8 text-aureum-gold hover:text-aureum-gold/80 font-inter text-sm tracking-wide">
            ← Back to Journal
          </Link>
          <div className="mb-6">
            <span className="font-inter text-sm font-light text-ash-brown/60">
              {formatDate(post.publishedAt)}
            </span>
            {post.category && (
              <span className="ml-4 font-inter text-sm font-light text-ash-brown/60">
                • {post.category.title}
              </span>
            )}
          </div>
          <h1 className="font-caudex text-4xl md:text-5xl mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="font-inter text-lg font-light text-ash-brown/70 mb-12 leading-relaxed">
            {post.excerpt}
          </p>
          {post.mainImage?.asset && (
            <div className="mb-12">
              <Image
                src={urlFor(post.mainImage.asset).width(1200).height(675).url()}
                alt={post.mainImage.alt || post.title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-sm"
                priority
              />
            </div>
          )}
          <PortableText content={post.body} />
        </AnimatedSection>
      </article>
    </div>
  );
}

