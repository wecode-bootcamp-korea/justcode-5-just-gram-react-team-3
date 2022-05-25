import React from "react";
import "./Main.css";

function Main() {
	return (
    <div className="Main">
      <body>
        <div class="main-container">
          <nav>
            <div class="nav-content">
              <div class="nav-left">
                <img
                  class="icon-insta"
                  alt="insta-icon"
                  src="/images/instagram.png"
                />
                <span>justgram</span>
              </div>
              <div class="nav-center">
                <input type="text" id="search" placeholder="검색" />
                <img class="icon-search" alt="search" src="/images/search.png" />
              </div>
              <div class="nav-right">
                <div>
                  <img
                    class="icon-explore"
                    alt="explore-icon"
                    src="/images/explore.png"
                  />
                </div>
                <div>
                  <img
                    class="icon-heart"
                    alt="heart-icon"
                    src="/images/heart.png"
                  />
                </div>
                <div>
                  <img
                    class="icon-profile"
                    alt="profile-icon"
                    src="/images/profile.png"
                  />
                </div>
              </div>
            </div>
          </nav>
          <main>
            <div class="feeds">
              <article>
                <div class="article-header">
                  <div class="author-profile">
                    <div class="author-profile-icon">
                      <img
                        class="icon-profile"
                        alt="author"
                        src="/images/author.png"
                      />
                    </div>
                    <div class="author-info">
                      <p id="author-id">user_id</p>
                      <p id="author-location">location</p>
                    </div>
                  </div>
                  <div class="author-more">
                    <img
                      class="icon-more"
                      alt="more"
                      src="/images/more.png"
                    ></img>
                  </div>
                </div>
                <div class="frame">
                  <img class="photo" alt="" src="/images/photo.png" />
                </div>
                <div class="feed-icons">
                  <div class="feed-icons-left">
                    <img
                      class="icon-like"
                      alt="like"
                      src="/images/heart-red.png"
                    />
                    <img class="icon-chat" alt="chat" src="/images/chat.png" />
                    <img
                      class="icon-upload"
                      alt="upload"
                      src="/images/upload.png"
                    />
                  </div>
                  <div class="feed-icons-right">
                    <img
                      class="icon-bookmark"
                      alt="bookmark"
                      src="/images/bookmark-white.png"
                    />
                  </div>
                </div>
                <div class="likeby">
                  <img
                    class="icon-likeby"
                    alt="who"
                    src="/images/profile-likeby.png"
                  />
                  <span id="user-id-likeby">anonymous</span>
                  <span>&nbsp</span>
                  <span id="text-likeby">like it</span>
                </div>
                <div class="comment">
                  <div class="comment-first">
                    <span id="comment-first-id">anonymous</span>
                    <span id="comment-first-text">first comment</span>
                    <span class="show-more">더 보기</span>
                  </div>
                  <div class="comment-second">
                    <span id="comment-second-id">anonymous</span>
                    <span id="comment-second-text">second comment</span>
                  </div>
                  <div class="last-updated">
                    <span id="time-stamp">time stamp</span>
                  </div>
                </div>
                <div class="new-comment">
                  <input
                    type="text"
                    id="new-comment-input"
                    placeholder="댓글 달기..."
                  />
                  <div class="post">
                    <button id="post-btn" disabled>
                      게시
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div class="main-right">
              <div class="login-user-header">
                <div class="login-user-profile">
                  <div class="login-user-profile">
                    <img
                      id="login-profile-icon"
                      alt="me"
                      src="/images/login-user.png"
                    />
                  </div>
                </div>
                <div class="login-user-info">
                  <p id="login-user-id">user_id</p>
                  <p id="login-user-location">location</p>
                </div>
              </div>
              <div class="story main-right-container">
                <div class="story-header header-title">
                  <p>스토리</p>
                  <p>모두 보기</p>
                </div>
                <div class="story-content">
                  <div class="story-user">
                    <div class="story-user-profile">
                      <img
                        class="user-icon"
                        id="user1-icon"
                        alt="rf1"
                        src="/images/man.png"
                      />
                    </div>
                    <div class="story-user-info">
                      <p class="user-id" id="story-user1-id">
                        user_id
                      </p>
                      <p class="user-update" id="story-user1-update">
                        update
                      </p>
                    </div>
                  </div>
                  <div class="story-user">
                    <div class="story-user-profile">
                      <img
                        class="user-icon"
                        id="story-user2-icon"
                        alt="rf2"
                        src="/images/user.png"
                      />
                    </div>
                    <div class="story-user-info">
                      <p class="user-id" id="story-user2-id">
                        user_id
                      </p>
                      <p class="user-update" id="story-user2-update">
                        update
                      </p>
                    </div>
                  </div>
                  <div class="story-user">
                    <div class="story-user-profile">
                      <img
                        class="user-icon"
                        id="story-user3-icon"
                        alt="rf3"
                        src="/images/user.png"
                      />
                    </div>
                    <div class="story-user-info">
                      <p class="user-id" id="story-user3-id">
                        user_id
                      </p>
                      <p class="user-update" id="story-user3-update">
                        update
                      </p>
                    </div>
                  </div>
                  <div class="story-user">
                    <div class="story-user-profile">
                      <img
                        class="user-icon"
                        id="story-user4-icon"
                        alt="rf4"
                        src="/images/user.png"
                      />
                    </div>
                    <div class="story-user-info">
                      <p class="user-id" id="story-user4-id">
                        user_id
                      </p>
                      <p class="user-update" id="story-user4-update">
                        update
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="recommend main-right-container">
                <div class="recommend-header header-title">
                  <p>회원님을 위한 추천</p>
                  <p>모두 보기</p>
                </div>
                <div class="recommend-content">
                  <div class="recommend-user">
                    <div class="recommend-user-left">
                      <div class="rf-profile">
                        <img
                          class="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div class="rf-user-info">
                        <p class="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p class="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div class="recommend-user-right">
                      <p class="follow">팔로우</p>
                    </div>
                  </div>
                  <div class="recommend-user">
                    <div class="recommend-user-left">
                      <div class="rf-profile">
                        <img
                          class="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div class="rf-user-info">
                        <p class="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p class="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div class="recommend-user-right">
                      <p class="follow">팔로우</p>
                    </div>
                  </div>
                  <div class="recommend-user">
                    <div class="recommend-user-left">
                      <div class="rf-profile">
                        <img
                          class="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div class="rf-user-info">
                        <p class="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p class="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div class="recommend-user-right">
                      <p class="follow">팔로우</p>
                    </div>
                  </div>
                  <div class="recommend-user">
                    <div class="recommend-user-left">
                      <div class="rf-profile">
                        <img
                          class="user-icon"
                          id="rf1-icon"
                          alt="rf1"
                          src="/images/user.png"
                        />
                      </div>
                      <div class="rf-user-info">
                        <p class="user-id" id="rf1-id">
                          user_id
                        </p>
                        <p class="user-update" id="rf1-update">
                          location
                        </p>
                      </div>
                    </div>
                    <div class="recommend-user-right">
                      <p class="follow">팔로우</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="company-info">
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
