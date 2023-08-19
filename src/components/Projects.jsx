import React, { useState, useEffect } from "react";
import "../css/Project.css";

export default function Projects() {
  const [project, setProject] = useState([]); // Initialize project as an array
  useEffect(() => {
    fetch(
      "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/projects/user/13"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProject(data); // Set the whole array of projects
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {project.map(
          (
            proj // Change projects.map to project.map
          ) => (
            <div key={proj.id} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
}
