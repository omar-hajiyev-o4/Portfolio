import './Services.css';
import { useAnimation } from "../../hooks/useAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMobileScreen, faDisplay } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faGlobe,
    title: 'Web Development',
    description: 'High-performance websites engineered for modern users'
  },
  {
    icon: faMobileScreen,
    title: 'Mobile Apps',
    description: 'Enterprise-grade mobile applications.'
  },
  {
    icon: faDisplay,
    title: 'Desktop Apps',
    description: 'User-friendly desktop interfaces designed for optimal engagement.'
  }
];

const Services = () => {
  useAnimation('.service-card', {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });
  return (
    <section className="services-section mx-5">
      <div className="section-header">
        <h2 className="section-title">My <span>Services</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;