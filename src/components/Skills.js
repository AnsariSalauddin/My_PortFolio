import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute('data-width');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 75 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Hibernate', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 50 },
        // { name: 'AWS', level: 65 },
        // { name: 'Figma', level: 80 },
        // { name: 'Linux', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill" 
                        data-width={`${skill.level}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technologies">
          <h3 className="technologies-title">Technologies I Use</h3>
          <div className="tech-grid">
            <div className="tech-item">Java</div>
            <div className="tech-item">Spring Boot</div>
            <div className="tech-item">Spring Security</div>
            <div className="tech-item">Spring Data JPA</div>
            <div className="tech-item">Hibernate</div>
            <div className="tech-item">MongoDB</div>
            <div className="tech-item">MySQL</div>
            <div className="tech-item">RESTful API</div>
            <div className="tech-item">Git</div>
            <div className="tech-item">Docker</div>
            <div className="tech-item">Postman</div>
            <div className="tech-item">JWT</div>
            <div className="tech-item">HTML</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
