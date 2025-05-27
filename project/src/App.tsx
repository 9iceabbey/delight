import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { setTheme, getInitialTheme } from './utils/theme';
import './styles/animations.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Initialize theme based on user preference or saved setting
    const initialDarkMode = getInitialTheme();
    setDarkMode(initialDarkMode);
    setTheme(initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setTheme(newDarkMode);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-navy-900 text-navy-900 dark:text-white ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;