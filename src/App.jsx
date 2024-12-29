import React, { useState } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import About from "./components/About"; // Corrected import statement
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import profilePic from './assets/ProfilePic.jpg'; // Ensure this path is correct
import { PiUserCirclePlusFill } from "react-icons/pi";
import SendEmail from "./components/SendEmail";
import Projects from "./components/Projects";
import Education from "./components/Education";

const App = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSkillsClick = () => {
    setShowSkills(true);
    setShowWork(false);
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleWorkClick = () => { 
    setShowSkills(false);
    setShowWork(true);
    document.getElementById('work').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const handleProjectsClick = () => {
    setShowWork(false);
    setShowSkills(false);
    setShowProjects(true);
    setShowEducation(false);
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleEducationClick = () => {
    setShowWork(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowEducation(true);
    document.getElementById('education').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContactClick = () => {
    setShowWork(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowEducation(false);
    setShowContact(true);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/manasa-d-patgar-9584469b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Manasa-patgar" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <SendEmail />
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1><PiUserCirclePlusFill /> MANASA PATGAR</h1> {/* Icon added to the left of h1 */}
          <nav>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => { setShowSkills(false); setShowWork(false); }}>Home</a></li>
              <li><a href="#skills" onClick={handleSkillsClick}>Skills</a></li>
              <li><a href="#work" onClick={handleWorkClick}>Work</a></li>
              <li><a href="#projects" onClick={handleProjectsClick}>Projects</a></li>
              <li><a href="#education" onClick={handleEducationClick}>Education</a></li>
              <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <About /> {/* This is the About component */}
          </div>
          <div className="hero-image">
            <img src={profilePic} alt="Manasa Patgar" />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`skills-section ${showSkills ? 'scrollIn' : ''}`}>
          <Skills />
        </section>

        {/* Work Section */}
        <section id="work" className={`work-section ${showWork ? 'scrollIn' : ''}`}>
          <Work />
        </section>

        {/* Projects Section */}
        <section id="projects" className={`projects-section ${showProjects ? 'scrollIn' : ''}`}>
         <Projects />
        </section>
        
        {/* Education Section */}
        <section id="education" className={`education-section ${showEducation ? 'scrollIn' : ''}`}>
          <Education/>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`contact-section ${showContact ? 'scrollIn' : ''}`}>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
