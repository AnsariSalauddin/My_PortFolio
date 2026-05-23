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
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Code Debugger',
      description: 'AI-powered full-stack app to identify and fix bugs instantly using Groq AI. Paste your code, select the language, and get detailed explanations with fixes in seconds.',
      icon: '🐛',
      bannerColor: 'purple',
      bannerLabel: 'AI · Full Stack',
      technologies: ['Core Java', 'Spring Boot', 'React.js', 'Groq AI', 'Docker', 'Render', 'Vercel', 'REST API'],
      github: 'https://github.com/AnsariSalauddin/CodeDebugger',
      live: 'https://code-debugger-frontend-khaki.vercel.app/',
      featured: true,
    },
    {
      title: 'Work Out Tracker',
      description: 'A robust workout tracking application to log exercises, monitor progress, and build consistent fitness habits. Supports custom workout plans and history.',
      icon: '🏋️',
      bannerColor: 'green',
      bannerLabel: 'Health · Backend',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
      github: 'https://github.com/AnsariSalauddin',
      live: 'https://example.com',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">

        <div className="projects-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            A showcase of my recent work — from AI-powered tools to full-stack applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">

              {/* Banner */}
              <div className={`project-banner ${project.bannerColor}`}>
                <span className="project-num">0{index + 1}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
                <div className="banner-icon">{project.icon}</div>
                <span className="banner-label">{project.bannerLabel}</span>
                <div className="banner-dots">
                  <span /><span /><span />
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <FaGithub /> Source Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>

            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/AnsariSalauddin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
