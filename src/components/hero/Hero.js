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
        <p>
          My name is Michał Szczepański, and I am a Full-Stack Developer with a
          passion for creating innovative, scalable web applications.
        </p>
        <p>
          From frontend to backend, my projects combine advanced technology with
          intuitive design to deliver the best possible user experiences.
        </p>
        <p>
          Browse my portfolio to see how I can help bring your ideas to life.
        </p>
      </div>
      <div className="hero-image">
        <img src="/michalZdjecie.png" alt="michal.png" />
      </div>
    </section>
  );
}
