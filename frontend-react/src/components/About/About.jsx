import './About.css';
import { useEffect, useRef } from 'react';
import { useAnimation } from "../../hooks/useAnimation";

const About = () => {
  useAnimation('.skill-item', {
    rootMargin: '0px 0px -50px 0px'
  });
  
  const skillItemsRef = useRef([]);

  useEffect(() => {
    const currentRefs = skillItemsRef.current.filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progressBar = entry.target?.querySelector('.progress-bar');
          if (progressBar) {
            progressBar.style.width = entry.isIntersecting 
              ? progressBar.getAttribute('data-width') 
              : '0';
          }
        });
      },
      { threshold: 0.5 }
    );

    currentRefs.forEach((item) => observer.observe(item));

    return () => {
      currentRefs.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="about-section mx-5" id="about">
      <div className="section-header">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
            alt="About Me" 
            className="about-img" 
          />
        </div>
        <div className="about-text">
          <h3>Full-stack development for every platform</h3>
          <p>
          With 3+ years of experience in full-stack development, I specialize in building high-performance, cross-platform applications for 
          Web, Mobile, and Desktop environments, ensuring robust architecture and optimal functionality.
          </p>
          <div className="skills">
            {[
              { skill: 'Web Apps', percent: '90%' },
              { skill: 'Mobile Apps', percent: '70%' },
              { skill: 'Desktop Apps', percent: '80%' }
            ].map((item, index) => (
              <div 
                className="skill-item" 
                key={index}
                ref={el => skillItemsRef.current[index] = el}
              >
                <div className="skill-info">
                  <span>{item.skill}</span>
                  <span>{item.percent}</span>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    data-width={item.percent}
                    style={{ width: '0' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;