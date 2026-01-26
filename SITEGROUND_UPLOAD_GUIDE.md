# SiteGround Upload Guide - Where is the Root?

## Understanding "Root" Directory

### For SiteGround Hosting

**Root Directory = `public_html/`**

This is where your website files go. When someone visits `https://yourdomain.com`, SiteGround serves files from the `public_html/` directory.

## Upload Instructions

### Step 1: Find Your Root Directory

1. Log into **SiteGround cPanel**
2. Look for **File Manager** (usually in the "Files" section)
3. Click **File Manager**
4. You'll see a folder called **`public_html`** - **THIS IS YOUR ROOT**

### Step 2: Upload Files

**Option A: Using cPanel File Manager**

1. Navigate to `public_html/` folder
2. Click **Upload** button
3. Upload **all files and folders** from your local `out/` directory:
   - Select all files in `out/` (index.html, about.html, etc.)
   - Select all folders (`_next/`, `images/`, `blog/`, `services/`, etc.)
4. Upload the `.htaccess` file to `public_html/` (root level)

**Option B: Using FTP/SFTP**

1. Connect to your SiteGround FTP
2. Navigate to `/public_html/` (this is the root)
3. Upload all contents from `out/` directory
4. Upload `.htaccess` file to `/public_html/`

## File Structure on SiteGround

After upload, your `public_html/` should look like this:

```
public_html/                    ← THIS IS THE ROOT
├── .htaccess                   ← Upload this file here (root level)
├── index.html                  ← Your homepage
├── about.html
├── services.html
├── blog.html
├── contact.html
├── faq.html
├── robots.txt
├── sitemap.xml
├── images/                     ← All your service images
│   ├── balinese-massage.jpg
│   ├── thai-massage.jpg
│   └── ... (all 15 images)
├── _next/                      ← Next.js assets (CSS, JS, fonts)
│   └── static/
├── services/                    ← Service detail pages
│   ├── balinese-massage.html
│   ├── thai-massage.html
│   └── ... (all 13 services)
├── blog/                       ← Blog pages
│   └── __placeholder__.html
└── rituals/                    ← Ritual pages
    └── ... (all ritual pages)
```

## Important Notes

- **Root = `public_html/`** - This is where your domain points to
- **`.htaccess` goes in root** - Same level as `index.html`
- **All files from `out/` go in root** - Upload everything inside `out/` to `public_html/`
- **Keep folder structure** - Maintain the same folder structure (images/, services/, etc.)

## Quick Checklist

- [ ] Upload all files from `out/` to `public_html/`
- [ ] Upload `.htaccess` to `public_html/` (root level)
- [ ] Verify `index.html` is in `public_html/`
- [ ] Verify `images/` folder is in `public_html/`
- [ ] Verify `_next/` folder is in `public_html/`

## Testing After Upload

Visit your domain:
- `https://yourdomain.com` → Should show homepage
- `https://yourdomain.com/services` → Should show services page
- `https://yourdomain.com/about` → Should show about page

If you see a 404 or error, check:
1. Files are in `public_html/` (not a subfolder)
2. `.htaccess` is uploaded and in root
3. File permissions are correct (644 for files, 755 for folders)


