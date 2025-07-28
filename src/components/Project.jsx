import React, { useState } from 'react';
import './Project.css';

import BMI from '../assets/BMI.jpg';
import ClimateChecker from '../assets/climate_checker.jpeg';
import HealthInsurance from '../assets/healthInsurance.png';
import Xylophone from '../assets/Xylophone.jpg'
import MarioJuicy from '../assets/Mario.png'
import AiExplorer from '../assets/AI-Explorer.png'
import ChatbotDevOps from '../assets/Chatbot.png'
const projectData = { 
  'Mobile App Development': [
    {
      title: 'BMI Calculator (Flutter)',
      description: `A sleek BMI Calculator using Flutter that calculates and classifies body weight.`,
      img: BMI,
      link: 'https://github.com/Balachandarcse/BMI_Calc',
    },
    {
      title: 'Climate Checker (Flutter)',
      description: `Weather app built with Flutter and OpenWeather API for real-time updates.`,
      img: ClimateChecker,
      link: 'https://github.com/Balachandarcse/Climate_checker',
    },
    {
      title: 'Xylophone (Flutter)',
      description: `This is a simple and interactive mobile application built using Flutter that simulates a real-life xylophone. The app consists of colorful keys, each corresponding to a different musical note. When a user taps a key, the corresponding sound is played, offering a fun and engaging way to explore musical notes and sounds.`,
      img: Xylophone,
      link: 'https://github.com/Balachandarcse/Xylophone.git',
    },
  ],
  'Console Applications': [
    {
      title: 'Health Insurance Management (Java)',
      description: `Java + MySQL console-based system to manage insurance policies and users.`,
      img: HealthInsurance,
      link: 'https://github.com/Balachandarcse/HealthIsurance-management',
    },
  ],
  'MERN Stack Projects': [
    {
  title: 'AI Explorer',
  description: `MERN stack web app to explore AI tools and to learn how to use those tools.`,
  img: AiExplorer, 
  link: 'https://github.com/Balachandarcse/AI-Explorer.git',
},
{
  title: 'MarioJuicy',
  description: `A dynamic MERN stack juice ordering platform with user authentication and order management.`,
  img: MarioJuicy,
  link: 'https://github.com/Balachandarcse/MarioJuicy.git',
},

  ],
  'DevOps Projects': [
    {
  title: 'Chatbot Deployment (Spring Boot + DevOps)',
  description: `Spring Boot chatbot app containerized with Docker, deployed via CI/CD on AWS EC2 using Jenkins and TomCat.`,
  img: ChatbotDevOps,
  link: 'https://github.com/Balachandarcse/DevOps-Chat-Bot.git',
},

  ],
};

const MAX_VISIBLE = 3;

const Projects = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      {Object.entries(projectData).map(([category, projects]) => (
        <div className="project-category" key={category}>
          <h3 className="project-category-title">{category}</h3>
          <div className="project-grid">
            {(expandedCategories[category] ? projects : projects.slice(0, MAX_VISIBLE)).map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.img} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
          {projects.length > MAX_VISIBLE && (
            <div className="toggle-btn-wrapper">
              <button className="toggle-btn" onClick={() => toggleCategory(category)}>
                {expandedCategories[category] ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
