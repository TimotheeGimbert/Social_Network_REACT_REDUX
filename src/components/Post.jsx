import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {

  return (
    <div className='Post'>
      <Link to={`/users/${props.post.user.id}`}>
        <h3>{props.post.user.username}</h3>
      </Link>
      <p>{props.post.text}</p>
    </div>
  );
};

export default Post;