import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a  href={to} className={`mx-4 hover:underline`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
      
        
        <a className="text-xl font-semibold text-gray-700" href="/">
          SUSHANT'S PORTFOLIO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="#home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          HOME
        </a>
        <a
          className="text-xl font-medium my-4"
          href="#Skills"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          SKILLS
        </a>
        <a
          className="text-xl font-medium my-4"
          href="#projects"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          PROJECTS
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          ABOUT ME
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-purple-950 px-4 py-4 h-20 items-center fixed w-full">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-xl font-semibold  text-white" href="/">
          SUSHANT'S PORTFOLIO
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
        
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex text-white">
          <NavLink  to="#home">HOME</NavLink>
          <NavLink to="#Skills">SKILLS</NavLink>
          <NavLink to="#projects">PROJECTS</NavLink>
          <NavLink to="#about">ABOUT</NavLink>
          
          
          <NavLink to="#contact" >Contact Me</NavLink>
        </div>
      </div>
    </nav>
  );
}
