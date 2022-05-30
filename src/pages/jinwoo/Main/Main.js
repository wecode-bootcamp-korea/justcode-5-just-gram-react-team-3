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
        <div className="navLeft">
          <div id="instaIcon">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </div>
          <div id="division" />
          <div id="logo">Justgram</div>
        </div>
        <div className="navCenter">
          <div id="searchIcon">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" width="15px" />
          </div>
          <input id="search" type="text" placeholder="검색" />
        </div>
        <div className="navRight">
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
          <div>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              width="35px"
              alt="마이페이지"
            />
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
        <div className="mainRight">
          <div className="ad">
            <div className="adContents">
              <img
                src="images/jinwoo/rudy.jpeg"
                id="profileImg"
                alt="프로필 이미지"
              />
            </div>
            <div className="adContents">
              <div>
                <span className="nickName">wecode_bootcamp</span>
              </div>
              <div className="adDesc">WeCode | 위코드</div>
            </div>
          </div>
          <div className="story">
            <div className="storyTop">
              <div className="storyText">스토리</div>
              <div className="all">모두 보기</div>
            </div>
            <div className="storyUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="storyUserRight">
                <div className="nickName">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
            <div className="storyUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="storyUserRight">
                <div className="nickName">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
            <div className="storyUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="storyUserRight">
                <div className="nickName">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
            <div className="storyUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="storyUserRight">
                <div className="nickName">im__rudy</div>
                <div className="time">16분 전</div>
              </div>
            </div>
          </div>
          <div className="suggestion">
            <div className="suggestionTop">
              <div className="suggestionText">회원님을 위한 추천</div>
              <div className="all">모두 보기</div>
            </div>
            <div className="suggestionUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestionUserRight">
                <div className="nickName">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="followBtn">팔로우</button>
            </div>
            <div className="suggestionUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestionUserRight">
                <div className="nickName">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="followBtn">팔로우</button>
            </div>
            <div className="suggestionUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestionUserRight">
                <div className="nickName">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="followBtn">팔로우</button>
            </div>
            <div className="suggestionUser">
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id="profileImg"
                  alt="프로필 이미지"
                />
              </div>
              <div id="suggestionUserRight">
                <div className="nickName">im__rudy</div>
                <div className="others">im_jw님 외 2명이...</div>
              </div>
              <button className="followBtn">팔로우</button>
            </div>
          </div>
          <p className="infoText">
            Justgram · 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
            <br />
          </p>
          <p className="infoText">
            <i className="fa-solid fa-copyright" />
            2022 JUSTGRAM
          </p>
        </div>
      </main>
    </div>
  );
}

export default Main;
