import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: ' ',
    nickname: ' ',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // 이렇게 간단하게 표현할 수 있다.
    setInputs({
      // 객체나 배열에서 꼭 spread 문법을 사용해서 불변성을 지켜주어야 한다.
      // 불변성을 지켜주어야 react component에서 상태가 업데이트 됨을 감지하고 그에 따른 렌더링을 해준다.
      ...inputs,
      [name]: value, // ES2015 computed property names
    });

    // const newInputs = {
    //   ...inputs,
    // };

    // newInputs[name] = value;
    // setInputs(newInputs);
  };

  const onReset = () => {
    setInputs({
      name: ' ',
      nickname: ' ',
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
