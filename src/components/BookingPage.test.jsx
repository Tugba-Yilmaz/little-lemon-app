/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import BookingPage from './BookingPage';
import { describe, test, expect, vi } from 'vitest';

describe("BookingPage Component", () => {
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  test("form alanları render ediliyor", () => {
    render(
      <BrowserRouter>
        <BookingPage
          availableTimes={['17:00', '18:00']}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit reservation form/i })).toBeInTheDocument();
  });

  test("eksik veriyle gönderilince hata mesajı gösteriliyor", () => {
    render(
      <BrowserRouter>
        <BookingPage
          availableTimes={['17:00']}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /submit reservation form/i }));
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  });
});

