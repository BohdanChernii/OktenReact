import React from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

const Comment = ({item}) => {
  return (
    <div style={{borderBottom:'1px solid black',maxWidth:'100%',margin:'0 10rem'}}>
      <h1>
        {item.name}
      </h1>
      <p>{item.body}</p>
      <p>{item.email}</p>
      <Link style={{margin:'0.5rem',display:'block',}} to={`/posts/${item.id}`} state={{...item}}>Comment</Link>
    </div>

  );
};

export default Comment;