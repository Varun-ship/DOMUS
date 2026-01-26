# Blog Post Workflow - Adding New Posts

## Current Workflow (Manual)

When you add a new blog post in Sanity Studio, here's what you need to do:

### Step 1: Add/Edit Post in Sanity Studio
1. Go to https://admindomus.sanity.studio
2. Create or edit your blog post
3. Publish the post

### Step 2: Rebuild the Site Locally
```bash
npm run build:siteground
```

This will:
- Fetch the latest posts from Sanity
- Generate static HTML files for each post
- Update the blog listing page
- Update the sitemap

### Step 3: Upload to SiteGround

**Option A: Upload Only Changed Files (Faster)**
1. Upload new blog post HTML file: `out/blog/[slug].html`
2. Upload updated `blog.html` (main listing page)
3. Upload updated `sitemap.xml` (if changed)

**Option B: Upload Everything (Safer)**
1. Upload entire `out/` directory contents to `public_html/`

### Step 4: Verify
- Visit `https://domusspa.com/blog` - new post should appear
- Click on the new post - should load correctly

## Time Required
- **Rebuild**: ~30 seconds
- **Upload**: ~2-5 minutes (depending on connection)
- **Total**: ~3-6 minutes per post

## Automation Options (Future)

### Option 1: GitHub Actions (Recommended)
Set up automatic rebuild and deployment when you push to GitHub:
- Push code to GitHub
- GitHub Actions rebuilds the site
- Automatically uploads to SiteGround via FTP/SFTP
- **Time**: Fully automated, ~2-3 minutes total

### Option 2: Sanity Webhook
Set up a webhook from Sanity to trigger rebuilds:
- When you publish a post in Sanity
- Webhook calls your server/API
- Server rebuilds and deploys automatically
- **Time**: Fully automated, ~2-3 minutes total

### Option 3: Scheduled Rebuilds
Set up a cron job to rebuild daily:
- Automatically fetches latest posts
- Rebuilds and deploys every night
- **Time**: Automated, but posts appear next day

### Option 4: Manual Script
Create a script that does everything:
```bash
npm run deploy:blog
# This would:
# 1. Rebuild the site
# 2. Upload only changed blog files
# 3. Verify deployment
```

## Current Limitations

With static export:
- ❌ No automatic updates when Sanity content changes
- ❌ Must rebuild locally after each post
- ❌ Must manually upload files
- ✅ Fast loading (all static files)
- ✅ No server costs
- ✅ Works on any hosting

## Recommendation

For now, use the manual workflow. If you're posting frequently (more than once a week), consider setting up GitHub Actions for automation.

## Quick Reference

**After adding a post:**
```bash
# 1. Rebuild
npm run build:siteground

# 2. Upload to SiteGround
# - Upload out/blog/[new-slug].html
# - Upload out/blog.html
# - Upload out/sitemap.xml (optional)
```

**Files that change with new posts:**
- `blog.html` (listing page - always updates)
- `blog/[slug].html` (new post page)
- `sitemap.xml` (may update)
- `_next/static/chunks/` (may update if structure changes)

