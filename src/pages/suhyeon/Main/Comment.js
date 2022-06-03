import { useState } from "react";
import heartImage from "../assets/heart.png";
import pinkheartImage from "../assets/pinkHeart.png";

function Comment({ id, author, content, isLiked, deleteEvent }) {
  const [commentIsLike, setCommentIsLike] = useState(isLiked);
  const changeHeart = () => {
    commentIsLike ? setCommentIsLike(false) : setCommentIsLike(true);
  };

  const hadleEvent = (commentId) => {
    deleteEvent(commentId);
  };
  return (
    <div className="comment_style">
      <div className="like_btn_box1">
        <a href="/suHyeonMain">{author}</a>
        <span className="comment_content">{content}</span>
      </div>
      <div className="like_btn_box2">
        <button className="remove_comment" onClick={() => hadleEvent(id)}>
          삭제
        </button>
        <button className="comment_like_btn" onClick={changeHeart}>
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
