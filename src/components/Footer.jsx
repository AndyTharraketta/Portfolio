import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <img
          className="footer-logo"
          src="/assets/Smiley.PNG"
          alt="Hier sollte ein Bild sein"
        />{" "}
        Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}

export default Footer;
