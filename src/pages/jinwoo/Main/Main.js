import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
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
    <div className={styles.main}>
      <nav className={styles.navigation}>
        <div className={styles.navLeft}>
          <div id={styles.instaIcon}>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </div>
          <div id={styles.division} />
          <div id={styles.logo}>Justgram</div>
        </div>
        <div className={styles.navCenter}>
          <div id={styles.searchIcon}>
            <FontAwesomeIcon
              className={styles.icon}
              icon="fa-solid fa-magnifying-glass"
              width="15px"
            />
          </div>
          <input id={styles.search} type="text" placeholder="검색" />
        </div>
        <div className={styles.navRight}>
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
        <div className={styles.mainRight}>
          <div className={styles.ad}>
            <div className={styles.adContents}>
              <img
                src="images/jinwoo/rudy.jpeg"
                id={styles.profileImg}
                alt="프로필 이미지"
              />
            </div>
            <div className={styles.adContents}>
              <div>
                <span className={styles.nickName}>wecode_bootcamp</span>
              </div>
              <div className={styles.adDesc}>WeCode | 위코드</div>
            </div>
          </div>
          <div className={styles.story}>
            <div className={styles.storyTop}>
              <div className={styles.storyText}>스토리</div>
              <div className={styles.all}>모두 보기</div>
            </div>
            <div className={styles.storyUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.storyUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.time}>16분 전</div>
              </div>
            </div>
            <div className={styles.storyUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.storyUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.time}>16분 전</div>
              </div>
            </div>
            <div className={styles.storyUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.storyUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.time}>16분 전</div>
              </div>
            </div>
            <div className={styles.storyUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.storyUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.time}>16분 전</div>
              </div>
            </div>
          </div>
          <div className={styles.suggestion}>
            <div className={styles.suggestionTop}>
              <div className={styles.suggestionText}>회원님을 위한 추천</div>
              <div className={styles.all}>모두 보기</div>
            </div>
            <div className={styles.suggestionUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.suggestionUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.others}>im_jw님 외 2명이...</div>
              </div>
              <button className={styles.followBtn}>팔로우</button>
            </div>
            <div className={styles.suggestionUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.suggestionUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.others}>im_jw님 외 2명이...</div>
              </div>
              <button className={styles.followBtn}>팔로우</button>
            </div>
            <div className={styles.suggestionUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.suggestionUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.others}>im_jw님 외 2명이...</div>
              </div>
              <button className={styles.followBtn}>팔로우</button>
            </div>
            <div className={styles.suggestionUser}>
              <div>
                <img
                  src="images/jinwoo/rudy.jpeg"
                  id={styles.profileImg}
                  alt="프로필 이미지"
                />
              </div>
              <div id={styles.suggestionUserRight}>
                <div className={styles.nickName}>im__rudy</div>
                <div className={styles.others}>im_jw님 외 2명이...</div>
              </div>
              <button className={styles.followBtn}>팔로우</button>
            </div>
          </div>
          <p className={styles.infoText}>
            Justgram · 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
            <br />
          </p>
          <p className={styles.infoText}>
            <i className="fa-solid fa-copyright" />
            2022 JUSTGRAM
          </p>
        </div>
      </main>
    </div>
  );
}

export default Main;
