import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentActions} from "../../slices";
import Comment from "../Comment/Comment";


const Comments = () => {
  const dispatch = useDispatch()
  const {comments,loading}=useSelector(state=>state.commentsReducer)
  useEffect(() => {
    dispatch(commentActions.getAll())
  },[])
  return (
    <div>
      {loading&&<h2>Loading.........</h2>}
      {comments.map(comment=>(
        <Comment key={comment.id} comment={comment}/>
      ))}
    </div>
  );
};

export default Comments;