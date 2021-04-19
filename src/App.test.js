import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Landing from './components/landingpage';

test('', () => {
  render(<Landing/>, {wrapper:MemoryRouter});
  const linkElement = screen.getByText(/certificate/i);
  expect(linkElement).toBeInTheDocument();
});
