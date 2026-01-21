# Migration Guide: Vercel to SiteGround (Static Export)

This guide will help you migrate your Next.js site from Vercel to SiteGround using static site generation (SSG).

## Prerequisites

- SiteGround hosting account with cPanel access
- FTP/SFTP credentials or cPanel File Manager access
- Node.js installed locally (for building)

## Step 1: Update Next.js Configuration

The `next.config.js` has been updated to support both Vercel and SiteGround deployments:

- **For Vercel**: Use `npm run build` (default)
- **For SiteGround**: Use `npm run build:siteground` (sets `NEXT_EXPORT=true`)

When `NEXT_EXPORT=true` is set:
1. **Static Export Mode**: Enables `output: 'export'` to generate static HTML files
2. **Image Optimization**: Disabled (required for static export)
3. **Headers**: Removed (will use .htaccess instead on SiteGround)

## Step 2: Build the Static Site

Run the SiteGround build command:

```bash
npm run build:siteground
```

Or manually:
```bash
NEXT_EXPORT=true npm run build
```

This will create an `out/` directory containing all static files ready for SiteGround.

## Step 3: Prepare for SiteGround

### Files to Upload

Upload the entire contents of the `out/` directory to your SiteGround hosting:

- **For main domain**: Upload to `public_html/`
- **For subdomain**: Upload to `public_html/subdomain/`

### Important Files

1. **`.htaccess`** - For URL rewriting and security headers (see Step 4)
2. **All HTML, CSS, JS files** from the `out/` directory
3. **`_next/` folder** - Contains all Next.js assets

## Step 4: Configure .htaccess

Create/update `.htaccess` in your `public_html/` directory with:

```apache
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle Next.js routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Security Headers (from your Next.js config)
<IfModule mod_headers.c>
  Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
  Header set Cross-Origin-Opener-Policy "same-origin"
  Header set Cross-Origin-Resource-Policy "same-origin"
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

## Step 5: Update Environment Variables

Since the site is static, you only need:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - For Sanity CMS (fetched at build time)
- `NEXT_PUBLIC_SANITY_DATASET` - For Sanity CMS
- `SANITY_API_TOKEN` - For authenticated Sanity requests (only needed during build)

**Note**: These are only needed during the build process, not on SiteGround.

## Step 6: Handle Contact Form

Your contact form currently doesn't submit anywhere. For SiteGround, you have options:

### Option A: Use SiteGround Email
- Configure form to send emails via PHP mail function
- Create a simple PHP handler

### Option B: Use Third-Party Service
- Formspree
- Netlify Forms
- EmailJS (client-side)

### Option C: Keep WhatsApp Integration
- Keep the current WhatsApp link approach (simplest)

## Step 7: Sanity Studio

**Important**: Sanity Studio (`/studio`) requires a Node.js server and won't work in static export.

**Recommended Solution**: **Use Sanity's Hosted Studio**

Deploy your studio to Sanity's hosting (free and included):

```bash
# Install Sanity CLI if needed
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Deploy your studio
npm run studio:deploy
# or
sanity deploy
```

Your studio will be available at: `https://your-project-id.sanity.studio`

**See `SANITY_HOSTED_STUDIO.md` for complete setup instructions.**

**Alternative Solutions**:
1. **Run Studio locally**: Use `npm run studio` on your local machine
2. **Deploy Studio separately**: Deploy to Vercel/Netlify as a separate app

## Step 8: Testing Checklist

After uploading to SiteGround:

- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] CSS and JavaScript load
- [ ] Blog posts load (from Sanity)
- [ ] Service detail pages work
- [ ] Navigation works
- [ ] WhatsApp links work
- [ ] Contact form works (if configured)
- [ ] 404 page works
- [ ] Mobile responsive design works

## Step 9: Update Build Script

Add a script to `package.json` for easier deployment:

```json
"scripts": {
  "export": "next build",
  "deploy": "npm run export && echo 'Upload the out/ directory to SiteGround'"
}
```

## Step 10: Automated Deployment (Optional)

You can set up automated deployment:

1. **GitHub Actions**: Build on push, upload via FTP/SFTP
2. **Local Script**: Build and sync via rsync/FTP
3. **CI/CD Service**: Use services like DeployHQ, Buddy, etc.

## Limitations of Static Export

1. **No Server-Side Rendering**: All pages are pre-rendered at build time
2. **No API Routes**: Can't use Next.js API routes
3. **No Image Optimization**: Next.js Image optimization disabled
4. **No Incremental Static Regeneration**: Must rebuild to update content
5. **Sanity Studio**: Must run separately

## Updating Content

To update content from Sanity:

1. Make changes in Sanity Studio (hosted or local)
2. Rebuild the site locally: `npm run build`
3. Upload the new `out/` directory to SiteGround

## Performance Tips

1. **Enable CDN**: Use SiteGround's CDN or Cloudflare
2. **Optimize Images**: Compress images before uploading
3. **Minify Assets**: Already handled by Next.js build
4. **Browser Caching**: Configured in .htaccess

## Troubleshooting

### 404 Errors on Routes
- Ensure `.htaccess` rewrite rules are correct
- Check that `index.html` exists in root

### Images Not Loading
- Check image paths are relative
- Verify images are in `out/` directory
- Check browser console for errors

### Sanity Content Not Updating
- Rebuild the site after Sanity content changes
- Check Sanity API credentials are correct
- Verify network requests in browser DevTools

## Support

For issues:
- Check SiteGround documentation
- Next.js Static Export docs: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Sanity documentation: https://www.sanity.io/docs

