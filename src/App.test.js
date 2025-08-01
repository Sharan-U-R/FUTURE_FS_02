import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Digital Drift app', () => {
  render(<App />);
  const linkElement = screen.getByText(/DigitalDrift/i);
  expect(linkElement).toBeInTheDocument();
});