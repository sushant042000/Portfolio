import React from "react";

const About = () => {
  return (
    <div
      className="h-[100vh] flex items-center justify-center flex-col py-4 bg-violet-100"
      id="about"
    >
      <h1 className="text-2xl border-b-4 border-solid border-purple-950 py-1">
        About Me
      </h1>

      <p className="  px-4 lg:px-52 text-xl mt-4 text-purple-950">
        I'm Sushant, a passionate and dedicated Fullstack software developer
        with expertise in React, Node.js, Express, MongoDB, and SQL. I
        specialize in building web applications (Frontend and Backend) and have
        internship experience in web devlopement. My goal is to help businesses
        grow through technology.
      </p>
    </div>
  );
};

export default About;
