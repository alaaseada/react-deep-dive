import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app';
import Parent from './components/parent';
import Switch from './components/switch';
import Counter from './components/counter';
import ParentSwitch from './components/stateless-switch';
import Newspaper from './components/newspaper';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

const Item = (props) => {
  return <div>{props.children}</div>;
};

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
  listItem: Item,
  notes: {
    msg: 'I am a note',
  },
};
root.render(
  <>
    {/* <App {...app_props} /> */}
    {/* <Parent /> */}
    {/* <Switch /> */}
    {/* <Counter /> */}
    {/* <ParentSwitch /> */}
    <Newspaper />
  </>
);
