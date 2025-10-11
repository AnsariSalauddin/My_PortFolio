import React, { useEffect, useRef } from 'react';
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices and design patterns.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that provide exceptional user experiences.'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interactions.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating complex technical concepts clearly.'
    }
  ];

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate developer with a love for creating digital experiences
            </p>
            
            <div className="about-description">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience creating 
                digital solutions that make a difference. My journey in tech started with curiosity 
                about how websites work, and it has evolved into a deep passion for building 
                applications that solve real-world problems.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                I believe in writing clean, maintainable code and always staying up-to-date with the 
                latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* <div className="stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div> */}
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
