import { useState } from 'react';
import { applyTheme, themes } from '../themes/themes';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('royal');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleThemeChange = (themeName) => {
    applyTheme(themeName);
    setCurrentTheme(themeName);
  };

  const themeList = Object.keys(themes);

  return (
    <div className="theme-switcher-container">
      <button
        className="theme-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        title="Change Theme"
      >
        🎨 {isExpanded ? 'Close' : 'Themes'}
      </button>

      {isExpanded && (
        <div className="theme-options">
          <h4>Choose Theme</h4>
          {themeList.map((themeName) => (
            <button
              key={themeName}
              className={`theme-option-btn ${currentTheme === themeName ? 'active' : ''}`}
              onClick={() => handleThemeChange(themeName)}
            >
              <span className="theme-icon">{getThemeIcon(themeName)}</span>
              <span className="theme-name">{themes[themeName].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const getThemeIcon = (themeName) => {
  const icons = {
    classic: '🏛️',
    royal: '👑',
    romantic: '💕',
    modern: '🌆',
    emerald: '🌿',
    sunset: '🌅',
    burgundy: '🍷'
  };
  return icons[themeName] || '🎨';
};

export default ThemeSwitcher;
