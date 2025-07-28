import React from 'react';
import './Skills.css';

import C from '../assets/C.webp';
import CPP from '../assets/cpp.webp';
import Python from '../assets/python.webp';
import Java from '../assets/java.webp';
import ReactLogo from '../assets/react.png';
import JS from '../assets/js.webp';
import Dart from '../assets/dart.png';

import Figma from '../assets/figma.png';
import Flutter from '../assets/flutter.png';
import VSCode from '../assets/vsCode.webp';
import Canva from '../assets/canva.webp';
import Git from '../assets/git.webp';
import GitHub from '../assets/github.webp';
import AndroidStudio from '../assets/Android_Studio.webp';

import MySQL from '../assets/SQL.webp';
import MongoDB from '../assets/mongodb.jpeg';
import Firebase from '../assets/firebase.png';

const skills = {
  'Programming Languages': [
    { name: 'C', level: 'Intermediate', img: C },
    { name: 'C++', level: 'Intermediate', img: CPP },
    { name: 'Python', level: 'Basics', img: Python },
    { name: 'Java', level: 'Advanced', img: Java },
    { name: 'React', level: 'Intermediate', img: ReactLogo },
    { name: 'JavaScript', level: 'Intermediate', img: JS },
    { name: 'Dart', level: 'Advanced', img: Dart },
  ],
  'Tools and Technologies': [
    { name: 'Figma', img: Figma },
    { name: 'Flutter', img: Flutter },
    { name: 'VS Code', img: VSCode },
    { name: 'Canva', img: Canva },
    { name: 'Git', img: Git },
    { name: 'GitHub', img: GitHub },
    { name: 'Android Studio', img: AndroidStudio },
  ],
  'Databases': [
    { name: 'MySQL', level: 'Advanced', img: MySQL },
    { name: 'MongoDB', level: 'Intermediate', img: MongoDB },
    { name: 'Firebase', level: 'Intermediate', img: Firebase },
  ],
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <div className="skill-icons">
              {items.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <img src={skill.img} alt={skill.name} />
                  <p>
                    {skill.name}
                    {skill.level && <><br />({skill.level})</>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
