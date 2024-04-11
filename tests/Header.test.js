import { expect, test } from 'jest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders header component', () => {
  render(<Header />);
  const headerElement = screen.getByRole('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders total products text', () => {
  render(<Header />);
  const textElement = screen.getByText(/Total Products/i);
  expect(textElement).toBeInTheDocument();
});
