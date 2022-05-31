import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './Login.module.scss';

function Login() {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const [isValid, setIsValid] = useState(false);
  const updateBtn = () => {
    const isIdPwInputValid =
      inputValues.email.includes('@') && inputValues.password.length >= 5;
    setIsValid(isIdPwInputValid);
    if (isIdPwInputValid && window.event.keyCode === 13) {
      loginBtn();
    }
  };

  const navigate = useNavigate();
  const loginBtn = () => {
    fetch('http://52.79.143.176:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        result.token !== undefined
          ? navigate('/jinwooMain')
          : alert(result.message);
      });
  };

  const signUpBtn = () => {
    fetch('http://52.79.143.176:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        result.userId !== undefined
          ? alert('회원가입 완료!')
          : alert(result.message);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Justgram</h1>
      <div className={styles.loginForm}>
        <input
          name="email"
          type="text"
          onKeyUp={updateBtn}
          onChange={handleInput}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          name="password"
          type="password"
          onKeyUp={updateBtn}
          onChange={handleInput}
          placeholder="비밀번호"
        />
        <button
          disabled={isValid ? false : true}
          className={isValid ? `${styles.activated}` : `${styles.deactivated}`}
          onClick={loginBtn}
        >
          로그인
        </button>
        <button className={styles.signUp} onClick={signUpBtn}>
          회원가입
        </button>
      </div>
      <Link to="/jinwooLogin" id={styles.searchPw}>
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
}

export default Login;
