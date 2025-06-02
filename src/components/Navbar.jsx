import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo"><img src="/assets/Smiley.PNG" alt="Hier sollte ein Bild sein" style={{ height: '34px', borderRadius: '25px' }} />{' '}</div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Startseite</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">Über uns</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
