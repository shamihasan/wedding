# Image Folder Structure Guide

## Overview

All wedding images are now organized by couple using **hashtag-based folders**. This allows you to keep multiple couples' images in the same project and easily switch between them by updating the config file.

## Standard Format: .jpg

**Important:** All images should use the `.jpg` format for consistency. Do NOT mix `.jpeg` and `.jpg` extensions.

## Folder Structure

```
/public/images/
  ├── nivifoundhershiv/           ← Current couple (Shivam & Nivedita)
  │   ├── couple/
  │   │   ├── bride.jpg
  │   │   └── groom.jpg
  │   ├── hero/
  │   │   ├── wedding-hero.jpg
  │   │   └── love-story-bg.jpg
  │   ├── timeline/
  │   │   ├── 1.jpg
  │   │   ├── 2.jpg
  │   │   ├── 3.jpg
  │   │   └── ... (as many as needed)
  │   └── gallery/
  │       ├── 1.jpg
  │       ├── 2.jpg
  │       ├── 3.jpg
  │       └── ... (add more as needed)
  │
  └── rakshudaviah/                ← Backup couple (Shubham & Rakshita)
      ├── couple/
      │   ├── bride.jpg
      │   └── groom.jpg
      ├── hero/
      │   ├── wedding-hero.jpg
      │   └── love-story-bg.jpg
      ├── timeline/
      │   └── ... (timeline images)
      └── gallery/
          └── ... (gallery images)
```

## Folder Naming Convention

**Rule:** Use lowercase hashtag name without the `#` symbol and special characters

Examples:
- `#NiviFoundHerShiv` → `nivifoundhershiv`
- `#RakShuDaViah` → `rakshudaviah`
- `#JohnLovesJane` → `johnlovesjane`
- `#Forever2024` → `forever2024`

## Image Requirements

### 1. Couple Photos (`/couple/`)
- **bride.jpg**: Portrait of the bride
- **groom.jpg**: Portrait of the groom
- **Size:** 800x1000px (4:5 ratio, portrait orientation)
- **Format:** .jpg

### 2. Hero Images (`/hero/`)
- **wedding-hero.jpg**: Main hero section background
  - Size: 1920x1080px (landscape)
  - Should be wide and visually appealing
- **love-story-bg.jpg**: Love story section background
  - Size: 1920x1080px (landscape)
  - Can be romantic or scenic
- **Format:** .jpg

### 3. Timeline Photos (`/timeline/`)
- **1.jpg, 2.jpg, 3.jpg, etc.**: Photos for each milestone
- **Size:** 600x800px (3:4 ratio, portrait)
- **Count:** Match the number of milestones in your config
- **Naming:** Use sequential numbers matching the milestone order
- **Format:** .jpg

### 4. Gallery Photos (`/gallery/`)
- **1.jpg, 2.jpg, 3.jpg, etc.**: Collection of couple photos
- **Size:** 1200x800px (landscape) or 800x1200px (portrait)
- **Count:** Add as many as you want (update config accordingly)
- **Format:** .jpg

## Setting Up Images for a New Couple

### Step 1: Create Folder Structure

```bash
# Navigate to images directory
cd public/images/

# Create new couple folder (use lowercase hashtag name)
mkdir yournewhashtag

# Create subfolders
mkdir yournewhashtag/couple
mkdir yournewhashtag/hero
mkdir yournewhashtag/timeline
mkdir yournewhashtag/gallery
```

### Step 2: Add Images

Place your optimized `.jpg` images in the appropriate folders:

```bash
# Example for #ForeverUs hashtag
public/images/foreverus/
  ├── couple/bride.jpg
  ├── couple/groom.jpg
  ├── hero/wedding-hero.jpg
  ├── hero/love-story-bg.jpg
  ├── timeline/1.jpg
  ├── timeline/2.jpg
  ├── gallery/1.jpg
  ├── gallery/2.jpg
  └── ...
```

### Step 3: Update Config

Edit `src/config/weddingConfig.js`:

```javascript
const weddingConfig = {
  hashtag: "#ForeverUs",
  hashtagFolder: "foreverus",  // ← Update this!

  couple: {
    bride: {
      image: "/images/foreverus/couple/bride.jpg"  // ← Uses hashtagFolder
    },
    groom: {
      image: "/images/foreverus/couple/groom.jpg"
    }
  },

  hero: {
    backgroundImage: "/images/foreverus/hero/wedding-hero.jpg"
  },

  // ... rest of config uses the same pattern
}
```

## Switching Between Couples

To switch from one couple to another:

### Option 1: Update Main Config (Quick)

1. Edit `src/config/weddingConfig.js`
2. Change `hashtagFolder` value
3. Update all image paths to use new folder
4. Update couple details, dates, etc.

### Option 2: Use Backup Config (Safer)

1. Copy backup config content
   - From: `src/config/weddingConfig.backup-rakshudaviah.js`
   - To: `src/config/weddingConfig.js`
2. Ensure images exist in the backup folder
3. Test the website

## Image Optimization Tips

### Before Uploading Images:

1. **Resize** to recommended dimensions
2. **Compress** using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)
3. **Target size:** Under 200KB per image
4. **Format:** Save as `.jpg` with 80-85% quality

### Tools for Batch Conversion

If you have `.jpeg` files and need to convert to `.jpg`:

```bash
# On Mac/Linux
cd public/images/yourfolder/gallery/
for file in *.jpeg; do mv "$file" "${file%.jpeg}.jpg"; done

# Update file extensions in all subfolders
find . -name "*.jpeg" -exec bash -c 'mv "$0" "${0%.jpeg}.jpg"' {} \;
```

## Backup Strategy

Keep your image folders organized:

```
/public/images/
  ├── nivifoundhershiv/    ← Active couple
  ├── rakshudaviah/        ← Backup couple 1
  ├── johnandjane/         ← Backup couple 2
  └── ... (add more as needed)
```

Benefits:
- Easy to switch between couples
- No need to delete/replace images
- Quick rollback if something goes wrong
- Can serve multiple weddings from same codebase

## Config Files Mapping

| Config File | Hashtag Folder | Couple |
|-------------|----------------|--------|
| `weddingConfig.js` | `nivifoundhershiv` | Shivam & Nivedita |
| `weddingConfig.backup-rakshudaviah.js` | `rakshudaviah` | Shubham & Rakshita |

## Troubleshooting

### Images Not Loading?

1. **Check folder name matches config:**
   - Config: `hashtagFolder: "nivifoundhershiv"`
   - Folder: `public/images/nivifoundhershiv/`

2. **Verify file extensions:**
   - Use `.jpg` not `.jpeg`
   - Check case sensitivity (use lowercase)

3. **Ensure files exist:**
   ```bash
   ls -R public/images/nivifoundhershiv/
   ```

4. **Clear browser cache** and reload

### Mixed .jpeg and .jpg Extensions?

Convert all to `.jpg`:

```bash
cd public/images/
# This will rename all .jpeg to .jpg recursively
find . -name "*.jpeg" -exec bash -c 'mv "$0" "${0%.jpeg}.jpg"' {} \;
```

Then update your config to use `.jpg` extensions.

## Quick Reference

### Required Images Per Couple:

- ✅ 2 couple photos (bride + groom)
- ✅ 2 hero backgrounds
- ✅ N timeline photos (match milestone count in config)
- ✅ N gallery photos (as many as you want)

### Standard Naming:

- Couple: `bride.jpg`, `groom.jpg`
- Hero: `wedding-hero.jpg`, `love-story-bg.jpg`
- Timeline: `1.jpg`, `2.jpg`, `3.jpg`, ...
- Gallery: `1.jpg`, `2.jpg`, `3.jpg`, ...

### Path Pattern:

```
/images/{hashtagFolder}/{category}/{filename}.jpg
```

---

**Pro Tip:** Create a template folder with placeholder images, then duplicate and customize for each new couple!
