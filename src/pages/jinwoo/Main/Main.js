import React, { useEffect, useState } from 'react';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Feed from '../../../components/Feed/Feed';

library.add(
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faCircleUser,
  faGear,
  faMagnifyingGlass,
  faInstagram,
);

function Main() {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="main">
      <nav className="navigation">
        <div className="nav-left">
          <div id="insta-icon">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </div>
          <div id="division" />
          <div id="logo">Justgram</div>
        </div>
        <div className="nav-center">
          <div id="search-icon">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" width="15px" />
          </div>
          <input id="search" type="text" placeholder="검색" />
          <div id="search-result">
            <div id="search-user"></div>
          </div>
        </div>
        <div className="nav-right">
          <div>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              width="35px"
              alt="탐색"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              width="35px"
              alt="하트"
            />
          </div>
          <div id="user">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              width="35px"
              alt="마이페이지"
            />
            <div id="my-menu">
              <ul>
                <li>
                  <i className="fa-regular fa-circle-user" />
                  <span>프로필</span>
                </li>
                <li>
                  <i className="fa-regular fa-bookmark" />
                  <span>저장됨</span>
                </li>
                <li>
                  <i className="fa-solid fa-gear" />
                  <span>설정</span>
                </li>
                <li>
                  <span>로그아웃</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {feedList.map((feed) => {
          return (
            <Feed
              key={feed.feedId}
              userName={feed.author}
              content={feed.content}
              date={feed.date}
              comment={feed.comments}
              imageUrl={feed.imageUrl}
              likePeople={feed.likePeople}
              profileImage={feed.profileImageUrl}
            />
          );
        })}
        <div className="main-right">
          <div className="ad">
            <div className="ad-contents">
              <img
                src="images/jinwoo/rudy.jpeg"
                id="profile-img"
                alt="프로필 이미지"
              />
            </div>
            <div className="ad-contents">
              <div>
                <span className="nickname">wecode_bootcamp</span>
              </div>
              <div className="ad-desc">WeCode | 위코드</div>
            </div>
          </div>
          <div className="story">
            <div className="story-top">
              <div className="story-text">스토리</div>
              <div className="all">모두 보기</div>
            </div>
            <div className="story-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="story-user-right">
                <div className="nickname">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
            <div className="story-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="story-user-right">
                <div className="nickname">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
            <div className="story-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="story-user-right">
                <div className="nickname">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
            <div className="story-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
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
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestion-user-right">
                <div className="nickname">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="follow-btn">팔로우</button>
            </div>
            <div className="suggestion-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestion-user-right">
                <div className="nickname">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="follow-btn">팔로우</button>
            </div>
            <div className="suggestion-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestion-user-right">
                <div className="nickname">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="follow-btn">팔로우</button>
            </div>
            <div className="suggestion-user">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profile-img"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestion-user-right">
                <div className="nickname">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="follow-btn">팔로우</button>
            </div>
          </div>
          <p className="info-text">
            Justgram · 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
            <br />
          </p>
          <p className="info-text">
            <i className="fa-solid fa-copyright" />
            2022 JUSTGRAM
          </p>
        </div>
      </main>
    </div>
  );
}

export default Main;
