import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <span className="logo-text">S & R</span>
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
          <li className="nav-item">
            <a href="#qr-code" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('qr-code'); }}>
              QR Code
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
