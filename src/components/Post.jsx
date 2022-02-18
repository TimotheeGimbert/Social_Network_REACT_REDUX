import React from 'react';

const Post = (props) => {

  return (
    <div className='Post'>
      <h3>{props.post.user.username}</h3>
      <p>{props.post.text}</p>
    </div>
  );
};

export default Post;