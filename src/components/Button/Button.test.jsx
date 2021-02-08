import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '.';

test('Button Component', async () => {
  window.alert = jest.fn();
  const { container, getByText } = render(<Button onClick={() => alert('patata')}>Click me</Button>);
  expect(container.firstChild.classList.contains('landbot-input-send')).toBe(true);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(container).toMatchSnapshot();
});
