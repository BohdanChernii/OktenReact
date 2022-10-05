import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersServices} from "../../services/users.services";
import {ADD_USERS, CHOOSE_USER} from "../../actions/user.actions";

const Users = () => {

  // const [users,setUsers] = useState([])
  let state = useSelector(state => state)
  const {userReducer} = state
  const {users} = userReducer
  let dispatch = useDispatch()

  useEffect(() => {
    usersServices.getAll().then(res => dispatch({type: ADD_USERS, payload: res.data}))
  }, [])

  return (
    <div className={'parent'}>
      {users.map(user => (
        <div className={'child'}>
          <p>Name: {user.name}</p>
          <p>UserName: {user.username}</p>
          <button key={user.id} onClick={() => dispatch({type: CHOOSE_USER, payload: user.id})}>User</button>
        </div>
      ))}
    </div>
  );
};

export default Users;