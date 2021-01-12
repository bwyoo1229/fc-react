import React, { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const countActiveUsers = (users) => {
  console.log('활성 사용자 수를 세는중...');

  return users.filter((user) => user.active).length;
};

const initialState = {
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
    case 'CREATE_USER':
      return {
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

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
