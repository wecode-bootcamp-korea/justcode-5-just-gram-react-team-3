function Comment(props) {
  console.log(props);
  const comments = props.commentList.map((v, idx) => (
    <div key={idx.toString()} className="comment_style">
      <div className="like_btn_box1">
        <a href="/">{v.writer}</a>
        <span className="comment_content">{v.comment}</span>
      </div>
      <div className="like_btn_box2">
        <button className="remove_comment">삭제</button>
        <button className="comment_like_btn">
          <i className="fa-regular fa-heart like fa-xl heart_like"></i>
        </button>
      </div>
    </div>
  ));

  return <>{comments}</>;
}

export default Comment;
