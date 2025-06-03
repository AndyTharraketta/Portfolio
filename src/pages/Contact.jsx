import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Kontakt</h1>
      <p>Hier findet Ihr die Links zu meinem GitHub</p>
      <p>
        Link GitHub:&nbsp;
        <a
          href="https://github.com/AndyTharraketta"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          AndyTharraketta
        </a>
      </p>
      <p>
        Link GitHub-Projekt:&nbsp;
        <a
          href="https://github.com/AndyTharraketta/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Portfolio-Projekt
        </a>
      </p>
    </div>
  );
}
export default Contact;
