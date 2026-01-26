# Fix: Old Blog Posts Showing on SiteGround

## The Problem

You're seeing 2 old test blog posts (`test`, `etst`) when visiting `/blog`, but when you reload to `blog.html`, you see the correct 1 post. This happens because:

1. **Old blog post HTML files** are still on SiteGround
2. **Old JavaScript bundles** might be cached
3. **Browser cache** is serving old data

## Solution: Complete Cleanup on SiteGround

### Step 1: Delete Old Blog Post Files

1. **Go to SiteGround File Manager**
2. **Navigate to**: `public_html/blog/`
3. **DELETE these files** (if they exist):
   - `test.html`
   - `etst.html`
   - Any other `.html` files that are NOT: `welcome-to-domus-the-return-of-ritual.html`

### Step 2: Delete and Re-upload JavaScript Bundles

1. **Delete the entire `_next` folder** on SiteGround:
   - Go to `public_html/_next/`
   - Delete the entire folder

2. **Upload fresh `_next` folder**:
   - From your local: `out/_next/`
   - Upload to: `public_html/_next/`
   - Make sure ALL files are uploaded (this might take a few minutes)

### Step 3: Update blog.html

1. **Upload fresh `blog.html`**:
   - From your local: `out/blog.html`
   - Upload to: `public_html/blog.html`
   - Replace the old one

### Step 4: Update .htaccess

1. **Upload fresh `.htaccess`**:
   - From your local: `.htaccess`
   - Upload to: `public_html/.htaccess`
   - Replace the old one

### Step 5: Clear Browser Cache

1. **Hard refresh** your browser:
   - Chrome/Edge: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Firefox: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - Safari: `Cmd+Option+R`

2. **Or test in incognito/private window** to bypass cache

## Verification

After completing all steps:

1. **Visit**: `https://domusspa.com/blog`
2. **You should see**: Only 1 post ("Welcome to DOMUS: The Return of Ritual")
3. **Reload the page**: Should still show only 1 post
4. **Check in incognito**: Should show only 1 post

## Quick Checklist

- [ ] Deleted old blog post files (`test.html`, `etst.html`)
- [ ] Deleted old `_next` folder
- [ ] Uploaded fresh `_next` folder
- [ ] Uploaded fresh `blog.html`
- [ ] Uploaded fresh `.htaccess`
- [ ] Cleared browser cache or tested in incognito

## If It Still Doesn't Work

1. **Check SiteGround cache**:
   - Go to SiteGround cPanel
   - Look for "Cache" or "SuperCacher"
   - Clear all cache

2. **Verify files on SiteGround**:
   - `public_html/blog/` should only have: `welcome-to-domus-the-return-of-ritual.html`
   - `public_html/blog.html` should exist
   - `public_html/_next/` should exist with all files

3. **Check browser console**:
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for any errors
   - Go to Network tab
   - Reload page
   - Check if any files return 404

## Why This Happens

Next.js static export embeds data in the HTML and JavaScript bundles. If old files remain on the server:
- Old HTML files can be accessed directly
- Old JavaScript bundles can be loaded
- Browser cache can serve old data

By deleting old files and uploading fresh ones, you ensure only the correct data is available.
