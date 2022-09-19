import React, {useState} from 'react';
import './User.scss'


const User = ({lift, item}) => {
  const {name, phone, username, website} = item
  return (<div className='users__container'>
      <div className='user'>
        <p className="user__name">{name}</p>
        <p className="user__name">{phone}</p>
        <p className="user__name">{username}</p>
        <p className="user__name">{website}</p>
      </div>
      <button className="getUser" onClick={() => lift(item)}>Get info</button>
    </div>

  );
};

export default User;