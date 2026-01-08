# Wedding Website

A beautiful, elegant wedding website built with React and Vite, featuring a story section with photo gallery and QR code generation for wedding invitations.

## Features

- **Elegant Design**: Modern, romantic design with smooth animations
- **Our Story Section**: Timeline-based story with photo gallery
- **Photo Gallery**: Beautiful grid layout with lightbox viewer
- **QR Code Generator**: Generate and download QR codes for wedding invitations
- **Fully Responsive**: Works perfectly on all devices
- **Easy to Deploy**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Customization

**NEW: Config-Based System + 7 Stunning Themes!** 🎉🎨

All wedding details are now centralized in a single configuration file. Simply edit one file to customize the entire website! Plus, switch between 7 beautiful themes with just one line of code!

### Quick Start Customization

**Step 1:** Edit the configuration file:
```
src/config/weddingConfig.js
```

**Step 2:** Update these key details:
- **Theme** - Choose from 7 stunning themes (just one line!)
- Couple names and bios
- Wedding hashtag
- Event dates (engagement, wedding)
- Venue location
- Love story timeline
- Images folder name

### Quick Theme Change
```javascript
theme: "royal"  // Options: classic, royal, romantic, modern, emerald, sunset, burgundy
```
Change this one line to instantly transform your entire website! 🎨

**Step 3:** Organize images by couple:
```
/public/images/{hashtagFolder}/
  ├── couple/
  ├── hero/
  ├── timeline/
  └── gallery/
```

**Step 4:** Update meta tags for social sharing:
```bash
npm run update-meta
```
This automatically updates all meta tags in `index.html` based on your config!

### For Multiple Couples

The new structure supports multiple couples:
- Each couple gets their own image folder
- Switch between couples by changing the config
- Backup configs available for easy switching
- Example: `weddingConfig.backup-rakshudaviah.js`

### Change Color Theme

Edit `/src/index.css` to modify the color scheme:
```css
:root {
  --primary-color: #d4af37;
  --secondary-color: #8b7355;
  --text-dark: #2c2c2c;
  --text-light: #666;
  --background-light: #faf9f7;
  --white: #ffffff;
  --accent-rose: #e8b4b8;
}
```

## Deploying to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy from GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect it's a Vite project and configure it
6. Click "Deploy"

### Environment Setup

No environment variables are required for basic functionality. The QR code will automatically use your deployed URL.

## Building for Production

```bash
npm run build
```

This command will:
1. **Automatically update meta tags** from your config (title, description, social media preview)
2. **Build the production bundle** with Vite
3. Output files to the `dist` directory

### Manual Meta Tag Update

If you only want to update meta tags without building:
```bash
npm run update-meta
```

### Build Without Meta Update

If you want to skip meta tag update:
```bash
npm run build:only
```

## Technology Stack

- **React 19**: Latest React version
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **qrcode.react**: QR code generation
- **CSS3**: Custom styling with animations

## Features Detail

### QR Code for Wedding Cards

1. Navigate to the QR Code page
2. The QR code is automatically generated with your website URL
3. Click "Download QR Code" to save as high-resolution PNG
4. Add the QR code image to your wedding invitation design
5. Guests can scan it to instantly visit your website!

### Photo Gallery

- Click any photo to view in full-screen lightbox
- Close lightbox by clicking outside the image or the X button
- All images are optimized for web performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ for your special day!
