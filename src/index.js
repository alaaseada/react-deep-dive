import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
const app_props = {
  headerText: 'Style Guide Dist',
  name: 'Alaa',
  yearOfBirth: 1987,
  isMarried: false,
  calcAge: function () {
    return new Date().getFullYear() - this.yearOfBirth;
  },
  family: {
    mom: 'Xxxx',
    dad: 'Oooo',
    sister: 'Llll',
    brother: 'Mmmm',
  },
  education: 'Masters',
  grade: 'Very Good',
};
root.render(<App {...app_props} />);
