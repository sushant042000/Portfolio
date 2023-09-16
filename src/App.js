import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <hr></hr>
      <Skills/>
      <hr></hr>
      <Services />
      <hr></hr>
      <About />
      <hr></hr>
      <Contact />
     
      <Footer />
    </div>
  );
}

export default App;
