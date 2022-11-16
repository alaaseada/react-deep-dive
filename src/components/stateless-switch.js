import React from 'react';
import classNames from 'classnames';

class ParentSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: 'to be chosen' };
  }

  handleSelection = (option) => {
    this.setState({ selectedOption: option });
  };

  render() {
    const options = ['Java', 'JavaScript', 'PHP', 'C#', 'Python'];
    const label_text = 'What is your favorite programming language? ';
    return (
      <StatelessSwitch
        options={options}
        label={label_text}
        onClick={this.handleSelection}
        selectedOption={this.state.selectedOption}
      />
    );
  }
}

// Create a reusable component
function StatelessSwitch(props) {
  const renderElement = (option) => {
    const classes = classNames({
      option: true,
      selected: props.selectedOption === option,
    });

    return (
      <div className={classes} onClick={(e) => props.onClick(option)}>
        {option}
      </div>
    );
  };
  return (
    <div className='switch'>
      {props.options.map((option) => renderElement(option))}
      <p>
        {props.label}
        <b>{props.selectedOption}</b>
      </p>
    </div>
  );
}

export default ParentSwitch;
