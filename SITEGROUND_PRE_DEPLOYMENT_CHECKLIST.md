# SiteGround Deployment - Pre-Deployment Checklist ✅

## ✅ Ready to Deploy!

Your site is fully prepared for SiteGround deployment. Here's what's been set up:

### Configuration ✅
- [x] `next.config.js` - Configured for static export
- [x] `.htaccess` - Apache configuration ready
- [x] Build script - `npm run build:siteground` ready
- [x] All images - Using local files from `/public/images/`
- [x] Security headers - Implemented
- [x] SEO optimization - Complete (robots.txt, sitemap, meta tags)

### Sanity CMS ✅
- [x] Sanity Studio - Ready for hosted deployment
- [x] Project ID - Configured (55iqrylx)
- [x] API credentials - Set in environment variables

### Content ✅
- [x] All service pages - Configured with local images
- [x] Blog posts - Ready (fetched from Sanity at build time)
- [x] Static pages - All ready

## Deployment Steps

### Step 1: Build the Static Site

```bash
npm run build:siteground
```

This will:
- Create an `out/` directory
- Generate all static HTML, CSS, and JS files
- Include all images and assets
- Pre-render all pages

**Expected output**: `out/` directory with all static files

### Step 2: Prepare Files for Upload

You need to upload:
1. **Everything inside the `out/` directory** → to `public_html/` (or your domain root)
2. **The `.htaccess` file** → to the root of `public_html/`

### Step 3: Upload to SiteGround

**Option A: cPanel File Manager**
1. Log into SiteGround cPanel
2. Open File Manager
3. Navigate to `public_html/`
4. Upload all contents of `out/` directory
5. Upload `.htaccess` file to root

**Option B: FTP/SFTP**
1. Connect via FTP client (FileZilla, etc.)
2. Navigate to `public_html/`
3. Upload all files from `out/` directory
4. Upload `.htaccess` file

### Step 4: Verify Deployment

After uploading, check:
- [ ] Homepage loads: `https://yourdomain.com`
- [ ] All service pages work: `https://yourdomain.com/services/[slug]`
- [ ] Blog pages work: `https://yourdomain.com/blog`
- [ ] Images load correctly
- [ ] Navigation works
- [ ] No 404 errors
- [ ] HTTPS is working

## Important Notes

### Sanity Studio
- The `/studio` route won't work on SiteGround (needs Node.js)
- Use hosted studio: `https://admindomus.sanity.studio` (when deployed)
- Or run locally: `npm run studio`

### Updating Content
When you update content in Sanity:
1. Run: `npm run build:siteground`
2. Upload new `out/` directory to SiteGround
3. Content will be updated

### Contact Form
- Currently doesn't submit (just shows success message)
- Options:
  - Add PHP form handler
  - Use third-party service (Formspree, EmailJS)
  - Keep WhatsApp integration

## Troubleshooting

**404 errors?**
- Check `.htaccess` is uploaded
- Verify `index.html` exists in root
- Check Apache mod_rewrite is enabled

**Images not loading?**
- Verify images are in `out/images/` directory
- Check file paths are correct
- Clear browser cache

**Styles not loading?**
- Check `_next/` directory is uploaded
- Verify file permissions (644 for files, 755 for directories)

## Post-Deployment

1. **Set up Google Search Console**
   - Verify domain ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Test Everything**
   - All pages load
   - Forms work (if implemented)
   - Mobile responsive
   - Performance is good

3. **Monitor**
   - Check for errors
   - Monitor performance
   - Review analytics

## You're Ready! 🚀

Everything is configured and ready. Just run the build command and upload!


