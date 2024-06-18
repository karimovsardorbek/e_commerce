// frontend/src/components/Users.js
import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-center my-4">Users</h2>
      <div className="list-group">
        {users.map((user) => (
          <div key={user.id} className="list-group-item">
            <h5>{user.username}</h5>
            <p className="text-muted">Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
