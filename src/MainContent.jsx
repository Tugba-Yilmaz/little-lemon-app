import React from 'react';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import '../MainContent.css';


function MainContent() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
    </main>
  );
}

export default MainContent;
