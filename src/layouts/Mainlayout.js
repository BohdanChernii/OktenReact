import React from 'react';

import {Link, NavLink} from "react-router-dom";

import {Outlet,} from "react-router";

const Mainlayout = () => {

  return (
    <>
      <header style={{display: 'flex', justifyContent: "space-evenly", margin: 'auto', maxWidth: '1440px'}}>
        <NavLink to={'users'} className={'link'} >
          Users
        </NavLink>
        <NavLink to={'posts'} className={'link'}>
          Posts
        </NavLink>
        <NavLink to={'comments'} className={'link'}>
          Comments
        </NavLink>
      </header>
      <Outlet/>
    </>

  );
};

export default Mainlayout;