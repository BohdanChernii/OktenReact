import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {useForm} from "react-hook-form";

import {getUsers, postUser} from "../../services/users.service";

import './Users.scss'

const Users = () => {
  const [users, setUsers] = useState([])
  const {register, handleSubmit, formState: {errors}, setValue} = useForm({
    defaultValues: {
      name: '',
      phone: '',
      username: ''
    }
  })

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])

  const onSubmit = (data) => {
    console.log(data);
    postUser(data)
    users.push({...data, id: 12})
  }
  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="users__form">
        <input type="text" className="users__form-input" placeholder='name'  {...register('name', {
          required: true,
          minLength: 3
        })}/>
        {errors.name && <span>This field is required</span>}
        <input type="text" className="users__form-input" placeholder='phone' {...register('phone', {required: true,})}/>
        {errors.phone && <span>This field is required</span>}
        <input type="text" className="users__form-input" placeholder='userName'
               {...register('username', {required: true})}/>
        {errors.username && <span>This field is required</span>}
        <button className="users__form-button">Get Users</button>

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