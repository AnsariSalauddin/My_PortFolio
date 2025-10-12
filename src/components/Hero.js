import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Salauddin Ansari</h1>
            <h2 className="hero-title">
              <span className="title-line">Java Spring Boot</span>
              <span className="title-line">Developer</span>
            </h2>
            {/* <p className="hero-description">
              I create beautiful, responsive web applications using modern technologies. 
              Passionate about clean code, user experience, and continuous learning.
            </p> */}
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/AnsariSalauddin" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/salauddin-ansari-560468238/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
               <div className="profile-image">
                 <img 
                   src={require('../assest/SalauddinImage.jpg')} 
                   alt="Salauddin Ansari" 
                   className="profile-img"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="image-placeholder" style={{display: 'none'}}>
                   <span>Salauddin Ansari</span>
                 </div>
               </div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
