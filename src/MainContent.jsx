import React from 'react';
import './MainContent.css'; // İstersen özel stil burada tanımlayabilirsin
import restaurantImage from './images/restauranfood.jpg';
import greekSalad from './images/greeksalad.jpg';
import bruschetta from './images/bruchetta.svg';
import lemonDessert from './images/lemondessert.jpg';



function MainContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
        <img src={restaurantImage}  alt="Restaurant view" />

        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
  <div className="specials-header">
    <h2>This week’s specials!</h2>
    <button>Online Menu</button>
  </div>
  <div className="special-cards">

    <div className="card">
      <img src={greekSalad} alt="Greek Salad" />
      <div className="card-content">
        <h3>Greek Salad</h3>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <button>Order a delivery 🚚</button>
      </div>
    </div>

    <div className="card">
      <img src={bruschetta} alt="Bruschetta" />
      <div className="card-content">
        <h3>Bruschetta</h3>
        <p>
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
        <button>Order a delivery 🚚</button>
      </div>
    </div>

    <div className="card">
      <img src={lemonDessert} alt="Lemon Dessert" />
      <div className="card-content">
        <h3>Lemon Dessert</h3>
        <p>
          This comes straight from grandma’s recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
        <button>Order a delivery 🚚</button>
      </div>
    </div>

  </div>
</section>


      {/* Testimonials Section */}
    
<section className="testimonials">
  <h2>Testimonials</h2>
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <p>⭐️⭐️⭐️⭐️⭐️</p>
      <p>"The food was amazing and the service was fantastic!"</p>
      <p><strong>– Maria S.</strong></p>
    </div>
    <div className="testimonial-card">
      <p>⭐️⭐️⭐️⭐️</p>
      <p>"Lovely atmosphere and great value for money."</p>
      <p><strong>– James K.</strong></p>
    </div>
    <div className="testimonial-card">
      <p>⭐️⭐️⭐️⭐️⭐️</p>
      <p>"Best Mediterranean food in town!"</p>
      <p><strong>– Aisha L.</strong></p>
    </div>
    <div className="testimonial-card">
      <p>⭐️⭐️⭐️⭐️</p>
      <p>"Fresh ingredients and quick service. Will come again!"</p>
      <p><strong>– Mark D.</strong></p>
    </div>
  </div>
</section>

    </main>
  );
}

export default MainContent;

