import './Hero.css';
import { useAnimation } from "../../hooks/useAnimation";

const Hero = () => {
  useAnimation('.hero-text, .hero-image', {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  return (
    <section className="hero-section mx-5">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Omar</span></h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Creating digital experiences that inspire and engage users through clean code and thoughtful design.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://github.com/omar-hajiyev-o4?tab=repositories" 
              className="btn btn-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View My Work
            </a>
            <a 
              href="mailto:omarhajiyevo4@gmail.com?subject=Work%20time%20%3B)" 
              className="btn btn-outline"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="https://raw.githubusercontent.com/omar-hajiyev-o4/Resource/476d69c7b4a5defa8f24292bcaf191ffc0e2b6c6/myPhoto.jpeg" 
              alt="Omar Hajiyev" 
              className="profile-img" 
            />
            <div className="shape-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;