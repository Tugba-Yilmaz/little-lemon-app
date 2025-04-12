
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../images/Logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-section">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          <p>Your favorite Mediterranean restaurant in the heart of Chicago.</p>
        </div>

       
        <div className="footer-section">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>123 Main Street, Chicago</p>
          <p>+1 234 567 890</p>
          <p>contact@littlelemon.com</p>
        </div>

        
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
