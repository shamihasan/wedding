// Wedding Website Themes
// Multiple visual themes to choose from - controlled via weddingConfig.js

export const themes = {
  // Classic Gold Theme (Current)
  classic: {
    name: "Classic Elegance",
    colors: {
      primary: "#d4af37",        // Gold
      secondary: "#8b7355",      // Brown
      accent: "#e8b4b8",         // Rose
      textDark: "#2c2c2c",
      textLight: "#666",
      background: "#faf9f7",     // Light cream
      white: "#ffffff"
    },
    fonts: {
      primary: "'Playfair Display', serif",
      script: "'Great Vibes', cursive",
      body: "'Lato', sans-serif"
    },
    style: "traditional"
  },

  // Royal Purple Theme - WOW Factor!
  royal: {
    name: "Royal Grandeur",
    colors: {
      primary: "#6B1FA3",        // Royal Purple
      secondary: "#C9A961",      // Rich Gold
      accent: "#E91E63",         // Deep Pink
      textDark: "#1a0033",
      textLight: "#555",
      background: "#FFF8F3",     // Warm white
      white: "#ffffff"
    },
    fonts: {
      primary: "'Cormorant Garamond', serif",
      script: "'Tangerine', cursive",
      body: "'Poppins', sans-serif"
    },
    style: "luxurious"
  },

  // Romantic Rose Theme
  romantic: {
    name: "Romantic Blush",
    colors: {
      primary: "#FF6B9D",        // Hot Pink
      secondary: "#C44569",      // Berry
      accent: "#FFC75F",         // Soft Gold
      textDark: "#2d2d2d",
      textLight: "#6b6b6b",
      background: "#FFF5F7",     // Blush white
      white: "#ffffff"
    },
    fonts: {
      primary: "'Crimson Text', serif",
      script: "'Dancing Script', cursive",
      body: "'Quicksand', sans-serif"
    },
    style: "romantic"
  },

  // Modern Minimalist Theme
  modern: {
    name: "Modern Chic",
    colors: {
      primary: "#1A1A2E",        // Deep Navy
      secondary: "#16213E",      // Dark Blue
      accent: "#E94560",         // Coral Red
      textDark: "#0F3460",
      textLight: "#555",
      background: "#F8F9FA",     // Light gray
      white: "#ffffff"
    },
    fonts: {
      primary: "'Montserrat', sans-serif",
      script: "'Allura', cursive",
      body: "'Inter', sans-serif"
    },
    style: "contemporary"
  },

  // Emerald Garden Theme - WOW!
  emerald: {
    name: "Emerald Garden",
    colors: {
      primary: "#2D6A4F",        // Forest Green
      secondary: "#52B788",      // Emerald
      accent: "#D4A373",         // Warm Gold
      textDark: "#1b4332",
      textLight: "#52796f",
      background: "#F8FFF8",     // Mint white
      white: "#ffffff"
    },
    fonts: {
      primary: "'Lora', serif",
      script: "'Alex Brush', cursive",
      body: "'Open Sans', sans-serif"
    },
    style: "natural"
  },

  // Sunset Glamour Theme - Ultra WOW!
  sunset: {
    name: "Sunset Glamour",
    colors: {
      primary: "#F72585",        // Magenta
      secondary: "#7209B7",      // Purple
      accent: "#FFBA08",         // Golden Yellow
      textDark: "#240046",
      textLight: "#5a189a",
      background: "#FFF8F0",     // Warm cream
      white: "#ffffff"
    },
    fonts: {
      primary: "'Libre Baskerville', serif",
      script: "'Satisfy', cursive",
      body: "'Nunito', sans-serif"
    },
    style: "vibrant"
  },

  // Burgundy Luxe Theme
  burgundy: {
    name: "Burgundy Luxe",
    colors: {
      primary: "#800020",        // Burgundy
      secondary: "#B8860B",      // Dark Gold
      accent: "#FFD700",         // Bright Gold
      textDark: "#3d0814",
      textLight: "#5c1a1b",
      background: "#FFF9F5",     // Soft cream
      white: "#ffffff"
    },
    fonts: {
      primary: "'Cinzel', serif",
      script: "'Parisienne', cursive",
      body: "'Raleway', sans-serif"
    },
    style: "opulent"
  }
};

// Apply theme to document
export const applyTheme = (themeName) => {
  const theme = themes[themeName] || themes.classic;
  const root = document.documentElement;

  // Apply color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}-color`, value);
  });

  // Apply font variables
  root.style.setProperty('--font-primary', theme.fonts.primary);
  root.style.setProperty('--font-script', theme.fonts.script);
  root.style.setProperty('--font-body', theme.fonts.body);

  // Add theme class to body
  document.body.className = `theme-${themeName} style-${theme.style}`;

  return theme;
};

// Get available themes list
export const getAvailableThemes = () => {
  return Object.entries(themes).map(([key, theme]) => ({
    id: key,
    name: theme.name,
    style: theme.style,
    preview: theme.colors
  }));
};

export default themes;
