import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/services";
import Comment from "../Comment/Comment";

const Comments = () => {
  const [comments, satComments] = useState([])

  useEffect(() => {
    getComments().then(res => satComments(res.data))
  }, [])

  return (
    <div>
      {comments.map(item => (
        <div>
          <Comment key={item.id} item={item}/>
        </div>
      ))}
    </div>
  );
};

export default Comments;