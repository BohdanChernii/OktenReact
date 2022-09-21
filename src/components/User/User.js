import React from 'react';
import './User.scss'

const User = ({name,phone,userName}) => {
  return (
    <div className= 'user'>
      <p className="user__name">{name}</p>
      <p className="user__phone">{phone}</p>
      <p className="user__userName">{userName}</p>
    </div>
  );
};

export default User;