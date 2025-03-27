import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import './styles/App.css';
import './styles/themes.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'blue');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="/privacy" element={<Privacy theme={theme} setTheme={setTheme} />} />
        <Route path="/terms" element={<Terms theme={theme} setTheme={setTheme} />} />
      </Routes>
    </Router>
  );
}

export default App; 