import React from "react";
import "./projects.css";
import blogImg from "../Assets/blog.jpg";


const Services = () => {
  return (
    <section id="services">
      <div className="projects">
        <div className="header">
          <h1>My Projects</h1>
        </div>
        <div className="project">
          <div className="project-info">
          <h2 className="project-title">Blog APP</h2>
            <ul>
              <li>
                Developed a MERN stack blog app with user authentication using
                JWT and password hashing with bcrypt for security.
              </li>
              <li>
                Implemented CRUD operations for creating, reading, updating, and
                deleting daily life blog posts.
              </li>
              <li>
                Integrated Cloudinary for image storage and management, allowing
                users to seamlessly upload and display images in their posts.
              </li>
              <li>
                ntegrated Cloudinary for image storage and management, allowing
                users to seamlessly upload and display images in their posts.
              </li>
              <li>
                Showcase your full-stack development skills with a live demo or
                screenshots in your portfolio.
              </li>
            </ul>
          </div>
          <div className="project-img">
            <img src={blogImg} alt="" />
          </div>
        </div>
        <div className="project-rev">
          <div className="project-info">
          <h2 className="project-title">Ecommerce</h2>
            <ul>
              <li>
                Developed a MERN stack blog app with user authentication using
                JWT and password hashing with bcrypt for security.
              </li>
              <li>
                Implemented CRUD operations for creating, reading, updating, and
                deleting daily life blog posts.
              </li>
              <li>
                Integrated Cloudinary for image storage and management, allowing
                users to seamlessly upload and display images in their posts.
              </li>
              <li>
                ntegrated Cloudinary for image storage and management, allowing
                users to seamlessly upload and display images in their posts.
              </li>
              <li>
                Showcase your full-stack development skills with a live demo or
                screenshots in your portfolio.
              </li>
            </ul>
          </div>
          <div className="project-img">
            <img src={blogImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
