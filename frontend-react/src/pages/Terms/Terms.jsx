import { useEffect } from 'react';
import  useTranslation from '../../lang/langSwitcher';
import { renderHTML } from '../../utils/htmlRenderer';
import { useAnimation } from "../../hooks/useAnimation";
import './Terms.css';

const Terms = ({ theme, setTheme }) => {
  const lang = localStorage.getItem('preferredLang')
  useAnimation('.animeItem', {
    rootMargin: '0px 0px -60px 0px'
  });
  
  const { t, switchLanguage } = useTranslation();

  useEffect(() => {
    if (t?.terms?.title) {
      document.title = `${t.terms.title} | ` + (lang === 'az' ? 'Ömər Hacıyev' : 'Omar Hajiyev');
    }
  }, [t, lang]);

  if (!t?.terms) {
    return <div className="legal-container animeItem">Loading translations...</div>;
  }

  return (
    <>
      <button className="language-switcher animeItem" onClick={switchLanguage}>
        <p>{t?.language?.switchText || 'Loading...'}</p>
      </button>
      <div className="legal-container terms-container animeItem">
        
        <div className="legal-header animeItem">
          <h1>{t.terms.title}</h1>
          <p>{t.terms.lastUpdated} <span id="current-date">{t.terms.lastUpdatedDate}</span></p>
        </div>

        {Object.keys(t.terms.sections).map(sectionKey => {
          const section = t.terms.sections[sectionKey];
          return (
            <div className="legal-section animeItem" id={sectionKey} key={sectionKey}>
              <h2>{section.title}</h2>
              <div className="section-content animeItem">
                {section.points ? (
                  <>
                    <p className='animeItem'>{section.content}</p>
                    <ul className='animeItem'>
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
    </>
  );
};

export default Terms;