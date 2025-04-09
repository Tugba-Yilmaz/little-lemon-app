import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import '../MainContent.css';


function Homepage() {
  return (
    <div className="homepage">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  )
}
 export default Homepage;