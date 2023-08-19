import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skill";
import "./App.css"; // You can create a CSS file for styling

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
