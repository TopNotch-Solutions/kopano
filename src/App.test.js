import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Kopano-Vertex Trading/i });
  expect(heading).toBeInTheDocument();
});
