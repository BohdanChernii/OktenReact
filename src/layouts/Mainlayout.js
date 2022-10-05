import React from 'react';

import {Link, NavLink} from "react-router-dom";

import {Outlet, useLocation, useParams} from "react-router";

const Mainlayout = () => {
  const location = useLocation()
  console.log(location.pathname);
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