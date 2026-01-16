# DOMUS — Premium Outcall Home Wellness Rituals

A premium, calm-feeling website for DOMUS, an outcall home wellness brand inspired by ancient Roman bath rituals. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Editorial, spacious, tactile design with quiet luxury aesthetic
- **Security Headers**: Comprehensive security headers configured site-wide
- **SEO Optimized**: Server-rendered pages with metadata, OpenGraph, and JSON-LD structured data
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Subtle, slow luxury animations with Framer Motion
- **Type Safety**: Full TypeScript support throughout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Caudex (headings) + Inter (body) from Google Fonts

## Brand Colors

- **Domus Green**: `#092E32` (Primary Anchor)
- **Warm Stone**: `#E7E2D8` (Secondary Neutral)
- **Aureum Gold**: `#C9A86A` (Primary Accent)
- **Soft Clay**: `#B88A6A` (Supporting Accent)
- **Ash Brown**: `#3A2F2A` (Text / Contrast Neutral)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
/app
  /about          - About page
  /services       - Services overview and detail pages
  /rituals        - Ritual Library (editorial content)
  /blog           - Journal/blog posts
  /faq            - FAQ page
  /contact        - Contact/booking form
  /legal          - Privacy and Terms pages
/components       - Reusable components
```

## Pages

- **Home** (`/`) - Hero, pillars, featured rituals, testimonials
- **About** (`/about`) - Brand philosophy and values
- **Services** (`/services`) - Service overview and detail pages
- **Ritual Library** (`/rituals`) - Evergreen educational content
- **Journal** (`/blog`) - News and seasonal notes
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Booking request form
- **Legal** (`/legal/privacy`, `/legal/terms`) - Privacy and Terms pages

## Security

The site includes comprehensive security headers:
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- Cross-Origin policies
- Content Security Policy

## SEO

- Server-side rendering (SSR/SSG)
- Unique metadata per page
- OpenGraph and Twitter cards
- JSON-LD structured data (Organization, Service, FAQPage schemas)
- Clean, semantic URLs
- Internal linking structure

## License

Private project for DOMUS.
