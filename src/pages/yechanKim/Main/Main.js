import React, { useState } from "react";
import "./Main.scss";

function Main() {
  const [comment, setComment] = useState("");
  const commentArr = [];
  const commentWrap = document.createElement("ul");

  function makeComment() {
    const commentInput = document.getElementById("comment");
    const commentBox = document.getElementsByClassName("display-comment")[0];
    const commentHtml = `<li><a href=""><b>yechan</b></a>
  <span class="text">${comment}</span>
  <span class="material-symbols-outlined">favorite</span></li>`;
    commentArr.push(commentHtml);
    const sumComment = commentArr.join("");
    commentWrap.innerHTML = sumComment;
    commentBox.appendChild(commentWrap);
    commentInput.value = "";
  }
  function saveComment(e) {
    if (e.key === "Enter") {
      if (comment.length >= 1) {
        makeComment();
      }
    } else if (e.target.tagName === "BUTTON") {
      if (comment.length >= 1) {
        makeComment();
      }
    }
  }
  return (
    <div>
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
        <main>
          <div className="post">
            <header className="edit-group">
              <div className="editor">
                <img
                  className="profile-img"
                  src="/images/yechanKim/me.jpg"
                  alt=""
                />
                <span className="'nickname">yechan</span>
              </div>
              <span className="material-symbols-outlined">more_horiz</span>
            </header>
            <img src="/images/yechanKim/character.png" alt="" />
            <div className="contents-info">
              <div className="icon-group">
                <span className="material-symbols-outlined">favorite</span>
                <span className="material-symbols-outlined">mode_comment</span>
                <span className="material-symbols-outlined">file_upload</span>
                <span className="material-symbols-outlined">bookmark</span>
              </div>
              <div className="like">
                <img
                  className="profile-img"
                  src="/images/yechanKim/me.jpg"
                  alt=""
                />
                <span className="'like-message">
                  <b>yechan</b>님 외 <b>10명</b>이 좋아합니다.
                </span>
              </div>
              <div className="main-message">
                <a href="">
                  <b>yechan</b>
                </a>
                <p className="'text">......</p>
              </div>
              <div className="display-comment"></div>
              <span className="info">42분 전</span>
            </div>
            <div className="leave-comment">
              <input
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                onKeyPress={(e) => saveComment(e)}
                id="comment"
                type="text"
                placeholder="댓글 달기..."
              />
              <button
                id="post"
                className="blue"
                onClick={(e) => saveComment(e)}
              >
                게시
              </button>
            </div>
          </div>
        </main>
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
