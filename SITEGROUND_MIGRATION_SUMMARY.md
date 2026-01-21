# SiteGround Migration - Quick Summary

## What You Need to Know

Your Next.js site can be migrated to SiteGround as a **fully static site**. Here's what's been set up:

## ✅ What's Ready

1. **Dual Configuration**: Your `next.config.js` now supports both Vercel (default) and SiteGround (static export)
2. **Build Script**: `npm run build:siteground` creates a static export
3. **.htaccess File**: Ready for SiteGround with routing and security headers
4. **Documentation**: Complete migration guide in `MIGRATION_TO_SITEGROUND.md`

## 🚀 Quick Start (3 Steps)

### 1. Build Static Site
```bash
npm run build:siteground
```

### 2. Upload to SiteGround
- Upload everything from the `out/` directory to `public_html/`
- Upload `.htaccess` file to root

### 3. Test
Visit your domain and verify everything works!

## ⚠️ Important Limitations

### What Won't Work on SiteGround:
- **Sanity Studio** (`/studio`) - Needs Node.js server
  - **Solution**: Use Sanity's hosted studio (recommended) - see `SANITY_HOSTED_STUDIO.md`
  - **Alternative**: Run locally with `npm run studio`
  
- **Server-Side Features**: No API routes, SSR, or ISR
  - **Already handled**: Your site uses SSG, so this is fine!

- **Image Optimization**: Next.js image optimization disabled
  - **Already handled**: Images use unoptimized mode

### What You'll Need to Handle:
- **Contact Form**: Currently doesn't submit
  - **Options**: PHP handler, third-party service, or keep WhatsApp
  
- **Content Updates**: Must rebuild after Sanity content changes
  - **Process**: `npm run build:siteground` → upload `out/` directory

## 📁 Files Created

- `next.config.siteground.js` - Alternative config (not needed, main config handles it)
- `.htaccess` - Apache configuration for SiteGround
- `MIGRATION_TO_SITEGROUND.md` - Complete detailed guide
- `DEPLOY_TO_SITEGROUND.md` - Quick deployment steps
- `scripts/build-siteground.js` - Build helper (not needed with env var approach)

## 🔄 Workflow After Migration

### Updating Content:
1. Edit content in Sanity Studio (local or hosted)
2. Run `npm run build:siteground`
3. Upload new `out/` directory to SiteGround

### Updating Code:
1. Make code changes
2. Run `npm run build:siteground`
3. Upload new `out/` directory to SiteGround

## 💡 Pro Tips

1. **Use Git**: Keep your code in Git, build locally, upload only `out/`
2. **Automate**: Consider GitHub Actions or similar for auto-deployment
3. **CDN**: Enable SiteGround's CDN for better performance
4. **Backup**: Always backup before uploading new builds

## 📞 Need Help?

- Check `MIGRATION_TO_SITEGROUND.md` for detailed steps
- Next.js Static Export docs: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- SiteGround support for hosting questions

