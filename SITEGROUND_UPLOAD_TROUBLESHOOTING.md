# SiteGround Upload Troubleshooting - _next Folder

## Problem: Cannot Upload _next Folder

The `_next` folder contains many files and deep directory structures, which can cause upload issues with web-based file managers.

## Solutions

### ✅ Solution 1: Use FTP/SFTP Client (Recommended)

**Why**: FTP clients handle large folder uploads better than web file managers.

**Steps**:
1. **Get FTP credentials from SiteGround**:
   - Go to SiteGround cPanel
   - Find "FTP Accounts" or "File Manager"
   - Create/use existing FTP account
   - Note: FTP host, username, password

2. **Use an FTP client**:
   - **FileZilla** (free): https://filezilla-project.org/
   - **Cyberduck** (free): https://cyberduck.io/
   - **Transmit** (Mac, paid): https://panic.com/transmit/

3. **Connect and upload**:
   - Connect to your SiteGround FTP
   - Navigate to `public_html/`
   - Upload the entire `_next` folder
   - Let it upload completely (may take several minutes)

### ✅ Solution 2: Upload via cPanel File Manager (Alternative)

**If web upload is your only option**:

1. **Compress the folder first**:
   ```bash
   cd /Users/grigoryprelovskiy/DOMUS/out
   zip -r _next.zip _next/
   ```

2. **Upload the ZIP file**:
   - Upload `_next.zip` to `public_html/`
   - Use cPanel File Manager's "Extract" feature
   - Extract it in `public_html/`
   - Delete the ZIP file after extraction

### ✅ Solution 3: Upload in Smaller Batches

**If you must use web upload**:

1. Upload `_next/static/` folder first
2. Then upload `_next/[hash]/` folders one by one
3. This is tedious but works if FTP isn't available

### ✅ Solution 4: Use SiteGround's SSH (Advanced)

If you have SSH access:

```bash
# On your local machine
cd /Users/grigoryprelovskiy/DOMUS/out
tar -czf _next.tar.gz _next/

# Upload via SCP
scp _next.tar.gz username@yourdomain.com:~/public_html/

# SSH into SiteGround
ssh username@yourdomain.com

# Extract
cd public_html
tar -xzf _next.tar.gz
rm _next.tar.gz
```

## Why _next Folder is Important

The `_next` folder contains:
- **CSS files** - All your styles
- **JavaScript files** - All your interactive functionality
- **Fonts** - Custom fonts (Caudex, Inter)
- **Manifests** - Build metadata

**Without it**: Your site will load but:
- ❌ No styling (CSS missing)
- ❌ No interactivity (JS missing)
- ❌ Broken fonts
- ❌ Navigation won't work properly

## Verification After Upload

After uploading, check:
1. Visit your site: `https://yourdomain.com`
2. Open browser DevTools (F12)
3. Check Console for errors
4. Check Network tab - verify `_next/static/` files are loading

## Quick Check Command

After upload, verify files exist:
```
public_html/_next/static/chunks/ (should have many .js files)
public_html/_next/static/css/ (should have .css files)
```

## Recommended Approach

**Best**: Use FTP client (FileZilla) - most reliable for large folders
**Alternative**: Compress and extract via cPanel
**Last resort**: Batch upload via web file manager

