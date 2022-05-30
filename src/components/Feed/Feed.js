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

  return (
    <div>
      <article className="feeds">
        <div className="feedsTop">
          <div className="feedsTopLeft">
            <div>
              <img
                src={props.profileImage}
                id="profileImg"
                alt="프로필 이미지"
              />
            </div>
            <span className="nickName">{props.userName}</span>
          </div>
          <div className="feedsTopRight">
            <i className="fa-solid fa-ellipsis" />
          </div>
        </div>
        <img
          src={props.imageUrl}
          alt="피드 이미지"
          id="feedImg"
          width="500px"
          height="500px"
        />
        <div className="feedsIcons">
          <div className="feedsIconsLeft">
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-heart"
                color="gray"
                className="heart"
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
            <i className="fa-regular fa-bookmark" />
          </div>
        </div>
        <div className="feedsLikes">
          <div>
            <img
              src={props.likePeople.likePeopleImageUrl}
              id="profileImg"
              alt="프로필 이미지"
            />
          </div>
          <div>
            <span className="nickName">{props.likePeople.nickname}</span>님 외{' '}
            {props.likePeople.likeCnt}명이 좋아합니다
          </div>
        </div>
        <div className="feedsComments">
          {commentList.map((comment) => {
            return (
              <Comment
                key={comment.commentId}
                userName={comment.commentAuthor}
                content={comment.commentContent}
              />
            );
          })}
          <div className="time feedTime">{props.date}</div>
          <div className="writeComment">
            <input
              onKeyUp={updateBtn}
              onChange={handleCommentInput}
              id="comment"
              type="text"
              placeholder="댓글 달기..."
              value={commentValue}
            />
            <button
              disabled={isValid ? false : true}
              className={isValid ? 'activated' : 'deactivated'}
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
