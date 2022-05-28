import { useState } from "react";
import heartImage from "../assets/heart.png";
import pinkheartImage from "../assets/pinkHeart.png";

function Comment({ commentId, author, content, isLiked, deleteEvent }) {
  const [commentIsLike, setCommentIsLike] = useState(isLiked);
  const changeHeart = () => {
    if (commentIsLike === true) {
      setCommentIsLike(false);
    } else {
      setCommentIsLike(true);
    }
  };

  return (
    <div key={commentId} className="comment_style">
      <div className="like_btn_box1">
        <a href="/suHyeonMain">{author}</a>
        <span className="comment_content">{content}</span>
      </div>
      <div className="like_btn_box2">
        <button
          className="remove_comment"
          onClick={() => deleteEvent(commentId)}
        >
          삭제
        </button>
        <button
          className="comment_like_btn"
          onClick={() => changeHeart(commentId)}
        >
          <img
            src={commentIsLike ? pinkheartImage : heartImage}
            alt="comment-heart"
            width="15px"
          />
        </button>
      </div>
    </div>
  );
}

export default Comment;
