import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'bwyoo1229',
      email: 'bwyoo1229@gmail.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  // useRef로 값은 변화해도 component가 re-rendering 되는 것을 막을 수 있다.
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
