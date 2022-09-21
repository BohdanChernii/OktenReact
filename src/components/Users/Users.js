import React, {useEffect, useState} from 'react';
import User from "../User/User";

import {getUsers, postUser} from "../../services/users.service";

import './Users.scss'

const Users = () => {
  const [users, setUsers] = useState([])
  const [usersFormState, setUsersFormState] = useState({name: '',phone:'',username:'' })
  const getUsersList = () => getUsers().then(res => setUsers(res.data))
  console.log(users);

  const onSubmit = (e)=> {
    e.preventDefault()
    postUser(usersFormState)
  }
  const onchange = (e) =>{
    setUsersFormState({...usersFormState, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={(e)=>{onSubmit(e)
        console.log(usersFormState);}} className="users__form">
        <input type="text" className="users__form-input" placeholder='name' name={'name'} value={usersFormState.name} onChange={onchange}/>
        <input type="text" className="users__form-input" placeholder='phone' name={'phone'} value={usersFormState.phone} onChange={onchange}/>
        <input type="text" className="users__form-input" placeholder='userName' name={'username'} value={usersFormState.username} onChange={onchange}/>
        <button className="users__form-button" onClick={() => getUsersList()}>Get Users</button>
      </form>
      <div className="users__list">
        {users.map(item => (
          <User key={item.id} name={item.name} phone={item.phone} userName={item.username}/>
        ))}
      </div>
    </div>
  );
};

export default Users;