import React from "react";
import "./Projects.css"; // Import pliku CSS

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <a href="https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png"
            alt="Project 1"
          />
        </a>
        <div className="project-info">
          <h2>
            <a href="https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/">
              DSA Progress Tracker
            </a>
          </h2>
          <p>
            This is a project built on react which tracks your progress in dsa
            and stores that in the local storage.
          </p>
        </div>
      </div>
      <div className="project-card reverse">
        <a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
            alt="Project 2"
          />
        </a>
        <div className="project-info">
          <h2>
            <a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
              15 Puzzle Game
            </a>
          </h2>
          <p>
            15 puzzle game is basically a tile-based game in which there are 16
            tiles out of which 1 tile is left empty and the remaining tiles are
            filled with numbers from 1 to 15 in random order. The user has to
            arrange all the tiles in numerical order with the rule that they can
            only move the tile that is a direct neighbor of the empty tile.
          </p>
        </div>
      </div>
    </section>
  );
}
