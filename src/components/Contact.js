import React from 'react';
import "./contact.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch or have any questions, feel free to reach out:</p>
        
        <ul>
          <li>Email: sushantbailkar2504@gmail.com</li>
          <li>Mobile Number:9637491306 </li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/sushant-bailkar">LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/sushant042000?tab=repositories">GitHub Profile</a></li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
