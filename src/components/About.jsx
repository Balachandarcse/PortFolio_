import React from 'react';
import './About.css';
import ProfileImage from '../assets/img3.png';
const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="profile-card">
          <img src={ProfileImage} alt="Balachandar B" />
        </div>
        <div className="about-description">
          <h3>Hello, I'm <span>Balachandar B</span>!</h3>
          <p>
            I’m a passionate <span>full-stack developer</span> with a love for creating beautiful, functional, and user-friendly web and mobile applications.
          </p>
          <p>
            My expertise lies in <span>React, JavaScript, Dart, Flutter</span>, and a variety of modern tools and frameworks.
            I’m constantly exploring new technologies to stay ahead in this fast-evolving industry.
          </p>
          <p>
            In my free time, I enjoy <span>problem-solving, experimenting with new tech</span>, and collaborating on exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
