import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('Test Suite for App Component', () => {
  test('Test Click on Right Arrow Button', () => {
    render(<App />);
    const leftBtnElement = screen.getByTestId('right-btn');
    fireEvent.click(leftBtnElement);
    const robotCell = screen.getByTestId('cell-2-1');
    expect(robotCell).toHaveClass('robot');
  });

  test('Test Click on Cell - Teleport', async () => {
    render(<App />);
    const cellElementBefore = screen.getByTestId('cell-2-1');
    fireEvent.click(cellElementBefore);
    await waitFor(() => {
      const cellElementAfter = screen.getByTestId('cell-2-1');
      expect(cellElementAfter).toHaveClass('robot');
    });
  });
});
