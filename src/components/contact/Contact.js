import React from "react";
import "./Contact.css"; // Zaimportuj plik CSS tutaj

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://instagram.com/geeks_for_geeks"
        >
          Instagram: <span>@geeks_for_geeks</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/geeksforgeeks"
        >
          Twitter: <span>@geeksforgeeks</span>
        </a>
      </div>
    </section>
  );
}
