// App.js
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="#" className="nav-branding">PAHAL.</a>
          <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>About Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Gallery</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Support Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Reports</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Team</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={closeMenu}>Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
