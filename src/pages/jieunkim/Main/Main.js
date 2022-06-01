import React, { useInsertionEffect } from "react";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import MyMenu from "./MyMenu";
import Feed from "./Feed";
import "./Main.scss";
import "./SearchBar.scss"
import userEvent from "@testing-library/user-event";

function Main() {
  const pageFeedId = 1;
  const commentLimit = 3;

  /* temp variables/functions to be done */
  const getLoginUserId = useLocation().state;

  const loginUserId = getLoginUserId == null ? "temp" : getLoginUserId;

  /* useState */
  const [searchBarInput, setSearchBarInput] = useState("");
  const [isActiveSearchBar, setActiveSearchBar] = useState(false);
  const [isMyMenuVisible, setMyMenuVisible] = useState(false);
  const [isSearchResVisible, setSearchResVisible] = useState(false);
  const [userList, setUserList] = useState([]);
  const [feeds, setFeeds] = useState([]);

  const popupCloseHandler = (e) => {
    setMyMenuVisible(e);
  };

  useEffect(() => {
    fetch("http://localhost:3000/data/CommentData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data);
      });
  });


  useEffect(() => {
    setUserList(Array.from(new Set(feeds
      .map((feed) => feed.author || feed.comments.author))))
  },[feeds])

  const handleEnterKey = (e) => {
    return e.key === "Enter";
  };

  const handleSearchBarInput = (e) => {
    if (handleEnterKey(e)) {
      setSearchBarInput(e.target.value);
    }
  };
  
    return (
      <div className="main-page">
        <body className="main-body">
          <div className="main-container">
            <nav>
              <div className="nav nav-content">
                <div className="nav nav-left">
                  <img
                    className="icon-insta"
                    alt="insta-icon"
                    src="/images/jieunkim/instagram.png"
                  />
                  <span>justgram</span>
                </div>
                <div className="nav nav-center">
                  <input
                    type="text"
                    className="search"
                    id="search"
                    placeholder="검색"
                    value={searchBarInput}
                    autoComplete="off"
                    onFocus={() => {
                      setActiveSearchBar(true);
                    }}
                    onBlur={() => {
                      setActiveSearchBar(false);
                    }}
                    onChange={(event) => {
                      setSearchBarInput(event.target.value);
                      if (event.target.value.length > 0) setSearchResVisible(true);
                      if (event.target.value.length === 0) setSearchResVisible(false);
                    }}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        setSearchResVisible(!isSearchResVisible);
                      }
                    }}
                    onClick={console.log()}
                  />
                  <img
                    className={`icon-search ${
                      isActiveSearchBar ? "invisible" : "visible"
                    }`}
                    alt="search"
                    src="/images/jieunkim/search.png"
                  />
                  {!isSearchResVisible ? <></> : 
                  <div className={!isSearchResVisible ? "searchBarRes visible" : "searchBarRes"}>
                    {userList
                      .filter((user) => user.includes(searchBarInput))
                      .map((user, index) => (
                        <SearchBar 
                        key={index} 
                        show={true}
                        user={user} 
                        />
                      ))}
                  </div>}
                </div>
                <div className="nav nav-right">
                  <div>
                    <img
                      className="icon-explore"
                      alt="explore-icon"
                      src="/images/jieunkim/explore.png"
                    />
                  </div>
                  <div>
                    <img
                      className="icon-heart"
                      alt="heart-icon"
                      src="/images/jieunkim/heart.png"
                    />
                  </div>
                  <div>
                    <img
                      className="icon-profile"
                      alt="profile-icon"
                      src="/images/jieunkim/profile-img/profile.png"
                      onClick={() => {
                        setMyMenuVisible(!isMyMenuVisible);
                      }}
                    ></img>
                    <MyMenu
                      onClose={popupCloseHandler}
                      show={isMyMenuVisible}
                    />
                  </div>
                </div>
              </div>
            </nav>
            <main className="main-feeds">
              <div className="feeds">
                {feeds
                  .filter((feed) => feed.feedId === pageFeedId)
                  .map((feed) => {
                    return (
                      <Feed
                        key={feed.feedId}
                        loginUserId={loginUserId}
                        author={feed.author}
                        content={feed.content}
                        isLiked={feed.isLiked}
                        likePeople={feed.likePeople}
                        imageUrl={feed.imageUrl}
                        date={feed.date}
                        comments={feed.comments}
                        commentLimit={commentLimit}
                      />
                    );
                  })}
              </div>
              <div className="main-right">
                <div className="login-user-header">
                  <div className="login-user-profile user-profile">
                    <img
                      id="login-profile-icon"
                      alt="me"
                      src="/images/jieunkim/profile-img/login-user.png"
                    />
                  </div>
                  <div className="login-user-info user-info">
                    <p id="login-user-id" className="login-user-id user-id">
                      {loginUserId}
                    </p>
                    <p
                      id="login-user-location"
                      className="login-user-location user-location"
                    >
                      location where{" "}
                    </p>
                  </div>
                </div>
                <div className="story main-right-container">
                  <div className="story-header header-title">
                    <p>스토리</p>
                    <p>모두 보기</p>
                  </div>
                  <div className="story-content">
                    <div className="story-user">
                      <div className="story-user-profile user-profile">
                        <img
                          className="user-icon"
                          id="user1-icon"
                          alt="rf1"
                          src="/images/jieunkim/profile-img/man.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user1-id"
                        >
                          user_id
                        </p>
                        <p
                          className="story-user-update user-update"
                          id="story-user1-update"
                        >
                          update when
                        </p>
                      </div>
                    </div>
                    <div className="story-user">
                      <div className="story-user-profile user-profile">
                        <img
                          className="user-icon"
                          id="story-user2-icon"
                          alt="rf2"
                          src="/images/jieunkim/profile-img/user.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user2-id"
                        >
                          user_id
                        </p>
                        <p
                          className="story-user-update user-update"
                          id="story-user2-update"
                        >
                          update
                        </p>
                      </div>
                    </div>
                    <div className="story-user">
                      <div className="story-user-profile user-profile">
                        <img
                          className="user-icon"
                          id="story-user3-icon"
                          alt="rf3"
                          src="/images/jieunkim/profile-img/user.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user3-id"
                        >
                          user_id
                        </p>
                        <p
                          className="story-user-update user-update"
                          id="story-user3-update"
                        >
                          update
                        </p>
                      </div>
                    </div>
                    <div className="story-user">
                      <div className="story-user-profile user-profile">
                        <img
                          className="user-icon"
                          id="story-user4-icon"
                          alt="rf4"
                          src="/images/jieunkim/profile-img/user.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user4-id"
                        >
                          user_id
                        </p>
                        <p
                          className="story-user-update user-update"
                          id="story-user4-update"
                        >
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
                        <div className="rf-profile user-profile">
                          <img
                            className="user-icon"
                            id="rf1-icon"
                            alt="rf1"
                            src="/images/jieunkim/profile-img/user.png"
                          />
                        </div>
                        <div className="rf-user-info user-info">
                          <p className="rf-user-id user-id" id="rf1-id">
                            user_id
                          </p>
                          <p
                            className="rf-user-update user-update"
                            id="rf1-update"
                          >
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
                        <div className="rf-profile user-profile">
                          <img
                            className="user-icon"
                            id="rf1-icon"
                            alt="rf1"
                            src="/images/jieunkim/profile-img/user.png"
                          />
                        </div>
                        <div className="rf-user-info user-info">
                          <p className="rf-user-id user-id" id="rf1-id">
                            user_id
                          </p>
                          <p
                            className="rf-user-update user-update"
                            id="rf1-update"
                          >
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
                        <div className="rf-profile user-profile">
                          <img
                            className="user-icon"
                            id="rf1-icon"
                            alt="rf1"
                            src="/images/jieunkim/profile-img/user.png"
                          />
                        </div>
                        <div className="rf-user-info user-info">
                          <p className="rf-user-id user-id" id="rf1-id">
                            user_id
                          </p>
                          <p
                            className="rf-user-update user-update"
                            id="rf1-update"
                          >
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
                    개인정보처리방침 ・ 약관 ・ 디렉터리 ・ 프로필 ・ 해시태그
                    ・ 언어
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
