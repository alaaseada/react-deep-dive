import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.initialVal };
  }

  static defaultProps = {
    initialVal: 4,
  };

  decrement = () => {
    this.setState((PrevState) => {
      return { val: PrevState.val === 0 ? 0 : PrevState.val - 1 };
    });
  };

  increment = () => {
    this.setState((PrevState) => {
      return { val: PrevState.val + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '200px',
          margin: '0 auto',
          justifyContent: 'center',
        }}
      >
        <button onClick={this.decrement}>-</button>
        <div style={{ width: '50px', textAlign: 'center' }}>
          {this.state.val}
        </div>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
