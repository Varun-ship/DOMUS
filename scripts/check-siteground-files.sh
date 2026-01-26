#!/bin/bash

# Script to check what files should be on SiteGround vs what might be old

echo "=== Files that SHOULD be in out/blog/ ==="
ls -1 out/blog/*.html 2>/dev/null | xargs -n1 basename

echo ""
echo "=== Files that should be DELETED from SiteGround blog/ folder ==="
echo "If you see these files on SiteGround, DELETE them:"
echo "  - blog/test.html"
echo "  - blog/etst.html"
echo "  - Any other .html files in blog/ that are NOT:"
ls -1 out/blog/*.html 2>/dev/null | xargs -n1 basename | sed 's/^/    - /'

echo ""
echo "=== Current blog posts in build ==="
for file in out/blog/*.html; do
    if [ -f "$file" ]; then
        basename "$file" .html
    fi
done

echo ""
echo "=== Instructions ==="
echo "1. Go to SiteGround File Manager"
echo "2. Navigate to public_html/blog/"
echo "3. DELETE any .html files that are NOT in the list above"
echo "4. Make sure only these files exist:"
ls -1 out/blog/*.html 2>/dev/null | xargs -n1 basename | sed 's/^/   - /'
