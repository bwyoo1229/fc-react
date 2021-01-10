import React from 'react';

// 하나의 컴포넌트 파일에 두개의 컴포넌트를 만들어도 상관 없다
// props를 받아올때 비구조화 할당 이용
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
function UserList() {
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

  // Each child in a list should have a unique "key" prop.
  // 효율적인 re-rendering을 위해서 각 배열의 고유한 key 값을 지정해주어야 한다.
  // re-rendering 할때 key 값을 통해서 객체들을 관리하고 있기 때문에 배열에서 특정 객체의 추가/ 삭제가 효율적으로 된다.
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      {/* 만약 key으로 쓸 수 있는 고유 값이 없다면 index 값을 넣어줄 수 있다. 하지만 비효율적 */}
      {/* {users.map((user, index) => (
						<User user={user} key={index} />
					))} */}
    </div>
  );
}

export default UserList;
