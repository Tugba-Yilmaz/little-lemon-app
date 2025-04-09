import React, { useState } from 'react';
import { toast } from 'react-toastify';

import '../MainContent.css';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    note: '',
    occasion: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    else if (formData.date < today) newErrors.date = "Date cannot be in the past.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (formData.guests < 1 || formData.guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Reservation confirmed ✅:", formData);

      toast.success("Your reservation has been received 🎉");

      // reset form data
      setFormData({
        name: '',
        date: '',
        time: '',
        guests: 1,
        note: '',
        occasion: ''
      });
    }
  };

  return (
    <section className="booking-section">
      <h2>Reserve a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </label>

        <label>
          Number of Guests:
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
          Special Note:
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Optional"
          ></textarea>
        </label>
        <label>
  Are you celebrating something?
  <select
    name="occasion"
    value={formData.occasion}
    onChange={handleChange}
  >
    <option value="">-- Select an Occasion --</option>
    <option value="Birthday">Birthday</option>
    <option value="Anniversary">Anniversary</option>
    <option value="Business Meeting">Business Meeting</option>
    <option value="Other">Other</option>
  </select>
</label>


        <button type="submit">Book Now</button>

        {submitted && (
          <p style={{ marginTop: "1rem", color: "green", fontWeight: "bold" }}>
            Thank you! Your reservation has been received ✅
          </p>
        )}
      </form>
    </section>
  );
}

export default BookingPage;
