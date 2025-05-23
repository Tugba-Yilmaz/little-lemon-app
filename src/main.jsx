import React, { StrictMode, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useNavigate } from 'react-router-dom'; // ❗️ Sadece buradan al yeterli
import App from './App.jsx';
import './index.css';

import { initializeTimes, updateTimes } from './utils/timeUtils';

const reducer = (state, action) => {
  return updateTimes(state, action);
};


const MainWithRouter = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (typeof window.submitAPI === "function") {
      const success = window.submitAPI(formData);
      if (success) {
        
        const saved = JSON.parse(localStorage.getItem("reservations")) || [];
        saved.push(formData);
        localStorage.setItem("reservations", JSON.stringify(saved));
  
        
        navigate("/confirmed");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };
  

  return (
    <App
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  return (
    <StrictMode>
      <BrowserRouter>
        <MainWithRouter availableTimes={availableTimes} dispatch={dispatch} />
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
