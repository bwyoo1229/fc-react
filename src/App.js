import React from 'react';
import Hello from './Hello.js';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };

  return (
    <>
      {/* this is comment */}
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;

/* JSX 규칙
1. 태그는 꼭 닫아주어야 한다.
2. self-closing tag를 꼭 사용해주어야한다. ex) <br />
3. 2개 이상의 태그는 감싸주어야한다. or fragment를 사용한다. <>[tags]</> (이러면 html로 변환될 때 불필요한 태그가 생기지 않는다.)
4. 자바스크립트 변수/상수를 사용하려면 {} 중괄호로 감싸준다.
5. style 객체를 만들땐 dash 를 camel case로 변환하영 사용해준다.
6. class는 className을 사용한다.
7. 주석은 { 주석 } 중괄호로 감싸준다.
*/
