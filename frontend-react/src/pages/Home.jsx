import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import SettingsPanel from '../components/SettingsPanel/SettingsPanel';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";

const Home = ({ theme, setTheme }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    const checkPageLoaded = () => {
      if (document.readyState === 'complete') {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          document.body.classList.remove('loading-active');
          setIsLoading(false);
        }, 1000);
      }
    };
  
    checkPageLoaded();
  
    if (document.readyState !== 'complete') {
      document.body.classList.add('loading-active');
      intervalRef.current = setInterval(checkPageLoaded, 5);
    }
  
    return () => {
      clearInterval(intervalRef.current);
      document.body.classList.remove('loading-active');
    };
  }, []);
  

  return (
    <div className="page-wrapper">
      <LoadingOverlay isLoading={isLoading} fullScreen={true} />

      {/* Settings Gear */}
      <div className="settings-gear" onClick={() => setSettingsOpen(true)}>
        <FontAwesomeIcon icon={faGear} />
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
      <div className="container-full" style={{position: 'relative'}}>
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