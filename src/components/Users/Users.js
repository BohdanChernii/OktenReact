import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {useForm} from "react-hook-form";

import {getUsers, postUser} from "../../services/users.service";

import './Users.scss'

const Users = () => {
  const [users, setUsers] = useState([])
  const [disabled,setDisabled] = useState(false)
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues: {
      name: '',
      phone: '',
      username: ''
    }
  })

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])

  const onSubmit = async (data) => {
    await postUser(data)
    await users.push({...data, id: 12})
    await setDisabled(true)
    await reset()
  }
  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="users__form" onClick={()=>setDisabled(false)}>
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
        <button className="users__form-button" disabled={disabled}>Send User</button>
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