import React, { useState, useEffect } from "react";
import Feed from "../../../components/Feed/Feed";
import "./Main.scss";

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedList(data);
      });
  }, []);
  return (
    <div className="Main">
      <nav>
        <div className="logo-title">
          <img src="/images/yechanKim/instagram.png" alt="instagram" />
          <h1>Instagram</h1>
        </div>
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <span>검색</span>
          <input type="text" placeholder="검색" />
        </div>
        <div className="icon-group">
          <span className="material-symbols-outlined">explore</span>
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">person</span>
        </div>
      </nav>
      <div className="container">
        <div className="feed-wrap">
          {feedList.map((feed) => {
            return <Feed feed={feed} key={feed.id} />;
          })}
        </div>
        <aside>
          <div className="my-account">
            <img
              className="profile-img"
              src="/images/yechanKim/me.jpg"
              alt=""
            />
            <div className="profile-info">
              <strong className="id">yechan</strong>
              <span className="info">김예찬</span>
            </div>
          </div>
          <div className="aside-box">
            <div className="header">
              <span className="info">스토리</span>
              <strong>모두 보기</strong>
            </div>
            <div className="list">
              <img
                className="profile-img"
                src="/images/yechanKim/me.jpg"
                alt=""
              />
              <div className="profile-info">
                <strong className="id">yechan</strong>
                <span className="info">10분전</span>
              </div>
            </div>
          </div>
          <div className="aside-box">
            <div className="header">
              <span className="info">회원님을 위한 추천</span>
              <strong>모두 보기</strong>
            </div>
            <div className="list">
              <img
                className="profile-img"
                src="/images/yechanKim/me.jpg"
                alt=""
              />
              <div className="profile-info">
                <strong className="id">yechan</strong>
                <span className="info">_legend_님 외 1명이 ...</span>
              </div>
              <strong className="blue">팔로우</strong>
            </div>
          </div>
          <div className="info">© 2022 INSTAGRAM FROM META</div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
