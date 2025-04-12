/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'; 
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import BookingPage from './BookingPage';
import { describe, test, expect, vi } from 'vitest';

describe("BookingPage Component", () => {
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  const setup = () =>
    render(
      <BrowserRouter>
        <BookingPage
          availableTimes={['17:00', '18:00']}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );

  test("form alanları render ediliyor", () => {
    setup();

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit reservation form/i })).toBeInTheDocument();
  });

  test("eksik veriyle gönderilince hata mesajları gösteriliyor", async () => {
    setup();
  
    const form = screen.getByRole("form", { name: /reservation form/i });
  
    // Tüm alanları boş veya geçersiz yap
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 0 } });
  
    fireEvent.submit(form); // 🔥 direkt form submit
  
    const alerts = await screen.findAllByRole("alert");
    expect(alerts.length).toBeGreaterThan(0);
    expect(alerts[0].textContent.toLowerCase()).toMatch(/date is required|guests must be/i);
  });
  
  
  
});
