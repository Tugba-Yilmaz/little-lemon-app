import React, { useReducer } from 'react';
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

// Booking saatlerini initialize eden fonksiyon
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Reducer fonksiyonu: ileride tarih bazlı kontrol burada yapılabilir
const updateTimes = (state, action) => {
  if (action.type === 'update') {
    // Simülasyon olarak aynı saatleri döndürüyoruz
    return initializeTimes();
  }
  return state;
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
