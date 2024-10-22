import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App and title is visible', () => {
    render(<App />);

    const headerElement = screen.getByText(/Kahoot! Points/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should collect item and show points correctly', () => {
    render(<App />);

    const itemA = screen.getByRole('button', { name: "A" });
    fireEvent.click(itemA);

    const playerItemA = screen.getByLabelText(/Item A. Quantity: 1. Score: 50/i);
    expect(playerItemA).toBeInTheDocument();
  });

  it('should collect items and show points with bonuses correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: "B" }));
    fireEvent.click(screen.getByRole('button', { name: "A" }));
    fireEvent.click(screen.getByRole('button', { name: "B" }));

    const playerItemA = screen.getByLabelText(/Item A. Quantity: 1. Score: 50/i);
    const playerItemB = screen.getByLabelText(/Item B. Quantity: 2. Score: 90/i);
    expect(playerItemA).toBeInTheDocument();
    expect(playerItemB).toBeInTheDocument();

    const bonuses = screen.getByText(/Bonuses: 30/i);
    expect(bonuses).toBeInTheDocument();
    const total = screen.getByLabelText(/Total: 140/i);
    expect(total).toBeInTheDocument();
  });

  it('should reset the game', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: "B" }));
    fireEvent.click(screen.getByRole('button', { name: "A" }));
    fireEvent.click(screen.getByRole('button', { name: "B" }));

    expect(screen.getByLabelText(/Total: 140/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: "NEW GAME" }));

    expect(screen.getByLabelText(/Total: 0/i)).toBeInTheDocument();
  });
});
