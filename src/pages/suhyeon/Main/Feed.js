import { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import heartImage from "../assets/heart.png";
import pinkheartImage from "../assets/pinkHeart.png";

function Feed({
  author,
  content,
  date,
  comments,
  imageUrl,
  likePeople,
  profileImageUrl,
  isLiked,
}) {
  const [commentArr, setCommentArr] = useState(comments);
  const [comment, setComment] = useState("");
  const [isLike, setIsLike] = useState(isLiked);

  const changeHeart = () => {
    isLike ? setIsLike(false) : setIsLike(true);
  };

  const enterCheck = (e) => {
    const { value } = e.target;
    if (e.key === "Enter" && value !== "") {
      writeComment();
    }
  };

  const valueCheck = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const writeComment = () => {
    let temp = [
      ...commentArr,
      {
        id: commentArr.length + 1,
        author: "lshyun955",
        content: comment,
        isLiked: false,
      },
    ];
    setCommentArr(temp);
    setComment("");
  };

  const deleteComment = (id) => {
    let temp = commentArr.filter((v) => v.id !== id);
    setCommentArr(temp);
  };
  return (
    <article className="feed_container">
      <section className="feed_header">
        <section className="feed_writer">
          <img className="feed_writer_photo" alt="" src={profileImageUrl} />
          <Link to="/suHyeonMain">{author}</Link>
        </section>
        <button className="feed_btn">
          <img src="/images/suhyeon/more.png" alt="more" width="20px" />
        </button>
      </section>
      <img alt="aa" className="feed_photo" src={imageUrl} />
      <section className="feed_content">
        <section className="feed_button_group">
          <section className="like_comment_share">
            <button className="feed_btn" onClick={changeHeart}>
              <img
                src={isLike ? pinkheartImage : heartImage}
                alt="heart"
                width="15px"
              />
            </button>
            <button className="feed_btn">
              <img
                src="/images/suhyeon/speech-bubble.png"
                alt="speech-bubble"
                width="15px"
              />
            </button>
            <button className="feed_btn">
              <img src="/images/suhyeon/share.png" alt="share" width="15px" />
            </button>
          </section>
          <section className="bookmark">
            <button className="feed_btn">
              <img
                src="/images/suhyeon/bookmark-white.png"
                alt="bookmark"
                width="15px"
              />
            </button>
          </section>
        </section>
        <section className="like_list_box">
          <div className="like_feed_user">
            <img alt="aa" className="like_photo" src={likePeople.imageUrl} />
            <Link to="/suHyeonMain">{likePeople.nickname}</Link>님&nbsp;
            <span className="bold">외&nbsp;{likePeople.count}명</span>
            이&nbsp; 좋아합니다.
          </div>
        </section>
        <div className="main_content">
          <Link to="/suHyeonMain">{author}</Link>
          <span className="each_feed_content">{content}</span>
          <div className="feed_date">작성일:{date}</div>
        </div>
        <section className="feed_comment">
          {commentArr.map((comment) => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                author={comment.author}
                content={comment.content}
                isLiked={comment.isLiked}
                deleteEvent={deleteComment}
              />
            );
          })}
        </section>
        <section className="comment_box">
          <input
            onKeyUp={enterCheck}
            onChange={valueCheck}
            value={comment}
            className="write_comment"
            type="text"
            placeholder="댓글 달기"
          />
          <button onClick={writeComment} className="write_comment_btn">
            게시
          </button>
        </section>
      </section>
    </article>
  );
}

export default Feed;
