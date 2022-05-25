import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="login">
        <h1>Instagram</h1>
        <div className="login-form">
          <input
            type="text"
            id="id"
            className="info"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="text" id="pw" className="info" placeholder="비밀번호" />
          <button id="login-button" className="login-button">
            <Link to="/main">로그인</Link>
          </button>
        </div>
        <a href="#" className="missing-pw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
