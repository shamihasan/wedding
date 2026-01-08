import { useState, useRef } from 'react';
import Countdown from '../components/Countdown';
import { QRCodeSVG } from 'qrcode.react';
import weddingConfig, { processTimeline, getCoupleNames } from '../config/weddingConfig';
import './Home.css';
import './OurStory.css';
import './QRCode.css';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const qrRef = useRef(null);

  // Get data from config
  const { couple, hashtag, dates, venue, hero, story, gallery, invitation } = weddingConfig;
  const coupleNames = getCoupleNames();
  const storyMilestones = processTimeline(
    weddingConfig.timeline,
    couple.bride.firstName,
    couple.groom.firstName
  );

  const photoGallery = gallery;
  const invitationUrl = invitation.driveUrl;


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
            src={hero.backgroundImage}
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
            <p className="hero-subtitle script-font">{hero.subtitle}</p>
            <h1 className="hero-title">
              <span className="bride-groom-names script-font">{coupleNames.full}</span>
            </h1>
            <div className="divider-fancy">
              <div className="divider-line"></div>
              <div className="divider-heart">❤</div>
              <div className="divider-line"></div>
            </div>
            <p className="hero-hashtag">{hashtag}</p>
            <p className="hero-date">{dates.wedding.displayDate}</p>
            <p className="hero-location">{venue.fullAddress}</p>

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
                href="#invitation"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('invitation').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Invitation</span>
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
                  src={couple.bride.image}
                  alt="Bride"
                  className="couple-image"
                />
                <div className="couple-overlay"></div>
              </div>
              <h3 className="couple-name script-font">{couple.bride.fullName}</h3>
              <p className="couple-role">The Bride</p>
              <p className="couple-bio">
                {couple.bride.bio}
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
                  src={couple.groom.image}
                  alt="Groom"
                  className="couple-image"
                />
                <div className="couple-overlay"></div>
              </div>
              <h3 className="couple-name script-font">{couple.groom.fullName}</h3>
              <p className="couple-role">The Groom</p>
              <p className="couple-bio">
                {couple.groom.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Preview */}
      <section className="love-story-preview">
        <div className="story-background">
          <img
            src={story.backgroundImage}
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
            "{story.quote}"
          </p>
          <p className="story-author">— {story.quoteAuthor}</p>
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
              <div className="detail-icon">
                <div className="custom-calendar">
                  <div className="calendar-month">{dates.wedding.calendarMonth}</div>
                  <div className="calendar-date">{dates.wedding.calendarDay}</div>
                </div>
              </div>
              <h3 className="detail-title">When</h3>
              <p className="detail-info">{dates.wedding.displayDate}</p>
              <p className="detail-time">{dates.wedding.displayTime}</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📍</div>
              <h3 className="detail-title">Where</h3>
              <p className="detail-info">{venue.name}</p>
              <p className="detail-address">{venue.address}</p>
              <p className="detail-address">{venue.state}, {venue.country}</p>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn"
              >
                📍 Get Directions
              </a>
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
            <p className="story-hashtag">{hashtag}</p>
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
                  <div
                    className="timeline-image"
                    onClick={() => setSelectedImage(milestone.image)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={milestone.image}
                      alt={milestone.title}
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
              "{story.largeQuote}"
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
                  style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
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
            <p className="cta-hashtag">{hashtag}</p>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section id="invitation" className="qr-page">
        <div className="qr-hero">
          <div className="qr-container">
            <h1 className="qr-title">Wedding Invitation</h1>
            <p className="qr-description">
              Watch our special invitation video and share it with your loved ones!
            </p>

            {/* Video Section */}
            <div className="qr-card" style={{ marginBottom: '3rem' }}>
              <div className="video-wrapper" onClick={() => setVideoLoaded(true)}>
                {!videoLoaded ? (
                  <div className="video-thumbnail">
                    <img
                      src={invitation.thumbnailImage}
                      alt="Play Video"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%',
                        borderRadius: '20px'
                      }}
                    />
                    <div className="play-button-overlay">
                      <div className="play-button">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                          <circle cx="40" cy="40" r="38" fill="rgba(255, 255, 255, 0.9)" stroke="var(--primary-color)" strokeWidth="3"/>
                          <path d="M32 25L55 40L32 55V25Z" fill="var(--primary-color)"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="480"
                    src={`${invitation.videoUrl}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '20px' }}
                  ></iframe>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Save the Date Banner */}
      <section className="save-date-banner">
        <div className="banner-content">
          <p className="banner-text script-font">Save the Date</p>
          <h3 className="banner-date">{dates.wedding.shortDate}</h3>
          <p className="banner-names">{coupleNames.full}</p>
          <p className="banner-hashtag">{hashtag}</p>
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
