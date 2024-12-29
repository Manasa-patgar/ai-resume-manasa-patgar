import React from "react";
import "./Projects.css";    

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-list">
                <h3>Github Portfolio</h3>
                <p><strong>You are currenlty viewing this project!</strong></p>
                <p>Feel free to checkout the repository for more info</p> 
            </div>
            <div className="projects-list">
                <h3>Smart Kitchen App</h3>
                <p><strong>This project is work in progress</strong></p>
                <p>AI-based suggestions for recipes based on groceries in the list.</p> 
            </div>
            <div className="projects-list">
                <h3>Food Ordering Application</h3>
                <p><strong>A simple Java, Spring boot project to order food from the list of available restraunts</strong></p>
            </div>
            <div className="projects-list">
                <h3>Vending Machine Application</h3>
                <p><strong>A simple Java project which keeps the inventory of items, shows the list of available items</strong></p>
                <p>Alllows the user to enter the amount and dispense the item</p>
            </div>
        </div>
        );
    };
    
    export default Projects;