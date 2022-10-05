import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {commentService} from "../../services/comment.service";
import {ADD_COMMENTS} from "../../actions/coment.actions";

const Comments = () => {
  const [comments, setComments] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    commentService.getAll().then(res => dispatch({type: ADD_COMMENTS, payload: res.data})).then(res=>setComments(res.payload))
  }, [])
  return (
    <div className={'parent'}>
      {comments.map(comment=>(
        <div className={'child'}>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;