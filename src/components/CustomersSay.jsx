import React from 'react';
import '../MainContent.css';


function CustomersSay() {
  return (
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
  );
}

export default CustomersSay;
