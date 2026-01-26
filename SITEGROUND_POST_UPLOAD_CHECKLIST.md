# SiteGround Post-Upload Checklist

## ✅ Step 1: Verify File Structure

In SiteGround File Manager, check that `public_html/` contains:

```
public_html/
├── .htaccess              ← Must be here (root level)
├── index.html             ← Homepage
├── about.html
├── services.html
├── blog.html
├── contact.html
├── faq.html
├── robots.txt
├── sitemap.xml
├── images/                 ← All service images (15 files)
├── _next/                  ← CSS, JS, fonts (critical!)
│   └── static/
├── services/               ← Service detail pages (13 files)
├── blog/                   ← Blog pages
└── rituals/                ← Ritual pages
```

## ✅ Step 2: Test Your Website

### Basic Tests

1. **Visit your homepage**:
   - Go to: `https://yourdomain.com`
   - Should see: DOMUS homepage with hero section

2. **Test navigation**:
   - Click "Services" → Should go to `/services`
   - Click "About" → Should go to `/about`
   - Click "Journal" → Should go to `/blog`
   - Click "FAQ" → Should go to `/faq`
   - Click "Contact" → Should go to `/contact`

3. **Test service pages**:
   - Go to: `https://yourdomain.com/services`
   - Click on a service card (e.g., "Balinese Massage")
   - Should see: Service detail page with image and details

4. **Check styling**:
   - Site should have proper fonts (Caudex, Inter)
   - Colors should be correct (green, gold, warm stone)
   - Layout should be responsive

## ✅ Step 3: Verify Critical Files

### Check .htaccess is Working

1. **Test URL routing**:
   - Visit: `https://yourdomain.com/services/balinese-massage`
   - Should load the service page (not 404)

2. **Check security headers** (optional):
   - Use: https://securityheaders.com/
   - Enter your domain
   - Should see security headers configured

### Check _next Folder

1. **Open browser DevTools** (F12 or Cmd+Option+I):
   - Go to "Network" tab
   - Refresh the page
   - Look for files loading from `/_next/static/`
   - Should see: `.js`, `.css`, font files loading successfully

2. **Check Console**:
   - Go to "Console" tab
   - Should see: No errors (or minimal warnings)
   - ❌ If you see "404" errors for `_next/` files → _next folder not uploaded correctly

## ✅ Step 4: Test Images

1. **Service images**:
   - Go to: `https://yourdomain.com/services`
   - All service cards should show images
   - Images should load from: `/images/balinese-massage.jpg`, etc.

2. **Check image paths**:
   - Right-click an image → "Inspect"
   - Should see: `src="/images/..."` (not broken links)

## ✅ Step 5: Test SEO Files

1. **Robots.txt**:
   - Visit: `https://yourdomain.com/robots.txt`
   - Should see: Robots.txt content

2. **Sitemap**:
   - Visit: `https://yourdomain.com/sitemap.xml`
   - Should see: XML sitemap with all pages

## ✅ Step 6: Test Contact Form

1. **Go to**: `https://yourdomain.com/contact`
2. **Fill out the form** (test submission)
3. **Note**: Contact form may need backend setup (currently static)
   - For now, it should display but may not send emails
   - Consider using a service like Formspree or Netlify Forms

## ✅ Step 7: Test Sanity Studio Link

1. **Go to**: `https://yourdomain.com/studio`
2. **Should see**: Message with link to hosted studio
3. **Click link**: Should go to `https://admindomus.sanity.studio`

## Common Issues & Fixes

### Issue: Site shows but no styling (white page, broken layout)
**Fix**: `_next` folder not uploaded correctly
- Re-upload `_next` folder (use ZIP method or FTP)
- Clear browser cache
- Check browser console for 404 errors

### Issue: 404 errors on service/blog pages
**Fix**: `.htaccess` not working
- Verify `.htaccess` is in `public_html/` (root level)
- Check file permissions (should be 644)
- Verify `.htaccess` content is correct

### Issue: Images not loading
**Fix**: Images folder not uploaded
- Verify `images/` folder exists in `public_html/`
- Check all 15 image files are present
- Verify file paths in browser DevTools

### Issue: Navigation links broken
**Fix**: Check URL structure
- Links should work without `.html` extension
- `.htaccess` handles URL rewriting
- If not working, check `.htaccess` file

## Final Verification

✅ Homepage loads correctly
✅ All navigation links work
✅ Service pages load with images
✅ Styling and fonts are correct
✅ No console errors
✅ Images load properly
✅ robots.txt and sitemap.xml accessible

## Next Steps (Optional)

1. **Set up contact form backend** (if needed)
2. **Configure domain SSL** (SiteGround usually does this automatically)
3. **Set up Google Analytics** (if desired)
4. **Test on mobile devices**
5. **Submit sitemap to Google Search Console**

## Need Help?

If something isn't working:
1. Check browser console (F12) for errors
2. Check Network tab for failed requests
3. Verify file structure matches checklist above
4. Test with different browser/incognito mode


