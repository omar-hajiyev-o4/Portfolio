import './Contact.css';
import { useAnimation } from "../../hooks/useAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import LoadingOverlay from "./../LoadingOverlay/LoadingOverlay";
import { useState } from 'react';
import { useNotification } from "../../context/NotificationContext";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
    const { showNotification } = useNotification();

  useAnimation('.form-group', {
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const formData = {
      name: form.elements[0].value,
      email: form.elements[1].value,
      subject: form.elements[2].value,
      message: form.elements[3].value,
    };

    try {
      const response = await fetch('https://portfolio-eta-three-19.vercel.app/api/email/', {
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
  };

  return (
    <section className="contact-section mx-5" id="contact" style={{position: 'relative'}}>
      <LoadingOverlay isLoading={isLoading} fullScreen={true} />

      <div className="section-header">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Talk About Your Project</h3>
          <p>
            Feel free to reach out if you're looking for a developer, have a question, 
            or just want to connect.
          </p>
          <div className="info-item">
            <div className="iconStyle2">
              <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <a href="mailto:omarhajiyevo4@gmail.com?subject=Work%20time%20%3B)">omarhajiyevo4@gmail.com</a>
          </div>
          <div className="info-item">
            <div className="iconStyle2">
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <a href='tel:+994103691317'>(+994) 10 369 13 17</a>
          </div>
          <div className="info-item">
            <div className="iconStyle2">
              <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <a href='https://maps.app.goo.gl/d7DebJdAQuPjA2E26' >Azerbaijan, Baku</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/omar-hajiyev-o4">
              <FontAwesomeIcon className='iconStyle' icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/omar-hajiyev-o4/">
              <FontAwesomeIcon className='iconStyle' icon={faLinkedinIn} />
            </a>
            <a href="https://www.tiktok.com/@codemasteraz">
              <FontAwesomeIcon className='iconStyle' icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/codemasteraz/">
              <FontAwesomeIcon className='iconStyle' icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faPaperPlane} size={'1x'} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;