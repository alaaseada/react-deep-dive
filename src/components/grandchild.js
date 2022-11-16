import React from 'react';
import PropsTypes from 'prop-types';

function Grandchild(props, context) {
  return (
    <div style={{ color: 'red' }}>
      <span>{context.userMap.name}</span>,
      <span>{context.userMap.position}</span>,<span>{context.userMap.age}</span>
    </div>
  );
}

Grandchild.contextTypes = {
  userMap: PropsTypes.object,
};

export default Grandchild;
