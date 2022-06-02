import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Feed.module.scss';

library.add(
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
  faInstagram,
  faEllipsis,
);

function Feed(props) {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState(props.comment);
  const [isValid, setIsValid] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const updateBtn = () => {
    const commentValid = commentValue !== '';
    setIsValid(commentValid);
    if (isValid && window.event.keyCode === 13) {
      postComment();
    }
  };

  const handleCommentInput = (e) => {
    setCommentValue(e.target.value);
  };

  const postComment = () => {
    setCommentList([
      ...commentList,
      { commentAuthor: '123', commentContent: commentValue },
    ]);
    setCommentValue('');
    setIsValid(false);
  };

  const toggleHeartBtn = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <article className={styles.feeds}>
        <div className={styles.feedsTop}>
          <div className={styles.feedsTopLeft}>
            <div>
              <img
                src={props.profileImage}
                id={styles.profileImg}
                alt="프로필 이미지"
              />
            </div>
            <span className={styles.nickName}>{props.userName}</span>
          </div>
          <div className={styles.feedsTopRight}>
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
          </div>
        </div>
        <img
          src={props.imageUrl}
          alt="피드 이미지"
          id={styles.feedImg}
          width="500px"
          height="500px"
        />
        <div className={styles.feedsIcons}>
          <div className={styles.feedsIconsLeft}>
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-heart"
                className={
                  isLiked ? `${styles.redHeart}` : `${styles.grayHeart}`
                }
                onClick={toggleHeartBtn}
              />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-comment" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-share-from-square" />
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-bookmark" color="gray" />
          </div>
        </div>
        <div className={styles.feedsLikes}>
          <div>
            <img
              src={props.likePeople.likePeopleImageUrl}
              id={styles.profileImg}
              alt="프로필 이미지"
            />
          </div>
          <div>
            <span className={styles.nickName}>{props.likePeople.nickname}</span>
            님 외 {props.likePeople.likeCnt}명이 좋아합니다
          </div>
        </div>
        <div className={styles.feedsComments}>
          {commentList.map((comment) => {
            return (
              <Comment
                key={comment.commentId}
                userName={comment.commentAuthor}
                content={comment.commentContent}
              />
            );
          })}
          <div className={`${styles.time} ${styles.feedTime}`}>
            {props.date}
          </div>
          <div className={styles.writeComment}>
            <input
              onKeyUp={updateBtn}
              onChange={handleCommentInput}
              id={styles.comment}
              type="text"
              placeholder="댓글 달기..."
              value={commentValue}
            />
            <button
              disabled={isValid ? false : true}
              className={
                isValid ? `${styles.activated}` : `${styles.deactivated}`
              }
              onClick={postComment}
            >
              게시
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feed;
