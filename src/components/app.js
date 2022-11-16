import React from 'react';
import PropTypes from 'prop-types';

function App(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      <h1>Welcome to our {props.headerText} website!</h1>
      <p>Name: {props.name}</p>
      <p>Year of Birth: {props.yearOfBirth}</p>
      <p>Married? {props.isMarried ? 'Yes' : 'No, probably Single'}</p>
      <p>Calculated age = {props.calcAge()}</p>
      <p>Family: </p>
      <ul>
        {Object.entries(props.family).map((k, v) => {
          const key = `member-${v}`;
          return (
            <li key={key}>
              <b>{capitalize(k[0])}:</b> {k[1]}
            </li>
          );
        })}
      </ul>
      {[1, 2, 3].map(props.listItem)}
      <p>
        Education: {props.education} with <b>{props.grade}</b> grade
      </p>
      <p>Initial value: {props.initialValue}</p>
    </>
  );
}

App.propTypes = {
  headerText: PropTypes.string,
  name: PropTypes.string,
  yearOfBirth: PropTypes.number,
  isMarried: PropTypes.bool,
  calcAge: PropTypes.func,
  family: PropTypes.shape({
    mom: PropTypes.string,
    dad: PropTypes.string,
    sister: PropTypes.string,
    brother: PropTypes.string,
  }),
  education: PropTypes.oneOf(['High school', 'Bachelor', 'Masters', 'PhD'])
    .isRequired,
  grade: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  notes: PropTypes.any,
};

App.defaultProps = {
  initialValue: 1,
};

export default App;
