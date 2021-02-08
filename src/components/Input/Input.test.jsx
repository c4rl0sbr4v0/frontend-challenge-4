import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '.';

test('Input Component', async () => {
  window.alert = jest.fn();
  const { container, getByPlaceholderText } = render(
    <Input onChange={() => alert('change')} value="patata" onKeyUp={() => alert('keyup')} placeholder="Enter" />,
  );
  const input = getByPlaceholderText('Enter');
  fireEvent.change(input, { target: { value: 'ey' } });
  fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
  expect(window.alert).toHaveBeenCalledTimes(2);
  expect(container.firstChild.classList.contains('landbot-input')).toBe(true);
  expect(container).toMatchSnapshot();
});
