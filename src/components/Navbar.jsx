import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className="navbar-logo"
          src="/assets/Smiley.PNG"
          alt="Hier sollte ein Bild sein"
        />
      </div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Startseite</Link>
        </li>

        {!isLoggedIn && (
          <li className={location.pathname === "/login" ? "active" : ""}>
            <Link to="/login">Login</Link>
          </li>
        )}

        {isLoggedIn && (
          <>
            <li className={location.pathname === "/portfolio" ? "active" : ""}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        )}

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">Über uns</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
