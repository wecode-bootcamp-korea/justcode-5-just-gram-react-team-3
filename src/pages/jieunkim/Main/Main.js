import React, {  useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import MyMenu from "./MyMenu";
import Feed from "./Feed";
import "./Main.scss";
import "./SearchBar.scss"

function Main() {
  /* TODO feed carousel */
  const pageFeedId = 1;
  const commentLimit = 3;

  /* temp variables/functions to be done */
  const getLoginUserId = useLocation().state;
  const loginUserId = getLoginUserId == null ? "anonymous" : getLoginUserId.split("@")[0];

  const [searchBarInput, setSearchBarInput] = useState("");
  const [isActiveSearchBar, setActiveSearchBar] = useState(false);
  const [isMyMenuVisible, setMyMenuVisible] = useState(false);
  
  const [isSearchResVisible, setSearchResVisible] = useState(false);
  
  const handleEnterKey = (e) => {
    return e.key === "Enter";
  };

  const handleSearchBarInput = (e) => {
    if (handleEnterKey(e)) {
      setSearchBarInput(e.target.value);
    }
  };

  const [feeds, setFeeds] = useState([]);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/jieunkim/CommentData.json")
    .then((res) => res.json())
    .then((data) => {
      setFeeds(data);
      setUserList(Array.from(new Set(data
        .map((feed) => ({[feed.author]: feed.profileImageUrl}))))) 
    });
  });
  
    
  /* TODO : merge inputs handler */  
  const [inputs, setInputs] = useState({});
  const handleInputByName = (event) => {
    setInputs((prevInputs) => ({
      ...prevInputs, [event.target.name]: event.target.value
    }))}
      
  // const popupCloseHandler = (e) => {
  //   setMyMenuVisible(e);
  // };

    return (
      <div className="jk-main-page">
        <div className="jk-main-body">
          <div className="jk-main-container">
            <nav className="jk-nav-container">
              <div className="jk-nav jk-nav-content">
                <div className="jk-nav jk-nav-left">
                  <img
                    className="icon-insta"
                    alt="insta-icon"
                    src="/images/jieunkim/instagram.png"
                  />
                  <span>justgram</span>
                </div>
                <div className="jk-nav jk-nav-center">
                  <input
                    type="text"
                    className="search"
                    id="search"
                    placeholder="??????"
                    value={searchBarInput}
                    autoComplete="off"
                    onFocus={() => {
                      setActiveSearchBar(true);
                    }}
                    onBlur={() => {
                      setActiveSearchBar(false);
                      setSearchResVisible(false);
                      setSearchBarInput("");
                    }}
                    onChange={(event) => {
                      setSearchBarInput(event.target.value);
                      if (event.target.value.length > 0) setSearchResVisible(true);
                      if (event.target.value.length === 0) setSearchResVisible(false);
                    }}
                    onKeyUp={(event) => {
                      if (event.key === "Enter") {
                        setSearchResVisible(!isSearchResVisible);
                        setSearchBarInput("");
                      }
                    }}
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
                      .filter((user) => Object.keys(user).toString().includes(searchBarInput))
                      .map((user, index) => (
                        <SearchBar 
                        key={index} 
                        show={true}
                        user={Object.keys(user).toString()}
                        profileImageUrl={Object.values(user).toString()}
                        />
                      ))}
                  </div>}
                </div>
                <div className="jk-nav jk-nav-right">
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
                      //onClose={popupCloseHandler}
                      show={isMyMenuVisible}
                    />
                  </div>
                </div>
              </div>
            </nav>
            <main className="jk-main-feeds">
              <div className="jk-feeds">
                {feeds
                  .filter((feed) => feed.feedId === pageFeedId)
                  .map((feed) => {
                    return (
                      <Feed
                        key={feed.feedId}
                        loginUserId={loginUserId}
                        profileImageUrl={feed.profileImageUrl}
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
              <div className="jk-main-right">
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
                <div className="story jk-main-right-container">
                  <div className="story-header jk-header-title">
                    <p>?????????</p>
                    <p>?????? ??????</p>
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
                          lee
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
                          src="/images/jieunkim/profile-img/user-profile.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user2-id"
                        >
                          park
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
                          src="/images/jieunkim/profile-img/man2.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user3-id"
                        >
                          seong
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
                          src="/images/jieunkim/profile-img/account.png"
                        />
                      </div>
                      <div className="story-user-info user-info">
                        <p
                          className="story-user-id user-id"
                          id="story-user4-id"
                        >
                          jung
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
                <div className="recommend jk-main-right-container">
                  <div className="recommend-header jk-header-title">
                    <p>???????????? ?????? ??????</p>
                    <p>?????? ??????</p>
                  </div>
                  <div className="recommend-content">
                    <div className="recommend-user">
                      <div className="recommend-user-left">
                        <div className="rf-profile user-profile">
                          <img
                            className="user-icon"
                            id="rf1-icon"
                            alt="rf1"
                            src="/images/jieunkim/profile-img/man-avatar.png"
                          />
                        </div>
                        <div className="rf-user-info user-info">
                          <p className="rf-user-id user-id" id="rf1-id">
                            wecode
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
                        <p className="follow">?????????</p>
                      </div>
                    </div>
                    <div className="recommend-user">
                      <div className="recommend-user-left">
                        <div className="rf-profile user-profile">
                          <img
                            className="user-icon"
                            id="rf1-icon"
                            alt="rf1"
                            src="/images/jieunkim/profile-img/user2.png"
                          />
                        </div>
                        <div className="rf-user-info user-info">
                          <p className="rf-user-id user-id" id="rf1-id">
                            justcode
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
                        <p className="follow">?????????</p>
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
                            bootcamp
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
                        <p className="follow">?????????</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-info">
                  <p>
                    Justgram ?????? ??? ?????? ??? ?????? ?????? ??? API ??? ?????? ??? ?????? ???
                    ???????????????????????? ??? ?????? ??? ???????????? ??? ????????? ??? ????????????
                    ??? ??????
                  </p>
                  <p>@ 2019 INSTAGRAM</p>
                </div>
              </div>
            </main>
          </div>

          <script src="./js/main.js"></script>
        </div>
      </div>
    );
}

export default Main;
