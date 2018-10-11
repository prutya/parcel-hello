import React from 'react';
import { connect } from 'react-redux';

const increment = () => dispatch =>
  dispatch({ type: 'INCREMENT' })

const decrement = () => dispatch =>
  dispatch({ type: 'DECREMENT' })

class Counter extends React.Component {
  render () {
    return (
      <div className='counter'>
        <p className='counter__text'>
          {this.props.number}
        </p>

        <button
          onClick={() => this.handleIncrementClick()}
          className='counter__button counter__button--increment'
        >
          {'➕'}
        </button>

        <button
          onClick={() => this.handleDecrementClick()}
          className='counter__button counter__button--decrement'
        >
          {'➖'}
        </button>
      </div>
    );
  }

  handleIncrementClick () {
    this.props.increment();
  }

  handleDecrementClick () {
    this.props.decrement();
  }
}

Counter = connect(
  (state, ownProps) => ({
    number: state.counter
  }),
  { increment, decrement }
)(Counter);

export default Counter;