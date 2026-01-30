# Deploy to SiteGround — Files to Upload

## Step 1: Build locally (you need network for fonts)

In your project folder, run:

```bash
rm -rf .next out
npm run build:siteground
cp .htaccess out/
```

## Step 2: Upload to SiteGround

Upload **everything inside** your local `out/` folder **into** SiteGround’s **`public_html/`** (root).

### Upload destination: `public_html/` (root)

| Upload this (from `out/`) | To here (on SiteGround) |
|---------------------------|--------------------------|
| **All contents of `out/`** | **`public_html/`** |

### Files and folders to upload (from `out/`)

- **`.htaccess`** ← must be in root `public_html/` (enable “Show hidden files” in File Manager if you don’t see it)
- **`index.html`**
- **`404.html`**
- **`about.html`**, **`about.txt`**
- **`blog.html`**, **`blog.txt`**
- **`contact.html`**, **`contact.txt`**
- **`faq.html`**, **`faq.txt`**
- **`rituals.html`**, **`rituals.txt`**
- **`services.html`**, **`services.txt`**
- **`studio.html`**, **`studio.txt`**
- **`robots.txt`**
- **`sitemap.xml`**
- **`DomusLogo.png`** (if present in `out/`)
- **`_next/`** (entire folder — CSS, JS; keep structure)
- **`images/`** (entire folder — all images)
- **`videos/`** (entire folder — e.g. hero video)
- **`blog/`** (entire folder — e.g. `welcome-to-domus-the-return-of-ritual.html` and any other posts)
- **`services/`** (entire folder — all service pages)
- **`rituals/`** (entire folder — all ritual pages)
- **`legal/`** (entire folder — privacy.html, terms.html)

### Summary

1. Build: `npm run build:siteground` then `cp .htaccess out/`
2. In SiteGround File Manager, open **`public_html/`**
3. Upload **all files and folders** from your local **`out/`** into **`public_html/`**
4. Ensure **`.htaccess`** is in **`public_html/`** (same level as `index.html`)
5. Clear SiteGround cache (and browser cache if needed)

### If `_next/` is too large to upload in one go

- Zip the `_next` folder on your computer, upload the zip to `public_html/`, then use cPanel **Extract** to unzip it inside `public_html/` so you get `public_html/_next/` with all files inside.
