import React, { useState } from 'react';
import './Project.css';
//development
import flutter from '../assets/Certificates/development/Flutter.png'
import hackerRank_b from '../assets/Certificates/development/hackerRank_basics.png'
import hackerRank_i from '../assets/Certificates/development/hackerRank_intermediate.png'
import infosys_MERN from '../assets/Certificates/development/Infosys_MERN.png'
import infosys_mongodb from '../assets/Certificates/development/infosys_mongodb.png'
import infosys_react from '../assets/Certificates/development/infosys_React.png'
import networking_basics from '../assets/Certificates/development/networking_basics.png'
//DSA certificates
import algoComp from '../assets/Certificates/DSA/Algo_competitive.png'
import algoTC from '../assets/Certificates/DSA/Algo_TC.png'
import javaSK from '../assets/Certificates/DSA/java_skillrack.jpg'
import NPTEL_cpp from '../assets/Certificates/DSA/NPTEL_cpp.png'
import NPTEL_java from '../assets/Certificates/DSA/NPTEL_java.png'
import udemy_c from '../assets/Certificates/DSA/udemy_c.png'
import udemy_java from '../assets/Certificates/DSA/udemy_java.png'
import udemy_cpp from '../assets/Certificates/DSA/udemy_cpp.png'
//internship certificates
import devops from '../assets/Certificates/Internships/devOps.jpg'
import mern from '../assets/Certificates/Internships/MERN.png'
//competitions
import buildathon from '../assets/Certificates/competitions/Buildathon.png'
import codelee from '../assets/Certificates/competitions/CodeLee.jpeg'
import creatathon from '../assets/Certificates/competitions/Creatathon.jpeg'
import flipkart from '../assets/Certificates/competitions/Flipkart_grid.jpeg'
import django from '../assets/Certificates/competitions/Django.jpeg'
import java_leap from '../assets/Certificates/competitions/Java_leap.jpeg'
import navikshaa from '../assets/Certificates/competitions/navikshaa.jpeg'
const certificateData = {
  'InternShips': [
    {
      title: 'DevOps',
      description: `Built and deployed a chatbot application using Spring Boot and Maven, reducing response latency by 40%. Containerized with Docker, pushed to Docker Hub, and deployed on Apache Tomcat for 24/7 production access. Configured CI/CD pipelines, and managed scalable infrastructure on AWS EC2 with VPC and Nginx, supporting 1,000+concurrent users.`,
      img: devops,
      link: 'https://drive.google.com/file/d/1agvec6jfgk4moYXSr9t5WtKmit5ndAtr/view?usp=drive_link',
    },
    {
      title: 'MERN',
      description: `Built a full-stack MERN application with 10+ RESTful APIs, improving data retrieval speed by 30%. Integrated frontend/backend, implemented JWT authentication for secure sessions, and used React Hooks, Redux, and MongoDB aggregations to manage dynamic data for 1,000+ users.`,
      img: mern,
      link: 'https://drive.google.com/file/d/1UPVLr6UE3k7LxM-CZlwOAW-RT_LPcnMl/view?usp=drive_link',
    },
  ],
  'DSA': [
    {
      title: 'Master C++ for Competitive Coding (MAANG)',
      description: `Developed advanced C++ skills and problem-solving techniques for competitive programming and coding interviews.`,
      img: algoComp,
      link: 'https://drive.google.com/file/d/102Zfb9BS1FJmo9tUpoQhA_L_1CPHH6Xu/view?usp=drive_link',
    },
    {
      title: 'Time Complexity Series (MAANG)',
      description: `Gained a strong understanding of time and space complexity analysis to optimize algorithms efficiently.`,
      img: algoTC,
      link: 'https://drive.google.com/file/d/1wKolhV6OcGC8iJsBY-yx_HHMwQ3w2FNX/view?usp=drive_link',
    },
    {
      title: 'Java Basics – Programming Course (Hands-On) (Skill Rack)',
      description: `Practiced core Java fundamentals through hands-on coding exercises to build a strong programming foundation.`,
      img: javaSK,
      link: 'https://drive.google.com/file/d/1wXDTnRc3Nm4LBmvgIk1RSRWNii5agzhR/view?usp=drive_link',
    },
    {
      title: 'Programming in Modern C++ (NPTEL – IIT Kharagpur)',
      description: `Learned modern C++ concepts including OOP, STL, memory management, and efficient programming practices.`,
      img: NPTEL_cpp,
      link: 'https://drive.google.com/file/d/1DRm0XslMookUr1p1wz8puEiLeBTphv0s/view?usp=drive_link',
    },
    {
      title: 'Data Structures and Algorithms using Java (NPTEL – IIT Kharagpur)',
      description: `Built a solid foundation in data structures and algorithms using Java, with practical problem-solving and performance analysis.`,
      img: NPTEL_java,
      link: 'https://drive.google.com/file/d/1v6Rs1PtQUy_XGawS_amOgeZimVLpjjD9/view?usp=drive_link',
    },
    {
      title: 'C Programming Masterclass: Pointers & Advanced C Language (Udemy)',
      description: `Gained in-depth knowledge of C programming with a strong focus on pointers, memory management, and advanced concepts.`,
      img: udemy_c,
      link: 'https://drive.google.com/file/d/1Ey5GgfDqdArJpc3LO7hObtVgVl21MTc4/view?usp=drive_link',
    },
    {
      title: 'Mastering Data Structures & Algorithms using C and C++ (Udemy)',
      description: `Strengthened problem-solving skills by implementing core data structures and algorithms in C and C++.`,
      img: udemy_cpp,
      link: 'https://drive.google.com/file/d/1cm8jRKonXXhIJHP3CRdXiKN6-6dyCiZb/view?usp=drive_link',
    },
    {
      title: 'Learn Java Programming – Beginner to Master (Udemy)',
      description: `Gained end-to-end Java programming knowledge, from fundamentals to object-oriented and advanced concepts.`,
      img: udemy_java,
      link: 'https://drive.google.com/file/d/1c3mytMf6Nl3pIpCsXmW5EXLmVVyN31u7/view?usp=drive_link',
    },
  ],
  'Competitions': [
    {
      title: 'Buildathon',
      description: `Secured first place in intra college coding competition.`,
      img: buildathon,
      link: 'https://drive.google.com/file/d/1YJ1Y2KuMWSlNqnAcwOlp_w49cppt41vn/view?usp=drive_link',
    },
    {
      title: 'LeetCode Achievement – 2nd Position (Sri Eshwar College of Engineering)',
      description: `Secured second position for outstanding performance on the LeetCode coding platform during the academic year.`,
      img: codelee,
      link: 'https://drive.google.com/file/d/1ITcX5gTSAOpp4bqGf2Wso_DNlz3yXBUn/view?usp=drive_link',
    },
    {
      title: 'Industry-Powered Creathon – PortfolioFest (Sri Eshwar College of Engineering)',
      description: `Participated in an industry-driven hackathon focused on building and showcasing project portfolios.`,
      img: creatathon,
      link: 'https://drive.google.com/file/d/18ONRN5u8Zd8HwCnZFLdvJhuL0lLA6Ic9/view?usp=drive_link',
    },
    {
      title: 'Flipkart GRID 6.0 – E-Commerce & Tech Quiz (Unstop)',
      description: `Participated in Flipkart GRID 6.0, demonstrating knowledge in e-commerce technologies and software development.`,
      img: flipkart,
      link: 'https://drive.google.com/file/d/1ze52y4pq42leo5CHzUyai-9AoyRemMk0/view?usp=drive_link',
    },
    {
      title: 'Project-Based Learning: Web Development using Django (Tech Connect 2024)',
      description: `Participated in a project-based workshop focused on building web applications using Django and Python.`,
      img: django,
      link: 'https://drive.google.com/file/d/1KmSplYcmYU6THl52PIgQaKS1eDZPDEju/view?usp=drive_link',
    },
    {
      title: 'Project LEAP – Java DB Sprint Week 2024 (Industry-Powered)',
      description: `Engaged in an industry-driven sprint developing Java applications with database integration and real-world workflows.`,
      img: java_leap,
      link: 'https://drive.google.com/file/d/1QUsCLCdNBEVb25ndhj9iWM2xEx1Uk7pF/view?usp=drive_link',
    },
    {
      title: 'Navikshaa Dev Battleground – Hackathon (Navikshaa Technologies)',
      description: `Participated in a competitive hackathon, showcasing problem-solving skills, teamwork, and innovative thinking.`,
      img: navikshaa,
      link: 'https://drive.google.com/file/d/1ftB9FZDqdekhVmwXEO2jaZvtZnbJikXA/view?usp=drive_link',
    },

  ],
  'development': [
    {
      title: 'The Complete Flutter Development Bootcamp with Dart (Udemy)',
      description: `Built cross-platform mobile applications using Flutter and Dart with hands-on projects and real-world practices.`,
      img: flutter,
      link: 'https://drive.google.com/file/d/1edoncO2aCASqDEt1VYMygrf38M9tsbKS/view?usp=drive_link',
    },
    {
      title: 'SQL (Basic) – HackerRank',
      description: `Validated core SQL skills including SELECT queries, filtering, sorting, and basic database operations.`,
      img: hackerRank_b,
      link: 'https://drive.google.com/file/d/1ElGw3YdEDGIkQ_JUDY6arFZgbiM9rbSZ/view?usp=drive_link',
    },
    {
      title: 'SQL (Intermediate) – HackerRank',
      description: `Demonstrated proficiency in writing complex SQL queries, joins, subqueries, and data analysis operations.`,
      img: hackerRank_i,
      link: 'https://drive.google.com/file/d/1Xx7BukcRpSrRq6G5tmqjMTakLvCDZNfB/view?usp=drive_link',
    },
    {
      title: 'Advanced MERN Development (Infosys Springboard)',
      description: `Developed full-stack web applications using the MERN stack with a focus on scalable and modern development practices.`,
      img: infosys_MERN,
      link: 'https://drive.google.com/file/d/19aiW2cxG4oINPVnR6MXXRXOkHAZw0TMU/view?usp=drive_link',
    },
    {
      title: 'MongoDB (Infosys Springboard)',
      description: `Learned NoSQL database concepts and performed CRUD operations using MongoDB for backend application development.`,
      img: infosys_mongodb,
      link: 'https://drive.google.com/file/d/1qQZn5HZjg6U2hGXmjaN_CExewfYAwfg1/view?usp=drive_link',
    },
    {
      title: 'Learning React (Infosys Springboard)',
      description: `Learned React fundamentals such as components, state management, hooks, and building dynamic user interfaces.`,
      img: infosys_react,
      link: 'https://drive.google.com/file/d/1ZI6QBAYFVDxMV3e8BWVEblMzoBH1ULMy/view?usp=drive_link',
    },
    {
      title: 'SQL – Basics (Standard) (Skill Rack)',
      description: `Learned essential SQL concepts including queries, filtering, and basic database operations.`,
      img: algoComp,
      link: 'https://drive.google.com/file/d/1-QrJYghfq7FHkxJj4PHCPrFb-22wZ49r/view?usp=drive_link',
    },
    {
      title: 'Networking Basics (Cisco Networking Academy)',
      description: `Gained foundational knowledge of computer networks, protocols, IP addressing, and network troubleshooting.`,
      img: networking_basics,
      link: 'https://drive.google.com/file/d/1IAOG3XyuqE43Pgh_wfaMwIE3d5mc4N9p/view?usp=drive_link',
    },

  ],
};

const MAX_VISIBLE = 3;

const Certificates = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section className="projects" id="certifications">
      <h2 className="section-title">Certificates</h2>

      {Object.entries(certificateData).map(([category, projects]) => (
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
                    View Certificate
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

export default Certificates;
