// components/Cards/UserCard.jsx:

import React from 'react';
import './UserCard.css';
import ProfileIcon from '../../assets/profile-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import DeleteIcon from '../../assets/delete-icon.svg';

function formatDate(date) {
  const [year, month, day] = date.split('-'); // Supondo o formato "aaaa-mm-dd"
  return `${day}-${month}-${year}`; // Retorna "dd-mm-aaaa"
}

function UserCard({ name, email, phone, role, date, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <div className="user-card-left">
        <img src={ProfileIcon} alt="Profile" className="user-card-avatar" />
        <div className="user-card-info">
          <p className="user-card-name">{name}</p>
          <p className="user-card-contact">{phone}</p>
          <p className="user-card-contact">{email}</p>
          <p className="user-card-role">{role}</p>
        </div>
      </div>
      <div className="user-card-right">
        <p className="user-card-date">{date}</p>
        <div className="user-card-actions">
          <img
            src={EditIcon}
            alt="Edit"
            className="user-card-action-icon"
            onClick={onEdit}
          />
          <img
            src={DeleteIcon}
            alt="Delete"
            className="user-card-action-icon"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
}


export default UserCard;
