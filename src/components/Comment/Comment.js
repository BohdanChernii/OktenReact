import React from 'react';

const Comment = ({name, body}) => {
  return (
    <div>
      <h4 className="comment__title">{name}</h4>
      <p className="comment__body">{body}</p>
    </div>
  );
};

export default Comment;