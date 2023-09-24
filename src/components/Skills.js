import React from "react";

import reactLogo from "../Assets/react.png";
import nodeLogo from "../Assets/node js.jpg";

import expressLogo from "../Assets/express js.jpg";
import sqlLogo from "../Assets/sql.jpg";

import mongodbLogo from "../Assets/mongodb.jpg";

const Skills = () => {
  const skills = [
    { name: "React", img: reactLogo },
    { name: "Node", img: nodeLogo },
    { name: "Express", img: expressLogo },
    { name: "MongoDB", img: mongodbLogo },
    { name: "SQL", img: sqlLogo },
  ];
  return (
    <div
      className=" flex-col items-center justify-center h-[100vh] bg-purple-300"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="Skills"
    >
      <div className="flex flex-col justify-center items-center mt-16">
        <span className="text-gray-600 text-xl"> What i done so far</span>
        <h2 className="text-2xl border-b-4 border-solid border-purple-950 py-1 ">My skills</h2>
      </div>
      <div className="flex flex-wrap mx-24 mt-4 ">
        {skills.map((skill, idx) => (
          <Card skill={skill} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

const Card = ({ skill }) => {
  return (
    <div className=" flex justify-around w-full lg:w-[25vw] border-2 border-dashed border-purple-950 m-2 h-15 items-center py-2 my-4 rounded-lg ">
      <img src={skill.img} alt="" className="w-[40px] h-[40px] " />
      <div className="card-name">{skill.name}</div>
    </div>
  );
};
