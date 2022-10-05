import React from 'react';
import {useLocation, useNavigate,} from "react-router";

const PostDetails = () => {
const {state} = useLocation()
  const navigate = useNavigate()
  return (
    <div className={'parent'}>
      <div className={'child'}>
        <p>Title: {state.title} </p>
        <p>Body:  {state.body} </p>
        <button onClick={()=>navigate('/posts')}>To Posts</button>
      </div>
    </div>
  );
};

export {PostDetails};