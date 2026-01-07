import { useState, useRef } from 'react';
import Countdown from '../components/Countdown';
import { QRCodeSVG } from 'qrcode.react';
import './Home.css';
import './OurStory.css';
import './QRCode.css';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const qrRef = useRef(null);

  const storyMilestones = [
    {
      id: 1,
      title: "Our First Meet",
      date: "2025",
      description: "Our first meeting unfolded quietly, wrapped in faith and calm. We began by seeking blessings at the Hanuman Mandir, followed by sharing warm kachoris that sparked easy smiles. The journey then led us to a Gurudwara, where we bowed our heads in gratitude and shared kada prasad together. In those serene moments, comfort replaced nerves, and a gentle connection found its way into our hearts.",
      image: "/images/timeline/1.jpg",
      emoji: "🙏"
    },
    {
      id: 2,
      title: "Our Roka Ceremony",
      date: "4th October 2025",
      description: "On 4th October, surrounded by our closest family and relatives, our roka ceremony unfolded in an atmosphere of love and blessings. With heartfelt rituals, smiling faces, and gentle laughter, two families came together as one. In that moment, promises were sealed, hearts felt lighter, and our journey toward forever took a beautiful, meaningful step forward—wrapped in warmth, tradition, and togetherness.",
      image: "/images/timeline/2.jpg",
      emoji: "💍"
    },
    {
      id: 3,
      title: "11:11 – Written by the Universe",
      date: "2025",
      description: "We've always believed in the magic of 11:11 — a quiet reminder that the universe listens. Every moment, every step, seemed perfectly timed, as if unseen forces were gently guiding us toward each other. What felt like coincidence slowly revealed itself as destiny. In trusting these cosmic signs, we realized our meeting wasn't accidental — it was meant to be, written softly by the universe itself. ✨🤍",
      image: "/images/timeline/3.jpg",
      emoji: "✨"
    },
    {
      id: 4,
      title: "Discovering Similarities",
      date: "2025",
      description: "He was a solo traveller who found joy in wandering unknown paths, while she feared being alone but loved creating worlds with her imagination. He prayed to Lord Shiva; she found peace in the hymns of the Gurudwara. Both were jolly, family-loving souls who believed in 11:11 wishes—and yes, both screamed at the sight of a lizard!",
      image: "/images/timeline/4.jpg",
      emoji: "🦎"
    },
    {
      id: 5,
      title: "The Perfect Moment",
      date: "2025",
      description: "In a place that held beauty and meaning, Shubham carefully planned the most important moment of his life. With a heart full of love and nervous excitement, he chose this special spot to ask Rakshita to be his forever. The setting was perfect, the moment was magical, and her 'Yes' made everything complete. This is where their forever truly began.",
      image: "/images/timeline/5.jpg",
      emoji: "💐"
    },
    {
      id: 6,
      title: "Forever Begins",
      date: "2025",
      description: "What began as an arranged meeting slowly unfolded into a connection filled with faith, comfort, and quiet understanding. Guided by blessings, families, and perfectly timed moments, we chose each other with open hearts. In trusting the journey and the universe’s plan, we found something real and lasting. Not just a beginning, but a promise—our forever starts here, rooted in love, respect, and togetherness.",
      image: "/images/timeline/6.jpg",
      emoji: "💍"
    }
  ];

  const photoGallery = [
    { url: "/images/gallery/1.jpeg", caption: "Our Moments" },
    { url: "/images/gallery/2.jpeg", caption: "Together" },
    { url: "/images/gallery/3.jpeg", caption: "Memories" },
    { url: "/images/gallery/4.jpeg", caption: "Happiness" },
    { url: "/images/gallery/5.jpeg", caption: "Love" },
    { url: "/images/gallery/6.jpeg", caption: "Forever" },
    { url: "/images/gallery/7.jpeg", caption: "Us" }
  ];

  const invitationUrl = "https://drive.google.com/drive/folders/1MrzGAiR59C-_shz3y9_xAb7e29QG9btv";

  const downloadQR = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = 1024;
    canvas.height = 1024;

    img.onload = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'wedding-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section id="home" className="hero">
        <div className="hero-background">
          <img
            src="/images/hero/wedding-hero.jpg"
            alt="Wedding"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="decorative-element top-left"></div>
          <div className="decorative-element top-right"></div>
          <div className="decorative-element bottom-left"></div>
          <div className="decorative-element bottom-right"></div>

          <div className="hero-text">
            <p className="hero-subtitle script-font">Together Forever</p>
            <h1 className="hero-title">
              <span className="bride-groom-names script-font">Shubham & Rakshita</span>
            </h1>
            <div className="divider-fancy">
              <div className="divider-line"></div>
              <div className="divider-heart">❤</div>
              <div className="divider-line"></div>
            </div>
            <p className="hero-hashtag">#RakShuDaViah</p>
            <p className="hero-date">February 11, 2026</p>
            <p className="hero-location">The Royal Hall, Chevron, Noida</p>

            <div className="hero-buttons">
              <a
                href="#our-story"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('our-story').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Our Story</span>
              </a>
              <a
                href="#qr-code"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('qr-code').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>QR Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="floating-elements">
          <div className="float-element flower-1">🌸</div>
          <div className="float-element flower-2">🌺</div>
          <div className="float-element flower-3">🌸</div>
          <div className="float-element flower-4">🌺</div>
          <div className="float-element heart-1">💕</div>
          <div className="float-element heart-2">💖</div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="container">
          <h2 className="section-title">We're Getting Married!</h2>
          <div className="floral-divider"></div>
          <p className="section-subtitle">Join us in celebrating our special day</p>
          <Countdown />
        </div>
      </section>

      {/* Couple Photos Section */}
      <section className="couple-photos">
        <div className="container">
          <h2 className="section-title">Meet The Couple</h2>
          <div className="floral-divider"></div>
          <div className="couple-grid">
            <div className="couple-card">
              <div className="couple-image-wrapper">
                <img
                  src="/images/couple/bride.jpg"
                  alt="Bride"
                  className="couple-image"
                />
                <div className="couple-overlay"></div>
              </div>
              <h3 className="couple-name script-font">Rakshita</h3>
              <p className="couple-role">The Bride</p>
              <p className="couple-bio">
                A beautiful soul with a heart full of dreams. A dietician by profession and a fairy-tale believer by nature, she's bubbly, jolly, and spreads happiness wherever she goes. She finds joy in sunsets, comfort in a cup of tea, and happiness in shopping, living life with warmth, laughter, and endless love 🤍
              </p>
            </div>

            <div className="heart-connector">
              <div className="connector-line"></div>
              <div className="connector-heart">💕</div>
              <div className="connector-line"></div>
            </div>

            <div className="couple-card">
              <div className="couple-image-wrapper">
                <img
                  src="/images/couple/groom.jpg"
                  alt="Groom"
                  className="couple-image"
                />
                <div className="couple-overlay"></div>
              </div>
              <h3 className="couple-name script-font">Shubham</h3>
              <p className="couple-role">The Groom</p>
              <p className="couple-bio">
                A soul rooted in faith and spirituality, guided by belief and inner calm. A highly skilled and dedicated software engineer by profession, he balances precision with purpose. A passionate solo traveler and a true foodie at heart, he values honesty, simplicity, and genuine human connections, living life with quiet strength, humility, and warmth ♥️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Preview */}
      <section className="love-story-preview">
        <div className="story-background">
          <img
            src="/images/hero/love-story-bg.jpg"
            alt="Love Story"
            className="story-bg-image"
          />
          <div className="story-overlay"></div>
        </div>
        <div className="story-content">
          <h2 className="section-title-white">Our Love Story</h2>
          <div className="divider-fancy-white">
            <div className="divider-line-white"></div>
            <div className="divider-heart-white">❤</div>
            <div className="divider-line-white"></div>
          </div>
          <p className="story-quote script-font">
            "In all the world, there is no heart for me like yours.
            In all the world, there is no love for you like mine."
          </p>
          <p className="story-author">— Maya Angelou</p>
          <a
            href="#our-story"
            className="btn btn-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('our-story').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Read Our Story</span>
          </a>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="wedding-details">
        <div className="container">
          <h2 className="section-title">Wedding Details</h2>
          <div className="floral-divider"></div>
          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3 className="detail-title">When</h3>
              <p className="detail-info">Wednesday, February 11, 2026</p>
              <p className="detail-time">Dinner & Celebration</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📍</div>
              <h3 className="detail-title">Where</h3>
              <p className="detail-info">The Royal Hall</p>
              <p className="detail-address">Chevron, Noida</p>
              <p className="detail-address">Uttar Pradesh, India</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🍽️</div>
              <h3 className="detail-title">Important Rule</h3>
              <p className="detail-info">Come Hungry!</p>
              <p className="detail-description">
                We promise amazing food, incredible desserts, and unlimited fun!
                Dancing shoes optional, but highly recommended. 💃🕺
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="our-story">
        {/* Story Hero Section */}
        <div className="story-hero">
          <div className="hero-decorative-elements">
            <div className="hero-flower left">🌸</div>
            <div className="hero-flower right">🌸</div>
          </div>
          <div className="story-hero-content">
            <p className="story-subtitle script-font">Once Upon A Time</p>
            <h1 className="story-title">Our Love Story</h1>
            <div className="floral-divider"></div>
            <p className="story-intro">
              Every love story is beautiful, but ours is our favorite. <br />
              Here's how two souls found each other and decided to spend forever together.
            </p>
            <p className="story-hashtag">#RakShuDaViah</p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline">
          <div className="timeline-container">
            {storyMilestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-emoji">{milestone.emoji}</div>
                  <div className="timeline-image">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      onClick={() => setSelectedImage(milestone.image)}
                    />
                    <div className="image-overlay">
                      <span className="image-overlay-text">View</span>
                    </div>
                  </div>
                  <div className="timeline-text">
                    <span className="timeline-date">{milestone.date}</span>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Quote Section */}
        <div className="quote-section">
          <div className="quote-container">
            <p className="large-quote script-font">
              "Love is not about how many days, months, or years you have been together.
              Love is about how much you love each other every single day."
            </p>
            <div className="quote-decoration">
              <div className="quote-line"></div>
              <div className="quote-heart">💕</div>
              <div className="quote-line"></div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="photo-gallery">
          <div className="gallery-container">
            <h2 className="gallery-title">Our Memories</h2>
            <div className="floral-divider"></div>
            <p className="gallery-subtitle">
              A collection of our favorite moments together—each one a treasure,
              each memory a chapter in our beautiful story.
            </p>
            <div className="gallery-grid">
              {photoGallery.map((photo, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => setSelectedImage(photo.url)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={photo.url} alt={photo.caption} />
                  <div className="gallery-caption">
                    <span>{photo.caption}</span>
                  </div>
                  <div className="gallery-overlay">
                    <span className="gallery-icon">🔍</span>
                    <span className="gallery-view-text">View Photo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="story-cta">
          <div className="cta-content">
            <h2 className="cta-title script-font">And Now...</h2>
            <p className="cta-text">
              We're ready to write the next chapter of our story—as husband and wife.
            </p>
            <p className="cta-subtext">
              We can't wait to celebrate with all of you!
            </p>
            <p className="cta-hashtag">#RakShuDaViah</p>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section id="qr-code" className="qr-page">
        <div className="qr-hero">
          <div className="qr-container">
            <h1 className="qr-title">Wedding Invitation QR Code</h1>
            <p className="qr-description">
              Scan this QR code to view our wedding invitation video and special memories!
            </p>

            <div className="qr-card">
              <div className="qr-code-wrapper" ref={qrRef}>
                <QRCodeSVG
                  value={invitationUrl}
                  size={300}
                  bgColor="#ffffff"
                  fgColor="#2c2c2c"
                  level="H"
                  includeMargin={true}
                />
              </div>

              <div className="qr-info">
                <button className="download-btn" onClick={downloadQR}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download QR Code</span>
                </button>
              </div>
            </div>

            <div className="instructions">
              <h3 className="instructions-title">How to Use</h3>
              <div className="instructions-grid">
                <div className="instruction-item">
                  <div className="instruction-number">1</div>
                  <h4>Download</h4>
                  <p>Click the download button to save the QR code as a high-quality image.</p>
                </div>
                <div className="instruction-item">
                  <div className="instruction-number">2</div>
                  <h4>Print</h4>
                  <p>Add the QR code to your wedding invitations or cards when printing.</p>
                </div>
                <div className="instruction-item">
                  <div className="instruction-number">3</div>
                  <h4>Share</h4>
                  <p>Guests can scan the code with their phones to view our invitation video and memories!</p>
                </div>
              </div>
            </div>

            <div className="tip-box">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>Pro Tip</h4>
                <p>
                  Place the QR code on the back of your wedding invitation or on a separate insert card.
                  Make sure it's at least 2cm x 2cm for easy scanning!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Save the Date Banner */}
      <section className="save-date-banner">
        <div className="banner-content">
          <p className="banner-text script-font">Save the Date</p>
          <h3 className="banner-date">11.02.2026</h3>
          <p className="banner-names">Shubham & Rakshita</p>
          <p className="banner-hashtag">#RakShuDaViah</p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
