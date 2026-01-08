// BACKUP CONFIG - Shubham & Rakshita Wedding
// Configuration for #RakShuDaViah
// To use this config: Copy entire content to weddingConfig.js
// Make sure to add images to /public/images/rakshudaviah/ first

const weddingConfig = {
  // Couple Details
  couple: {
    bride: {
      fullName: "Rakshita",
      firstName: "Rakshita",
      nickname: "Rak",
      bio: "A beautiful soul with a heart full of dreams. A dietician by profession and a fairy-tale believer by nature, she's bubbly, jolly, and spreads happiness wherever she goes. She finds joy in sunsets, comfort in a cup of tea, and happiness in shopping, living life with warmth, laughter, and endless love 🤍",
      image: "/images/rakshudaviah/couple/bride.jpg"
    },
    groom: {
      fullName: "Shubham",
      firstName: "Shubham",
      nickname: "Shu",
      bio: "A soul rooted in faith and spirituality, guided by belief and inner calm. A highly skilled and dedicated software engineer by profession, he balances precision with purpose. A passionate solo traveler and a true foodie at heart, he values honesty, simplicity, and genuine human connections, living life with quiet strength, humility, and warmth ♥️",
      image: "/images/rakshudaviah/couple/groom.jpg"
    }
  },

  // Hashtag & Folder
  hashtag: "#RakShuDaViah",
  hashtagFolder: "rakshudaviah", // Folder name for images

  // Event Dates
  dates: {
    engagement: {
      date: "2025-10-04",
      displayDate: "4th October 2025",
      hasHappened: true
    },
    wedding: {
      date: "2026-02-11",
      displayDate: "Wednesday, February 11, 2026",
      shortDate: "11.02.2026",
      time: "20:00:00",
      displayTime: "Dinner & Celebration"
    }
  },

  // Venue Details
  venue: {
    name: "The Royal Hall",
    address: "Chevron, Noida",
    state: "Uttar Pradesh",
    country: "India",
    fullAddress: "The Royal Hall, Chevron, Noida",
    mapsUrl: "https://maps.app.goo.gl/t6EMifRzx95FigeW9?g_st=ipc"
  },

  // Website Details
  website: {
    url: "https://rakshudaviah.vercel.app/",
    title: (hashtag, bride, groom) => `${hashtag} | ${bride} & ${groom} Wedding`,
    description: (bride, groom, date, venue) =>
      `Join us in celebrating the wedding of ${bride} & ${groom} on ${date} at ${venue}`
  },

  // Hero Section
  hero: {
    subtitle: "Together Forever",
    backgroundImage: "/images/rakshudaviah/hero/wedding-hero.jpg"
  },

  // Story Section
  story: {
    quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    quoteAuthor: "Maya Angelou",
    backgroundImage: "/images/rakshudaviah/hero/love-story-bg.jpg",
    largeQuote: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."
  },

  // Timeline/Milestones
  timeline: [
    {
      id: 1,
      title: "Our First Meet",
      date: "2025",
      description: "Our first meeting unfolded quietly, wrapped in faith and calm. We began by seeking blessings at the Hanuman Mandir, followed by sharing warm kachoris that sparked easy smiles. The journey then led us to a Gurudwara, where we bowed our heads in gratitude and shared kada prasad together. In those serene moments, comfort replaced nerves, and a gentle connection found its way into our hearts.",
      image: "/images/rakshudaviah/timeline/1.jpg",
      emoji: "🙏"
    },
    {
      id: 2,
      title: "Our Roka Ceremony",
      date: "4th October 2025",
      description: "On 4th October, surrounded by our closest family and relatives, our roka ceremony unfolded in an atmosphere of love and blessings. With heartfelt rituals, smiling faces, and gentle laughter, two families came together as one. In that moment, promises were sealed, hearts felt lighter, and our journey toward forever took a beautiful, meaningful step forward—wrapped in warmth, tradition, and togetherness.",
      image: "/images/rakshudaviah/timeline/2.jpg",
      emoji: "💍"
    },
    {
      id: 3,
      title: "11:11 – Written by the Universe",
      date: "2025",
      description: "We've always believed in the magic of 11:11 — a quiet reminder that the universe listens. Every moment, every step, seemed perfectly timed, as if unseen forces were gently guiding us toward each other. What felt like coincidence slowly revealed itself as destiny. In trusting these cosmic signs, we realized our meeting wasn't accidental — it was meant to be, written softly by the universe itself. ✨🤍",
      image: "/images/rakshudaviah/timeline/3.jpg",
      emoji: "✨"
    },
    {
      id: 4,
      title: "Discovering Similarities",
      date: "2025",
      description: "He was a solo traveller who found joy in wandering unknown paths, while she feared being alone but loved creating worlds with her imagination. He prayed to Lord Shiva; she found peace in the hymns of the Gurudwara. Both were jolly, family-loving souls who believed in 11:11 wishes—and yes, both screamed at the sight of a lizard!",
      image: "/images/rakshudaviah/timeline/4.jpg",
      emoji: "🦎"
    },
    {
      id: 5,
      title: "The Perfect Moment",
      date: "2025",
      description: "In a place that held beauty and meaning, [GROOM_FIRSTNAME] carefully planned the most important moment of his life. With a heart full of love and nervous excitement, he chose this special spot to ask [BRIDE_FIRSTNAME] to be his forever. The setting was perfect, the moment was magical, and her 'Yes' made everything complete. This is where their forever truly began.",
      image: "/images/rakshudaviah/timeline/5.jpg",
      emoji: "💐"
    },
    {
      id: 6,
      title: "Forever Begins",
      date: "2025",
      description: "What began as an arranged meeting slowly unfolded into a connection filled with faith, comfort, and quiet understanding. Guided by blessings, families, and perfectly timed moments, we chose each other with open hearts. In trusting the journey and the universe's plan, we found something real and lasting. Not just a beginning, but a promise—our forever starts here, rooted in love, respect, and togetherness.",
      image: "/images/rakshudaviah/timeline/6.jpg",
      emoji: "💍"
    }
  ],

  // Photo Gallery
  gallery: [
    { url: "/images/rakshudaviah/gallery/1.jpg", caption: "Our Moments" },
    { url: "/images/rakshudaviah/gallery/2.jpg", caption: "Together" },
    { url: "/images/rakshudaviah/gallery/3.jpg", caption: "Memories" },
    { url: "/images/rakshudaviah/gallery/4.jpg", caption: "Happiness" },
    { url: "/images/rakshudaviah/gallery/5.jpg", caption: "Love" },
    { url: "/images/rakshudaviah/gallery/6.jpg", caption: "Forever" },
    { url: "/images/rakshudaviah/gallery/7.jpg", caption: "Us" }
  ],

  // Invitation
  invitation: {
    videoUrl: "https://www.youtube.com/embed/Wdalk8xgcAY",
    thumbnailImage: "/images/rakshudaviah/gallery/6.jpg",
    driveUrl: "https://drive.google.com/file/d/1_szeAdT0fDLHOVhPmjKbOQOY8rGBacwm"
  },

  // Social Media Preview Image
  socialPreview: {
    image: "/images/rakshudaviah/gallery/3.jpg",
    width: "1200",
    height: "630"
  }
};

// Helper function to replace placeholders in timeline descriptions
export const processTimeline = (timeline, bride, groom) => {
  return timeline.map(milestone => ({
    ...milestone,
    description: milestone.description
      .replace(/\[BRIDE_FIRSTNAME\]/g, bride)
      .replace(/\[GROOM_FIRSTNAME\]/g, groom)
  }));
};

// Helper to get full wedding date-time for countdown
export const getWeddingDateTime = () => {
  const { date, time } = weddingConfig.dates.wedding;
  return new Date(`${date}T${time}`).getTime();
};

// Helper to format couple names
export const getCoupleNames = () => {
  const { bride, groom } = weddingConfig.couple;
  return {
    full: `${groom.firstName} & ${bride.firstName}`,
    reverse: `${bride.firstName} & ${groom.firstName}`,
    groomFull: groom.fullName,
    brideFull: bride.fullName
  };
};

export default weddingConfig;
