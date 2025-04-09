/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // 👈 BUNU EKLEMEN GEREKİYOR
import BookingPage from './BookingPage';

describe("BookingPage Component", () => {
  const mockDispatch = vi.fn(); // vitest için `vi.fn()` kullan

  test("form alanları render ediliyor", () => {
    render(<BookingPage availableTimes={['17:00', '18:00']} dispatch={mockDispatch} />);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit reservation form/i })).toBeInTheDocument();
  });

  test("eksik veriyle gönderilince hata mesajı gösteriliyor", () => {
    render(<BookingPage availableTimes={['17:00']} dispatch={mockDispatch} />);
    fireEvent.click(screen.getByRole("button", { name: /submit reservation form/i }));
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  });
});


