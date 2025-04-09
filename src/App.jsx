import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import LoginPage from './components/LoginPage';
import Footer from './Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from "./components/ConfirmedBooking";

function App({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
