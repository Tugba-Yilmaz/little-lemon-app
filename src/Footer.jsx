import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Little Lemon</h4>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="footer-column">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <p>123 Lemon Street<br />Chicago, IL</p>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: +1 312 555 7890</p>
      </div>
    </footer>
  );
}

export default Footer;

