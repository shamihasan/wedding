# Wedding Website Setup Summary

## 🎉 What's New

Your wedding website now has a **config-based, multi-couple system** that makes it:
- ✅ Easy to customize for any couple
- ✅ Organized with hashtag-based image folders
- ✅ Standardized to `.jpg` format only
- ✅ Reusable with backup configs
- ✅ Well-documented with comprehensive guides

## 📁 File Structure

```
wedding/
├── src/
│   ├── config/
│   │   ├── weddingConfig.js                    ← MAIN CONFIG (edit this!)
│   │   └── weddingConfig.backup-rakshudaviah.js ← Backup config
│   ├── pages/
│   │   └── Home.jsx                            ← Uses config (no need to edit)
│   └── components/
│       └── Countdown.jsx                       ← Uses config (no need to edit)
│
├── public/
│   └── images/
│       ├── nivifoundhershiv/                   ← Current couple's images
│       │   ├── couple/
│       │   ├── hero/
│       │   ├── timeline/
│       │   └── gallery/
│       └── rakshudaviah/                       ← Backup couple's images
│           └── ... (same structure)
│
├── CONFIG_GUIDE.md                             ← How to customize config
├── IMAGE_STRUCTURE.md                          ← How to organize images
├── SETUP_SUMMARY.md                            ← This file
└── README.md                                   ← Main README
```

## 🚀 Quick Setup for New Couple

### 1. Create Image Folders (5 minutes)

```bash
cd public/images
mkdir yournewhashtag
cd yournewhashtag
mkdir couple hero timeline gallery
```

### 2. Add Images (10 minutes)

Upload your `.jpg` images:
- `couple/bride.jpg` + `couple/groom.jpg`
- `hero/wedding-hero.jpg` + `hero/love-story-bg.jpg`
- `timeline/1.jpg`, `timeline/2.jpg`, etc.
- `gallery/1.jpg`, `gallery/2.jpg`, etc.

**Remember:** Use `.jpg` format only!

### 3. Update Config (15 minutes)

Edit `src/config/weddingConfig.js`:

```javascript
const weddingConfig = {
  hashtag: "#YourNewHashtag",
  hashtagFolder: "yournewhashtag",  // ← Must match folder name!

  couple: {
    bride: {
      fullName: "Jane Doe",
      firstName: "Jane",
      nickname: "JJ",
      bio: "...",
      image: "/images/yournewhashtag/couple/bride.jpg"
    },
    groom: {
      fullName: "John Smith",
      firstName: "John",
      nickname: "JS",
      bio: "...",
      image: "/images/yournewhashtag/couple/groom.jpg"
    }
  },

  dates: {
    engagement: {
      date: "2025-06-15",
      displayDate: "15th June 2025",
      hasHappened: true
    },
    wedding: {
      date: "2026-08-20",
      displayDate: "Saturday, August 20, 2026",
      shortDate: "20.08.2026",
      time: "18:00:00",
      displayTime: "Evening Ceremony"
    }
  },

  venue: {
    name: "The Grand Ballroom",
    address: "123 Wedding St, City",
    state: "State",
    country: "Country",
    fullAddress: "The Grand Ballroom, 123 Wedding St, City",
    mapsUrl: "https://maps.google.com/..."
  },

  // ... update timeline, gallery, etc.
}
```

### 4. Update index.html (2 minutes)

Edit meta tags in `index.html`:
- Change title to include your hashtag
- Update descriptions with names and dates
- Update URL if deploying to new domain

### 5. Test (5 minutes)

```bash
npm run dev
```

Visit `http://localhost:5173` and verify:
- [ ] Names display correctly
- [ ] Dates are accurate
- [ ] All images load
- [ ] Hashtag appears throughout
- [ ] Location and maps work

## 📚 Documentation Guide

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **README.md** | Overview & getting started | First time setup |
| **CONFIG_GUIDE.md** | Detailed config walkthrough | Customizing website |
| **IMAGE_STRUCTURE.md** | Image organization | Setting up images |
| **SETUP_SUMMARY.md** | Quick reference | Quick lookups |

## 🔄 Switching Between Couples

### Method 1: Update Main Config (Quick)

1. Open `src/config/weddingConfig.js`
2. Change `hashtagFolder` to point to different couple
3. Update all couple details
4. Save and restart dev server

### Method 2: Use Backup Config (Safe)

1. Copy content from backup config:
   ```bash
   cp src/config/weddingConfig.backup-rakshudaviah.js src/config/weddingConfig.js
   ```
2. Ensure images exist in that folder
3. Restart dev server

## 📸 Image Format Standard

**IMPORTANT:** Use `.jpg` only, not `.jpeg`

### Current Setup:
- ✅ Config files use `.jpg`
- ⚠️ Some existing images are `.jpeg`

### To Convert (if needed):

```bash
# Navigate to your image folder
cd public/images/nivifoundhershiv

# Convert all .jpeg to .jpg recursively
find . -name "*.jpeg" -exec bash -c 'mv "$0" "${0%.jpeg}.jpg"' {} \;
```

## 🎯 Current Configuration

### Active Couple:
- **Hashtag:** #NiviFoundHerShiv
- **Folder:** `nivifoundhershiv`
- **Couple:** Shivam Jaiswal & Nivedita Jaiswal
- **Wedding Date:** February 21, 2026
- **Venue:** Rajwada Prakash Vatika, Gosaiganj, Lucknow

### Backup Couple:
- **Hashtag:** #RakShuDaViah
- **Folder:** `rakshudaviah`
- **Couple:** Shubham & Rakshita
- **Wedding Date:** February 11, 2026
- **Venue:** The Royal Hall, Chevron, Noida

## ⚡ Pro Tips

1. **Image Optimization:**
   - Compress images before uploading (target < 200KB each)
   - Use tools like TinyPNG or Squoosh
   - Maintain aspect ratios from guidelines

2. **Hashtag Naming:**
   - Keep it memorable and unique
   - Easy to type and pronounce
   - Works well on social media

3. **Testing Checklist:**
   - [ ] View on mobile device
   - [ ] Test countdown accuracy
   - [ ] Verify all links work
   - [ ] Check image loading speed
   - [ ] Test social media sharing

4. **Deployment:**
   - Deploy to Vercel for free hosting
   - Update meta tags with production URL
   - Test QR code generation after deployment

## 🐛 Common Issues

### Images not loading?
- Check `hashtagFolder` matches actual folder name
- Verify file extensions are `.jpg` not `.jpeg`
- Ensure files exist in correct location

### Countdown showing wrong time?
- Verify date format: `YYYY-MM-DD`
- Check time format: `HH:MM:SS` (24-hour)
- Combine as: `2026-02-21T20:00:00`

### Hashtag not updating everywhere?
- Search entire config file for old hashtag
- Check index.html meta tags
- Clear browser cache and reload

### Config changes not reflecting?
- Restart dev server (`npm run dev`)
- Clear browser cache
- Check for JavaScript errors in console

## 📞 Need Help?

1. **Check documentation first:**
   - CONFIG_GUIDE.md for config issues
   - IMAGE_STRUCTURE.md for image problems
   - README.md for general setup

2. **Debug checklist:**
   - [ ] Config file has no syntax errors
   - [ ] Image paths match folder structure
   - [ ] All required images exist
   - [ ] File extensions are consistent (.jpg)
   - [ ] Dev server is running

3. **Common fixes:**
   ```bash
   # Restart dev server
   npm run dev

   # Rebuild
   npm run build

   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## ✨ Next Steps

1. **Add your images** to the appropriate folder
2. **Customize the config** with your details
3. **Update index.html** meta tags
4. **Test locally** to ensure everything works
5. **Deploy to Vercel** for production
6. **Share your hashtag** and celebrate! 🎊

---

**Made with ❤️ for every couple's special day!**

*Last Updated: 2026-01-08*
