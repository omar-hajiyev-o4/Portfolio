import './Contact.css';
import { useAnimation } from "../../hooks/useAnimation";

const Contact = () => {
  useAnimation('.form-group', {
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset(); 
  };

  return (
    <section className="contact-section mx-5" id="contact">
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
            <i className="mdi mdi-email"></i>
            <a href="mailto:omarhajiyevo4@gmail.com?subject=Work%20time%20%3B)">omarhajiyevo4@gmail.com</a>
          </div>
          <div className="info-item">
            <i className="mdi mdi-phone"></i>
            <a href='tel:+994103691317'>(+994) 10 369 13 17</a>
          </div>
          <div className="info-item">
            <i className="mdi mdi-map-marker"></i>
            <a href='https://maps.app.goo.gl/d7DebJdAQuPjA2E26' >Azerbaijan, Baku</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/omar-hajiyev-o4"><i className="mdi mdi-github"></i></a>
            <a href="https://www.linkedin.com/in/omar-hajiyev-o4/"><i className="mdi mdi-linkedin"></i></a>
            <a href="https://www.tiktok.com/@codemasteraz"><i className="fab fa-tiktok"></i></a>
            <a href="https://www.instagram.com/codemasteraz/"><i className="mdi mdi-instagram"></i></a>
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
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;