import React from "react";
import "./card.css";
import reactLogo from "../Assets/react.png";

const Card = ({skill}) => {
  
  return (
    <div className="card">
      <div className ="card-img">
        <img src={skill.img} alt="" />
      </div>
      <div className ="card-name">{skill.name}</div>
    </div>
  );
};

export default Card;
