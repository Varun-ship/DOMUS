# Quick Start: Deploy to SiteGround

## Step-by-Step Instructions

### 1. Build for SiteGround

```bash
npm run build:siteground
```

Or manually:
```bash
NEXT_EXPORT=true npm run build
```

This creates an `out/` directory with all static files.

### 2. Upload to SiteGround

**Option A: Using cPanel File Manager**
1. Log into SiteGround cPanel
2. Go to File Manager
3. Navigate to `public_html/` (or your domain's root)
4. Upload the entire contents of the `out/` directory
5. Upload the `.htaccess` file to the root

**Option B: Using FTP/SFTP**
1. Connect to your SiteGround FTP
2. Navigate to `public_html/` (or your domain's root)
3. Upload all files from the `out/` directory
4. Upload the `.htaccess` file

### 3. Verify

Visit your domain and check:
- ✅ Homepage loads
- ✅ All pages work
- ✅ Images load
- ✅ Navigation works

## Important Notes

### Sanity Studio
The `/studio` route won't work on SiteGround. 

**✅ Recommended: Use Sanity's Hosted Studio**

Deploy your studio to Sanity's hosting (free):

```bash
npm install -g @sanity/cli
sanity login
npm run studio:deploy
```

Your studio will be at: `https://your-project-id.sanity.studio`

See `SANITY_STUDIO_QUICKSTART.md` for quick setup or `SANITY_HOSTED_STUDIO.md` for details.

**Alternatives:**
- Run locally: `npm run studio`
- Deploy separately to Vercel/Netlify

### Updating Content
When you update content in Sanity:
1. Rebuild: `npm run build:siteground`
2. Re-upload the `out/` directory to SiteGround

### Contact Form
The contact form currently doesn't submit. You'll need to:
- Set up a form handler (PHP, third-party service, or EmailJS)
- Or keep using WhatsApp links

## Troubleshooting

**404 errors on routes?**
- Make sure `.htaccess` is uploaded and working
- Check that `index.html` exists in root

**Images not loading?**
- Verify image paths in the `out/` directory
- Check browser console for errors

**Sanity content not showing?**
- Rebuild after content changes
- Check Sanity API credentials in `.env.local`

