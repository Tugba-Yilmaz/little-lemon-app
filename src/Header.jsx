import React, { useState } from 'react';
import './Header.css';
import logo from './images/logo.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />

        {/* Burger icon */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
