import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../slices/posts.slice";


const Post = ({post}) => {
  const {title, body} = post
  const dispatch = useDispatch()

  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={() => dispatch(postActions.getById(post))}>Post</button>
    </div>
  );
};

export default Post;