import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} <img src="/assets/Smiley.PNG" alt="Hier sollte ein Bild sein" style={{ height: '20px', borderRadius: '25px' }} />{' '} 
 Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;
