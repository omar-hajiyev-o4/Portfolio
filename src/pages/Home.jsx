import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';

const Home = ({ theme, setTheme }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Settings Gear */}
      <div className="settings-gear" onClick={() => setSettingsOpen(true)}>
        <i className="mdi mdi-cog"></i>
      </div>

      {/* Settings Panel */}
      <SettingsPanel 
        isOpen={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
        theme={theme}
        setTheme={setTheme}
      />

      {/* Overlay */}
      {settingsOpen && <div className="overlay active" onClick={() => setSettingsOpen(false)}></div>}

      {/* Main Content */}
      <div className="container-full">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default Home;