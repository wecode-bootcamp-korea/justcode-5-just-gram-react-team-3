import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div class="main-container">
      <header class="logo">
        <p>justgram</p>
      </header>
      <div class="login-container">
        <div class="input-container">
          <input
            type="text"
            id="user-id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="password" id="password" placeholder="비밀번호" />
        </div>
        <div class="login-btn-container">
          <a href="./main.html">
            <button id="login-btn" disabled>
              로그인
            </button>
          </a>
        </div>
      </div>
      <div class="empty"></div>
      <div class="login-request">
        <p class="password-request">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
