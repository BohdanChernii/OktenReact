import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../slices/posts.slice";
import Post from "../Post/Post";

const Posts = () => {
  const dispatch = useDispatch()
  const {posts,post, error, loading} = useSelector(state => state.postReducer)

  useEffect(() => {
    dispatch(postActions.getAll())
  }, [])

  return (
    <div>
      {post&&<h3>{post.title.toUpperCase()}</h3>}
      {loading&&<h3>Loading.........</h3>}
      {posts.map(post=>(<Post key={post.id} post={post}/>))}
    </div>
  );
};

export {Posts}