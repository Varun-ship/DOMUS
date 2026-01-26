# Fix: Old Site Still Showing Despite New Files

## Problem: New files uploaded but old site still shows

Even though your new `index.html` with DOMUS content is uploaded, you're still seeing the old website.

## Most Common Causes & Fixes

### 1. Browser Cache (Most Likely)

**Fix:**
1. **Hard refresh**:
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`
   - Linux: `Ctrl + F5`

2. **Clear browser cache completely**:
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Firefox: Settings → Privacy → Clear Data → Cached Web Content
   - Safari: Develop → Empty Caches (enable Develop menu first)

3. **Use incognito/private mode**:
   - This bypasses cache completely
   - If it works in incognito → it's a cache issue

### 2. SiteGround Caching

SiteGround has built-in caching that might be serving old content.

**Fix:**
1. **Log into SiteGround cPanel**
2. **Look for "SG Optimizer" or "Caching"**
3. **Clear all cache**:
   - SG Optimizer → Clear Cache
   - Or: Caching → Purge Cache
4. **Wait 2-3 minutes** and try again

### 3. CDN Cache (If Using)

If you have Cloudflare or another CDN:
- Clear CDN cache
- Wait for propagation (5-10 minutes)

### 4. Multiple Index Files

SiteGround serves files in this order:
1. `index.php` (highest priority)
2. `index.html`
3. Other default files

**Check:**
- Is there an `index.php` file in `public_html/`?
- If yes, it's taking precedence over `index.html`
- **Fix**: Delete or rename `index.php` to `index.php.old`

### 5. Wrong Domain/Subdomain

**Check:**
- Are you visiting the correct domain?
- Is there a `www` vs non-`www` issue?
- Try both: `https://yourdomain.com` and `https://www.yourdomain.com`

### 6. File Permissions

**Check file permissions:**
- `index.html` should be: `644`
- Folders should be: `755`

**Fix in SiteGround File Manager:**
- Right-click `index.html` → Change Permissions → Set to `644`

### 7. .htaccess Redirect

Check if `.htaccess` has redirects pointing to old content.

**Quick check:**
- Temporarily rename `.htaccess` to `.htaccess.backup`
- Refresh site
- If new site appears → `.htaccess` issue
- If still old site → different issue

### 8. DNS Propagation

If you just changed domains:
- DNS changes can take 24-48 hours
- Check: `https://www.whatsmydns.net/`

## Step-by-Step Troubleshooting

### Step 1: Verify File Content

1. In SiteGround File Manager, open `index.html`
2. Check first few lines
3. Should see: DOMUS content, not old site content
4. If it shows old content → file wasn't uploaded correctly

### Step 2: Check for index.php

1. In `public_html/`, look for `index.php`
2. If it exists:
   - Open it and check content
   - If it's old site → delete or rename to `index.php.old`
   - Your `index.html` will then be served

### Step 3: Clear All Caches

1. **Browser**: Hard refresh (`Cmd+Shift+R`)
2. **SiteGround**: Clear cache in cPanel
3. **CDN**: Clear if using one
4. **Wait 5 minutes**

### Step 4: Test in Incognito

1. Open incognito/private window
2. Visit your site
3. If new site appears → cache issue
4. If old site still → file/server issue

### Step 5: Check File Timestamp

1. In File Manager, check `index.html` date
2. Should be today's date (when you uploaded)
3. If old date → file didn't upload correctly

### Step 6: Verify File Location

1. Make sure `index.html` is in `public_html/` directly
2. Not in `public_html/website/` or subfolder
3. Should be same level as `.htaccess`

## Quick Diagnostic Test

Run these checks:

1. **Open `index.html` directly**:
   - Visit: `https://yourdomain.com/index.html`
   - If new site appears → routing/cache issue
   - If old site appears → wrong file uploaded

2. **Check file size**:
   - Your new `index.html` should be ~45KB
   - Old one might be different size

3. **View page source**:
   - Right-click page → "View Page Source"
   - Search for "DOMUS"
   - If found → file is correct, cache issue
   - If not found → wrong file being served

## Nuclear Option: Complete Re-upload

If nothing works:

1. **Delete all website files** (keep `logs/`, `webstats/`)
2. **Delete `index.html` and `index.php`**
3. **Re-upload everything from `out/` folder**
4. **Re-upload `.htaccess`**
5. **Clear all caches**
6. **Test in incognito**

## Most Likely Solution

**90% of the time it's browser cache:**

1. Open incognito/private window
2. Visit your site
3. If it works → clear your browser cache
4. If it doesn't work → check for `index.php` or SiteGround cache

## Still Not Working?

1. **Check SiteGround error logs** (in cPanel)
2. **Contact SiteGround support** - they can check server-side caching
3. **Verify you're editing the correct domain** in cPanel


