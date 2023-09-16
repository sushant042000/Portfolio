import React from "react";
import "./Hero.css";
import profile from "../Assets/profile.jpg";

import TypingAnimation from "./Typinganimation";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-left-section">
          <p>
            {" "}
            Hii , My Name is <span className="purple">Sushant</span>{" "}
          </p>
          <p>I am passionate {<TypingAnimation />}</p>
        </div>
        <div className="hero-right-section">
          <img src={profile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
