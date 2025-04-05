import React from 'react';
import NavBar from './components/NavBar';
import Main from './MainContent';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
