import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Devloper","Node Devloper","React Devloper"],
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
      <span className="typing-element" style={{color:"purple"}}></span>
    </div>
  );
};

export default TypingAnimation;
