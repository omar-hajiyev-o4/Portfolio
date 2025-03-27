import './Services.css';
import { useAnimation } from "../../hooks/useAnimation";

const services = [
  {
    icon: 'mdi mdi-monitor',
    title: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.'
  },
  {
    icon: 'mdi mdi-cellphone',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that work seamlessly on all devices.'
  },
  {
    icon: 'mdi mdi-palette',
    title: 'UI/UX Design',
    description: 'Thoughtful interfaces designed to enhance user engagement and satisfaction.'
  }
];

const Services = () => {
  useAnimation('.service-card', {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });
  console.log("Working Omar");
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
              <i className={service.icon}></i>
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