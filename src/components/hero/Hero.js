import React from "react";
import "./Hero.css"; // Zaimportuj plik CSS tutaj

export default function Hero() {
  // Komponent bezpośrednio używa klas CSS zdefiniowanych w zewnętrznym pliku
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <div>
          <h4>Hi and welcome to</h4>
          <h2>My Portfolio Website</h2>
        </div>
        <p>I am your friendly neighbourhood osm developer...</p>
      </div>{" "}
      <div className="hero-image">
        <img src="./logo.png" alt="Hello.svg" />
      </div>
    </section>
  );
}
