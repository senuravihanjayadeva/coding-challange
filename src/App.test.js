import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', async () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<App />);
  const leftBtnElement = screen.getByTestId('right-btn');
  fireEvent.click(leftBtnElement);
  const robotCell =  await screen.getByTestId('cell-2-1');
  // eslint-disable-next-line no-undef
  expect(robotCell).toHaveClass('robot')
});
