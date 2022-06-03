import React, { useState, useEffect, useRef } from "react";
import Comment from "./Comment";
import { formatDistance, subDays } from "date-fns";

const Feed = (props) => {
  const useComponentDidMount = () => {
    const ref = useRef();
    useEffect(() => {
      ref.current = true;
    }, []);
    return ref.current;
  };

  const isComponentMounted = useComponentDidMount();

  const imgLiked = "/images/jieunkim/heart-red.png";
  const imgNotLiked = "/images/jieunkim/heart.png";

  const [isLiked, setLiked] = useState(props.isLiked);
  const [cntLiked, setCntLiked] = useState(props.likePeople.likeCnt);
  const [commentInput, setCommentInput] = useState("");
  const [commentList, setCommentList] = useState(props.comments);
  const [commentRemovedList, setCommentRemovedList] = useState([]);
  const [timeStamp, setTimeStamp] = useState("time-stamp");

  const handleRemovedData = (element) => {
    setCommentRemovedList([...commentRemovedList, element]);
  };

  const iconLiked = isLiked ? imgLiked : imgNotLiked;

  const handleLiked = () => {
    setLiked(!isLiked);
  };

  useEffect(() => {
    if (isComponentMounted) {
      isLiked ? setCntLiked(cntLiked + 1) : setCntLiked(cntLiked - 1);
    }
  }, [isLiked]);

  const currentDate = new Date();
  const postedDate = new Date(props.date);

  const sincePosted = formatDistance(subDays(postedDate, 0), currentDate, {
    addSuffix: false,
  });

  useEffect(() => {
    setTimeStamp(sincePosted);
  }, [sincePosted]);

  const handleEnterKey = (e) => {
    return e.key === "Enter";
  };

  const isActiveCommentInput = () => {
    return commentInput.length > 0;
  };

  const isActivePostBtn = () => {
    return isActiveCommentInput();
  };

  const handleKeyOnInput = (e) => {
    if (handleEnterKey(e)) {
      postCommentInput();
    }
  };

  const handlePostBtn = () => {
    if (isActivePostBtn) {
      postCommentInput();
    }
  };

  const postCommentInput = () => {
    setCommentList([
      ...commentList,
      {
        id: commentList[commentList.length - 1].id + 1,
        author: props.loginUserId,
        content: commentInput,
        isLiked: isLiked,
      },
    ]);
    setCommentInput("");
  };

  return (
    <article className="article-container">
      <div className="article-header">
        <div className="author-profile">
          <div className="author-profile-icon user-profile">
            <img
              className="author-icon-profile"
              id="author-icon-profile"
              alt="author"
              src={props.profileImageUrl}
            />
          </div>
          <div className="author-info user-info">
            <p className="author-id user-id" id="author-id">
              {props.author}
            </p>
            <p className="author-location user-location" id="author-location">
              location
            </p>
          </div>
        </div>
        <div className="author-more">
          <img
            className="icon-more"
            alt="more"
            src="/images/jieunkim/more.png"
          ></img>
        </div>
      </div>
      <div className="frame">
        <img
          className="feed-photo"
          id="feed-photo"
          alt=""
          src={props.imageUrl}
        />
      </div>
      <div className="jk-feed-icons">
        <div className="jk-feed-icons-left">
          <img
            className="icon-like"
            alt="like"
            src={iconLiked}
            onClick={() => {
              handleLiked();
            }}
          />
          <img
            className="icon-chat"
            alt="chat"
            src="/images/jieunkim/chat.png"
          />
          <img
            className="icon-upload"
            alt="upload"
            src="/images/jieunkim/upload.png"
          />
        </div>
        <div className="jk-feed-icons-right">
          <img
            className="icon-bookmark"
            alt="bookmark"
            src="/images/jieunkim/bookmark-white.png"
          />
        </div>
      </div>
      <div className="likeby">
        <img
          className="icon-likeby user-icon"
          alt="who"
          src={props.likePeople.imageUrl}
        />
        <span className="user-id-likedby text-likedby" id="user-id-likedby">
          {props.likePeople.nickname}
        </span>
        <span>&nbsp;</span>
        <span className="text-likedby">님 외&nbsp;</span>
        <span className="text-likedby" id="text-likedby">
          {cntLiked}
        </span>
        <span className="text-likedby">명이</span>
        <span>&nbsp;</span>
        <span className="text-likedby">좋아합니다.</span>
      </div>
      <div className="feed-content">
        <div className="feed-content-inner">
          <span id="author-id">{props.author}</span>
          <span>&nbsp;</span>
          <span id="feed-content-text">{props.content}</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span className="show-more"> ... 더 보기</span>
        </div>
      </div>
      <div className="comment">
        {commentList
          .filter((comment) => !commentRemovedList.includes(comment.id))
          .slice(-props.commentLimit)
          .map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              isLiked={comment.isLiked}
              handleRemovedData={handleRemovedData}
            />
          ))}
      </div>
      <div className="last-updated">
        <span id="time-stamp">&nbsp;&nbsp;{timeStamp}&nbsp;전</span>
      </div>

      <div className="new-comment">
        <input
          type="text"
          id="new-comment-input"
          placeholder="댓글 달기..."
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value);
          }}
          onKeyUp={handleKeyOnInput}
        />
        <div className="post">
          <button
            className="post-btn"
            id="post-btn"
            disabled={!isActivePostBtn()}
            onClick={handlePostBtn}
          >
            게시
          </button>
        </div>
      </div>
    </article>
  );
};

export default Feed;
