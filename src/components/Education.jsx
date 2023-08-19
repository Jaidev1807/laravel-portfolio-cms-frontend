import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "../css/Education.css";

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch(
      "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/educations/user/13"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEducation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="major">{edu.major}</p>
              <p className="date">
                <FaCalendarAlt /> {`${edu.start_date} - ${edu.end_date}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
