import React from 'react';
import '../MainContent.css'; // Ortak stil dosyası
import restaurantImage from '../images/restaurant.jpg'; // Görselin doğru adıyla olduğuna emin ol

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-text">
        <h2>Our Story</h2>
        <p>
          Located in the heart of Chicago, Little Lemon offers a warm atmosphere
          and authentic Mediterranean cuisine. Inspired by family traditions and
          fresh ingredients, we aim to bring you a memorable dining experience.
        </p>
      </div>
      <div className="chicago-image">
        <img src={restaurantImage} alt="Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default Chicago;

