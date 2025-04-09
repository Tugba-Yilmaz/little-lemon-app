import React from 'react';
import greekSalad from '../images/greeksalad.jpg';
import bruschetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemondessert.jpg';
import '../MainContent.css';


function Specials() {
  return (
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
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago-style feta cheese, garnished with garlic and croutons.
            </p>
            <button>Order a delivery 🚚</button>
          </div>
        </div>

        <div className="card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-content">
            <h3>Bruschetta</h3>
            <p>
              Grilled bread smeared with garlic and seasoned with salt and olive oil.
            </p>
            <button>Order a delivery 🚚</button>
          </div>
        </div>

        <div className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-content">
            <h3>Lemon Dessert</h3>
            <p>
              Straight from grandma’s recipe book — authentic and unforgettable.
            </p>
            <button>Order a delivery 🚚</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Specials;
