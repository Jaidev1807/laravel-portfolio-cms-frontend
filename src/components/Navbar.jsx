import React from "react";
import "../css/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="name">Jaidev Patel</span>
      </div>
      <div className="navbar-right">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#footer">About</a>
      </div>
    </nav>
  );
}
