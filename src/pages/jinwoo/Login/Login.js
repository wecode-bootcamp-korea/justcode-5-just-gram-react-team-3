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
      .then((response) => {
        if (response.status === 200) {
          navigate('/jinwooMain');
        } else {
          alert('로그인 실패!');
        }
        return response.json();
      })
      .then((result) => {
        if (result.token !== undefined) {
          localStorage.setItem('token', result.token);
        }
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
      .then((response) => {
        if (response.status === 201) {
          alert('회원가입 완료!');
        }
        return response.json();
      })
      .then((result) => {
        if (result.userId === undefined) {
          alert(result.message);
        }
      });
  };

  return (
    <div className={styles.container}>
      <h1>Justgram</h1>
      <form className={styles.loginForm}>
        <input
          name="email"
          type="text"
          onKeyUp={updateBtn}
          onChange={handleInput}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          onKeyUp={updateBtn}
          onChange={handleInput}
          placeholder="비밀번호"
          autoComplete="current-password"
        />

        <button
          type="button"
          disabled={isValid ? false : true}
          className={isValid ? `${styles.activated}` : `${styles.deactivated}`}
          onClick={loginBtn}
        >
          로그인
        </button>
        <button type="button" className={styles.signUp} onClick={signUpBtn}>
          회원가입
        </button>
      </form>
      <Link to="/jinwooLogin" id={styles.searchPw}>
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
}

export default Login;
