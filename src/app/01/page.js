import axios from 'axios';

// UserList 컴포넌트를 통합합니다.
function UserList({ users }) {
  if (!users || users.length === 0) {
    return <div>No user data available</div>; // 사용자 데이터가 없을 때 메시지를 표시합니다.
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div> // 각 사용자의 이름을 화면에 표시합니다.
      ))}
    </div>
  );
}

const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

async function getUsers() {
  const response = await api.get('/users');
  return response.data; 
}

export default async function UsersPage() {
  const users = await getUsers();

  return <UserList users={users} />; // UserList를 사용하여 사용자 정보를 전달합니다.
}
