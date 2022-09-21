import React, {useState} from 'react';
import {getComments, postComment} from "../../services/comments.service";
import Comment from "../Comment/Comment";

const Comments = () => {
  const [comments, setComments] = useState([])
  const [postsFormState, setPostsFormState] = useState({title:'',body:''})

  const commentsList = (e) => {
    e.preventDefault()
    getComments().then(res => setComments(res.data))
    postComment(postsFormState)
  }
const onChange = (e)=>{
    setPostsFormState({...postsFormState,[e.target.name]:e.target.value})
}
  return (
    <div>
      <h1>Comments</h1>
      <form className="comments__form" onSubmit={(e) => commentsList(e)}>
        <input type="text" className="comment__form-input" name='title' placeholder='name of comment' value={postsFormState.name} onChange={onChange}/>
        <input type="text" className="comment__form-input" name='body' placeholder='body of comment' value={postsFormState.name} onChange={onChange}/>
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