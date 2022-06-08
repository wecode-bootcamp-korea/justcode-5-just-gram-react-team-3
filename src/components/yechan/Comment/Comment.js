import React, { useEffect, useState } from 'react';
import './Comment.scss';

function Comment(props) {
  const { comment } = props;
  const [isLiked, setIsLiked] = useState(comment.isLiked);

  // useEffect(() => {
  //   setCommentList(comment);
  // });
  // if (!isLiked) {
  //   return null;
  // }
  function toggleIsLiked() {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }

  return (
    <li>
      <a href="">
        <b>{comment.userName}</b>
      </a>
      <span className="text">{comment.content}</span>
      <span
        className="material-symbols-outlined"
        style={{ color: isLiked ? 'red' : 'black' }}
        onClick={toggleIsLiked}
      >
        favorite
      </span>
    </li>
  );
}

export default Comment;
