/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Note: Headers are removed - use .htaccess instead on SiteGround
  // Note: API routes won't work in static export
  // Note: Sanity Studio (/studio) won't work - deploy separately
  trailingSlash: false, // Set to true if you prefer trailing slashes
};

module.exports = nextConfig;


