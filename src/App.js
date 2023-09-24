
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <hr className="border-2  border-solid border-purple-950 "></hr>
      <Projects />
      
      <hr className="border-2  border-solid border-purple-950 "></hr>
      <Skills/>
      <hr className="border-2  border-solid border-purple-950 "></hr>
      <About />
      <hr className="border-2  border-solid border-purple-950 "></hr>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
