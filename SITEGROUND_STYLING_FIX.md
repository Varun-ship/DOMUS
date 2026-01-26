# Fix: Website Missing Styling (No CSS)

## Problem: Website loads but has no styling - just plain HTML

This means the `_next` folder (which contains all CSS and JavaScript) is either:
1. Not uploaded correctly
2. Not in the right location
3. Files have wrong permissions
4. Paths are incorrect

## Quick Fix Steps

### Step 1: Verify _next Folder Exists

In SiteGround File Manager, check:
- `public_html/_next/` folder should exist
- Inside should be: `static/` folder
- Inside `static/` should be: `chunks/`, `css/`, `media/` folders

**Path should be:**
```
public_html/
├── _next/
│   └── static/
│       ├── chunks/
│       ├── css/
│       └── media/
```

### Step 2: Check Browser Console for Errors

1. **Open your website**
2. **Press F12** (or Cmd+Option+I on Mac)
3. **Go to "Console" tab**
4. **Look for 404 errors** - should see errors like:
   - `/_next/static/css/...` - 404 Not Found
   - `/_next/static/chunks/...` - 404 Not Found

**If you see 404 errors** → `_next` folder not uploaded or in wrong location

### Step 3: Verify File Structure

In SiteGround File Manager:

1. **Navigate to**: `public_html/_next/static/css/`
2. **Should see**: A file like `05289638bf6854e9.css`
3. **If folder is empty or missing** → `_next` folder not uploaded correctly

### Step 4: Re-upload _next Folder

**Option A: Using ZIP (Easiest)**

1. **On your computer**, the ZIP file should be at:
   - `/Users/grigoryprelovskiy/DOMUS/out/_next.zip`

2. **In SiteGround File Manager**:
   - Go to `public_html/`
   - Upload `_next.zip`
   - Right-click → Extract
   - Delete the ZIP file after extraction

**Option B: Using FTP (More Reliable)**

1. **Use FileZilla or similar FTP client**
2. **Connect to SiteGround**
3. **Navigate to `public_html/`**
4. **Upload entire `_next` folder** from:
   - `/Users/grigoryprelovskiy/DOMUS/out/_next/`

### Step 5: Check File Permissions

After uploading, verify permissions:
- **Folders**: Should be `755`
- **Files**: Should be `644`

**In File Manager**:
- Right-click `_next` folder → Change Permissions → `755`
- Right-click files inside → Change Permissions → `644`

### Step 6: Clear Cache and Test

1. **Clear SiteGround cache** (SG Optimizer)
2. **Clear browser cache** (Cmd+Shift+R or Ctrl+Shift+R)
3. **Hard refresh** the page
4. **Check browser console** - should see CSS files loading

## Verification Checklist

After re-uploading `_next` folder:

- [ ] `public_html/_next/static/css/` exists with CSS files
- [ ] `public_html/_next/static/chunks/` exists with JS files
- [ ] Browser console shows no 404 errors for `_next/` files
- [ ] Website has proper styling (fonts, colors, layout)
- [ ] File permissions are correct (755 for folders, 644 for files)

## Quick Test

1. **Visit**: `https://yourdomain.com/_next/static/css/05289638bf6854e9.css`
2. **Should see**: CSS code (not 404 error)
3. **If 404** → `_next` folder not uploaded correctly

## Most Common Issue

**90% of the time**: `_next` folder wasn't uploaded or was uploaded to wrong location.

**Solution**: Re-upload `_next` folder using ZIP method or FTP, ensuring it's in `public_html/` (same level as `index.html`).


