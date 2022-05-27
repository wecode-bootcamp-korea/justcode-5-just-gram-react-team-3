import React, { useState } from 'react';
import Comment from '../../components/Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Feed.scss';

library.add(
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
  faInstagram,
);

function Feed(props) {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState(props.comment);
  const [isValid, setIsValid] = useState(false);

  const updateBtn = () => {
    if (commentValue !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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

  return (
    <div>
      <article className="feeds">
        <div className="feeds-top">
          <div className="feeds-top-left">
            <div>
              <img
                src={props.profileImage}
                id="profile-img"
                alt="프로필 이미지"
              />
            </div>
            <span className="nickname">{props.userName}</span>
          </div>
          <div className="feeds-top-right">
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>
        <img
          src={props.imageUrl}
          alt="피드 이미지"
          id="feed-img"
          width="500px"
          height="500px"
        />
        <div className="feeds-icons">
          <div className="feeds-icons-left">
            <div id="feed-heart">
              <FontAwesomeIcon icon="fa-solid fa-heart" color="gray" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-comment" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-share-from-square" />
            </div>
          </div>
          <div>
            <i className="fa-regular fa-bookmark" />
          </div>
        </div>
        <div className="feeds-likes">
          <div>
            <img
              src={props.likePeople.likePeopleImageUrl}
              id="profile-img"
              alt="프로필 이미지"
            />
          </div>
          <div>
            <span className="nickname">{props.likePeople.nickname}</span>님 외{' '}
            {props.likePeople.likeCnt}명이 좋아합니다
          </div>
        </div>
        <div className="feeds-comments">
          {commentList.map((comment) => {
            return (
              <Comment
                key={comment.commentId}
                userName={comment.commentAuthor}
                content={comment.commentContent}
              />
            );
          })}
          <div className="time feed-time">{props.date}</div>
          <div className="write-comment">
            <input
              onKeyUp={updateBtn}
              onChange={handleCommentInput}
              id="comment"
              type="text"
              placeholder="댓글 달기..."
              value={commentValue}
            />
            <button
              id="write-btn"
              disabled={isValid ? false : true}
              style={{
                color: isValid ? 'blue' : 'lightblue',
                cursor: isValid ? 'pointer' : 'auto',
              }}
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
