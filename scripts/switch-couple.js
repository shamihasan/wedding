#!/usr/bin/env node

/**
 * Script to switch between different couple configurations
 * Usage: npm run set -- #RakShuDaViah
 *        npm run set -- #NiviFoundHerShiv
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get hashtag from command line arguments
const args = process.argv.slice(2);
let hashtag = args[0];

if (!hashtag) {
  console.error('\n❌ Error: Please provide a couple identifier!\n');
  console.log('Usage:');
  console.log('  npm run set:rakshudaviah');
  console.log('  npm run set:nivifoundhershiv');
  console.log('\nOr with arguments:');
  console.log('  node scripts/switch-couple.js rakshudaviah');
  console.log('  node scripts/switch-couple.js nivifoundhershiv\n');
  process.exit(1);
}

// Remove # if present and convert to lowercase
const cleanHashtag = hashtag.replace('#', '').toLowerCase();

// Map hashtags to config file names
const configMap = {
  'rakshudaviah': 'weddingConfig.backup-rakshudaviah.js',
  'nivifoundhershiv': 'weddingConfig.backup-nivifoundhershiv.js'
};

// Find matching config
const backupConfigFile = configMap[cleanHashtag];

if (!backupConfigFile) {
  console.error(`\n❌ Error: No configuration found for hashtag "${hashtag}"\n`);
  console.log('Available hashtags:');
  Object.keys(configMap).forEach(key => {
    console.log(`  - #${key.charAt(0).toUpperCase() + key.slice(1)}`);
  });
  console.log();
  process.exit(1);
}

const configDir = path.join(__dirname, '../src/config');
const backupConfigPath = path.join(configDir, backupConfigFile);
const mainConfigPath = path.join(configDir, 'weddingConfig.js');

// Check if backup config exists
if (!fs.existsSync(backupConfigPath)) {
  console.error(`\n❌ Error: Backup config not found at ${backupConfigPath}\n`);
  process.exit(1);
}

console.log('\n🔄 Switching wedding configuration...');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Read backup config content
const backupContent = fs.readFileSync(backupConfigPath, 'utf-8');

// Extract couple names for display
const brideMatch = backupContent.match(/bride:\s*{\s*fullName:\s*["']([^"']+)["']/s);
const groomMatch = backupContent.match(/groom:\s*{\s*fullName:\s*["']([^"']+)["']/s);
const hashtagMatch = backupContent.match(/hashtag:\s*["']([^"']+)["']/);

const brideName = brideMatch ? brideMatch[1] : 'Unknown';
const groomName = groomMatch ? groomMatch[1] : 'Unknown';
const configHashtag = hashtagMatch ? hashtagMatch[1] : hashtag;

console.log(`📝 Config: ${backupConfigFile}`);
console.log(`💑 Couple: ${brideName} & ${groomName}`);
console.log(`#️⃣  Hashtag: ${configHashtag}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Copy backup to main config
fs.copyFileSync(backupConfigPath, mainConfigPath);
console.log('✅ Configuration file updated');

// Run meta tag update script
console.log('🏷️  Updating meta tags...\n');
try {
  execSync('node scripts/update-meta-tags.js', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
} catch (error) {
  console.error('\n❌ Error updating meta tags');
  process.exit(1);
}

console.log('\n🎉 Successfully switched to ' + configHashtag);
console.log('\n💡 Next steps:');
console.log('   - Run "npm run dev" to see changes locally');
console.log('   - Run "npm run build" to build for production');
console.log('   - Commit and push changes to deploy\n');
