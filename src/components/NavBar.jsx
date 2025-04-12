// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css';
import logo from '../images/Logo.svg';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />

        <button className="burger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/booking" onClick={() => setIsOpen(false)}>Reservations</Link></li>
            <li><Link to="/order" onClick={() => setIsOpen(false)}>Order Online</Link></li>
            <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

