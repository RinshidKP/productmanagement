import { expect, test } from 'jest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../src/components/ProductGrid';

test('renders pagination component', () => {
  render(<Pagination />);
  const paginationElement = screen.getByRole('navigation');
  expect(paginationElement).toBeInTheDocument();
});

test('displays correct number of pages', () => {
  render(<Pagination pageCount={5} />);
  const pageElements = screen.getAllByRole('button');
  expect(pageElements).toHaveLength(7); // Including previous and next buttons
});

test('calls onPageChange callback when page is clicked', () => {
  const onPageChangeMock = jest.fn();
  render(<Pagination pageCount={5} onPageChange={onPageChangeMock} />);
  const pageElement = screen.getByText('3');
  fireEvent.click(pageElement);
  expect(onPageChangeMock).toHaveBeenCalledWith({ selected: 2 });
});
