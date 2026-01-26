import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // Disable CDN for static builds to get fresh data, enable for runtime
  useCdn: process.env.NEXT_EXPORT !== 'true',
  apiVersion: '2024-01-01', // Use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_API_TOKEN, // Optional, for authenticated requests
});

// Blog post query
export const blogPostQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  category->{
    title,
    slug
  },
  body
}`;

// Single blog post query
export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  category->{
    title,
    slug
  },
  body
}`;

// Categories query
export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}`;

