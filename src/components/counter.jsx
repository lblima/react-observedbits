import React from 'react';
import WithState from './withState';

const now = () => Date.now();

export default WithState(({ value, label }) => (
  <p>
    {label}: {value} | Last Update: {now()}
  </p>
));