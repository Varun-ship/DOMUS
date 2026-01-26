# Replace Old Site on SiteGround

## Problem: Old Website Still Showing

This happens when old files are still in `public_html/` and taking precedence over new files.

## Solution: Clean Install

### Step 1: Backup Old Files (Optional but Safe)

1. In SiteGround File Manager, go to `public_html/`
2. Create a backup folder: `old_site_backup/`
3. Move old website files there:
   - Old `index.html` or `index.php`
   - Old website folders
   - Old `.htaccess` (if different from yours)
   - **BUT KEEP**: `logs/` and `webstats/` folders (these are SiteGround system folders)

### Step 2: Delete Old Website Files

**Delete these files/folders** (if they exist):
- `index.php` (old PHP site)
- Old `index.html` (if it's the old site)
- Old website folders (not `logs/` or `webstats/`)
- Old `.htaccess` (replace with your new one)

**Keep these**:
- ✅ `logs/` folder (SiteGround system)
- ✅ `webstats/` folder (SiteGround system)

### Step 3: Verify Your New Files Are Uploaded

Check that these exist in `public_html/`:
- ✅ `index.html` (your new homepage)
- ✅ `about.html`
- ✅ `services.html`
- ✅ `blog.html`
- ✅ `_next/` folder (with files inside)
- ✅ `images/` folder (with 15 images)
- ✅ `.htaccess` (your new one)

### Step 4: Clear Cache

1. **Browser cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or use incognito/private browsing mode

2. **SiteGround cache** (if available):
   - Check SiteGround cPanel for "Caching" or "SG Optimizer"
   - Clear cache if option available

3. **CDN cache** (if using):
   - Clear CDN cache if you have one set up

### Step 5: Verify File Priority

**SiteGround serves files in this order**:
1. `index.html` (if exists)
2. `index.php` (if exists)
3. Other default files

**If you have both `index.html` and `index.php`**:
- Delete `index.php` (or rename it to `index.php.old`)
- Your new `index.html` should be the only index file

## Quick Fix Steps

### Option A: Complete Clean Install

1. **Backup old files** (optional):
   ```
   public_html/old_site_backup/
   ```

2. **Delete old website files**:
   - Delete old `index.html` or `index.php`
   - Delete old website folders
   - Delete old `.htaccess`

3. **Keep system folders**:
   - Keep `logs/`
   - Keep `webstats/`

4. **Verify new files**:
   - Your new `index.html` should be there
   - Your new `.htaccess` should be there
   - Your `_next/` folder should be there

5. **Clear browser cache**:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Option B: Rename Old Files

If you want to keep old files as backup:

1. Rename old `index.html` → `index.html.old`
2. Rename old `index.php` → `index.php.old`
3. Your new `index.html` will now be served

## Verification Checklist

After cleanup, verify:

- [ ] Only ONE `index.html` in `public_html/` (your new one)
- [ ] No `index.php` (or it's renamed/backed up)
- [ ] Your new `.htaccess` is in `public_html/`
- [ ] `_next/` folder exists with files
- [ ] `images/` folder exists with images
- [ ] Old website files are deleted or backed up
- [ ] Browser cache cleared (hard refresh)

## Test After Cleanup

1. **Visit**: `https://yourdomain.com`
2. **Hard refresh**: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. **Should see**: Your new DOMUS homepage
4. **Check**: Navigation, styling, images all work

## If Still Not Working

1. **Check file timestamps**:
   - Your new `index.html` should have today's date
   - If it has an old date, re-upload it

2. **Check file permissions**:
   - Files should be: `644`
   - Folders should be: `755`

3. **Check for subdirectories**:
   - Make sure files are in `public_html/` directly
   - Not in `public_html/website/` or similar

4. **Contact SiteGround support**:
   - They can verify file structure
   - They can check for caching issues


