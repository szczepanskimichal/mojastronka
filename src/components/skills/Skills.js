import React from "react";
import "./Skills.css"; // Import pliku CSS

export default function Skills() {
  const skills = ["Python", "HTML", "CSS", "Javascript", "React", "NextJs"];
  return (
    <section id="skills">
      <h2>My Skills...</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
