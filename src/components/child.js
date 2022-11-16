import React from 'react';
import GrandChild from './grandchild';
import PropsTypes from 'prop-types';

class Child extends React.Component {
  static contextTypes = {
    users: PropsTypes.array,
  };
  render() {
    return (
      <>
        <ul>
          {this.context.users.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <GrandChild />
      </>
    );
  }
}

export default Child;
