import React, { useState, useEffect } from "react";
// import "./Projects.css"; // Update this CSS file for styling

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl =
      "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/projects";

    // Define headers
    const headers = new Headers();
    headers.append("user-id", "13");

    // Fetch data from the API
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
