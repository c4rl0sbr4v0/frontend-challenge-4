import React from 'react';
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = () => {
  const [input, setInput] = React.useState('');
  return (
    <Input
      onChange={(e) => setInput(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          alert(input);
        }
      }}
      value={input}
    />
  );
};
