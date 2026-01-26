# Sanity Content Update Guide

## The Issue

When you add new content to Sanity Studio, it won't automatically appear on your live website because:

1. **Static Site Generation**: Your site is statically exported for SiteGround hosting
2. **Build-Time Data Fetching**: All Sanity content is fetched during the build process
3. **Static HTML Files**: The build creates static HTML files with the content at that moment
4. **No Runtime Updates**: Once deployed, the site doesn't fetch new content until rebuilt

## The Solution

After adding or updating content in Sanity Studio, you need to:

### Step 1: Rebuild the Site

Run the SiteGround build command to fetch the latest content from Sanity:

```bash
npm run build:siteground
```

This will:
- Fetch all latest posts from Sanity
- Generate static HTML files for each post
- Update the blog listing page with new posts
- Create/update the sitemap with new URLs

### Step 2: Upload to SiteGround

Upload the updated files to SiteGround:

1. **Upload the entire `out/` directory contents** to `public_html/`
2. **Important files to update:**
   - `blog.html` (main blog listing)
   - `blog/[slug].html` files (individual posts)
   - `sitemap.xml` (updated URLs)
   - Any new images from Sanity

### Step 3: Verify

1. Visit your live site: `https://domusspa.com/blog`
2. Check that new posts appear in the listing
3. Click on a new post to verify it loads correctly

## What Was Fixed

1. **Sanity CDN Configuration**: Updated `lib/sanity.ts` to disable CDN during static builds (`useCdn: false` when `NEXT_EXPORT=true`) to ensure fresh data
2. **Build Process**: The build now correctly fetches all posts from Sanity during build time

## Future Workflow

Every time you:
- Add a new blog post
- Update an existing post
- Add/remove categories
- Change any Sanity content

You need to:
1. Rebuild: `npm run build:siteground`
2. Upload: Upload `out/` contents to SiteGround
3. Verify: Check the live site

## Optional: Automated Rebuilds

For automatic rebuilds when content changes, you could:
- Set up a webhook from Sanity to trigger a rebuild
- Use a CI/CD service (GitHub Actions, etc.) to rebuild and deploy
- Set up a scheduled rebuild (daily/weekly)

## Current Build Status

✅ **Latest build includes:**
- `blog/etst.html`
- `blog/test.html`
- Updated `blog.html` with both posts

