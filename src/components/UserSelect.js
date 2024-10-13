import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSelect = ({ selectedUser, setSelectedUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then((response) => console.log(response.data));
  }, []);

  return (
    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
      <option value="">Select a User</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelect;
