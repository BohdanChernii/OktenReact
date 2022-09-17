import React from 'react';
import "./User.css"

const User = ({id, name, getInfo, item}) => {
  return (
    <div className='user'>
      <p> user id: {id}</p>
      <p>user name: {name}</p>
      <button onClick={() => getInfo(item)}>Get user</button>
    </div>
  );
};

export default User;