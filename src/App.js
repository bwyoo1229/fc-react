import React, { useState, useRef, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');

  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  // useCallback
  // onChange 함수는 inputs가 바뀔 때만 함수가 새로 만들어진다.
  // inputs가 바뀌지 않으면 기존의 함수를 사용한다.
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  // 배열을 컴포넌트의 상태로써 관리하는 법
  // useState로 감싸주면 된다.
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'bwyoo1229',
      email: 'bwyoo1229@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  // useRef로 값은 변화해도 component가 re-rendering 되는 것을 막을 수 있다.
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      ...inputs,
    };

    // 업데이트 함수를 넣어주면 dependency를 없앨 수 있다.
    setUsers((users) => [...users, user]);
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [inputs]);

  // 배열의 요소를 제거할때 불변성을 유지하기 위해서 filter 함수를 사용해준다.
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  // 배열의 요소를 업데이트 할때 불변성을 유지하기 위해서 map 함수를 사용해준다.
  const onToggle = useCallback((id) => {
    setUsers((users) => users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  }, []);

  // App이 렌더링 될 때 특정 값이 변화할 때만 원하는 함수 호출하기
  // users가 바뀔때만 함수가 호출됨. (deps 값)
  // component 성능 최적화
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
