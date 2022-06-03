import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import "./Feed.scss";

// let id = 0;
function Feed(props) {
  const [commentList, setCommentList] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const { feed } = props;

  function toggleIsLiked() {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }
  function saveComment(e) {
    const { value, tagName } = e.target;
    const commentInput = document.getElementById("comment");
    if (e.key === "Enter") {
      if (value.length >= 1) {
        setCommentList([...commentList, value]);
        commentInput.value = "";
        // id += 1;
      }
    } else if (tagName === "BUTTON") {
      if (commentInput.value.length >= 1) {
        setCommentList([...commentList, commentInput.value]);
        commentInput.value = "";
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
              style={{ color: isLiked ? "red" : "black" }}
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
              <b>{feed.contents.likePeople.id}</b>님 외{" "}
              <b>{feed.contents.likePeople.count}명</b>이 좋아합니다.
            </span>
          </div>
          <div className="main-message">
            <a href="">
              <b>{feed.contents.proFile.id}</b>
            </a>
            <p className="'text">{feed.contents.message}</p>
          </div>
          <div className="display-comment">
            <ul>
              {commentList.map((comment, idx) => {
                return <Comment key={idx} comment={comment} />;
              })}
            </ul>
          </div>
          <span className="info">{feed.contents.postTime}</span>
        </div>
        <div className="leave-comment">
          <input
            onKeyPress={(e) => {
              saveComment(e);
            }}
            id="comment"
            type="text"
            placeholder="댓글 달기..."
          />
          <button id="post" className="blue" onClick={(e) => saveComment(e)}>
            게시
          </button>
        </div>
      </div>
    </main>
  );
}

export default Feed;
