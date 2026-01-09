import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";


const NavBar=()=>{
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
       <header>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className="logo">Portfolio</div>
        <div className={`menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
            <li><a href="#certifications">Certificates</a></li>
            <li>
              <a href="https://github.com/Balachandarcse" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/balachandar-b-cse" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
}

export default NavBar;