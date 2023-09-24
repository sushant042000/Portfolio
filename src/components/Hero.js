import React, { useEffect } from "react";

import profile from "../Assets/profile.jpg";
import Typed from "typed.js";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-around flex-wrap h-[100vh] p-2 bg-purple-500"
      id="home"
    >
      <div className="">
        <p className="text-white text-4xl ">
          Hii , My Name is{" "}
          <span className=" font-bold text-4xl" style={{ color: "purple" }}>
            Sushant
          </span>{" "}
        </p>
        <p className="text-4xl text-white mb-4">
          I am passionate{" "}
          <span className="text-purple-950 font-bold text-4xl ">
            {" "}
            {<TypingAnimation />}
          </span>
        </p>
        <div className="flex gap-4 text-4xl">
          <a href="https://www.linkedin.com/in/sushant-bailkar" target="_blank">
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/sushant042000?tab=repositories"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/15kvij8-ln6ZAy2LyDrUWKr7RPi0Wv5a9/view?usp=drive_link"
           target="_blank"
          >
            <AiOutlineCloudDownload />
          </a>
        </div>
      </div>
      <div className="rounded-full">
        <img
          className=" w-[40vw] lg:w-[20vw] rounded-full"
          src={profile}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

//typed js
const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Devloper", "Node Devloper", "React Devloper"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typing-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="typing-element" style={{ color: "purple" }}></span>
    </div>
  );
};
