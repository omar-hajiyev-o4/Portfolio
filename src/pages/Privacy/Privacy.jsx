import { useEffect } from 'react';
import useTranslation from '../../lang/langSwitcher';
import { renderHTML } from '../../utils/htmlRenderer';
import { useAnimation } from "../../hooks/useAnimation";
import './Privacy.css';

const Privacy = ({ theme, setTheme }) => {
  useAnimation('.animeItem', {
    rootMargin: '0px 0px -60px 0px'
  });
  
  const { t, switchLanguage } = useTranslation();

  useEffect(() => {
    if (t?.privacy?.title) {
      document.title = `${t.privacy.title} | Omar Hajiyev`;
    }
  }, [t]);

  if (!t?.privacy) {
    return <div className="legal-container animeItem">Loading translations...</div>;
  }

  return (
    <div className="legal-container privacy-container animeItem">
      <button className="language-switcher animeItem" onClick={switchLanguage}>
        {t?.language?.switchText || 'Loading...'}
      </button>
      
      <div className="legal-header animeItem">
        <h1>{t.privacy.title}</h1>
        <p>{t.privacy.lastUpdated} <span id="current-date">{t.privacy.lastUpdatedDate}</span></p>
      </div>

      {Object.keys(t.privacy.sections).map(sectionKey => {
        const section = t.privacy.sections[sectionKey];
        return (
          <div className="legal-section animeItem" id={sectionKey} key={sectionKey}>
            <h2>{section.title}</h2>
            <div className="section-content animeItem">
              {section.points ? (
                <>
                  <p className='animeItem'>{section.content}</p>
                  <ul>
                    {section.points.map((point, index) => (
                      <li className='animeItem' key={index}>{point}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <div dangerouslySetInnerHTML={renderHTML(section.content)} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Privacy;