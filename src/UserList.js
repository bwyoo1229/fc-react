import React, { useEffect } from 'react';

// 하나의 컴포넌트 파일에 두개의 컴포넌트를 만들어도 상관 없다
// props를 받아올때 비구조화 할당 이용
function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  // deps의 값이 설정되거나 바뀔 때 마다 호출이 됨
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);

    // unmount
    return () => {
      console.log('user값이 바뀌기 전');
      console.log(user);
    };
  }, [user]); // useEffect에서 사용하고 있는 값이 있다면 deps에 꼭 추가해주어야 한다.

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}
function UserList({ users, onRemove, onToggle }) {
  // Each child in a list should have a unique "key" prop.
  // 효율적인 re-rendering을 위해서 각 배열의 고유한 key 값을 지정해주어야 한다.
  // re-rendering 할때 key 값을 통해서 객체들을 관리하고 있기 때문에 배열에서 특정 객체의 추가/ 삭제가 효율적으로 된다.
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
      {/* 만약 key으로 쓸 수 있는 고유 값이 없다면 index 값을 넣어줄 수 있다. 하지만 비효율적 */}
      {/* {users.map((user, index) => (
						<User user={user} key={index} />
					))} */}
    </div>
  );
}

export default UserList;
