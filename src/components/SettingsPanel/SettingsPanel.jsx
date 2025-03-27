import './SettingsPanel.css';
import { useAnimation } from "../../hooks/useAnimation";

const SettingsPanel = ({ isOpen, onClose, theme, setTheme }) => {
  useAnimation('.theme-option', {
    rootMargin: '0px 0px -50px 0px'
  });

  const themes = [
    { name: 'Ocean Blue', value: 'blue' },
    { name: 'Midnight Dark', value: 'dark' },
    { name: 'Royal Purple', value: 'purple' },
    { name: 'Mystic Teal', value: 'teal' }
  ];

  return (
    <div className={`settings-panel ${isOpen ? 'active' : ''}`}>
      <div className="settings-header">
        <h5>Theme Settings</h5>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>
      <div className="theme-options">
        {themes.map((t) => (
          <div 
            className="theme-option" 
            key={t.value} 
            data-theme={t.value}
            onClick={() => setTheme(t.value)}
          >
            <div className={`theme-preview ${t.value}-theme`}></div>
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPanel;