import React, { useState } from 'react';
import styles from './Comment.module.scss';
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
        <div className={styles.userComment}>
          <div className={styles.comment}>
            <span className={styles.userName}>{props.userName}</span>
            <span> {props.content}</span>
          </div>
          <div className={styles.commentRight}>
            <FontAwesomeIcon
              icon="fa-solid fa-heart"
              className={isLiked ? `${styles.redHeart}` : `${styles.grayHeart}`}
              onClick={toggleHeartBtn}
            />
            <button className={styles.deleteCommentBtn} onClick={delComment}>
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Comment;
