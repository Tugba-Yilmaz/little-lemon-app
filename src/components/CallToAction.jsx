import React from 'react';
import restaurantImage from '../images/restauranfood.jpg';
import '../MainContent.css';


function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={restaurantImage} alt="Restaurant view" />
      </div>
    </section>
  );
}

export default CallToAction;
