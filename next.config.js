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
                // Scripts: Next.js + GTM/GA (script-src-elem for CSP Level 3)
                "script-src 'self' 'unsafe-inline' https://cdn.sanity.io https://www.googletagmanager.com https://www.google-analytics.com",
                "script-src-elem 'self' 'unsafe-inline' https://cdn.sanity.io https://www.googletagmanager.com https://www.google-analytics.com",
                // Styles
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.sanity.io",
                // Images: include Google tracking/analytics
                "img-src 'self' data: blob: https: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com",
                // Fonts
                "font-src 'self' https://fonts.gstatic.com https://cdn.sanity.io data:",
                // Connections: GTM + GA endpoints
                "connect-src 'self' https://cdn.sanity.io https://*.sanity.io https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://stats.g.doubleclick.net",
                // Frames: GTM noscript iframe
                "frame-src 'self' https://www.googletagmanager.com",
                "frame-ancestors 'none'",
                "base-uri 'self'",
                "form-action 'self'",
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



  