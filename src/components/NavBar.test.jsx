/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // ✨ Bu satır jest-dom matchers için gerekli
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe("NavBar Component", () => {
  test("navigasyon linkleri doğru görüntüleniyor", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    // Navigasyon linklerinin içerikte yer alıp almadığını test et
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/reservations/i)).toBeInTheDocument();
    expect(screen.getByText(/order online/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
