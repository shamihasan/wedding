# Wedding Website Configuration Guide

This guide explains how to customize the wedding website for any couple by simply editing the configuration file.

## Quick Start

All wedding details are centralized in one file:
```
src/config/weddingConfig.js
```

Simply edit this file to customize the entire website for a different couple!

## Important: Image Organization

**All images are now organized by hashtag folders!**

Each couple gets their own folder under `/public/images/{hashtagFolder}/`. See `IMAGE_STRUCTURE.md` for detailed setup instructions.

**Standard Format:** Use `.jpg` only (not `.jpeg`) for consistency.

## Configuration Structure

### 1. Couple Details

```javascript
couple: {
  bride: {
    fullName: "Nivedita Jaiswal",      // Full name displayed on website
    firstName: "Nivedita",               // First name used in timeline stories
    nickname: "Nivi",                    // Used in hashtag
    bio: "...",                          // Biography shown in "Meet the Couple"
    image: "/images/couple/bride.jpg"    // Path to bride's photo
  },
  groom: {
    fullName: "Shivam Jaiswal",
    firstName: "Shivam",
    nickname: "Shiv",
    bio: "...",
    image: "/images/couple/groom.jpg"
  }
}
```

### 2. Hashtag & Image Folder

```javascript
hashtag: "#NiviFoundHerShiv",           // Your custom wedding hashtag
hashtagFolder: "nivifoundhershiv"       // Folder name (lowercase, no special chars)
```

**Important:** The `hashtagFolder` must match your actual image folder name in `/public/images/`

**Hashtag Ideas:**
- `#[Bride]Found[Groom]` - e.g., #NiviFoundHerShiv
- `#[Name1][Name2]KiKahani` - Hindi for "Their Story"
- `#[Name1]Weds[Name2]` - Classic style
- `#Forever[Name1][Name2]` - Romantic style

### 3. Event Dates

```javascript
dates: {
  engagement: {
    date: "2025-11-23",                    // ISO format (YYYY-MM-DD)
    displayDate: "23rd November 2025",     // How it appears on website
    hasHappened: true                      // Set to true if already occurred
  },
  wedding: {
    date: "2026-02-21",                    // ISO format
    displayDate: "Friday, February 21, 2026",
    shortDate: "21.02.2026",               // Format for banners
    time: "20:00:00",                      // 24-hour format (HH:MM:SS)
    displayTime: "Dinner & Celebration"    // Human-readable time description
  }
}
```

### 4. Venue Details

```javascript
venue: {
  name: "Rajwada Prakash Vatika",
  address: "Gosaiganj, Lucknow",
  state: "Uttar Pradesh",
  country: "India",
  fullAddress: "Rajwada Prakash Vatika, Gosaiganj, Lucknow",
  mapsUrl: "https://maps.app.goo.gl/..."  // Google Maps link
}
```

**To get Google Maps URL:**
1. Go to Google Maps
2. Search for your venue
3. Click "Share" → "Copy link"
4. Paste the link here

### 5. Website Metadata

```javascript
website: {
  url: "https://your-website.vercel.app/",
  title: (hashtag, bride, groom) => `${hashtag} | ${bride} & ${groom} Wedding`,
  description: (bride, groom, date, venue) =>
    `Join us in celebrating the wedding of ${bride} & ${groom}...`
}
```

These are auto-generated but can be customized if needed.

### 6. Hero Section

```javascript
hero: {
  subtitle: "Together Forever",           // Text above couple names
  backgroundImage: "/images/hero/wedding-hero.jpg"  // Main hero image
}
```

### 7. Story Section

```javascript
story: {
  quote: "In all the world, there is no heart for me like yours...",
  quoteAuthor: "Maya Angelou",
  backgroundImage: "/images/hero/love-story-bg.jpg",
  largeQuote: "Love is not about how many days..."
}
```

Feel free to change quotes to match your story!

### 8. Timeline/Milestones

This is where you customize your love story:

```javascript
timeline: [
  {
    id: 1,
    title: "Our First Meet",
    date: "2025",
    description: "Your story here...",
    image: "/images/timeline/1.jpg",
    emoji: "🙏"
  },
  // Add more milestones...
]
```

**Dynamic Placeholders:**
You can use `[GROOM_FIRSTNAME]` and `[BRIDE_FIRSTNAME]` in descriptions, and they'll be automatically replaced with the actual names!

Example:
```javascript
description: "[GROOM_FIRSTNAME] carefully planned the most important moment of his life to ask [BRIDE_FIRSTNAME] to be his forever."
```

### 9. Photo Gallery

```javascript
gallery: [
  { url: "/images/gallery/1.jpeg", caption: "Our Moments" },
  { url: "/images/gallery/2.jpeg", caption: "Together" },
  // Add more photos...
]
```

### 10. Invitation

```javascript
invitation: {
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  thumbnailImage: "/images/gallery/6.jpeg",
  driveUrl: "https://drive.google.com/file/d/..."
}
```

### 11. Social Media Preview

```javascript
socialPreview: {
  image: "/images/gallery/3.jpeg",  // Image shown when shared on social media
  width: "1200",
  height: "630"
}
```

## Step-by-Step Customization

### For a New Couple:

1. **Create Image Folder Structure**
   - Create folder: `/public/images/{newhashtagfolder}/`
   - Add subfolders: `couple/`, `hero/`, `timeline/`, `gallery/`
   - See `IMAGE_STRUCTURE.md` for details

2. **Add Images** (all in `.jpg` format)
   - Upload optimized images to the new folder
   - Follow naming conventions (bride.jpg, groom.jpg, 1.jpg, etc.)

3. **Update Config File** (`src/config/weddingConfig.js`)
   - Update `hashtagFolder` value
   - Update `hashtag` text
   - Update couple details (names, nicknames, bios)
   - Set event dates (engagement, wedding)
   - Add venue information
   - Customize timeline stories
   - Update invitation URLs

4. **Update `index.html`** meta tags (see below)

5. **Test Everything!**

## Updating index.html

You'll need to manually update these in `index.html`:

```html
<title>#YourHashtag | Names Wedding</title>
<meta name="description" content="Join us in celebrating..." />
<meta property="og:title" content="#YourHashtag | Names Wedding" />
<meta property="og:description" content="..." />
<meta property="og:url" content="your-deployed-url" />
```

## Image Requirements

**⚠️ IMPORTANT:** See `IMAGE_STRUCTURE.md` for complete details on folder organization!

### Image Format
- **Use `.jpg` format only** (not `.jpeg`)
- Keep all extensions consistent

### Folder Structure
```
/public/images/
  └── {hashtagFolder}/     ← Your couple's folder
      ├── couple/
      ├── hero/
      ├── timeline/
      └── gallery/
```

### Recommended Image Sizes:
- **Hero Background:** 1920x1080px (landscape)
- **Couple Photos:** 800x1000px (portrait)
- **Timeline Photos:** 600x800px
- **Gallery Photos:** 1200x800px
- **Social Preview:** 1200x630px

### Image Locations (Organized by Couple):
```
/public/images/
  ├── nivifoundhershiv/          ← Current couple
  │   ├── hero/
  │   │   ├── wedding-hero.jpg
  │   │   └── love-story-bg.jpg
  │   ├── couple/
  │   │   ├── bride.jpg
  │   │   └── groom.jpg
  │   ├── timeline/
  │   │   ├── 1.jpg (First Meet)
  │   │   ├── 2.jpg (Roka)
  │   │   ├── 3.jpg (Engagement)
  │   │   └── ... (more milestones)
  │   └── gallery/
  │       ├── 1.jpg
  │       ├── 2.jpg
  │       └── ... (add as many as you want)
  │
  └── rakshudaviah/              ← Backup couple
      └── ... (same structure)
```

## Tips & Best Practices

1. **Keep It Personal:** Customize the timeline descriptions to tell YOUR unique story
2. **Test Dates:** Make sure countdown timer displays correctly
3. **Check Links:** Verify Google Maps and Drive links work
4. **Optimize Images:** Compress images before uploading to improve load times
5. **Preview Social Sharing:** Test how your site looks when shared on Facebook/Twitter
6. **Backup:** Keep the original config file as a template for reference

## Testing Your Changes

After updating the config:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Check these sections:
   - [ ] Hero section shows correct names and date
   - [ ] Couple section displays both bios
   - [ ] Wedding details show correct venue and date
   - [ ] Timeline stories make sense
   - [ ] Countdown timer is accurate
   - [ ] All images load properly
   - [ ] Hashtag appears everywhere

3. Build and deploy:
   ```bash
   npm run build
   ```

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all image paths exist
3. Ensure dates are in correct ISO format (YYYY-MM-DD)
4. Make sure there are no syntax errors in the config file

---

**Happy Wedding Website Building! 💍✨**
