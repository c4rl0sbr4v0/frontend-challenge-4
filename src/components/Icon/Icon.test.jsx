import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon from '.';

test('Icon Component', async () => {
  window.alert = jest.fn();
  const { container } = render(<Icon />);
  expect(container.firstChild.classList.contains('icon')).toBe(true);
  expect(container).toMatchSnapshot();
});
