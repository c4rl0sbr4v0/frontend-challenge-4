import React from 'react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button onClick={() => alert('patata')}>Click me</Button>;
