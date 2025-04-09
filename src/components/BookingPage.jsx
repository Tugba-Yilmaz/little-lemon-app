import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../MainContent.css';

function BookingPage({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'date') {
      dispatch({ type: 'update', date: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split('T')[0];
    if (!formData.date) newErrors.date = 'Date is required';
    else if (formData.date < today) newErrors.date = 'Date cannot be in the past';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1 || formData.guests > 10)
      newErrors.guests = 'Guests must be between 1 and 10';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      toast.success('Your reservation has been received 🎉');
      console.log('Submitted:', formData);

      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
      });
    }
  };

  return (
    <section className="booking-section">
      <h2>Reserve a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>

        <label>
          Choose date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>

        <label>
          Choose time:
          <select name="time" value={formData.time} onChange={handleChange}>
            <option value="">-- Select Time --</option>
            {availableTimes.map((time, idx) => (
              <option key={idx} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </label>

        <label>
          Number of guests:
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </label>

        <label>
          Occasion:
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">-- Select Occasion --</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business Meeting">Business Meeting</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit">Make Your Reservation</button>

        {submitted && (
          <p style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
            Thank you! Your reservation has been received ✅
          </p>
        )}
      </form>
    </section>
  );
}

export default BookingPage;
