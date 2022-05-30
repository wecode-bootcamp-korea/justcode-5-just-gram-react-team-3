import React, { useState } from 'react';
import './Comment.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHeart);

function Comment(props) {
  const [isDeleted, setIsDeleted] = useState(false);
  const delComment = () => {
    setIsDeleted(true);
  };

  const [isLiked, setIsLiked] = useState(false);
  const toggleHeartBtn = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      {isDeleted ? (
        <></>
      ) : (
        <div className="userComment">
          <div className="comment">
            <span className="userName">{props.userName}</span>
            <span> {props.content}</span>
          </div>
          <div className="commentRight">
            <FontAwesomeIcon
              icon="fa-solid fa-heart"
              className={isLiked ? 'redHeart' : 'grayHeart'}
              onClick={toggleHeartBtn}
            />
            <button className="deleteCommentBtn" onClick={delComment}>
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Comment;
