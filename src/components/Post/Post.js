import React, {useContext} from 'react';
import {useLocation, useNavigate, useParams} from "react-router";
import {MyContext} from "../../index";

const Post = ({post}) => {
  const navigate = useNavigate()
  const context = useContext(MyContext)
  return (
    <div>
      <p>User ID: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <button onClick={() => navigate(`${post.id}`, {state: {...post}} )}>Post</button>
      <button onClick={() => context.post = post}>Save</button>
    </div>
  );
};

export default Post;