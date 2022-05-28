import Comment from "./Comment";

function Feed({ enterCheck, valueCheck, writeComment, feedList, comment }) {
  const feeds = feedList.map((v) => (
    <article key={v.feedId} className="feed_container">
      <section className="feed_header">
        <section className="feed_writer">
          <img className="feed_writer_photo" alt="" src={v.author.imageUrl} />
          <a href="/">{v.author.nickname}</a>
        </section>
        <button className="feed_btn">
          <img src="/images/suhyeon/more.png" width="20px" />
        </button>
      </section>
      <img alt="aa" className="feed_photo" src={v.imageUrl} />
      <section className="feed_content">
        <section className="feed_button_group">
          <section className="like_comment_share">
            <button className="feed_btn">
              <img src="/images/suhyeon/heart.png" width="15px" />
            </button>
            <button className="feed_btn">
              <img src="/images/suhyeon/speech-bubble.png" width="15px" />
            </button>
            <button className="feed_btn">
              <img src="/images/suhyeon/share.png" width="15px" />
            </button>
          </section>
          <section className="bookmark">
            <button className="feed_btn">
              <img src="/images/suhyeon/bookmark-white.png" width="15px" />
            </button>
          </section>
        </section>
        <section className="like_list_box">
          <div className="like_feed_user">
            <img alt="aa" className="like_photo" src={v.likePeople.imageUrl} />
            <a href="/">{v.likePeople.nickname}</a>님&nbsp;
            <span className="bold">외&nbsp;{v.likePeople.count}명</span>이&nbsp;
            좋아합니다.
          </div>
        </section>
        <div className="main_content">
          <a href="/">{v.author.nickname}</a>
          <span className="each_feed_content">{v.content}</span>
        </div>
        <section className="feed_comment">
          <Comment commentList={v.comments} />
        </section>
        <section className="comment_box">
          <input
            onKeyDown={(e) => enterCheck(e)}
            onChange={(e) => valueCheck(e)}
            value={comment}
            className="write_comment"
            type="text"
            placeholder="댓글 달기"
          />
          <button
            onClick={() => {
              writeComment("lshyun955", comment);
            }}
            className="write_comment_btn"
          >
            게시
          </button>
        </section>
      </section>
    </article>
  ));
  return <>{feeds}</>;
}

export default Feed;
