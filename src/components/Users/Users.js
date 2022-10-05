import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {usersServices} from "../../services/users.services";

import {ADD_USERS, CHOOSE_USER} from "../../actions/user.actions";
import {useNavigate} from "react-router";

const Users = () => {

  // const [users,setUsers] = useState([])
  let state = useSelector(state => state)
  const {userReducer} = state
  const {users} = userReducer
  let dispatch = useDispatch()

  useEffect(() => {
    usersServices.getAll().then(res => dispatch({type: ADD_USERS, payload: res.data}))
  }, [])

  const navigate = useNavigate()
  return (
    <div className={'parent'}>
      {users.map(user => (
        <div className={'child'}>
          <p>Name: {user.name}</p>
          <p>UserName: {user.username}</p>
          <button key={user.id} onClick={() => {
            dispatch({type: CHOOSE_USER, payload: user.id})
            navigate(`${user.id}`, {state: user})
          }}>User
          </button>
        </div>
      ))}
    </div>
  );
};

export {Users};