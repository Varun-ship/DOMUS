import { client, blogPostQuery, blogPostBySlugQuery, categoriesQuery } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  publishedAt: string;
  category?: {
    title: string;
    slug: {
      current: string;
    };
  };
  body: any[]; // Portable Text array
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

// Fetch all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(blogPostQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
    return post || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  try {
    const categories = await client.fetch<Category[]>(categoriesQuery);
    return categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

