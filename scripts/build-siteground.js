#!/usr/bin/env node

/**
 * Build script for SiteGround static export
 * This temporarily swaps the Next.js config to enable static export
 */

const fs = require('fs');
const path = require('path');

const originalConfig = path.join(__dirname, '..', 'next.config.js');
const sitegroundConfig = path.join(__dirname, '..', 'next.config.siteground.js');
const backupConfig = path.join(__dirname, '..', 'next.config.js.backup');

console.log('🚀 Building for SiteGround static export...\n');

// Backup original config
if (fs.existsSync(originalConfig)) {
  console.log('📦 Backing up original next.config.js...');
  fs.copyFileSync(originalConfig, backupConfig);
}

// Copy siteground config to main config
if (fs.existsSync(sitegroundConfig)) {
  console.log('⚙️  Using SiteGround config...');
  fs.copyFileSync(sitegroundConfig, originalConfig);
} else {
  console.error('❌ Error: next.config.siteground.js not found!');
  process.exit(1);
}

console.log('✅ Config ready. Run: npm run build\n');
console.log('After build completes, the original config will be restored.\n');

