import React from "react";
import "./Navbar.css"; // Importujemy plik CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Zmieniono h3 na a + img dla logo */}
        <a href="#top" className="logo">
          <img src="/path/to/your/logo.png" alt="Logo" className="logo-img" />
        </a>
        <ul className="ul">
          <li className="li">
            <a className="a" href="#about">
              About
            </a>
          </li>
          <li className="li">
            <a className="a" href="#skills">
              Skills
            </a>
          </li>
          <li className="li">
            <a className="a" href="#projects">
              Projects
            </a>
          </li>
          <li className="li">
            <a className="a" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
