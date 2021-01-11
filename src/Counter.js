import React, { useReducer } from 'react';

// 상태 업데이트 로직이 component 밖에 있다.
// dispatch로 넘겨주는 인자가 action 으로 들어간다
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  // [state, dispatch]
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    // onIncrease가 불리면 dispatch 함수를 통해 인자로 넘겨주는 값과 함께 action을 발생시킨다.
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
