import React, { Component, useReducer } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // 클래스형에서는 this.state가 무조건 객체여야한다.
    // 함수형에서 state의 값이 배열, 객체, 숫자 등 모든 형태가 될 수 있었던 것과 다르다.
    this.state = {
      counter: 0,
      fixed: 1,
      updateMe: {
        toggleMe: false,
        donChangeMe: 1,
      },
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleIncrease() {
    // setState가 비동기적으로 업데이트 된다는 것을 잊지 말자!
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
  }

  handleDecrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  handleToggle() {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
      },
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

// 상태 업데이트 로직이 component 밖에 있다.
// dispatch로 넘겨주는 인자가 action 으로 들어간다
// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// function Counter() {
//   // [state, dispatch]
//   const [number, dispatch] = useReducer(reducer, 0);
//   const onIncrease = () => {
//     // onIncrease가 불리면 dispatch 함수를 통해 인자로 넘겨주는 값과 함께 action을 발생시킨다.
//     dispatch({
//       type: 'INCREMENT',
//     });
//   };

//   const onDecrease = () => {
//     dispatch({
//       type: 'DECREMENT',
//     });
//   };

//   return (
//     <div>
//       <h2>{number}</h2>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;
