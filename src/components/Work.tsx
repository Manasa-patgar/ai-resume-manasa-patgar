import React from 'react';
import './Work.css';
import { FaBriefcase } from 'react-icons/fa';

const Work: React.FC = () => {
  return (
    <div className="work-container">
      <h2 className="work-title"> Work Experience</h2>
      <div className="work-list">
        <div className="work-item">
          <h3>Senior Software Engineer</h3>
          <p><strong>Manhattan Associates</strong></p>
          <p>Atlanta, Georgia, US |  June 2023 - Present</p>
          <p><em>Domain: Omnichannel Retail Solution | Project(s): Point of Sale</em></p>
          <ul>
            <li>Spearheaded the development of various features on both backend and frontend development of a cloud-based POS product utilizing technologies like SpringBoot, Java, TypeScript, Tailwind CSS, Docker, and MySQL.</li>
            <li>Contributed to technical decision-making, improving application architecture and maintaining code quality.</li>
            <li>Mentored junior developers, conducted peer code reviews fostering a culture of continuous learning and best practices.</li>
            <li>Worked on various functional components like promotions, pricing, payments, catalogs etc.</li>
            <li>Automated deployment pipelines using CI/CD practices, reducing delivery times and improving system reliability.</li>
          </ul>
        </div>
        <div className="work-item">
          <h3>Senior Software Engineer</h3>
          <p><strong>Manhattan Associates</strong></p>
          <p>Bengaluru, India | August 2019 - April 2023</p>
          <p><em>Domain: Omnichannel Retail Solution | Project(s): Point of Sale</em></p>
          <ul>
            <li>Developed and implemented features for a supply chain-focused POS product using agile methodologies.</li>
            <li>Designed and optimized RESTful APIs, ensuring scalability and integration across microservices.</li>
            <li>Delivered projects within Scrum environments, focusing on high-quality, well-documented solutions.</li>
            <li>Actively participated in design, testing, and automation phases of the software lifecycle.</li>
            <li>Enhanced codebase quality by implementing object-oriented programming principles and CI/CD workflows.</li>
          </ul>
        </div>
        <div className="work-item">
          <h3>Software Engineer</h3>
          <p><strong>Subex</strong></p>
          <p>Bengaluru, India | July 2017 - August 2019</p>
          <p><em>Domain: Telecommunications Solution | Project(s): Revenue Assurance</em></p>
          <ul>
            <li>Assisted in the development and configuration of product modules, gaining hands-on experience with software engineering principles.</li>
            <li>Collaborated with senior developers to troubleshoot and resolve technical issues, ensuring timely delivery of high-quality solutions.</li>
            <li>Participated in team meetings to learn Agile methodologies and improve coding practices.</li>
            <li>Documented technical processes and supported module implementations, contributing to enhanced system usability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
