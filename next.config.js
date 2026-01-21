/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for SiteGround (set NEXT_EXPORT=true)
  ...(process.env.NEXT_EXPORT === 'true' && {
    output: 'export',
    images: {
      unoptimized: true,
    },
  }),
  // Default images config (for Vercel)
  ...(process.env.NEXT_EXPORT !== 'true' && {
    images: {
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
  }),
  // Headers only work on Vercel (not in static export)
  ...(process.env.NEXT_EXPORT !== 'true' && {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=(), payment=()',
            },
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin',
            },
            {
              key: 'Cross-Origin-Resource-Policy',
              value: 'same-origin',
            },
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                // Scripts: Allow Next.js inline scripts (required), but restrict eval
                "script-src 'self' 'unsafe-inline' https://cdn.sanity.io https://www.googletagmanager.com",
                // Styles: Allow inline styles (required for Next.js), but restrict sources
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io",
                // Images: Allow from trusted sources
                "img-src 'self' data: https: blob:",
                // Fonts: Allow from Google Fonts and CDN
                "font-src 'self' https://fonts.gstatic.com https://cdn.sanity.io data:",
                // Connections: Restrict to same origin and trusted APIs
                "connect-src 'self' https://cdn.sanity.io https://*.sanity.io https://www.google-analytics.com",
                // Prevent framing
                "frame-ancestors 'none'",
                // Base URI
                "base-uri 'self'",
                // Form actions
                "form-action 'self'",
                // Upgrade insecure requests
                "upgrade-insecure-requests",
              ].join('; '),
            },
          ],
        },
      ];
    },
  }),
};

module.exports = nextConfig;



  