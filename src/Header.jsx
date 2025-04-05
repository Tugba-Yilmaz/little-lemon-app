import React from 'react';
import logo from './images/logo.svg';
import Nav from './Nav';
import './Header.css'; // stil dosyasını unutma

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;


