import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import {MyContext} from "../index";

const MainLayout = () => {
  // const context = useContext(MyContext)
  return (
    <div>
      {/*<h1>{context.title}</h1>*/}
      <Link to={'home'}>Home</Link>
      <Link to={'about'}>About</Link>
      <Link to={'posts'}>Posts</Link>
      <Link to={'users'}>Users</Link>
      <Outlet/>
    </div>
  );
};

export default MainLayout;