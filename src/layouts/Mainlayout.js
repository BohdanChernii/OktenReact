import React from 'react';

import {Link} from "react-router-dom";

import {Outlet} from "react-router";

const Mainlayout = () => {
  return (
    <>
      <header style={{display:'flex',justifyContent:"space-evenly",margin:'auto',maxWidth:'1440px'}}>
        <Link to={'users'}>
          Users
        </Link>
        <Link to={'posts'}>
          Posts
        </Link>
        <Link to={'comments'}>
          Comments
        </Link>
      </header>
      <Outlet/>
    </>

  );
};

export default Mainlayout;