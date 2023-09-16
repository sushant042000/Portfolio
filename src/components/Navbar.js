import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <h2>Sushant Portfolio</h2>
      <ul className="list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#Skills">My Skills</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
       
        <li>
          <a href="#services">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
