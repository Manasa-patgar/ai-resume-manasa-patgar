import React from 'react';
import './About.css';

const resume = '../assets/Manasa_Patgar_fullstack_7yrs.pdf';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Hey, I'm Manasa Patgar</h2>
      <p className="about-content">
        A seasoned software developer with 7+ years of experience, I specialize in building clean, efficient, and impactful solutions —whether
        it's crafting user-friendly interfaces, designing robust backend systems,
        or debugging that one stubborn error. When I’m not coding, I’m balancing life as a new mom
        (my most rewarding "project" yet) and indulging in my passions for photography and storytelling.
      </p>
      <p className="about-content">
        I thrive on solving complex problems and bringing ideas to life through technology,
        all while juggling the beautiful chaos of motherhood. With a love for travel and a sharp eye for detail,
        I bring creativity and perspective to everything I do—both in work and in life.
      </p>
      <p className="about-content">
        Let’s build something amazing together (bonus points if it involves coffee)! 🚀
      </p>
      <a href={resume} download="Manasa_Patgar_fullstack_7yrs.pdf" className="btn-primary">Download Resume</a>
    </div>
  );
};

export default About;
