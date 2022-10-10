import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = () => {

  const {user} = useSelector(state => state.userReducer)
  console.log(user);
  return (
    <header>
      <NavLink to={'/users'}>Users</NavLink>
      <NavLink to={'/posts'}>Posts</NavLink>
      <NavLink to={'/comments'}>Comments</NavLink>
      <h1>
        Header
      </h1>
      <h2>{user && user.name}</h2>
    </header>
  );
};

export default Header;