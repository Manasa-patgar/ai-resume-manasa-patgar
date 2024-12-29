import React from "react";
import "./Education.css";

const Education: React.FC = () => {
    return (
        <div className="education-container">
            <h2 className="education-title">Education</h2>
            <div className="education-list">
                <h3>Bachelor of Engineering</h3>
                <p><strong>CMR Institute of Technology</strong></p>
                <p>Bengaluru, Karnataka, India</p>
                <p>June 2013 - June 2017</p>
                <p>Specialization: Computer Science</p>
            </div>
            <div className="education-list">
                <h3>Pre-University</h3>
                <p><strong>Christ Junior College</strong></p>
                <p>Bengaluru, Karnataka, India</p>
                <p>June 2011 - June 2013</p>
                <p>Specialization: Science</p>
            </div>
        </div>
    );
}

export default Education;