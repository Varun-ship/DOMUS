# Fix: Missing JavaScript Files (404 Errors)

## The Problem

You're seeing these errors:
- `GET https://domusspa.com/_next/static/chunks/webpack-2e41406d4f208b1d.js net::ERR_ABORTED 404`
- `GET https://domusspa.com/_next/static/chunks/app/blog/page-8d23cde42f76d87e.js net::ERR_ABORTED 404`

**Why**: The `_next` folder wasn't uploaded to SiteGround, or it's incomplete.

## Quick Fix: Upload _next Folder

### Option 1: Compress and Upload via cPanel (Easiest)

1. **Create a ZIP file** (already done for you):
   ```bash
   cd /Users/grigoryprelovskiy/DOMUS/out
   zip -r _next.zip _next/
   ```

2. **Upload to SiteGround**:
   - Go to SiteGround cPanel → File Manager
   - Navigate to `public_html/`
   - Upload `_next.zip`
   - Right-click the ZIP file → "Extract"
   - Extract to `public_html/` (should create `_next/` folder)
   - Delete `_next.zip` after extraction

3. **Verify**:
   - Check that `public_html/_next/static/chunks/webpack-2e41406d4f208b1d.js` exists
   - Check that `public_html/_next/static/chunks/app/blog/page-8d23cde42f76d87e.js` exists

### Option 2: Use FTP Client (Most Reliable)

1. **Get FTP credentials from SiteGround cPanel**

2. **Use FileZilla** (free):
   - Download: https://filezilla-project.org/
   - Connect using your FTP credentials
   - Navigate to `public_html/`
   - Upload the entire `_next/` folder from `out/_next/`
   - Wait for upload to complete (may take a few minutes)

### Option 3: Re-upload Everything

If the above doesn't work, upload the entire `out/` directory:

1. **Compress everything**:
   ```bash
   cd /Users/grigoryprelovskiy/DOMUS
   zip -r siteground-build.zip out/
   ```

2. **Upload and extract**:
   - Upload `siteground-build.zip` to `public_html/`
   - Extract it (this will create/overwrite all files)
   - Make sure `.htaccess` is still in place

## Verify It's Fixed

After uploading:

1. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)

2. **Visit**: `https://domusspa.com/blog`

3. **Check browser console** (F12):
   - Should see NO 404 errors
   - JavaScript files should load successfully

4. **Test the page**:
   - Posts should be visible (not empty)
   - Search should work
   - Clicking posts should work
   - No "Application error" message

## File Structure on SiteGround

After upload, your `public_html/` should have:

```
public_html/
├── .htaccess
├── index.html
├── blog.html
├── blog/
│   ├── etst.html
│   └── test.html
├── _next/              ← THIS IS CRITICAL
│   ├── static/
│   │   ├── chunks/
│   │   │   ├── webpack-2e41406d4f208b1d.js
│   │   │   ├── app/
│   │   │   │   └── blog/
│   │   │   │       └── page-8d23cde42f76d87e.js
│   │   └── css/
│   └── [build-id]/
└── images/
```

## Why This Happens

The `_next` folder contains:
- **JavaScript** - Makes your site interactive
- **CSS** - Styles your site
- **Fonts** - Custom fonts
- **Build metadata** - Next.js runtime

Without it, the HTML loads but JavaScript doesn't, causing:
- Empty pages (content is there but not rendered)
- No interactivity
- Client-side errors

## Prevention

Always upload the **entire `out/` directory** when deploying, not just individual HTML files.

