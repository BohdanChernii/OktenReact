import React from 'react';
import Posts from "../components/Posts/Posts";
import {Outlet} from "react-router";

const PostsPage = () => {
  return (
    <div>
      <div>
        <Posts/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>

  );
};

export {PostsPage};