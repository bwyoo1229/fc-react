import React, { useReducer, useRef, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const countActiveUsers = (users) => {
  console.log('활성 사용자 수를 세는중...');

  return users.filter((user) => user.active).length;
};

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        // !연산자 이용해서 값 반전하는 방법으로 toggle
        users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        // 일치 하지 않는 것만 남음 (일치하는 것은 remove 됨)
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, email } = state.inputs;
  const { users } = state;
  const nextId = useRef(4);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });

    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
