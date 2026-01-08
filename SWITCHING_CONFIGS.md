# Switching Between Wedding Configs

This guide explains how to easily switch between different couples' configurations.

## Available Configs

Your project now has **two complete backup configs** ready to use:

### 1. NiviFoundHerShiv (Has Images ✅)
- **File:** `src/config/weddingConfig.backup-nivifoundhershiv.js`
- **Couple:** Shivam Jaiswal & Nivedita Jaiswal
- **Hashtag:** #NiviFoundHerShiv
- **Images:** `/public/images/nivifoundhershiv/` (20 files ready)
- **Wedding Date:** February 21, 2026
- **Venue:** Rajwada Prakash Vatika, Gosaiganj, Lucknow

### 2. RakShuDaViah (Template - No Images ⚠️)
- **File:** `src/config/weddingConfig.backup-rakshudaviah.js`
- **Couple:** Shubham & Rakshita
- **Hashtag:** #RakShuDaViah
- **Images:** `/public/images/rakshudaviah/` (empty folders, awaiting images)
- **Wedding Date:** February 11, 2026
- **Venue:** The Royal Hall, Chevron, Noida

## How to Switch Configs

Both backup configs now have **identical export names**, so switching is seamless!

### Method 1: Copy & Replace (Recommended)

#### Switch to NiviFoundHerShiv:
```bash
cp src/config/weddingConfig.backup-nivifoundhershiv.js src/config/weddingConfig.js
```

#### Switch to RakShuDaViah:
```bash
cp src/config/weddingConfig.backup-rakshudaviah.js src/config/weddingConfig.js
```

**Then restart dev server:**
```bash
npm run dev
```

### Method 2: Manual Copy-Paste

1. Open the backup config file you want to use
2. **Copy ALL content** (including exports at the bottom)
3. Open `src/config/weddingConfig.js`
4. **Replace ALL content** with the copied content
5. Save and restart dev server

## Important Notes

### Before Switching:

✅ **Ensure images exist** in the target folder
- NiviFoundHerShiv: Images already exist ✅
- RakShuDaViah: Need to add images first ⚠️

✅ **Update index.html** meta tags if needed
- Change title to include hashtag
- Update descriptions with couple names
- Update dates and venue info

### After Switching:

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Test the website:**
   - [ ] All images load correctly
   - [ ] Names display properly
   - [ ] Dates are accurate
   - [ ] Hashtag appears throughout
   - [ ] Countdown timer works
   - [ ] Location and maps link work

3. **Clear browser cache** if needed

## Export Names (Now Standardized!)

All backup configs use the same export names:
- `weddingConfig` (default export)
- `processTimeline`
- `getWeddingDateTime`
- `getCoupleNames`

This means **no import errors** when switching! 🎉

## Adding Images for RakShuDaViah

If you want to use the RakShuDaViah config, first add images:

```
/public/images/rakshudaviah/
├── couple/
│   ├── bride.jpg     ← Add Rakshita's photo
│   └── groom.jpg     ← Add Shubham's photo
├── hero/
│   ├── wedding-hero.jpg     ← Hero background
│   └── love-story-bg.jpg    ← Story background
├── timeline/
│   └── 1.jpg through 6.jpg  ← Timeline photos
└── gallery/
    └── 1.jpg through 7.jpg  ← Gallery photos
```

**All images must be in `.jpg` format!**

See `IMAGE_STRUCTURE.md` for image requirements.

## Quick Reference

| Action | Command |
|--------|---------|
| Switch to NiviFoundHerShiv | `cp src/config/weddingConfig.backup-nivifoundhershiv.js src/config/weddingConfig.js` |
| Switch to RakShuDaViah | `cp src/config/weddingConfig.backup-rakshudaviah.js src/config/weddingConfig.js` |
| Check current config | `head -10 src/config/weddingConfig.js` |
| Restart dev server | `npm run dev` |

## Creating a New Couple Config

1. **Copy an existing backup as template:**
   ```bash
   cp src/config/weddingConfig.backup-nivifoundhershiv.js src/config/weddingConfig.backup-yournewhashtag.js
   ```

2. **Create image folder:**
   ```bash
   mkdir -p public/images/yournewhashtag/{couple,hero,timeline,gallery}
   ```

3. **Edit the new backup config:**
   - Update hashtag and hashtagFolder
   - Update couple names and bios
   - Update dates and venue
   - Update all image paths to use your new folder
   - Customize timeline stories

4. **Add images** to the new folder

5. **Copy to main config when ready:**
   ```bash
   cp src/config/weddingConfig.backup-yournewhashtag.js src/config/weddingConfig.js
   ```

## Troubleshooting

### Images not loading after switch?
- Check that image folder name matches `hashtagFolder` in config
- Verify images exist in the folder
- Clear browser cache

### Import errors after switch?
- Make sure you copied the **entire file** including exports
- Verify export names are: `processTimeline`, `getWeddingDateTime`, `getCoupleNames`
- Restart dev server

### Countdown showing wrong date?
- Check `dates.wedding.date` format: `YYYY-MM-DD`
- Check `dates.wedding.time` format: `HH:MM:SS`
- Clear browser cache and reload

## Best Practices

1. **Always keep backups** of working configs
2. **Test after every switch** to ensure everything works
3. **Document changes** if you customize configs
4. **Name backup files clearly** with hashtag or couple names
5. **Add images before switching** to avoid broken images

---

**Pro Tip:** Keep all backup configs updated when you make improvements (like adding new features or fixing bugs). This way, all couples benefit from updates!
