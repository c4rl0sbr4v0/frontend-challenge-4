import React from 'react';
import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Default = () => (
  <header className="hero is-dark">
    <Header>Landbot</Header>
  </header>
);
