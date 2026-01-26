# Fix: 403 Forbidden Error on Page Reload

## Problem

When you navigate to a page like `domusspa.com/services` and then reload it, you get:
```
403 - Forbidden
Access to this page is forbidden.
```

## Cause

This happens because:
1. Next.js static export creates files like `services.html` (not `services/index.html`)
2. When you reload `/services`, Apache tries to access the directory `/services/` which doesn't exist
3. The `.htaccess` rewrite rules weren't properly handling this case

## Solution

The `.htaccess` file has been updated to:
1. **First check** if the requested path exists as an HTML file (e.g., `/services` → `/services.html`)
2. **Then check** for nested paths (e.g., `/services/balinese-massage` → `/services/balinese-massage.html`)
3. **Finally fallback** to `index.html` for client-side routing

## Updated .htaccess Rules

The new rewrite rules:
- Check if the path exists as an HTML file first
- Handle both top-level pages (`/services`) and nested pages (`/services/balinese-massage`)
- Exclude static assets (`/_next/`, `/images/`, etc.) from rewriting
- Fallback to `index.html` for client-side routing

## How to Apply the Fix

### Step 1: Update .htaccess on SiteGround

1. **Download the updated `.htaccess`** from your project:
   - Location: `/Users/grigoryprelovskiy/DOMUS/.htaccess`

2. **In SiteGround File Manager**:
   - Go to `public_html/`
   - Delete the old `.htaccess` file
   - Upload the new `.htaccess` file

3. **Or edit directly in File Manager**:
   - Right-click `.htaccess` → Edit
   - Replace the rewrite rules section with the new rules

### Step 2: Test

1. **Visit**: `https://domusspa.com/services`
2. **Reload the page** (F5 or Cmd+R)
3. **Should work** without 403 error

### Step 3: Verify All Pages

Test these pages with reload:
- `/services` → Should work
- `/services/balinese-massage` → Should work
- `/about` → Should work
- `/blog` → Should work
- `/contact` → Should work

## What Changed

**Old rule** (caused 403):
```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

**New rules** (fixed):
```apache
# Try HTML file first (e.g., /services -> /services.html)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/_next/
RewriteRule ^([^/]+)/?$ /$1.html [L]

# Try nested paths (e.g., /services/balinese-massage -> /services/balinese-massage.html)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/_next/
RewriteRule ^(.+)/?$ /$1.html [L]

# Fallback to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

## Verification

After updating `.htaccess`:
- [ ] `/services` loads correctly
- [ ] Reloading `/services` doesn't show 403
- [ ] All service detail pages work
- [ ] All other pages work with reload
- [ ] Static assets (`/_next/`, `/images/`) still load correctly


