import React from 'react';
import PropsTypes from 'prop-types';

const Container = (props) => {
  return <div className='container'>{props.children}</div>;
};

Container.propsTypes = {
  children: PropsTypes.oneOf([
    PropsTypes.element,
    PropsTypes.arrayOf(PropsTypes.element),
  ]),
};

const Article = (props) => {
  return (
    <article>
      <h3>Title {props.index}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        facilis nemo dolor ut magni quos dolores dignissimos quaerat, quidem
        inventore provident sapiente fugiat, rerum atque eaque earum perferendis
        mollitia molestias?
      </p>
      <hr></hr>
    </article>
  );
};
const Newspaper = (props) => {
  return (
    <Container>
      {[1, 2, 3].map((idx) => (
        <Article key={idx} index={idx} />
      ))}
    </Container>
  );
};

export default Newspaper;
