import React from 'react';
import './Comment.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHeart);

function Comment(props) {
  return (
    <>
      <div className="user-comment">
        <div>
          <span className="username">{props.userName}</span>
          <span className="comment-value"> {props.content}</span>
        </div>
        <div className="comment-right">
          <FontAwesomeIcon icon="fa-solid fa-heart" color="gray" />
          <button className="delete-comment-btn">삭제</button>
        </div>
      </div>
    </>
  );
}

export default Comment;
