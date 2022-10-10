import React from 'react';

const Comment = ({comment}) => {
  const {body, name} = comment
  return (
    <div>
      <h4>{name}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Comment;