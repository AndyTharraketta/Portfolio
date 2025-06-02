import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyApp. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;
