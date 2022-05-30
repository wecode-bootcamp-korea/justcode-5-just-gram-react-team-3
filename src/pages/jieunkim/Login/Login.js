import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setPassword] = useState("");

  const navigate = useNavigate();
 
  const isActiveLoginBtn = () => {
    return (userId.includes("@") && userPassword.length > 7);
  }

  const buttonOnclick = () => {
    if (isActiveLoginBtn()) {
      navigate("/main",
      {state: userId});
    } else {
      navigate("/");
    }
  }

  return (
    <div className="Login">
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
              value={userId}
              onChange={(event) => {
                setUserId(event.target.value);
              }}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              value={userPassword}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="login-btn-container">
            <button
              id="login-btn"
              disabled={!(isActiveLoginBtn())}
              onClick={buttonOnclick}>
              로그인
            </button>
          </div>
        </div>
        <div className="empty"></div>
        <div className="login-request">
          <p className="password-request">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
