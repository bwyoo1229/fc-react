import React from 'react';

// React.memo를 사용한 최적화
const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

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
});

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

// React.memo로 export 하는 component를 감싸주면 props가 바뀌었을 때만 re-rendering 한다.
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
