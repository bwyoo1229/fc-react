import React from 'react';

// 함수형으로 리액트 컴포넌트 만들어보기
function Hello(props) {
  const style = { color: props.color };
  return <div style={style}>안녕하세요 {props.name}</div>;
}

// props가 없을 때 default props 설정 방법
// default가 없다면 undefined 반환
Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
