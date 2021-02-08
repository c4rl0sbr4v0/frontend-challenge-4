import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageContainer from '.';

test('Message Container Component', async () => {
  const { container } = render(
    <MessageContainer>
      <div>ey</div>
    </MessageContainer>,
  );
  expect(container.firstChild.classList.contains('landbot-messages-container')).toBe(true);
  expect(container).toMatchSnapshot();
});
