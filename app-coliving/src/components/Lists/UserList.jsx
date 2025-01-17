// components/Lists/UserList.jsx
import React from 'react';
import './UserList.css';
import UserCard from './UserCard';

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          phone={user.phone}
          role={user.role}
          date={user.date}
          onEdit={() => onEdit(user.id)}
          onDelete={() => onDelete(user.id)}
        />
      ))}
    </div>
  );
}

export default UserList;
