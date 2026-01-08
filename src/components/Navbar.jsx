import './Navbar.css';
import weddingConfig from '../config/weddingConfig';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate dynamic logo text from couple names
  const groomInitial = weddingConfig.couple.groom.firstName.charAt(0).toUpperCase();
  const brideInitial = weddingConfig.couple.bride.firstName.charAt(0).toUpperCase();
  const logoText = `${groomInitial} & ${brideInitial}`;

  // Check if invitation video exists
  const hasInvitationVideo = weddingConfig.invitation?.videoUrl;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <span className="logo-text">{logoText}</span>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#our-story" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('our-story'); }}>
              Our Story
            </a>
          </li>
          {hasInvitationVideo && (
            <li className="nav-item">
              <a href="#invitation" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('invitation'); }}>
                Invitation
              </a>
            </li>
          )}
          <li className="nav-item">
            <a
              href={weddingConfig.venue.mapsUrl}
              className="nav-link nav-link-directions"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Directions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
