import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [inputValues, setInputValues] = useState({
    id: "",
    pw: "",
  });
  const navigate = useNavigate();

  // function handleIdInput(e) {
  //   const { value } = e.target;
  //   setInputValues(value);
  //   validation(value, inputValues.pw);
  // }
  // function handlePwInput(e) {
  //   const { value } = e.target;
  //   setInputValues(value);
  //   validation(inputValues.id, value);
  // }

  function handleInput(e) {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }
  function validation(id, pw) {
    const InputValid = id.indexOf("@") !== -1 && pw.length >= 5;
    if (InputValid) {
      return true;
    } else {
      return false;
    }
  }

  const valid = validation(inputValues.id, inputValues.pw);
  return (
    <div className="login">
      <div className="login-container">
        <h1>Instagram</h1>
        <div className="login-form">
          <input
            name="id"
            value={inputValues.id}
            onChange={handleInput}
            type="text"
            id="id"
            className="info"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            name="pw"
            value={inputValues.pw}
            onChange={handleInput}
            type="password"
            id="pw"
            className="info"
            placeholder="비밀번호"
          />
          <div>{inputValues.id}</div>
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
