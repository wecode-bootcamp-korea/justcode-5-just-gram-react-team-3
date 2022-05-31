import React, {useEffect, useState} from "react";
import "./Comment.scss"
const Comment =(props) => {
  const imgLiked = "/images/jieunkim/heart-red.png";

  const author = props.author;
  const content = props.content;

  const [isShownCommentOpt, setShownCommentOpt] = useState(false);
  const [isCommentRemoved, setCommentRemove] = useState(false);
  const [isCommentLiked, setCommentLiked] = useState(props.isLiked);
  

  const handleCommentLikeBtn = () => {
    console.log(props.key)
    console.log(props.removed)
    setCommentLiked(!isCommentLiked);
  };

  const handleRemoveBtn = () => {
    setCommentRemove(isCommentRemoved);
  };

  return (
    <>
    {isCommentRemoved ? (<></>) :
    <>
      <div className="comment-content"
        onMouseEnter={() => setShownCommentOpt(true)}
        onMouseLeave={() => setShownCommentOpt(false)}>
          <div>
        <span id="comment-id">{author}</span>
        <span>&nbsp;</span>
        <span id="comment-text">{content}</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
      <div className="manage-comment">
        <div className="like-comment">
          {
          isShownCommentOpt ?
          (         
          
          (<button
            className="like-comment-btn"
            id="like-comment-btn"
            onClick={handleCommentLikeBtn}
            background-color="blue"
          >
           {isCommentLiked ? 
           (<img alt="like" src={imgLiked}/>)
             : (<span>좋아요</span>)}
          </button>)
          )
          : <></>}
        </div>
        <div className="remove-comment">
          <button
            className="remove-comment-btn"
            id="remove-comment-btn"
            onClick={handleRemoveBtn}
          >
            {isShownCommentOpt && <span>삭제</span>}
          </button>
        </div>
        </div> 
      </div>
    </>
    }
    </>
  );
}

export default Comment;
