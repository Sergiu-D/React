import Hero from "./Components/Sections/Hero";
import AboutMe from "./Components/Sections/AboutMe";
import Projects from "./Components/Sections/Projects";
import Skills from "./Components/Sections/Skills";
import Contact from "./Components/Sections/Contact";

import bg from "./img/fullHd-bg-min.png";

import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <div
        className="background"
        style={{
          backgroundColor: "hsl(0,3%, 20%)",
        }}
      >
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
