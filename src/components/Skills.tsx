import React from 'react';
import './Skills.css';
import { FaCheck, FaRocket } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title"> Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Programming Languages:</h3>
          <p>Java, Python, JavaScript, TypeScript</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Frameworks & Libraries:</h3>
          <p>SpringBoot, Flask, Django, React, Angular, Express</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Technologies & Tools:</h3>
          <p>Docker, Tailwind CSS, HTML, CSS, Git, Maven</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Databases:</h3>
          <p>MySql, PostgreSQL</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Version Control:</h3>
          <p>Git</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Test Frameworks:</h3>
          <p>JUnit, TestNG, Cypress</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Development Practices:</h3>
          <p>Agile Methodologies, CI/CD Pipelines, Object-Oriented Programming (OOP)</p>
        </div>
        <div className="skill-item">
          <FaCheck className="skill-icon" />
          <h3>Core Competencies:</h3>
          <p>Data Structures, Algorithms, Low level Design, System Design</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
