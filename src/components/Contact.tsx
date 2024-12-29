import React from "react";
import "./Contact.css";
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaAngular, FaPython, FaGit, FaGithub, FaGitSquare, FaFlask } from "react-icons/fa"; // Import icons from react-icons
import { SiTypescript, SiSpringboot, SiFlask, SiE } from "react-icons/si"; // Import TypeScript and SpringBoot icons from react-icons/si
import { DiDocker, DiMysql } from "react-icons/di";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title"> Manasa Dattatreya Patgar</h2>
      <div className="contact-list">
        <div className="contact-item">
          <p>manasapatgar95@gmail.com</p>
          <p>Greensboro, North Carolina, United States of America</p>
        </div>
        <p className="contact-footer">
        © 2024 manasapatgar.github.io | by Manasa D Patgar
      </p>
        <div className="contact-icons">
          <FaJava className="contact-icon" title="Java" />
          <SiTypescript className="contact-icon" title="TypeScript" />
          <FaPython className="contact-icon" title="Python" />
          <SiSpringboot className="contact-icon" title="SpringBoot" />
          <FaAngular className="contact-icon" title="Angular" />
          <FaReact className="contact-icon" title="React" />
          <SiFlask className="contact-icon" title="Flask" />
          <FaNodeJs className="contact-icon" title="Node.js" />
          <DiMysql className="contact-icon" title="Database" />
          <DiDocker className="contact-icon" title="Docker" />
          <FaGit className="contact-icon" title="Git" />
        </div>
      </div>
    </div>
  );
}

export default Contact;