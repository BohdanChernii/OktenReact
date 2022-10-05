import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postsService.get().then(res => setPosts(res.data))
  }, [])

  return (
    <div>
      Posts
      {posts.map( post => <Post key={post.id} post={post}/>)}
    </div>
  );
};

export default Posts;