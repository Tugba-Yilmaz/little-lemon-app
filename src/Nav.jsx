import React from 'react';
import './Nav.css'; // Stil dosyasını ayrı yazacağız

function Nav() {
  return (
    <nav>
      
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
