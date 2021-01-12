import React, { createContext, useContext, useState } from 'react';

// context를 사용하면 깊은 곳에 있는 component에 값을 바로 넣어줄 수 있다.
const MyContext = createContext('defaultValue');

function Child() {
  // useContext context에 있는 값을 읽어와서 사용할 수 있게 해주는 react Hook
  const text = useContext(MyContext);
  return <div>안녕하세요? {text}</div>;
}

function Parent({ text }) {
  return <Child text={text} />;
}

function GrandParent({ text }) {
  return <Parent text={text} />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    // context의 value를 유동적으로 변화하기
    <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME!</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
