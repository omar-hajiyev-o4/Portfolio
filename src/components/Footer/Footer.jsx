import { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-brand">
            <h2 className="footer-logo">Omar</h2>
            <p className="footer-tagline">Creating digital experiences that matter</p>
            <div className="footer-social">
              <a href="https://github.com/omar-hajiyev-o4?tab=repositories" className="social-link">
                <i className="mdi mdi-github"></i>
              </a>
              <a href="mailto:omarhajiyevo4@gmail.com?subject=Work%20time%20%3B)" className="social-link">
                <i className="mdi mdi-email"></i>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#about">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="contact-info">
              <li><i className="mdi mdi-email"></i> omarhajiyevo4@gmail.com</li>
              <li><i className="mdi mdi-map-marker"></i> Baku, Azerbaijan</li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-title">Stay Updated</h3>
            <p>Subscribe to my newsletter for the latest updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="send-btn">
                <i className="mdi mdi-send"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; <span id="current-year"></span> Omar Hajiyev. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy" target="_blank">Privacy Policy</a>
            <a href="/terms" target="_blank">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;