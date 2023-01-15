import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders top page', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Hello World!/i)).toBeInTheDocument();
});
