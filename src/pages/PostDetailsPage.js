import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";
import {postsService} from "../services/posts.service";

const PostDetailsPage = () => {
  const {state} = useLocation()
  const [post, setPost] = useState(state)
  const {id} = useParams()

  useEffect(() => {
    if (!state) {
      postsService.getById(id).then(({data}) => setPost(data))
    }
    setPost(state)

  }, [state, id])
  return (
    <div>
      <div>Details</div>
      {post && <div>{JSON.stringify(post)}</div>}
    </div>
  );
};
export  {PostDetailsPage};