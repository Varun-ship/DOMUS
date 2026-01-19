import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts, formatDate, urlFor } from '@/lib/sanity-queries';
import PortableText from '@/components/PortableText';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <AnimatedSection>
          <Link href="/blog" className="inline-block mb-8 text-aureum-gold hover:text-aureum-gold/80 font-inter text-sm tracking-wide">
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

