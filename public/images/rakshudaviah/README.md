# Rakshudaviah - Template Folder

This folder is set up as a **template/placeholder** for future use.

## Current Status

- **Status:** Empty (ready for images)
- **Purpose:** Reserved for Shubham & Rakshita's wedding (if needed)
- **Hashtag:** #RakShuDaViah

## Folder Structure

```
rakshudaviah/
├── couple/       ← Add bride.jpg and groom.jpg here
├── hero/         ← Add wedding-hero.jpg and love-story-bg.jpg
├── timeline/     ← Add 1.jpg, 2.jpg, 3.jpg, etc.
└── gallery/      ← Add 1.jpg, 2.jpg, 3.jpg, etc.
```

## To Activate This Couple

1. **Add images** to all subfolders (use .jpg format)
2. **Copy backup config** to main config:
   ```bash
   cp src/config/weddingConfig.backup-rakshudaviah.js src/config/weddingConfig.js
   ```
3. **Update config** with actual couple details if needed
4. **Restart dev server**

## Image Requirements

All images should be in `.jpg` format:
- Couple: bride.jpg, groom.jpg (800x1000px portrait)
- Hero: wedding-hero.jpg, love-story-bg.jpg (1920x1080px landscape)
- Timeline: 1.jpg, 2.jpg, etc. (600x800px)
- Gallery: 1.jpg, 2.jpg, etc. (1200x800px)

See `IMAGE_STRUCTURE.md` in project root for complete details.

## Current Active Couple

The active couple is: **Shivam & Nivedita (#NiviFoundHerShiv)**
- Images: `/public/images/nivifoundhershiv/`
- Config: `src/config/weddingConfig.js`
