import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Comment from "./Comment";
import MyMenu from "./MyMenu";
import "./Main.scss";

function Main() {
  /* Image */
  const imgLiked = "/images/jieunkim/heart-red.png";
  const imgNotLiked = "/images/jieunkim/heart.png";
  
  
  /* temp variables/functions to be done */
  const loginUserId = useLocation().state;
  const authorId = "anonymous";
  const feedContent = "hahahahah";
  const likedById = "iLikeThisFeed";
  const commentFirstId = "anonymous";
  const commentSecondId = "anonymous";
  
  const [dt, setDt] = useState("time-stamp");
  const [cntLiked, setCntLiked] = useState(0);

  

  /* useState */
  const [searchBarInput, setSearchBarInput] = useState("");
  const [isActiveSearchBar, setActiveSearchBar] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const [isLiked, setLiked] = useState(false);
  const [commentFirst, setCommentFirst] = useState("");
  const [commentSecond, setCommentSecond] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [isShownCommentOpt, setShownCommentOpt] = useState("");
  

  

  // useEffect(() => {
  //   let secTimer = setInterval( () => {
  //     setDt(postedSince);
  //   }, 10)
  // }, []);

  // const postedSince = () => {
  //   // const current = new Date();
  //   // date.get

  //   let res = 5;
  //   return res;
  // }

const userDatabase = [
  {id: "wecode_bootcamp",
   like: true
  },
  {id: "wecode_founder",
  like: false
}
]
//    useEffect(() => {
//      let res = [];
//     let usersReturned = () => {
//       userDatabase.forEach(user => {
//         console.log(user)
//         for(let e in user) {
//           console.log("name: ", name)
//           if (user[name].includes(searchBarInput)) {
//             res.push(user.name)
//           }
//         }
//       } )
//       return res;
//     };
//     console.log("res: ", res);
//   }, [searchBarInput]);
// useEffect(() => {
    
// }, [isLiked]);

// const practiceUseCallBack = useCallback(() => {

// }, [isLiked]);

// const cntLikedUseMemo = React.useMemo(() => {
// return 0;

// }, [isLiked]); 


  const handleEnterKey = (e) => {
    return e.key === "Enter";
  };

  const handleSearchBarInput = (e) => {
    if (handleEnterKey(e)) {
      setSearchBarInput(e.target.value);
      searchUser(e.target.value);
    }
  };

  const searchUser = (userSubString) => {
    let res = userDatabase.filter(user => {
      return user.id.includes(userSubString);
    })
    console.log(res);
    return res;
  };

  const handleLiked = () => {
    console.log("fn call: ", isLiked)
    setLiked(!isLiked);
    console.log("fn call after: ", isLiked)
  };

  const iconLiked = isLiked ? imgLiked : imgNotLiked;

  const handleCommentLikeBtn = () => {
    return 0;
  };

  const handleRemoveBtn = () => {
    return 0;
  };
  
  const isActiveCommentInput = () => {
    return commentInput.length > 0;
  }; // callBack : combined with action. e.g button click

  const handleKeyOnInput = (e) => {
    if (handleEnterKey(e)) {
      handleInputComment();
    }
  };

  const isActivePostBtn = () => {
    return isActiveCommentInput();
  };

  const handlePostBtn = () => {
    if (isActivePostBtn) {
      handleInputComment();
    }
  };

  const handleInputComment = () => {
    if (commentFirst === "") {
      setCommentFirst(commentInput);
    } else if (commentSecond === "") {
      setCommentSecond(commentInput);
    } else {
      setCommentFirst(commentSecond);
      setCommentSecond(commentInput);
    }
    setCommentInput("");
  };

  return (
    <div className="main-page">
      <body className="main-body">
        <div className="main-container">
          <nav>
            <div className="nav-content">
              <div className="nav-left">
                <img
                  className="icon-insta"
                  alt="insta-icon"
                  src="/images/jieunkim/instagram.png"
                />
                <span>justgram</span>
              </div>
              <div className="nav-center">
                <input
                  type="text"
                  className="search"
                  id="search"
                  placeholder="검색"
                  value={searchBarInput}
                  onFocus={() => {
                    setActiveSearchBar(true);
                  }}
                  onBlur={() => {
                    setActiveSearchBar(false);
                  }}
                  onChange={(event) => {
                    setSearchBarInput(event.target.value);
                  }}
                  onKeyUp={(event) => {
                    handleSearchBarInput(event);
                  }}
                />
                <img
                  className={`icon-search ${
                    isActiveSearchBar ? "invisible" : "visible"
                  }`}
                  alt="search"
                  src="/images/jieunkim/search.png"
                />
              </div>
              <div className="nav-right">
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
                    onClick={() => {setVisibility(!visibility)}}>
                  </img>
                  <MyMenu 
                    onClose={popupCloseHandler}
                    show={visibility}
                  />
                   </div>
              </div>
            </div>
          </nav>
          <main className="main-feeds">
            <div className="feeds">
              <article>
                <div className="article-header">
                  <div className="author-profile">
                    <div className="author-profile-icon">
                      <img
                        className="author-icon-profile"
                        id="author-icon-profile"
                        alt="author"
                        src="/images/jieunkim/profile-img/cat.png"
                      />
                    </div>
                    <div className="author-info">
                      <p className="author-id" id="author-id">
                        user_id
                      </p>
                      <p className="author-location" id="author-location">
                        location
                      </p>
                    </div>
                  </div>
                  <div className="author-more">
                    <img
                      className="icon-more"
                      alt="more"
                      src="/images/jieunkim/more.png"
                    ></img>
                  </div>
                </div>
                <div className="frame">
                  <img
                    className="photo"
                    alt=""
                    src="/images/jieunkim/photo.png"
                  />
                </div>
                <div className="feed-icons">
                  <div className="feed-icons-left">
                    <img
                      className="icon-like"
                      alt="like"
                      src={iconLiked}
                      onClick={() => {
                        handleLiked();
                        console.log(isLiked)
                      }}
                    />
                    <img
                      className="icon-chat"
                      alt="chat"
                      src="/images/jieunkim/chat.png"
                    />
                    <img
                      className="icon-upload"
                      alt="upload"
                      src="/images/jieunkim/upload.png"
                    />
                  </div>
                  <div className="feed-icons-right">
                    <img
                      className="icon-bookmark"
                      alt="bookmark"
                      src="/images/jieunkim/bookmark-white.png"
                    />
                  </div>
                </div>
                <div className="likeby">
                  <img
                    className="icon-likeby user-icon"
                    alt="who"
                    src="/images/jieunkim/profile-img/profile-likeby.png"
                  />
                  <span
                    className="user-id-likedby text-likedby"
                    id="user-id-likedby"
                  >
                    {likedById}
                  </span>
                  <span>&nbsp;</span>
                  <span className="text-likedby">님 외&nbsp;</span>
                  <span className="text-likedby" id="text-likedby">
                    {cntLiked}
                  </span>
                  <span className="text-likedby">명이</span>
                  <span>&nbsp;</span>
                  <span className="text-likedby">좋아합니다.</span>
                </div>
                <div className="feed-content">
                  <div className="feed-content-inner">
                    <span id="author-id">{authorId}</span>
                    <span>&nbsp;</span>
                    <span id="feed-content-text">{feedContent}</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span className="show-more">더 보기</span>
                  </div>
                </div>
                <div className="comment">
                  <div
                    className="comment-content"
                    onMouseEnter={() => setShownCommentOpt(true)}
                    onMouseLeave={() => setShownCommentOpt(false)}
                  >
                    <div className="comment-first-content">
                      <span id="comment-first-id">{commentFirstId}</span>
                      <span>&nbsp;</span>
                      <span id="comment-first-text">{commentFirst}</span>
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>
                    </div>
                    <div className="manage-comment">
                      <div className="like-comment">
                        <button
                          className="like-comment-btn"
                          id="like-comment-btn"
                          onClick={handleCommentLikeBtn}
                        >
                          {isShownCommentOpt && <span>좋아요</span>}
                        </button>
                      </div>
                      <div className="remove-comment">
                        <button
                          className="remove-comment-btn"
                          id="remove-comment-btn"
                          onClick={handleRemoveBtn}
                        >
                          {isShownCommentOpt && <span>삭제</span>}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="comment-content"
                    onMouseEnter={() => setShownCommentOpt(true)}
                    onMouseLeave={() => setShownCommentOpt(false)}
                  >
                    <div className="comment-second-content">
                      <span id="comment-second-id">{commentSecondId}</span>
                      <span>&nbsp;</span>
                      <span id="comment-second-text">{commentSecond}</span>
                    </div>
                    <div className="manage-comment">
                      <div className="like-comment">
                        <button
                          className="like-comment-btn"
                          id="like-comment-btn"
                          onClick={handleCommentLikeBtn}
                        >
                        {isShownCommentOpt && <span>좋아요</span>}
                        </button>
                      </div>
                      <div className="remove-comment">
                        <button
                          className="remove-comment-btn"
                          id="remove-comment-btn"
                          onClick={handleRemoveBtn}
                        >
                          {isShownCommentOpt && <span>삭제</span>}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="last-updated">
                    <span id="time-stamp">{dt}</span>
                  </div>
                </div>
                <div className="new-comment">
                  <input
                    type="text"
                    id="new-comment-input"
                    placeholder="댓글 달기..."
                    value={commentInput}
                    onChange={(event) => {
                      setCommentInput(event.target.value);
                    }}
                    onKeyUp={handleKeyOnInput}
                  />
                  <div className="post">
                    <button
                    class="post-btn"
                      id="post-btn"
                      disabled={!isActivePostBtn()}
                      onClick={handlePostBtn}
                    >
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
                      src="/images/jieunkim/login-user.png"
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
                    <div className="story-user-profile user-profile">
                      <img
                        className="user-icon"
                        id="user1-icon"
                        alt="rf1"
                        src="/images/jieunkim/man.png"
                      />
                    </div>
                    <div className="story-user-info user-info">
                      <p className="story-user-id user-id" id="story-user1-id">
                        user_id
                      </p>
                      <p
                        className="story-user-update user-update"
                        id="story-user1-update"
                      >
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
                        src="/images/jieunkim/user.png"
                      />
                    </div>
                    <div className="story-user-info user-info">
                      <p className="story-user-id user-id" id="story-user2-id">
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
                        src="/images/jieunkim/user.png"
                      />
                    </div>
                    <div className="story-user-info user-info">
                      <p className="story-user-id user-id" id="story-user3-id">
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
                        src="/images/jieunkim/user.png"
                      />
                    </div>
                    <div className="story-user-info user-info">
                      <p className="story-user-id user-id" id="story-user4-id">
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
                          src="/images/jieunkim/user.png"
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
                          src="/images/jieunkim/user.png"
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
                          src="/images/jieunkim/user.png"
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
