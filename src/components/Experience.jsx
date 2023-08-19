import React, { useState, useEffect } from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "../css/Experience.css";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch(
      "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/experiences/user/13"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExperiences(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((experience) => (
          <div key={experience.id} className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <h3>{experience.position}</h3>
                <p className="company">{experience.company}</p>
                <p className="date">
                  <FaCalendarAlt />{" "}
                  {`${experience.start_date} - ${experience.end_date}`}
                </p>
                <p className="description">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
