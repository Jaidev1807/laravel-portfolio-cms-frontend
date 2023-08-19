import React, { useState, useEffect } from "react";
import "../css/Skill.css";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(
      "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/skills/user/13"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSkills(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-content">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
