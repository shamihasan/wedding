// Wedding Configuration - Shivam & Nivedita
// 🔥🌸 A Sacred Journey Written by Destiny
// Hashtag: #NiviFoundHerShiv
// Images: /public/images/nivifoundhershiv/

const weddingConfig = {
  // Couple Details
  couple: {
    bride: {
      fullName: "Nivedita Jaiswal",
      firstName: "Nivedita",
      nickname: "Nivi", // Used in hashtag
      bio: "A beautiful soul with a heart full of dreams. A dietician by profession and a fairy-tale believer by nature, she's bubbly, jolly, and spreads happiness wherever she goes. She finds joy in sunsets, comfort in a cup of tea, and happiness in shopping, living life with warmth, laughter, and endless love 🤍",
      image: "/images/nivifoundhershiv/couple/bride.jpg"
    },
    groom: {
      fullName: "Shivam Jaiswal",
      firstName: "Shivam",
      nickname: "Shiv", // Used in hashtag
      bio: "Simple at heart, caring by nature, and deeply rooted in tradition. With a jolly spirit and a warm smile, he brings joy wherever he goes. Today, he steps forward to begin a beautiful new journey of togetherness. 💍✨ ♥️",
      image: "/images/nivifoundhershiv/couple/groom.jpg"
    }
  },

  // Hashtag & Image Folder
  hashtag: "#NiviFoundHerShiv",
  hashtagFolder: "nivifoundhershiv", // Folder name for this couple's images (lowercase, no special chars)

  // Event Dates
  dates: {
    engagement: {
      date: "2025-11-23",
      displayDate: "23rd November 2025",
      hasHappened: true
    },
    wedding: {
      date: "2026-02-21",
      displayDate: "Friday, February 21, 2026",
      shortDate: "21.02.2026",
      time: "20:00:00", // 8:00 PM in 24-hour format
      displayTime: "Dinner & Celebration"
    }
  },

  // Venue Details
  venue: {
    name: "Rajwada Prakash Vatika",
    address: "Gosaiganj, Lucknow",
    state: "Uttar Pradesh",
    country: "India",
    fullAddress: "Rajwada Prakash Vatika, Gosaiganj, Lucknow",
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
    backgroundImage: "/images/nivifoundhershiv/hero/wedding-hero.jpg"
  },

  // Story Section
  story: {
    quote: "Some unions are not found, they are offered by destiny—like a diya lit by elders' hands, meant to glow brighter with time.",
    quoteAuthor: "Shivam & Nivi — A Sacred Journey Written by Destiny",
    backgroundImage: "/images/nivifoundhershiv/hero/love-story-bg.jpg",
    largeQuote: "Love, when rooted in tradition, does not limit freedom—it gives it meaning. An arranged beginning, when nurtured with patience and faith, can bloom into a love as timeless as the sacred fire itself. 🔥❤️"
  },

  // Timeline/Milestones
  // Customize these based on the couple's story
  timeline: [
    {
      id: 1,
      title: "Our First Meet",
      date: "16th July 2025",
      description: "On 16th July 2025, our paths crossed for the first time—a meeting as gentle as the first monsoon breeze, carrying curiosity, comfort, and an unspoken promise. Our words were few, yet our silences spoke—as if the universe had softly nodded in approval. 🌸",
      image: "/images/nivifoundhershiv/timeline/1.jpg",
      emoji: "🙏"
    },
    {
      id: 2,
      title: "A Journey of Faith & Tradition",
      date: "2025",
      description: "Shivam and Nivi's story began with their families, who came together like two rivers meeting at a sacred sangam, guided by faith, tradition, and quiet hope. What began as an introduction slowly blossomed like a banyan sapling, patient, steady, and destined to stand strong. Love did not rush in like a storm; it grew like haldi on the skin—slowly, warmly, leaving its golden mark. 🌺",
      image: "/images/nivifoundhershiv/timeline/2.jpg",
      emoji: "🕉️"
    },
    {
      id: 3,
      title: "Our Engagement",
      date: "23rd November 2025",
      description: "On 23rd November 2025, under festive lights and sacred smiles, their engagement became the tying of the first knot. Rings circled their fingers like threads of fate, delicate yet unbreakable. That day, blessings flowed like shlokas in the air, and two families became one household of shared dreams. 💍✨",
      image: "/images/nivifoundhershiv/timeline/3.jpg",
      emoji: "💍"
    },
    {
      id: 4,
      title: "The Wait Before Dawn",
      date: "November 2025 - February 2026",
      description: "The days that followed felt like the quiet hours before dawn—filled with anticipation, patience, and prayer. Every conversation was a step closer, every plan a petal added to a blooming garland. With time, familiarity took root, and what began as an introduction slowly blossomed into something eternal. 🌅🌸",
      image: "/images/nivifoundhershiv/timeline/4.jpg",
      emoji: "🌅"
    },
    {
      id: 5,
      title: "A Sacred Union Written by Destiny",
      date: "2025",
      description: "This is not merely a wedding—it is the weaving of two lineages, two hearts, and two futures into one eternal rhythm. Their story reminds us that some unions are offered by destiny, like a diya lit by elders' hands, meant to glow brighter with time. 🪔✨",
      image: "/images/nivifoundhershiv/timeline/5.jpg",
      emoji: "🪔"
    },
    {
      id: 6,
      title: "Seven Pheras — Seven Promises",
      date: "21st February 2026",
      description: "As the agni rises, glowing and eternal, [GROOM_FIRSTNAME] and [BRIDE_FIRSTNAME] will take their seven pheras, each step a promise, each circle a sacred oath—to walk together through joy and sorrow, abundance and scarcity, laughter and silence. With sindoor like sunrise and mangal sutra resting like a sacred mantra, their bond will be sealed by rituals and generations of blessings. 🔥💕",
      image: "/images/nivifoundhershiv/timeline/6.jpg",
      emoji: "🔥"
    },
    {
      id: 7,
      title: "Forever Begins — A Love Timeless as Fire",
      date: "21st February 2026",
      description: "This is where their forever truly begins—rooted in tradition, nurtured by faith, and blessed by generations. What began as an arranged beginning bloomed into a love as timeless as the sacred fire itself. Not just a wedding, but the weaving of two souls into one eternal rhythm. 🌺❤️🔥",
      image: "/images/nivifoundhershiv/timeline/7.jpg",
      emoji: "❤️"
    }
  ],

  // Photo Gallery - Use .jpg format for consistency
  gallery: [
    { url: "/images/nivifoundhershiv/gallery/1.jpg", caption: "Our Moments" },
    { url: "/images/nivifoundhershiv/gallery/2.jpg", caption: "Together" },
    { url: "/images/nivifoundhershiv/gallery/3.jpg", caption: "Memories" },
    { url: "/images/nivifoundhershiv/gallery/4.jpg", caption: "Happiness" },
    { url: "/images/nivifoundhershiv/gallery/5.jpg", caption: "Love" },
    { url: "/images/nivifoundhershiv/gallery/6.jpg", caption: "Forever" },
    { url: "/images/nivifoundhershiv/gallery/7.jpg", caption: "Us" }
  ],

  // Invitation
  invitation: {
    videoUrl: "https://www.youtube.com/embed/Wdalk8xgcAY",
    thumbnailImage: "/images/nivifoundhershiv/gallery/6.jpg",
    driveUrl: "https://drive.google.com/file/d/1_szeAdT0fDLHOVhPmjKbOQOY8rGBacwm"
  },

  // Social Media Preview Image - Use .jpg format
  socialPreview: {
    image: "/images/nivifoundhershiv/gallery/3.jpg",
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
