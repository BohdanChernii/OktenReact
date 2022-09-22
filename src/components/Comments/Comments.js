import React, {useEffect, useState} from 'react';
import {getComments, postComment} from "../../services/comments.service";
import Comment from "../Comment/Comment";

import {useForm} from "react-hook-form";

const Comments = () => {
  const [comments, setComments] = useState([])
  const {register, formState: {errors}, handleSubmit, setValue} = useForm({defaultValues: {title: '', body: ''}})

  useEffect(() => {
    getComments().then(res => setComments(res.data))
  }, [])
  const onSubmit = (data) => {
    postComment(data)
    comments.unshift(data)
  }

  return (
    <div>
      <h1>Comments</h1>
      <form className="comments__form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="comment__form-input"
               placeholder='name of comment' {...register('name', {required: true})}/>
        <input type="text" className="comment__form-input"
               placeholder='body of comment' {...register('body', {required: true})}/>
        <button className="comment__form-button">Get comments</button>
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