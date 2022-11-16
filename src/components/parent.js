import React from 'react';
import PropsTypes from 'prop-types';
import Child from './child';
class Parent extends React.Component {
  getUsers = () => {
    return [
      'Alaa Seada',
      'Maha Samir',
      'Alshimaa Algohary',
      'Rasha Fathi',
      'Nabil Adel',
      'Haytham Darwish',
    ];
  };

  getUserMap = () => {
    return { name: 'Alaa', position: 'Senior Engineer', age: 36 };
  };
  static childContextTypes = {
    users: PropsTypes.array,
    userMap: PropsTypes.object,
  };

  getChildContext = () => {
    return { users: this.getUsers(), userMap: this.getUserMap() };
  };

  render() {
    return <Child></Child>;
  }
}

export default Parent;
