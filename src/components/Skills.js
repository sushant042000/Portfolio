import React from "react";
import "./Skills.css";
import reactLogo from "../Assets/react.png";
import nodeLogo from "../Assets/node js.jpg";

import expressLogo from "../Assets/express js.jpg";
import sqlLogo from "../Assets/sql.jpg";

import mongodbLogo from "../Assets/mongodb.jpg";
import Card from "./Card.js";



const Skills = () => {
  const skills = [
    { name: "React", img: reactLogo },
    { name: "Node", img: nodeLogo },
    { name: "Express", img: expressLogo },
    { name: "MongoDB", img: mongodbLogo },
    { name: "SQL", img: sqlLogo },
  ];
  return (
    <section id="Skills">
      <div className="skills">
        <div className="skills-header">
        <span className="text-gray"> What i done so far</span>
        <h2>My skills</h2>
        </div>
        <div className="skills-wrapper">
          {skills.map((skill, idx) => (
            <Card skill={skill} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
