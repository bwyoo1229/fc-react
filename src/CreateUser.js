import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser() {
  const [inputs, onChange, reset] = useInputs({ username: '', email: '' });
  const { username, email } = inputs;
  const dispatch = useContext(UserDispatch);
  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

// React.memo로 export 하는 component를 감싸주면 props가 바뀌었을 때만 re-rendering
export default React.memo(CreateUser);
