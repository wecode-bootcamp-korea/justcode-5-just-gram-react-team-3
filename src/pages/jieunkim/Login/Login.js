import React from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom"
import { useState } from "react";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };

  return (
    <body className="Login">
      <div className="main-container-login">
        <header className="logo">
          <p>justgram</p>
        </header>
        <div className="login-container">
          <div className="input-container">
            <input
              type="text"
              id="user-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" id="password" placeholder="비밀번호" />
          </div>
          <div className="login-btn-container">
              <button 
                id="login-btn"
                onClick={goToMain}>
                  로그인
              </button>
          </div>
        </div>
        <div className="empty"></div>
        <div className="login-request">
          <p className="password-request">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
      </body>
  );
}

export default Login;
