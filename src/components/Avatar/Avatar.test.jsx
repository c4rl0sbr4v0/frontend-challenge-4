import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '.';

test('Avatar Component', async () => {
  const { container } = render(<Avatar />);
  expect(container.firstChild.classList.contains('landbot-message-avatar')).toBe(true);
  expect(container).toMatchSnapshot();
});
