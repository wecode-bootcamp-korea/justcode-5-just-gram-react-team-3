function Comment(props) {
  console.log(props);
  const comments = props.commentList.map((v) => (
    <div key={v.id} className="comment_style">
      <div className="like_btn_box1">
        <a href="/">{v.author}</a>
        <span className="comment_content">{v.content}</span>
      </div>
      <div className="like_btn_box2">
        <button className="remove_comment">삭제</button>
        <button className="comment_like_btn">
          <img src="/images/suhyeon/heart.png" width="15px" />
        </button>
      </div>
    </div>
  ));

  return <>{comments}</>;
}

export default Comment;
