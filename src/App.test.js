import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the header', () => {
    render(<App />);
    const titleElement = screen.getByText('Room occupancy optimiser');
    expect(titleElement).toBeInTheDocument();
  });
})

