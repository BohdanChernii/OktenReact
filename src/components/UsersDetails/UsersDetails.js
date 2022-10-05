import React from 'react';
import {useLocation, useNavigate} from "react-router";

const UsersDetails = () => {
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log(state);
  return (
    <div className={'parent'}>
      <div className={'child'}>
        <p>Title: {state.name} </p>
        <p>Body:  {state.email} </p>
        <button onClick={()=>navigate('/users')}>To Users</button>
      </div>
    </div>
  );
};

export {UsersDetails};