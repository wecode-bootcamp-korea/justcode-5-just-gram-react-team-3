import React from "react";
import "./Main.scss";

function Main() {
	return (
    <div className="Main">
      <body className="main-body">
        <div className="main-container">
          <nav>
            <div className="nav-content">
              <div className="nav-left">
                <img
                  className="icon-insta"
                  alt="insta-icon"
                  src="/images/instagram.png"
                />
                <span>justgram</span>
              </div>
              <div className="nav-center">
                <input type="text" id="search" placeholder="검색" />
                <img className="icon-search" alt="search" src="/images/search.png" />
              </div>
              <div className="nav-right">
                <div>
                  <img
                    className="icon-explore"
                    alt="explore-icon"
                    src="/images/explore.png"
                  />
                </div>
                <div>
                  <img
                    className="icon-heart"
                    alt="heart-icon"
                    src="/images/heart.png"
                  />
                </div>
                <div>
                  <img
                    className="icon-profile"
                    alt="profile-icon"
                    src="/images/profile.png"
                  />
                </div>
              </div>
            </div>
          </nav>
          <main>
            <div className="feeds">
              <article>
                <div className="article-header">
                  <div className="author-profile">
                    <div className="author-profile-icon">
                      <img
                        className="icon-profile"
                        alt="author"
                        src="/images/author.png"
                      />
                    </div>
                    <div className="author-info">
                      <p id="author-id">user_id</p>
                      <p id="author-location">location</p>
                    </div>
                  </div>
                  <div className="author-more">
                    <img
                      className="icon-more"
                      alt="more"
                      src="/images/more.png"
                    ></img>
                  </div>
                </div>
                <div className="frame">
                  <img className="photo" alt="" src="/images/photo.png" />
                </div>
                <div className="feed-icons">
                  <div className="feed-icons-left">
                    <img
                      className="icon-like"
                      alt="like"
                      src="/images/heart-red.png"
                    />
                    <img className="icon-chat" alt="chat" src="/images/chat.png" />
                    <img
                      className="icon-upload"
                      alt="upload"
                      src="/images/upload.png"
                    />
                  </div>
                  <div className="feed-icons-right">
                    <img
                      className="icon-bookmark"
                      alt="bookmark"
                      src="/images/bookmark-white.png"
                    />
                  </div>
                </div>
                <div className="likeby">
                  <img
                    className="icon-likeby"
                    alt="who"
                    src="/images/profile-likeby.png"
                  />
                  <span id="user-id-likeby">anonymous</span>
                  <span>&nbsp</span>
                  <span id="text-likeby">like it</span>
                </div>
                <div className="comment">
                  <div className="comment-first">
                    <span id="comment-first-id">anonymous</span>
                    <span id="comment-first-text">first comment</span>
                    <span className="show-more">더 보기</span>
                  </div>
                  <div className="comment-second">
                    <span id="comment-second-id">anonymous</span>
                    <span id="comment-second-text">second comment</span>
                  </div>
                  <div className="last-updated">
                    <span id="time-stamp">time stamp</span>
                  </div>
                </div>
                <div className="new-comment">
                  <input
                    type="text"
                    id="new-comment-input"
                    placeholder="댓글 달기..."
                  />
                  <div className="post">
                    <button id="post-btn" disabled>
                      게시
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="main-right">
              <div className="login-user-header">
                <div className="login-user-profile">
                  <div className="login-user-profile">
                    <img
                      id="login-profile-icon"
                      alt="me"
                      src="/images/login-user.png"
                    />
                  </div>
                </div>
                <div className="login-user-info">
                  <p id="login-user-id">user_id</p>
                  <p id="login-user-location">location</p>
                </div>
              </div>
              <div className="story main-right-container">
                <div className="story-header header-title">
                  <p>스토리</p>
                  <p>모두 보기</p>
                </div>
                <div className="story-content">
                  <div className="story-user">
                    <div className="story-user-profile">
                      <img
                        className="user-icon"
                        id="user1-icon"
                        alt="rf1"
                        src="/images/man.png"
                      />
                    </div>
                    <div className="story-user-info">
                      <p className="user-id" id="story-user1-id">
                        user_id
                      </p>
                      <p className="user-update" id="story-user1-update">
                        update
                      </p>
                    </div>
                  </div>
                  <div className="story-user">
                    <div className="story-user-profile">
                      <img
                        className="user-icon"
                        id="story-user2-icon"
                        alt="rf2"
                        src="/images/user.png"
                      />
                    </div>
                    <div className="story-user-info">
                      <p className="user-id" id="story-user2-id">
                        user_id
                      </p>
                      <p className="user-update" id="story-user2-update">
                        update
                      </p>
                    </div>
                  </div>
                  <div className="story-user">
                    <div className="story-user-profile">
                      <img
                        className="user-icon"
                        id="story-user3-icon"
                        alt="rf3"
                        src="/images/user.png"
                      />
                    </div>
                    <div className="story-user-info">
                      <p className="user-id" id="story-user3-id">
                        user_id
                      </p>
                      <p className="user-update" id="story-user3-update">
                        update
                      </p>
                    </div>
                  </div>
                  <div className="story-user">
                    <div className="story-user-profile">
                      <img
                        className="user-icon"
                        id="story-user4-icon"
                        alt="rf4"
                        src="/images/user.png"
                      />
                    </div>
                    <div className="story-user-info">
                      <p className="user-id" id="story-user4-id">
                        user_id
                      </p>
                      <p className="user-update" id="story-user4-update">
                        update
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommend main-right-container">
                <div className="recommend-header header-title">
                  <p>회원님을 위한 추천</p>
                  <p>모두 보기</p>
                </div>
                <div className="recommend-content">
                  <div className="recommend-user">
                    <div className="recommend-user-left">
                      <div className="rf-profile">
                        <img
                          className="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div className="rf-user-info">
                        <p className="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p className="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div className="recommend-user-right">
                      <p className="follow">팔로우</p>
                    </div>
                  </div>
                  <div className="recommend-user">
                    <div className="recommend-user-left">
                      <div className="rf-profile">
                        <img
                          className="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div className="rf-user-info">
                        <p className="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p className="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div className="recommend-user-right">
                      <p className="follow">팔로우</p>
                    </div>
                  </div>
                  <div className="recommend-user">
                    <div className="recommend-user-left">
                      <div className="rf-profile">
                        <img
                          className="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div className="rf-user-info">
                        <p className="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p className="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div className="recommend-user-right">
                      <p className="follow">팔로우</p>
                    </div>
                  </div>
                  <div className="recommend-user">
                    <div className="recommend-user-left">
                      <div className="rf-profile">
                        <img
                          className="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div className="rf-user-info">
                        <p className="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p className="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div className="recommend-user-right">
                      <p className="follow">팔로우</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-info">
                <p>
                  Justgram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ 채용 ・ 정보 ・
                  개인정보처리방침 ・ 약관 ・ 디렉터리 ・ 프로필 ・ 해시태그 ・
                  언어
                </p>
                <p>@ 2019 INSTAGRAM</p>
              </div>
            </div>
          </main>
        </div>

        <script src="./js/main.js"></script>
      </body>
    </div>
  );
}

export default Main;
