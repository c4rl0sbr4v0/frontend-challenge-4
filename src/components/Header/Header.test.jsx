import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '.';

test('Header Component', async () => {
  const { container } = render(<Header>header</Header>);
  expect(container.firstChild.className === 'landbot-header').toBe(true);
  expect(container).toMatchSnapshot();
});
