import React from "react";
import "./Skills.css"; // Import pliku CSS

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Redux",
    "React-Native",
    "Electron",
    "Node.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Express",
    "MongoDb",
    "PostgreSQL",
    "Postman",
    "Insomnia",
    "Git",
    "Bash",
    "Unit Testing",
    "Docker",
    "JIRA",
  ];
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
