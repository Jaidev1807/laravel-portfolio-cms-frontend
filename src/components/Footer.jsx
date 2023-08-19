import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact">
        <div className="contact-item">
          <FaEnvelope />
          <span>jaidevpatel1807@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone />
          <span>+1 (437)-477-4287</span>
        </div>
        <div className="contact-item">
          <FaGithub />
          <span>https://github.com/Jaidev1807</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>Toronto , Canada</span>
        </div>
      </div>
      <div className="footer-about">
        <h3>Jaidev Patel</h3>
        <p>
          Curating the digital landscape with code, I'm a web developer who
          <br />
          thrives on unraveling the intricate threads of the online world
        </p>
        <p>
          With an insatiable curiosity and a keyboard as my compass, I navigate
          <br />
          the realms of web development, weaving innovation into every pixel and
          line of code
        </p>
      </div>
    </footer>
  );
}
