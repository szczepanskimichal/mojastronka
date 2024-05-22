import React from "react";
import "./About.css"; // Zaimportuj plik CSS tutaj

export default function About() {
  return (
    <section id="about">
      <div className="flex-1">
        <img
          src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
          alt="About"
        />
      </div>
      <div className="flex-1 flex">
        <div>
          <h2>About Me :</h2>
        </div>
        <p>
          I'm a Full-Stack Developer with nearly two years of experience in
          creating dynamic and responsive web applications. My expertise spans a
          wide range of technologies and tools, which I use to deliver
          high-quality, scalable solutions.
        </p>
      </div>
    </section>
  );
}
