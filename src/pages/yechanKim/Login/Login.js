import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  function handleIdInput(e) {
    setId(e.target.value);
    validation(e.target.value, pw);
  }
  function handlePwInput(e) {
    setPw(e.target.value);
    validation(id, e.target.value);
  }
  function validation(id, pw) {
    if (id.indexOf("@") !== -1 && pw.length >= 5) {
      return true;
    } else {
      return false;
    }
  }

  const valid = validation(id, pw);
  return (
    <div className="login-container">
      <div className="login">
        <h1>Instagram</h1>
        <div className="login-form">
          <input
            value={id}
            onChange={handleIdInput}
            type="text"
            id="id"
            className="info"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            value={pw}
            onChange={handlePwInput}
            type="password"
            id="pw"
            className="info"
            placeholder="비밀번호"
          />
          <div>{id}</div>
          <button
            id="login-button"
            disabled={!valid}
            className={valid ? "login-button-active" : "login-button-inactive"}
            onClick={() => {
              navigate("/main");
            }}
          >
            로그인
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
