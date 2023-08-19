import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
// import Education from "./Education";
// import Skills from "./Skills";
// import Footer from "./Footer";
import "./App.css"; // You can create a CSS file for styling

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Projects />
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
