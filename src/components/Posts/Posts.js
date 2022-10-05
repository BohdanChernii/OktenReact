import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {postsService} from "../../services/posts.service";
import {ADD_POSTS, CHOOSE_POST} from "../../actions/post.actions";

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postsService.getAll().then((res) => dispatch({
      type: ADD_POSTS,
      payload: res.data
    })).then(res => setPosts(res.payload))
  }, [])
  const dispatch = useDispatch()
  console.log(posts);
  return (
    <div className={'parent'}>
      {posts.map(post => (
          <div className={'child'}>
            <p>{post.title}</p>
            <button onClick={() => dispatch({type: CHOOSE_POST, payload: post.id})}>post</button>
        </div>
      ))}

    </div>
  );
};

export default Posts;