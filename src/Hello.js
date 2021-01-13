import React, { Component } from 'react';

// 클래스형으로 리액트 컴포넌트 만들어보기
class Hello extends Component {
  // 클래스에서 default props 설정하기
  static defaultProps = {
    name: '이름없음',
  };

  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// 함수형으로 리액트 컴포넌트 만들어보기
// function Hello(props) {
//   const style = { color: props.color };

// {null}, {undefined}, {false}는 아무것도 렌더링 되지 않는다 ({0}은 됨!)
// 조건부 렌더링 - &&연산자를 사용하거나 3항 연산자를 사용한다.
//   return (
//     <div style={style}>
//       {props.isSpecial && <b>*</b>}
//       {/* {props.isSpecial ? <b>*</b> : null} */}
//       안녕하세요 {props.name}
//     </div>
//   );
// }

// props가 없을 때 default props 설정 방법
// default가 없다면 undefined 반환
// Hello.defaultProps = {
//   name: '이름없음',
// };

export default Hello;
