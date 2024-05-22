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
        <p>As I said, I am your friendly neighbourhood osm developer...</p>
        <p>
          I am a passionate self-taught developer... I have an experience of
          about 4 years and had a deep understanding of creating web products.
        </p>
      </div>
    </section>
  );
}
