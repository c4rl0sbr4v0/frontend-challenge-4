import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputContainer from '.';

test('Input Container Component', async () => {
  const { container } = render(
    <InputContainer>
      <div>ey</div>
    </InputContainer>,
  );
  expect(container.firstChild.classList.contains('landbot-input-container')).toBe(true);
  expect(container).toMatchSnapshot();
});
