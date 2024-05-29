import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export default function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        <a
          className="linkedin"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/michal-szczepansky"
          onMouseEnter={() => setHoveredIcon("linkedin")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            color={hoveredIcon === "linkedin" ? "#007bff" : "#000"}
          />
        </a>
        <br />
        <br />
        <a
          className="github"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/szczepanskimichal"
          onMouseEnter={() => setHoveredIcon("github")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            color={hoveredIcon === "github" ? "#007bff" : "#000"}
          />
        </a>
      </div>
      <h3>
        Tel: <a href="tel:+4748660839">+47 486 60 839</a>
      </h3>
    </section>
  );
}
