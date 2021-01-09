import React, { useState } from 'react';

function Counter() {
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  // useState 함수는 배열([state, setState])을 반환 기본값 (state)를 parameter로 넣어줘야한다.
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // 다음 업데이트할 값을 넣어줌
    // 어떻게 업데이트할지 함수 (업데이트 함수)를 넣어줄 수도 있음 -> 최적화
    // setNumber(number => number + 1);
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
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
