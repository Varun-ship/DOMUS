# SiteGround Upload Instructions - Blog Content Update

## What to Replace

After rebuilding with new Sanity content, you need to upload these specific files to SiteGround:

### 📁 Required Files to Upload/Replace

#### 1. Main Blog Page (Updated)
- **File**: `blog.html`
- **Location on SiteGround**: `public_html/blog.html`
- **Action**: Replace existing file
- **Why**: Contains the updated blog listing with new posts

#### 2. New Blog Post Pages (NEW)
- **Files**: 
  - `blog/etst.html`
  - `blog/test.html`
- **Location on SiteGround**: `public_html/blog/`
- **Action**: Upload these new files
- **Why**: These are the individual blog post pages

#### 3. Sitemap (May be updated)
- **File**: `sitemap.xml`
- **Location on SiteGround**: `public_html/sitemap.xml`
- **Action**: Replace if it exists, or upload if new
- **Why**: May contain new blog post URLs

### 📋 Step-by-Step Instructions

#### Option 1: Upload Only Changed Files (Recommended)

1. **Log into SiteGround cPanel**
   - Go to File Manager
   - Navigate to `public_html/`

2. **Upload `blog.html`**
   - Delete the old `blog.html` (or replace it)
   - Upload the new `blog.html` from `out/blog.html`

3. **Upload new blog posts**
   - Navigate to `public_html/blog/` (create folder if it doesn't exist)
   - Upload these files:
     - `blog/etst.html`
     - `blog/test.html`
   - **Note**: Keep any existing blog post HTML files (don't delete them unless you're replacing them)

4. **Update sitemap (optional but recommended)**
   - Upload `out/sitemap.xml` to `public_html/sitemap.xml`
   - Replace if it exists

#### Option 2: Upload Entire `out/` Directory (Full Replace)

If you want to ensure everything is up to date:

1. **Backup current site** (optional but recommended)
   - Download current `public_html/` contents as backup

2. **Delete old files** (be careful!)
   - Delete everything in `public_html/` EXCEPT:
     - `.htaccess` (keep this!)
     - Any custom files you added manually

3. **Upload all files from `out/`**
   - Upload entire contents of `out/` directory to `public_html/`
   - This ensures everything is in sync

4. **Verify `.htaccess`**
   - Make sure `.htaccess` is still in `public_html/`
   - If it was deleted, re-upload it from the project root

### ⚠️ Important Notes

1. **Keep `.htaccess`**: Never delete or overwrite `.htaccess` - it's critical for routing
2. **Don't delete `_next/` folder**: This contains all your CSS/JS assets
3. **Test after upload**: Visit `/blog` to verify posts appear
4. **Clear cache**: If posts don't appear, clear browser cache and SiteGround cache

### ✅ Verification Checklist

After uploading, verify:

- [ ] Visit `https://domusspa.com/blog` - should show both posts
- [ ] Visit `https://domusspa.com/blog/etst` - should load the post
- [ ] Visit `https://domusspa.com/blog/test` - should load the post
- [ ] Check that styling still works (CSS loads correctly)
- [ ] Check that images load (if posts have images)

### 🚨 If Something Goes Wrong

1. **Posts don't appear**: 
   - Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
   - Check SiteGround cache settings
   - Verify files were uploaded correctly

2. **404 errors on blog posts**:
   - Verify `.htaccess` is still in place
   - Check that blog post HTML files are in `public_html/blog/`

3. **Styling broken**:
   - Verify `_next/` folder is still intact
   - Check that `.htaccess` rewrite rules are working

## Quick Upload Command (if using FTP/SFTP)

If you have FTP/SFTP access, you can upload just the changed files:

```bash
# Upload blog.html
scp out/blog.html user@siteground:/public_html/blog.html

# Upload new blog posts
scp out/blog/etst.html user@siteground:/public_html/blog/etst.html
scp out/blog/test.html user@siteground:/public_html/blog/test.html

# Upload sitemap
scp out/sitemap.xml user@siteground:/public_html/sitemap.xml
```

