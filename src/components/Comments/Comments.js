import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {getComments, postComment} from "../../services/comments.service";

import Comment from "../Comment/Comment";

const Comments = () => {
  const [comments, setComments] = useState([])
  const [disabled,setDisabled] = useState(false)
  const {register, handleSubmit, reset} = useForm({defaultValues: {title: '', body: ''}})

  useEffect(() => {
    getComments().then(res => setComments(res.data))
  }, [])

  const onSubmit = async (data) => {
    await postComment(data)
    await comments.unshift(data)
    await setDisabled(true)
    await reset()
  }

  return (
    <div>
      <h1>Comments</h1>
      <form className="comments__form" onSubmit={handleSubmit(onSubmit)}
      onClick={()=>setDisabled(false)}>
        <input type="text" className="comment__form-input"
               placeholder='name of comment' {...register('name', {required: true})}/>
        <input type="text" className="comment__form-input"
               placeholder='body of comment' {...register('body', {required: true})}/>
        <button className="comment__form-button" disabled={disabled}>Create New</button>
      </form>
      <div className="comments__list">
        {comments.map(item => (
          <Comment key={item.id} body={item.body} name={item.name}/>
        ))}
      </div>
    </div>
  );
};

export default Comments;