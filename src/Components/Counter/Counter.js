import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/constants/action-types'

class Counter extends Component {
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  reset = () => {
    this.props.reset();
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
