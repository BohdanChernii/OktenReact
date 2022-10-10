import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../slices";

const User = ({user}) => {
  const {id, name, username, email} = user

  const dispatch = useDispatch()


  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Nick: {username}</p>
      <p>Mail: {email}</p>
      <button onClick={() => dispatch(userActions.getById(user))}>User</button>
      <button onClick={()=>dispatch(userActions.getUser(user))}>Decided</button>
    </div>
  );
};

export {User};