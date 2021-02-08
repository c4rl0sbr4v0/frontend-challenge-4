import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Message from '.';

test('Message Component', async () => {
  const { container, getByText } = render(<Message autho="r2d2" text="peeep" />);
  expect(getByText('peeep')).toBeDefined();
  expect(container.firstChild.classList.contains('landbot-message')).toBe(true);
  expect(container).toMatchSnapshot();
});
