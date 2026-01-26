#!/usr/bin/env node

/**
 * Restore original Next.js config after SiteGround build
 */

const fs = require('fs');
const path = require('path');

const originalConfig = path.join(__dirname, '..', 'next.config.js');
const backupConfig = path.join(__dirname, '..', 'next.config.js.backup');

if (fs.existsSync(backupConfig)) {
  console.log('\n🔄 Restoring original next.config.js...');
  fs.copyFileSync(backupConfig, originalConfig);
  fs.unlinkSync(backupConfig);
  console.log('✅ Original config restored!\n');
  console.log('📁 Static files are in the "out" directory');
  console.log('📤 Upload the "out" directory contents to SiteGround public_html/\n');
} else {
  console.log('\n⚠️  No backup config found to restore.\n');
}


