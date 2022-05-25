import React, { useState } from 'react';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShareFromSquare, 
  faBookmark, faCircleUser, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Comment from '../../components/Comment/Comment';


library.add(faHeart, faComment, faShareFromSquare, 
  faBookmark, faCircleUser, faGear, faMagnifyingGlass, faInstagram);


function Main() {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState([{username: 'im_jw', comment: 'hi'}])
  const [isValid, setIsValid] = useState(false);
  const updateBtn = () => {
    if (commentValue !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const handleCommentInput = (e) => {
    setCommentValue(e.target.value)
  }

  const writeBtn = document.getElementById('write-btn');

  const postComment = () => {
    setCommentList([...commentList, { username: '123', comment: commentValue}]);
    setCommentValue('');
    writeBtn.disabled = true;
    writeBtn.style.cursor = 'auto';
    writeBtn.style.color = 'lightblue';
  }

  const enterkey = () => {
    if (isValid && window.event.keyCode === 13) {
      postComment();
    }
  }

  return (
      <div>
        <nav className="navigation">
          <div className="nav-left">
            <div id="insta-icon">
              <FontAwesomeIcon icon="fa-brands fa-instagram"/>  
            </div>
            <div id="division" />
            <div id="logo">Justgram</div>
          </div>
          <div className="nav-center">
            <div id="search-icon">
             <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" width="15px"/>  
            </div>
            <input id="search" type="text" placeholder="검색" />
            <div id="search-result">
              <div id="search-user">
              </div>
            </div>
          </div>
          <div className="nav-right">
            <div><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" width="35px" alt="탐색" />
            </div>
            <div><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" width="35px" alt="하트" />
            </div>
            <div id="user">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" width="35px" alt="마이페이지" />
              <div id="my-menu">
                <ul>
                  <li><i className="fa-regular fa-circle-user" /><span>프로필</span></li>
                  <li><i className="fa-regular fa-bookmark" /><span>저장됨</span></li>
                  <li><i className="fa-solid fa-gear" /><span>설정</span></li>
                  <li><span>로그아웃</span></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <article className="feeds">
            <div className="feeds-top">
              <div className="feeds-top-left">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <span className="nickname">im__rudy</span>
              </div>
              <div className="feeds-top-right"><i className="fa-solid fa-ellipsis" /></div>
            </div>
            <img src="images/jinwoo/rudy.jpeg" alt="피드 이미지" id="feed-img" width="500px" height="500px" />
            <div className="feeds-icons">
              <div className="feeds-icons-left">
                <div id="feed-heart"><FontAwesomeIcon icon="fa-solid fa-heart" color="gray"/></div>
                <div><FontAwesomeIcon icon="fa-solid fa-comment"/></div>
                <div><FontAwesomeIcon icon="fa-solid fa-share-from-square"/></div>
              </div>
              <div><i className="fa-regular fa-bookmark" /></div>
            </div>
            <div className="feeds-likes">
              <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
              <div><span className="nickname">im_rudy</span>님 외 10명이 좋아합니다</div>
            </div>
            <div className="feeds-comments">
              {
                commentList.map((comment, idx) => {
                  return (
                    <Comment 
                      key={idx} 
                      username={comment.username} 
                      comment={comment.comment}/>
                  )
                })
              }
              <div className="time feed-time">42분 전</div>
              <div className="write-comment">
                <input 
                  onKeyUp={updateBtn} 
                  onKeyDown={enterkey} 
                  onChange={handleCommentInput} 
                  id="comment" 
                  type="text" 
                  placeholder="댓글 달기..." 
                  value={commentValue}
                />
                <button 
                  id="write-btn" 
                  disabled={isValid ? false : true}
                  style={{
                    color: isValid ? 'blue' : 'lightblue',
                    cursor: isValid ? 'pointer' : 'auto' 
                  }}
                  onClick={postComment}
                  >게시</button>
              </div>
            </div>
          </article>
          <div className="main-right">
            <div className="ad">
              <div className="ad-contents">
                <img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" />
              </div>
              <div className="ad-contents">
                <div><span className="nickname">wecode_bootcamp</span></div>
                <div className="ad-desc">WeCode | 위코드</div>
              </div>
            </div>
            <div className="story">
              <div className="story-top">
                <div className="story-text">스토리</div>
                <div className="all">모두 보기</div>
              </div>
              <div className="story-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="story-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="time">16분 전</div>
                </div>
              </div>
              <div className="story-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="story-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="time">16분 전</div>
                </div>
              </div>
              <div className="story-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="story-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="time">16분 전</div>
                </div>
              </div>
              <div className="story-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="story-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="time">16분 전</div>
                </div>
              </div>
            </div>
            <div className="suggestion">
              <div className="suggestion-top">
                <div className="suggestion-text">회원님을 위한 추천</div>
                <div className="all">모두 보기</div>
              </div>
              <div className="suggestion-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="suggestion-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="others">im_jw님 외 2명이...</div>
                </div>
                <button className="follow-btn">팔로우</button>
              </div>
              <div className="suggestion-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="suggestion-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="others">im_jw님 외 2명이...</div>
                </div>
                <button className="follow-btn">팔로우</button>
              </div>
              <div className="suggestion-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="suggestion-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="others">im_jw님 외 2명이...</div>
                </div>
                <button className="follow-btn">팔로우</button>
              </div>
              <div className="suggestion-user">
                <div><img src="images/jinwoo/rudy.jpeg" id="profile-img" alt="프로필 이미지" /></div>
                <div id="suggestion-user-right">
                  <div className="nickname">im__rudy</div>
                  <div className="others">im_jw님 외 2명이...</div>
                </div>
                <button className="follow-btn">팔로우</button>
              </div>
            </div>
            <p className="info-text">Justgram · 정보 · 지원 · 홍보 센터 · API ·<br />
              채용 정보 · 개인정보처리방침 약관 ·<br />
              디렉터리 · 프로필 · 해시태그 · 언어<br />
            </p>
            <p className="info-text">
              <i className="fa-solid fa-copyright" />
              2022 JUSTGRAM
            </p>
          </div></main>
      </div>
  )
}

export default Main