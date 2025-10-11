import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Quiz Application',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Core Java', 'SpringBoot', 'MySql', 'Hibernate'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Work Out Tracker',
      description:'Processing..',
    //   description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A responsive weather application that provides current weather conditions, forecasts, and interactive maps using multiple weather APIs.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['JavaScript', 'API Integration', 'CSS3', 'Chart.js'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Social Media Dashboard',
    //   description: 'An analytics dashboard for social media management with data visualization, content scheduling, and performance metrics.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A modern, responsive portfolio website built with React and featuring smooth animations, dark mode, and contact form.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['React', 'CSS3', 'Framer Motion', 'EmailJS'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Blog Platform',
    //   description: 'A content management system for bloggers with markdown support, SEO optimization, and comment system.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
