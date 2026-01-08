import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ThemeSwitcher from './components/ThemeSwitcher';
import weddingConfig from './config/weddingConfig';
import { applyTheme } from './themes/themes';
import { useMetaTags } from './hooks/useMetaTags';
import './App.css';

function App() {
  // Apply theme on mount
  useEffect(() => {
    applyTheme(weddingConfig.theme || 'classic');
  }, []);

  // Update meta tags dynamically based on config
  useMetaTags(weddingConfig);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
      {weddingConfig.showThemeSwitcher && <ThemeSwitcher />}
    </div>
  );
}

export default App;
