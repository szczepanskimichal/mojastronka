import React from "react";
import "./Projects.css"; // Import pliku CSS

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <a href="https://flowers-shop.p.goit.global/index.html">
          <img src="/images/anemone.png" alt="Anemone" />
        </a>
        <div className="project-info">
          <h2>
            <a href="https://flowers-shop.p.goit.global/index.html">
              Anemone - minimaliscit flower studio
            </a>
          </h2>
          <p>
            Welcome to our floristry studio, where floral passion meets modern
            technology, creating a unique online experience. As a team of
            developers, along with our creative colleagues, we've crafted this
            website utilizing HTML5, Figma, Git, JavaScript, and CSS. With a
            responsive layout, you can now browse our beautiful floral
            arrangements on any device. Join us today and let yourself be
            inspired!
          </p>
        </div>
      </div>
      <div className="project-card reverse">
        <a href="https://mikel538.github.io/Filmoteka/index.html">
          <img src="/images/filmoteka.png" alt="Filmoteka" />
        </a>
        <div className="project-info">
          <h2>
            <a href="https://mikel538.github.io/Filmoteka/index.html">
              FILMOTEKA
            </a>
          </h2>
          <p>
            Our website is a movie search engine that showcases movie rankings
            and recently popular films. It allows users to search for specific
            movies and provides information on their ratings and popularity,
            along with the option to watch trailers. With skills in responsive
            layout, HTML5, JavaScript, and CSS, we ensure a smooth and engaging
            experience across all devices.
          </p>
        </div>
      </div>
      <div className="project-card reverse">
        <a href="https://szczepanskimichal.github.io/WebStudio/">
          <img src="/images/WebStudio.png" alt="WebStudio" />
        </a>
        <div className="project-info">
          <h2>
            <a href="https://szczepanskimichal.github.io/WebStudio/">
              WebStudio
            </a>
          </h2>
          <p>Responsive website</p>
        </div>
      </div>
    </section>
  );
}
