import './Footer.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import LoadingOverlay from "./../LoadingOverlay/LoadingOverlay";
import { useNotification } from "../../context/NotificationContext";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();

  const sendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = {
      email: form.elements[0].value
    };

    try {
      const response = await fetch('http://localhost:8080/subscription/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();

      showNotification(result.message, result.messageType);

      e.target.reset(); 
    } catch (error) {
      showNotification("An error occurred while submitting your request. Please try again.", "error");
    }
    setIsLoading(false);
  }


  useEffect(() => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="footer" style={{position: 'relative'}}>
      <LoadingOverlay isLoading={isLoading} fullScreen={true} />

      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-brand">
            <h2 className="footer-logo">Omar</h2>
            <p className="footer-tagline">Creating digital experiences that matter</p>
            <div className="footer-social">
              <a href="https://github.com/omar-hajiyev-o4?tab=repositories" className="social-link">
                <FontAwesomeIcon icon={faGithub} size={'1x'}/>
              </a>
              <a href="mailto:omarhajiyevo4@gmail.com?subject=Work%20time%20%3B)" className="social-link">
                <FontAwesomeIcon icon={faEnvelope} size={'1x'}/>
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
            <ul className="contactInfo">
              <li>
                <a href="mailto:omarhajiyevo4@gmail.com?subject=Work%20time%20%3B)">
                  <FontAwesomeIcon icon={faEnvelope} size={'1x'} className='iconStyle'/> <p>omarhajiyevo4@gmail.com</p>
                </a>
              </li>
              <li>
                <a href='tel:+994103691317'>
                  <FontAwesomeIcon icon={faPhone} size={'1x'} className='iconStyle'/> <p>(+994) 10 369 13 17</p>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/d7DebJdAQuPjA2E26">
                  <FontAwesomeIcon icon={faLocationDot} size={'1x'} className='iconStyle'/> <p>Azerbaijan, Baku</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-title">Stay Updated</h3>
            <p>Subscribe to my newsletter for the latest updates</p>
            <form className="newsletter-form" onSubmit={sendMail}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="send-btn">
                <FontAwesomeIcon icon={faPaperPlane} size={'1x'} className='iconStyle'/>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            <FontAwesomeIcon icon={faCopyright} /> 
            <span id="current-year"></span> Omar Hajiyev. All rights reserved.</p>
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