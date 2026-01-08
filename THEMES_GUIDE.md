# Wedding Website Themes Guide

## 🎨 One Config, Multiple Themes!

Change the entire look and feel of your wedding website by changing **ONE SINGLE LINE** in your config file!

## How to Change Theme

### Step 1: Open Config File
```bash
src/config/weddingConfig.js
```

### Step 2: Change Theme Value
Find this line near the top:
```javascript
theme: "royal", // Change this to switch themes instantly!
```

### Step 3: Choose Your Theme
Replace `"royal"` with any theme name from below and save!

## Available Themes

### 1. 🏛️ Classic Elegance (Default)
```javascript
theme: "classic"
```
- **Colors:** Gold, Brown, Rose
- **Style:** Traditional, timeless
- **Best for:** Classic, elegant weddings
- **Fonts:** Playfair Display, Great Vibes, Lato

---

### 2. 👑 Royal Grandeur **← WOW FACTOR!**
```javascript
theme: "royal"
```
- **Colors:** Royal Purple, Rich Gold, Deep Pink
- **Style:** Luxurious, majestic
- **Best for:** Grand, lavish celebrations
- **Fonts:** Cormorant Garamond, Tangerine, Poppins
- **⭐ Recommended for maximum impact!**

---

### 3. 💕 Romantic Blush
```javascript
theme: "romantic"
```
- **Colors:** Hot Pink, Berry, Soft Gold
- **Style:** Romantic, dreamy
- **Best for:** Intimate, romantic weddings
- **Fonts:** Crimson Text, Dancing Script, Quicksand

---

### 4. 🌆 Modern Chic
```javascript
theme: "modern"
```
- **Colors:** Deep Navy, Dark Blue, Coral Red
- **Style:** Contemporary, minimalist
- **Best for:** Modern, urban weddings
- **Fonts:** Montserrat, Allura, Inter

---

### 5. 🌿 Emerald Garden **← WOW FACTOR!**
```javascript
theme: "emerald"
```
- **Colors:** Forest Green, Emerald, Warm Gold
- **Style:** Natural, elegant
- **Best for:** Garden, outdoor weddings
- **Fonts:** Lora, Alex Brush, Open Sans
- **⭐ Perfect for nature lovers!**

---

### 6. 🌅 Sunset Glamour **← ULTRA WOW!**
```javascript
theme: "sunset"
```
- **Colors:** Magenta, Purple, Golden Yellow
- **Style:** Vibrant, bold
- **Best for:** Evening, glamorous events
- **Fonts:** Libre Baskerville, Satisfy, Nunito
- **⭐⭐ Most vibrant and eye-catching!**

---

### 7. 🍷 Burgundy Luxe
```javascript
theme: "burgundy"
```
- **Colors:** Burgundy, Dark Gold, Bright Gold
- **Style:** Opulent, sophisticated
- **Best for:** Fall/winter, elegant affairs
- **Fonts:** Cinzel, Parisienne, Raleway

---

## Quick Theme Comparison

| Theme | Vibe | Colors | Impact Level | Best Season |
|-------|------|--------|--------------|-------------|
| **Classic** | Traditional | Gold & Rose | ⭐⭐⭐ | Any |
| **Royal** 👑 | Luxurious | Purple & Gold | ⭐⭐⭐⭐⭐ | Any |
| **Romantic** | Dreamy | Pink & Berry | ⭐⭐⭐⭐ | Spring/Summer |
| **Modern** | Contemporary | Navy & Coral | ⭐⭐⭐ | Any |
| **Emerald** 🌿 | Natural | Green & Gold | ⭐⭐⭐⭐ | Spring/Summer |
| **Sunset** 🌅 | Vibrant | Magenta & Yellow | ⭐⭐⭐⭐⭐ | Summer/Fall |
| **Burgundy** | Sophisticated | Burgundy & Gold | ⭐⭐⭐⭐ | Fall/Winter |

## Testing Themes

### Try Before You Decide!

1. **Change theme in config**
   ```javascript
   theme: "sunset"
   ```

2. **Save and refresh browser**
   ```bash
   # Dev server auto-reloads
   npm run dev
   ```

3. **See instant change!**
   - All colors update
   - All fonts change
   - Entire look transforms

### Try Multiple Themes

It takes just **5 seconds** to switch themes! Try them all:

```javascript
// Try Royal
theme: "royal"

// Try Sunset
theme: "sunset"

// Try Emerald
theme: "emerald"
```

Each time you save, the website updates instantly!

## What Changes with Themes?

### Colors Updated:
- ✅ Primary brand color
- ✅ Secondary colors
- ✅ Accent highlights
- ✅ Text colors
- ✅ Background shades

### Fonts Updated:
- ✅ Headings font
- ✅ Script/cursive font
- ✅ Body text font

### Consistent Across:
- ✅ Hero section
- ✅ Navigation
- ✅ Timeline
- ✅ Gallery
- ✅ Invitation section
- ✅ All buttons and CTAs

## Pro Tips

### 1. Match Your Event
- **Spring wedding?** → Romantic or Emerald
- **Fall wedding?** → Burgundy or Classic
- **Grand celebration?** → Royal or Sunset
- **Intimate gathering?** → Romantic or Modern

### 2. Match Your Venue
- **Palace/Hotel?** → Royal or Burgundy
- **Garden/Outdoor?** → Emerald or Romantic
- **Modern Space?** → Modern or Sunset
- **Traditional Hall?** → Classic or Royal

### 3. Match Your Personality
- **Bold & Vibrant?** → Sunset or Royal
- **Elegant & Timeless?** → Classic or Burgundy
- **Natural & Organic?** → Emerald
- **Romantic & Dreamy?** → Romantic

## Advanced: Multiple Configs with Different Themes

You can have different themes for different couples!

### Example:

**Config 1: NiviFoundHerShiv**
```javascript
theme: "royal"  // Purple & Gold
```

**Config 2: RakShuDaViah**
```javascript
theme: "emerald"  // Green & Gold
```

Each couple gets their own unique look!

## Troubleshooting

### Theme not changing?
1. ✅ Check spelling: `theme: "royal"` (lowercase)
2. ✅ Save the config file
3. ✅ Refresh browser (Ctrl+R or Cmd+R)
4. ✅ Check browser console for errors

### Colors look off?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Want custom colors?
Edit `src/themes/themes.js` to create your own theme!

## Examples in Action

### Before (Classic):
```javascript
theme: "classic"
```
Gold, traditional, elegant ✨

### After (Royal):
```javascript
theme: "royal"
```
Purple, luxurious, WOW! 👑💜

### After (Sunset):
```javascript
theme: "sunset"
```
Vibrant, bold, unforgettable! 🌅✨

## Quick Start

**Want maximum impact?** Start with:
```javascript
theme: "royal"  // or "sunset"
```

**Want elegant simplicity?** Start with:
```javascript
theme: "classic"  // or "burgundy"
```

**Want natural beauty?** Start with:
```javascript
theme: "emerald"  // or "romantic"
```

---

## That's It!

**One line = Completely different website** 🎨✨

Try them all and pick your favorite! 💕

---

**Pro Tip:** Take screenshots of each theme to compare side-by-side before making your final decision!
