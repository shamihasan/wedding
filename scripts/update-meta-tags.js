#!/usr/bin/env node

/**
 * Script to update meta tags in index.html based on weddingConfig.js
 * Run this before deployment to ensure correct social media preview
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the wedding config
const configPath = path.join(__dirname, '../src/config/weddingConfig.js');
const indexPath = path.join(__dirname, '../index.html');

// Read and parse config (simplified extraction)
const configContent = fs.readFileSync(configPath, 'utf-8');

// Extract values using regex (simpler than dynamic import with const)
const extractValue = (key) => {
  const match = configContent.match(new RegExp(`${key}:\\s*["']([^"']+)["']`));
  return match ? match[1] : '';
};

const extractNestedValue = (parent, child) => {
  const regex = new RegExp(`${parent}:\\s*{[^}]*${child}:\\s*["']([^"']+)["']`, 's');
  const match = configContent.match(regex);
  return match ? match[1] : '';
};

// Extract config values
const hashtag = extractValue('hashtag');
const groomFirstName = extractNestedValue('groom', 'firstName');
const brideFirstName = extractNestedValue('bride', 'firstName');
const weddingDisplayDate = configContent.match(/wedding:\s*{[^}]*displayDate:\s*["']([^"']+)["']/s)?.[1] || '';
const venueName = extractNestedValue('venue', 'name');
const venueAddress = extractNestedValue('venue', 'address');
const websiteUrl = extractValue('url');
const socialPreviewImage = configContent.match(/socialPreview:\s*{[^}]*image:\s*["']([^"']+)["']/s)?.[1] || '';

// Generate meta content
const title = `${hashtag} | ${brideFirstName} & ${groomFirstName} Wedding`;
const description = `Join us in celebrating the wedding of ${brideFirstName} & ${groomFirstName} on ${weddingDisplayDate} at ${venueName}, ${venueAddress}`;
// Remove trailing slash from URL and leading slash from image path to avoid double slashes
const baseUrl = websiteUrl.replace(/\/$/, '');
const imagePath = socialPreviewImage.replace(/^\//, '');
const imageUrl = `${baseUrl}/${imagePath}`;

console.log('\n📝 Updating meta tags...');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`Title: ${title}`);
console.log(`Description: ${description}`);
console.log(`Image: ${imageUrl}`);
console.log(`URL: ${websiteUrl}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Read index.html
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Helper function to escape special characters in replacement string
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Update title
indexHtml = indexHtml.replace(
  /<title>.*?<\/title>/s,
  `<title>${title}</title>`
);

// Update meta description
indexHtml = indexHtml.replace(
  /<meta\s+name="description"\s+content="[^"]*"\s*\/>/g,
  `<meta name="description" content="${description}" />`
);

// Update Open Graph tags
indexHtml = indexHtml.replace(
  /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/g,
  `<meta property="og:url" content="${websiteUrl}" />`
);

indexHtml = indexHtml.replace(
  /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/g,
  `<meta property="og:title" content="${title}" />`
);

indexHtml = indexHtml.replace(
  /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/g,
  `<meta property="og:description" content="${description}" />`
);

indexHtml = indexHtml.replace(
  /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
  `<meta property="og:image" content="${imageUrl}" />`
);

// Update Twitter tags
indexHtml = indexHtml.replace(
  /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/>/g,
  `<meta property="twitter:url" content="${websiteUrl}" />`
);

indexHtml = indexHtml.replace(
  /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/>/g,
  `<meta property="twitter:title" content="${title}" />`
);

indexHtml = indexHtml.replace(
  /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/>/g,
  `<meta property="twitter:description" content="${description}" />`
);

indexHtml = indexHtml.replace(
  /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/>/g,
  `<meta property="twitter:image" content="${imageUrl}" />`
);

// Write updated index.html
fs.writeFileSync(indexPath, indexHtml, 'utf-8');

console.log('✅ Meta tags updated successfully!\n');
