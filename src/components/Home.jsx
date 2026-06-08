import React from "react";
import "./Home.css";
import img from "../assets/img.jpg"; 
import resumePDF from "../assets/23CS029_Balachandar B.pdf";
const Home=()=>{
  return (
    <section className="hero" id="hero">
      <div className="content">
        <div className="image">
          <img src={img} alt="Balachandar" />
        </div>
        <div className="intro">
          <h1>Hi!</h1>
          <h2>Welcome to My Portfolio</h2>
          <p>
            I’m <strong>Balachandar</strong>, an Aspiring{" "}
            <strong>Full-Stack Developer</strong> passionate about building
            dynamic web and mobile applications.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-resume">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;