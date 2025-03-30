import './Projects.css';
import { useState } from 'react';
import { useAnimation } from "../../hooks/useAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMobileScreen, faDisplay } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  useAnimation('.project-card', {
    threshold: 0.05,
    rootMargin: '0px 0px -150px 0px'
  });
  
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce App',
      tech: 'C#, .Net, ASP.Net, MsSQL',
      image: 'https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      href: 'https://github.com/omar-hajiyev-o4/ECommerceApp-DotNet8'
    },
    {
      id: 2,
      category: 'mobile',
      title: 'Fitness Tracker App (Soon)',
      tech: 'React Native, Firebase',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      href: ''
    },
    {
      id: 3,
      category: 'desktop',
      title: 'Music Player for Desktop',
      tech: 'C#, .Net, WPF(Windows Presentation Foundation)',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      href: 'https://github.com/omar-hajiyev-o4/Music_Player'
    },
    {
      id: 4,
      category: 'web',
      title: 'E-Commerce with Angular',
      tech: 'Typescript, HTML, CSS Javscript and Firebase(Database and hosting)',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      href: 'https://github.com/omar-hajiyev-o4/E-Commerce-Angular_Project'
    },
    {
      id: 5,
      category: 'desktop',
      title: 'Invoice Payment',
      tech: 'C#, .Net, WinForms',
      image: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      href: 'https://github.com/omar-hajiyev-o4/Invoice_Payment'
    },
    {
      id: 6,
      category: 'web',
      title: 'Social Network App',
      tech: 'C#, .Net, ASP.Net, MsSQL',
      image: 'https://cdn.dribbble.com/userupload/32119075/file/original-8cc3954099e87e5820a98b4e60b37aa7.png?resize=1024x778&vertical=center',
      href: 'https://github.com/omar-hajiyev-o4/SocialNetwork_ASP_Project'
    },
    {
      id: 7,
      category: 'desktop',
      title: 'Movie App with Angular',
      tech: 'Typescript, HTML, CSS and Javscript',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      href: 'https://github.com/omar-hajiyev-o4/Movie_App'
    },
    {
      id: 99,
      category: 'web',
      title: 'Portfolio Template',
      tech: 'React, HTML, CSS and JavaScript',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      href: 'https://github.com/omar-hajiyev-o4/Portfolio'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section mx-5" id="projects">
      <div className="section-header">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="section-divider"></div>
      </div>
      <div className="projects-filter">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('web')}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('mobile')}
        >
          <FontAwesomeIcon icon={faMobileScreen} />
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'desktop' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('desktop')}
        >
          <FontAwesomeIcon icon={faDisplay} />
        </button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id} data-category={project.category}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
                {project.href !== ''? 
                  (<a href={project.href} className="view-project">View Project</a>):
                  (<p className="view-project">Soon</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;