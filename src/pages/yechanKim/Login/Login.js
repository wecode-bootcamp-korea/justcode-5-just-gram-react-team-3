import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
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
    const InputValid = id.indexOf('@') !== -1 && pw.length >= 5;
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
          <button
            id="login-button"
            disabled={!valid}
            className={valid ? 'login-button-active' : 'login-button-inactive'}
            onClick={() => {
              fetch('http://52.79.143.176:8000/users/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  // "yechan@naver.com",
                  // "Yechan123!"
                  email: inputValues.id,
                  password: inputValues.pw,
                }),
              }).then((res) => {
                if (res.status === 200) {
                  res.json();
                  navigate('/yechankimMain');
                } else {
                  alert('로그인에 실패했습니다.');
                }
              });
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
