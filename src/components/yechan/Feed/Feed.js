import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import './Feed.scss';

// let id = 0;
function Feed(props) {
  const { feed } = props;
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(feed.contents.commentData);
  const [isLiked, setIsLiked] = useState(false);

  function toggleIsLiked() {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }
  function saveComment(e) {
    // const { value, tagName } = e.target;
    // console.log(tagName);
    // const commentInput = document.getElementById('comment');
    if (e.key === 'Enter') {
      if (comment.length >= 1) {
        setCommentList([
          ...commentList,
          {
            id: commentList[commentList.length - 1]['id'] + 1,
            userName: 'yechan',
            content: comment,
            isLiked: false,
          },
        ]);
        setComment('');
      }
    } else if (e.target.tagName === 'BUTTON') {
      if (comment.length >= 1) {
        setCommentList([
          ...commentList,
          {
            id: commentList[commentList.length - 1]['id'] + 1,
            userName: 'yechan',
            content: comment,
            isLiked: false,
          },
        ]);
        setComment('');
      }
    }
  }

  return (
    <main className="Feed">
      <div className="post">
        <header className="edit-group">
          <div className="editor">
            <img
              className="profile-img"
              src={feed.contents.proFile.imgUrl}
              alt=""
            />
            <span className="'nickname">{feed.contents.proFile.id}</span>
          </div>
          <span className="material-symbols-outlined">more_horiz</span>
        </header>
        <img src={feed.contents.imgUrl} alt="" />
        <div className="contents-info">
          <div className="icon-group">
            <span
              className="material-symbols-outlined"
              style={{ color: isLiked ? 'red' : 'black' }}
              onClick={toggleIsLiked}
            >
              favorite
            </span>
            <span className="material-symbols-outlined">mode_comment</span>
            <span className="material-symbols-outlined">file_upload</span>
            <span className="material-symbols-outlined">bookmark</span>
          </div>
          <div className="like">
            <img
              className="profile-img"
              src={feed.contents.likePeople.imgUrl}
              alt=""
            />
            <span className="'like-message">
              <b>{feed.contents.likePeople.id}</b>??? ???{' '}
              <b>{feed.contents.likePeople.count}???</b>??? ???????????????.
            </span>
          </div>
          <div className="main-message">
            <a href="#">
              <b>{feed.contents.proFile.id}</b>
            </a>
            <p className="'text">{feed.contents.message}</p>
          </div>
          <div className="display-comment">
            <ul className="comments">
              {commentList.map((comment, idx) => {
                return <Comment key={idx} comment={comment} />;
              })}
            </ul>
          </div>
          <span className="info">{feed.contents.postTime}</span>
        </div>
        <div className="leave-comment">
          <input
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyPress={(e) => {
              saveComment(e);
            }}
            value={comment}
            type="text"
            placeholder="?????? ??????..."
          />
          <button id="post" className="blue" onClick={(e) => saveComment(e)}>
            ??????
          </button>
        </div>
      </div>
    </main>
  );
}

export default Feed;
