import React from "react";

import blogApp from "../Assets/blog.jpeg";
import foodieHub from "../Assets/foodiehub.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";

const blogAppTechStack = [
  "React",
  "Redux-Toolkit",
  "Node",
  "Express",
  "MongoDB",
];
const foodieHubTechStack = ["React", "Redux-Toolkit", "Tailwindcss"];
const Projects = () => {
  return (
    <div
      className="h-auto lg:h-[100vh] bg-violet-100 px-10"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="projects"
    >
      <hr className="box-border h-2 bg-blue-200 mt-10"></hr>

      <h1 className="flex justify-center text-2xl border-b-4 border-solid border-purple-950 py-1 ">
        My Projects
      </h1>

      <Project img={blogApp} tech={blogAppTechStack} name={"Blog App"} />
      <hr className="box-border h-2 bg-blue-200 mt-2"></hr>

      <Project img={foodieHub} tech={foodieHubTechStack} name={"Foodie-Hub"} />
      <hr className="box-border h-2 bg-blue-200 mt-2"></hr>
    </div>
  );
};

export default Projects;

const Project = ({ img, tech, name }) => {
  return (
    <div className="flex   flex-wrap m-6">
      <div className=" h-[25vh] w-full lg:w-[25vw]">
        <img
          className="h-full w-full lg:w-[100%] mr-4 rounded-lg"
          src={img}
          alt="project-img "
        />
      </div>
      <div className="flex flex-col w-[60vw]">
        <h2 className="flex items-center justify-center py-2  lg:justify-start lg:ml-4 font-bold text-gray-800 w-full">
          {name}
        </h2>
        <div className="flex flex-wrap">
          {tech.map((t) => (
            <span className="bg-violet-700 p-1 rounded-lg text-white m-2">
              {t}
            </span>
          ))}
        </div>
        <div className="flex">
          <div className="flex items-center m-2">
            <span>
              <AiFillGithub />
            </span>
            <span className="text-lg ml-1 cursor-pointer">
              <a
                href="https://github.com/sushant042000?tab=repositories"
                target="_blank"
              >
                Github
              </a>
            </span>
          </div>
          <div className="flex items-center m-2">
            <span>
              <CgMediaLive />
            </span>
            <span className="text-lg ml-1 cursor-pointer">
              <a href="https://sushant-foodiehub.netlify.app/" target="_blank">
                Live
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
