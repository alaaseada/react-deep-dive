import React from 'react';
import classNames from 'classnames';

class Switch extends React.Component {
  state = {
    paymentMethod: 'To be chosen.',
  };

  handlePayment = (option) => {
    this.setState({ paymentMethod: option });
  };

  renderElement = (option) => {
    const classes = classNames({
      option: true,
      selected: this.state.paymentMethod === option,
    });
    return (
      <div className={classes} onClick={(e) => this.handlePayment(option)}>
        {option}
      </div>
    );
  };

  render() {
    const options = ['Credit Card', 'Vodafone Cash', 'Cash on Delivery'];
    return (
      <div className='switch'>
        {options.map((option) => this.renderElement(option))}
        <p>
          You're gonna pay with: <b>{this.state.paymentMethod}</b>
        </p>
      </div>
    );
  }
}

export default Switch;
